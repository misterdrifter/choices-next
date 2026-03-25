"use client";

import { useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function AnimatedSection({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const inputClass =
  "w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#61007d] transition-colors duration-150 bg-white";
const inputStyle = {
  borderColor: "#eae0f5",
  color: "#1a0828",
  fontFamily: "var(--font-nunito)",
};

const labelStyle = {
  fontFamily: "var(--font-nunito)",
  color: "#5c4b6e",
  fontSize: "13px",
  fontWeight: 600,
};

const services = [
  "Individual Therapy",
  "Personal Coaching",
  "Group Sessions",
  "Online Support",
  "Workplace Wellbeing",
  "Not sure yet",
];

type ContactInfo = {
  icon: React.ReactNode;
  label: string;
  primary: string;
  secondary?: string;
};

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const contactInfo: ContactInfo[] = [
  {
    icon: <PhoneIcon />,
    label: "Phone",
    primary: "0800 123 4567",
    secondary: "Mon–Fri, 9am–6pm",
  },
  {
    icon: <EmailIcon />,
    label: "Email",
    primary: "hello@choicestherapy.co.uk",
  },
  {
    icon: <MapPinIcon />,
    label: "Address",
    primary: "12 Wellbeing House",
    secondary: "London, EC1A 1BB",
  },
];

const hours = [
  { day: "Mon–Fri", time: "8am – 8pm" },
  { day: "Saturday", time: "9am – 5pm" },
  { day: "Sunday", time: "Closed" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="bg-[#61007d] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col justify-center gap-4 px-6 md:px-12 lg:px-16 pt-20 pb-24"
          >
            <p
              className="text-sm font-bold uppercase tracking-widest"
              style={{ color: "#ffb549", fontFamily: "var(--font-barlow)" }}
            >
              Get in Touch
            </p>
            <h1
              className="text-5xl md:text-6xl font-bold text-white uppercase leading-tight max-w-xl"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              We&apos;d love to hear from you
            </h1>
            <p
              className="text-lg md:text-xl text-white/70 max-w-xl"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Book a free consultation or ask us anything — we usually respond within one working day.
            </p>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative h-[320px] lg:h-auto min-h-[400px]"
          >
            <Image
              src="/images/contact.png"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#61007d]/30 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: Form */}
          <AnimatedSection delay={0}>
            <h2
              className="text-3xl md:text-4xl font-black uppercase mb-8"
              style={{ color: "#1a0828", fontFamily: "var(--font-barlow)" }}
            >
              Send us a message
            </h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="rounded-2xl p-10 text-center"
                style={{ backgroundColor: "#faf8ff", border: "1px solid #eae0f5" }}
              >
                <span
                  className="block w-12 h-12 rounded-full mx-auto mb-5 flex items-center justify-center text-white text-xl font-bold"
                  style={{ backgroundColor: "#61007d" }}
                >
                  ✓
                </span>
                <h3
                  className="text-2xl font-black uppercase mb-3"
                  style={{ color: "#1a0828", fontFamily: "var(--font-barlow)" }}
                >
                  Message sent!
                </h3>
                <p
                  className="text-base"
                  style={{ color: "#5c4b6e", fontFamily: "var(--font-nunito)" }}
                >
                  Thank you! We&apos;ll be in touch within one working day.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full name */}
                <div>
                  <label htmlFor="name" style={labelStyle} className="block mb-1.5">
                    Full name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" style={labelStyle} className="block mb-1.5">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" style={labelStyle} className="block mb-1.5">
                    Phone number{" "}
                    <span style={{ color: "#5c4b6e", fontWeight: 400, fontSize: "12px" }}>
                      (optional)
                    </span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+44 7700 000000"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" style={labelStyle} className="block mb-1.5">
                    I&apos;m interested in...
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ ...inputStyle, appearance: "auto" }}
                  >
                    <option value="">Select an option</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" style={labelStyle} className="block mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us a little about what you're looking for..."
                    className={inputClass}
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-xl px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
                  style={{
                    backgroundColor: "#61007d",
                    fontFamily: "var(--font-barlow)",
                    boxShadow: "0 4px 14px rgba(97,0,125,0.25)",
                  }}
                >
                  Send message
                </button>
              </form>
            )}
          </AnimatedSection>

          {/* Right: Contact info */}
          <AnimatedSection delay={0.15} className="space-y-8">
            <h2
              className="text-3xl md:text-4xl font-black uppercase"
              style={{ color: "#1a0828", fontFamily: "var(--font-barlow)" }}
            >
              Other ways to reach us
            </h2>

            {/* Info blocks */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#eae0f5", color: "#61007d" }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-wider mb-0.5"
                      style={{
                        color: "#5c4b6e",
                        fontFamily: "var(--font-barlow)",
                      }}
                    >
                      {info.label}
                    </p>
                    <p
                      className="text-base font-semibold"
                      style={{
                        color: "#1a0828",
                        fontFamily: "var(--font-nunito)",
                      }}
                    >
                      {info.primary}
                    </p>
                    {info.secondary && (
                      <p
                        className="text-sm"
                        style={{
                          color: "#5c4b6e",
                          fontFamily: "var(--font-nunito)",
                        }}
                      >
                        {info.secondary}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Opening hours */}
            <div
              className="rounded-2xl p-6"
              style={{ backgroundColor: "#faf8ff" }}
            >
              <h3
                className="text-lg font-black uppercase mb-4"
                style={{ color: "#1a0828", fontFamily: "var(--font-barlow)" }}
              >
                Opening Hours
              </h3>
              <div className="space-y-2">
                {hours.map(({ day, time }) => (
                  <div key={day} className="flex justify-between items-center">
                    <span
                      className="text-sm font-semibold"
                      style={{
                        color: "#5c4b6e",
                        fontFamily: "var(--font-nunito)",
                      }}
                    >
                      {day}
                    </span>
                    <span
                      className="text-sm font-bold"
                      style={{
                        color: time === "Closed" ? "#5c4b6e" : "#1a0828",
                        fontFamily: "var(--font-nunito)",
                      }}
                    >
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Free consultation box */}
            <div
              className="rounded-2xl p-6"
              style={{ backgroundColor: "#61007d" }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: "#ffb549", fontFamily: "var(--font-barlow)" }}
              >
                Free consultation
              </p>
              <h3
                className="text-xl font-black uppercase text-white mb-2"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Not sure if we&apos;re right for you?
              </h3>
              <p
                className="text-sm text-white/70 mb-5"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                Book a free 30-minute consultation — no commitment, no pressure.
              </p>
              <a
                href="#"
                className="inline-block border border-white/50 text-white rounded-xl px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 hover:bg-white hover:text-[#61007d]"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Book now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
      </main>

      <Footer />
    </>
  );
}
