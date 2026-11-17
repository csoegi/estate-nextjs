"use client";

import { motion } from "framer-motion";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-[#e5dfd7] py-20 md:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[1fr_.8fr] lg:gap-24">
        <div>
          <p className="section-kicker">Start a conversation</p>
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="editorial-title mt-7 max-w-xl text-5xl md:text-7xl">Let’s talk about your next chapter.</motion.h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-[#827b72]">Leave us a message and our team will be in touch to share more about Citraland Raffles Surabaya.</p>
          <form className="mt-10 flex flex-col gap-5" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-[9px] uppercase tracking-[.15em] text-[#827b72]">Your name<input name="name" type="text" required placeholder="Full name" className="mt-3 block w-full border-b border-[#292722]/25 bg-transparent px-0 py-3 text-sm normal-case tracking-normal text-[#292722] outline-none placeholder:text-[#a59d93] focus:border-[#292722]" /></label>
              <label className="text-[9px] uppercase tracking-[.15em] text-[#827b72]">Email address<input name="email" type="email" required placeholder="you@example.com" className="mt-3 block w-full border-b border-[#292722]/25 bg-transparent px-0 py-3 text-sm normal-case tracking-normal text-[#292722] outline-none placeholder:text-[#a59d93] focus:border-[#292722]" /></label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-[9px] uppercase tracking-[.15em] text-[#827b72]">Phone number<input name="phone" type="tel" placeholder="+62" className="mt-3 block w-full border-b border-[#292722]/25 bg-transparent px-0 py-3 text-sm normal-case tracking-normal text-[#292722] outline-none placeholder:text-[#a59d93] focus:border-[#292722]" /></label>
              <label className="text-[9px] uppercase tracking-[.15em] text-[#827b72]">Subject<input name="subject" type="text" placeholder="Property enquiry" className="mt-3 block w-full border-b border-[#292722]/25 bg-transparent px-0 py-3 text-sm normal-case tracking-normal text-[#292722] outline-none placeholder:text-[#a59d93] focus:border-[#292722]" /></label>
            </div>
            <label className="text-[9px] uppercase tracking-[.15em] text-[#827b72]">Message<textarea name="message" rows={4} required placeholder="How can we help?" className="mt-3 block w-full resize-none border-b border-[#292722]/25 bg-transparent px-0 py-3 text-sm normal-case tracking-normal text-[#292722] outline-none placeholder:text-[#a59d93] focus:border-[#292722]" /></label>
            <div className="mt-3 flex flex-wrap items-center gap-4">
              <button type="submit" className="bg-[#292722] px-7 py-4 text-[10px] uppercase tracking-[.16em] text-white transition-colors hover:bg-[#49463f]">Send message <span className="ml-5">→</span></button>
              <a href={whatsappNumber ? `https://wa.me/${whatsappNumber}` : "#contact"} target={whatsappNumber ? "_blank" : undefined} rel={whatsappNumber ? "noreferrer" : undefined} aria-label="Contact us via WhatsApp" className="border border-[#292722]/35 px-7 py-4 text-[10px] uppercase tracking-[.16em] transition-colors hover:bg-[#292722] hover:text-white">WhatsApp <span className="ml-5">↗</span></a>
            </div>
            {!whatsappNumber && <p className="text-[10px] text-[#827b72]">Set NEXT_PUBLIC_WHATSAPP_NUMBER to enable the WhatsApp contact link.</p>}
          </form>
        </div>
        <div className="flex flex-col justify-between border-t border-[#292722]/20 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          <div><p className="text-[9px] uppercase tracking-[.2em] text-[#827b72]">Visit the residence</p><p className="editorial-title mt-5 text-3xl md:text-4xl">Citraland Raffles<br/>Surabaya</p></div>
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
