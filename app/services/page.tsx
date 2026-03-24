"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const services = [
  {
    title: "Sub head here",
    description:
      "One-to-one sessions in a safe, private space, tailored entirely to you.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        stroke="#61007d"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="14" cy="9" r="5" />
        <path d="M4 24c0-5.523 4.477-10 10-10s10 4.477 10 10" />
      </svg>
    ),
  },
  {
    title: "Personal Coaching",
    description:
      "Goal-focused coaching to help you build clarity, confidence and direction.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        stroke="#61007d"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 22L14 6l8 16" />
        <path d="M9 16h10" />
      </svg>
    ),
  },
  {
    title: "Group Sessions",
    description:
      "Facilitated group therapy where shared experience becomes shared strength.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        stroke="#61007d"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="10" r="3.5" />
        <circle cx="19" cy="10" r="3.5" />
        <path d="M2 23c0-3.866 3.134-7 7-7" />
        <path d="M19 16c3.866 0 7 3.134 7 7" />
        <path d="M11 23c0-3.866 1.343-7 3-7s3 3.134 3 7" />
      </svg>
    ),
  },
  {
    title: "Online Support",
    description:
      "Flexible sessions from wherever you are — no commute, no compromise on quality.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        stroke="#61007d"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="5" width="22" height="15" rx="2" />
        <path d="M9 23h10M14 20v3" />
        <circle cx="18" cy="12" r="3" />
        <path d="M11 9l-3 3 3 3" />
      </svg>
    ),
  },
  {
    title: "Workplace Wellbeing",
    description:
      "Bespoke programmes that support your team's mental health and performance.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        stroke="#61007d"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="10" width="22" height="15" rx="1.5" />
        <path d="M9 10V7a5 5 0 0 1 10 0v3" />
        <path d="M14 16v3" />
        <circle cx="14" cy="15" r="1" fill="#61007d" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Career Counselling",
    description:
      "Expert guidance to help you navigate transitions, find your path, and thrive.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        stroke="#61007d"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 22V12l10-8 10 8v10" />
        <rect x="10" y="16" width="8" height="6" />
        <path d="M14 16v6" />
      </svg>
    ),
  },
];


function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(97,0,125,0.13)" }}
      className="bg-white border border-[#eae0f5] rounded-2xl p-8 flex flex-col gap-5 cursor-default"
      style={{ transition: "box-shadow 0.25s ease" }}
    >
      <div className="w-14 h-14 rounded-xl bg-[#faf5ff] flex items-center justify-center flex-shrink-0">
        {service.icon}
      </div>
      <div className="flex flex-col gap-2">
        <h3
          className="text-lg font-bold text-[#1a0828]"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          {service.title}
        </h3>
        <p
          className="text-[#5c4b6e] text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          {service.description}
        </p>
      </div>
      <a
        href="#"
        className="text-[#61007d] text-sm font-semibold mt-auto hover:underline"
        style={{ fontFamily: "var(--font-nunito)" }}
      >
        Learn more →
      </a>
    </motion.div>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="bg-[#61007d] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: text */}
        <div ref={ref} className="flex flex-col justify-center gap-6 px-6 md:px-12 lg:px-16 pt-20 pb-24">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-[#ffb549] text-sm font-bold tracking-widest uppercase"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-bold text-white uppercase leading-tight"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Therapy &amp; Coaching for Every Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-white/75 text-lg leading-relaxed max-w-xl"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Whether you're navigating a difficult period or simply ready to invest
            in yourself, we have a service that fits where you are right now.
          </motion.p>
        </div>

        {/* Right: image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative h-[320px] lg:h-auto min-h-[400px]"
        >
          <img
            src="/images/services.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#61007d]/30 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}

function AmberCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#ffb549] py-20 px-6 md:px-12 lg:px-16">
      <div ref={ref} className="flex flex-col items-center text-center gap-8">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-[#61007d] uppercase"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          Not sure where to start?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          className="text-white text-lg max-w-xl leading-relaxed"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          A free consultation takes just 20 minutes and gives us a chance to
          understand what you're looking for — with no obligation to continue.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <a
            href="#"
            className="inline-block bg-white text-[#61007d] font-bold text-base px-8 py-4 rounded-full hover:bg-[#faf8ff] transition-colors"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Book a free consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">
        <HeroSection />
        <ServicesGrid />
        <AmberCTA />
      </main>
      <Footer />
    </>
  );
}
