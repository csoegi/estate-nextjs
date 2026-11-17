"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");

export function Contact() {
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setSending(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "We couldn't send your message. Please try again.");
      }

      form.reset();
      setFeedback({
        type: "success",
        message: "Thank you for reaching out. Your message has been received, and our team will respond shortly.",
      });
    } catch (error) {
      setFeedback({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong. Please try again shortly.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-[#e5dfd7] py-20 md:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[1fr_.8fr] lg:gap-24">
        <div>
          <p className="section-kicker">Start a conversation</p>
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="editorial-title mt-7 max-w-xl text-5xl md:text-7xl">Let’s talk about your next chapter.</motion.h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-[#827b72]">Leave us a message and our team will be in touch to share more about RE House at Citraland Raffles Surabaya.</p>
          <form className="mt-10 flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-[9px] uppercase tracking-[.15em] text-[#827b72]">Your name<input name="name" type="text" required maxLength={100} placeholder="Full name" className="mt-3 block w-full border-b border-[#292722]/25 bg-transparent px-0 py-3 text-sm normal-case tracking-normal text-[#292722] outline-none placeholder:text-[#a59d93] focus:border-[#292722]" /></label>
              <label className="text-[9px] uppercase tracking-[.15em] text-[#827b72]">Email address<input name="email" type="email" required maxLength={254} placeholder="you@example.com" className="mt-3 block w-full border-b border-[#292722]/25 bg-transparent px-0 py-3 text-sm normal-case tracking-normal text-[#292722] outline-none placeholder:text-[#a59d93] focus:border-[#292722]" /></label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-[9px] uppercase tracking-[.15em] text-[#827b72]">Phone number<input name="phone" type="tel" maxLength={40} placeholder="+62" className="mt-3 block w-full border-b border-[#292722]/25 bg-transparent px-0 py-3 text-sm normal-case tracking-normal text-[#292722] outline-none placeholder:text-[#a59d93] focus:border-[#292722]" /></label>
              <label className="text-[9px] uppercase tracking-[.15em] text-[#827b72]">Subject<input name="subject" type="text" maxLength={150} placeholder="Property enquiry" className="mt-3 block w-full border-b border-[#292722]/25 bg-transparent px-0 py-3 text-sm normal-case tracking-normal text-[#292722] outline-none placeholder:text-[#a59d93] focus:border-[#292722]" /></label>
            </div>
            <label className="text-[9px] uppercase tracking-[.15em] text-[#827b72]">Message<textarea name="message" rows={4} required maxLength={5000} placeholder="How can we help?" className="mt-3 block w-full resize-none border-b border-[#292722]/25 bg-transparent px-0 py-3 text-sm normal-case tracking-normal text-[#292722] outline-none placeholder:text-[#a59d93] focus:border-[#292722]" /></label>
            <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
              <label>Leave this field empty<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-4">
              <button type="submit" disabled={sending} className="bg-[#292722] px-7 py-4 text-[10px] uppercase tracking-[.16em] text-white transition-colors hover:bg-[#49463f] disabled:cursor-wait disabled:opacity-60">{sending ? "Sending…" : "Send message"} <span className="ml-5">→</span></button>
              <a href={whatsappNumber ? `https://wa.me/${whatsappNumber}` : "#contact"} target={whatsappNumber ? "_blank" : undefined} rel={whatsappNumber ? "noreferrer" : undefined} aria-label="Contact us via WhatsApp" className="border border-[#292722]/35 px-7 py-4 text-[10px] uppercase tracking-[.16em] transition-colors hover:bg-[#292722] hover:text-white">WhatsApp <span className="ml-5">↗</span></a>
            </div>
            {feedback && (
              <p role="status" aria-live="polite" className={`text-sm leading-6 ${feedback.type === "success" ? "text-[#47634d]" : "text-[#a33f32]"}`}>
                {feedback.message}
              </p>
            )}
            {/* {!whatsappNumber && <p className="text-[10px] text-[#827b72]">Set NEXT_PUBLIC_WHATSAPP_NUMBER to enable the WhatsApp contact link.</p>} */}
          </form>
        </div>
        <div className="flex flex-col justify-between border-t border-[#292722]/20 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          <div><p className="text-[9px] uppercase tracking-[.2em] text-[#827b72]">Visit the residence</p><p className="editorial-title mt-5 text-3xl md:text-4xl">Citraland Raffles<br/>Surabaya</p>
            <div className="mt-8 overflow-hidden rounded-sm border border-[#292722]/15">
              <iframe
                title="Citraland Raffles Surabaya map"
                src="https://www.google.com/maps?q=Citraland+Raffles+Surabaya&output=embed"
                width="100%"
                height="500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="block w-full grayscale"
              />
            </div>
            <a href="https://maps.app.goo.gl/bZTZGttDPtxemjxKA" target="_blank" rel="noreferrer" className="mt-3 inline-flex text-[9px] uppercase tracking-[.15em] text-[#827b72] transition-colors hover:text-[#292722]">Open in Google Maps ↗</a>
          </div>
          <div className="mt-12 space-y-5 text-xs text-[#827b72]">
            <p>For appointments, availability, and further information, please get in touch with our team.</p>
            <a href="#home" className="inline-flex items-center gap-4 border-b border-[#292722]/30 pb-2 uppercase tracking-[.15em] text-[#292722]">Back to top <span>↑</span></a>
          </div>
        </div>
      </div>
      <div className="section-shell mt-20 flex flex-col justify-between gap-3 border-t border-[#292722]/20 pt-6 text-[9px] uppercase tracking-[.15em] text-[#827b72] sm:flex-row"><span>© {new Date().getFullYear()} Citraland Raffles Surabaya</span><span>Architecture · Living · Lifestyle</span></div>
    </section>
  );
}
