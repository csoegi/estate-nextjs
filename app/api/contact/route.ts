import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 12_000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Your message is too large. Please shorten it and try again." }, { status: 413 });
  }

  let payload: Record<string, unknown>;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).length > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Your message is too large. Please shorten it and try again." }, { status: 413 });
    }
    const parsed: unknown = JSON.parse(rawBody);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return NextResponse.json({ error: "Invalid request. Please check the form and try again." }, { status: 400 });
    }
    payload = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request. Please check the form and try again." }, { status: 400 });
  }

  // Quietly accept bot submissions that fill the hidden honeypot field.
  if (typeof payload.website === "string" && payload.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const phone = typeof payload.phone === "string" ? payload.phone.trim() : "";
  const subject = typeof payload.subject === "string" ? payload.subject.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (!name || name.length > 100 || !EMAIL_PATTERN.test(email) || email.length > 254 ||
      phone.length > 40 || subject.length > 150 || !message || message.length > 5000) {
    return NextResponse.json({ error: "Please check your details and make sure all required fields are completed." }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM;
  const to = process.env.CONTACT_EMAIL;

  if (!host || !Number.isInteger(port) || port <= 0 || !user || !pass || !from || !to) {
    console.error("Contact email is not configured: check SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM and CONTACT_EMAIL.");
    return NextResponse.json({ error: "Our message service is temporarily unavailable. Please contact us via WhatsApp." }, { status: 503 });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  });

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: { name, address: email },
      subject: `Website enquiry: ${(subject || "General enquiry").replace(/[\r\n]+/g, " ")}`,
      text: [
        "A new enquiry was submitted through the Citraland Raffles Surabaya website.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Subject: ${subject || "General enquiry"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact enquiry:", error);
    return NextResponse.json({ error: "We couldn't send your message just now. Please try again shortly or contact us via WhatsApp." }, { status: 502 });
  } finally {
    transporter.close();
  }
}
