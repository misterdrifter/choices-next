"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Image from "next/image";
import Navigation from "./components/Navigation";
import FooterComponent from "./components/Footer";

// ─── Local asset paths ────────────────────────────────────────────────────────
const HERO_IMAGE = "/images/hero.jpg";
const ABOUT_IMAGE = "/images/abouthome.png";
const LOGO_FULL = "/images/logo-full.png";
const LOGO_ICON = "/images/logo-icon.png";

// ─── Animation helpers ────────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7 } },
};

function AnimatedSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    title: "Working out your skills and strengths",
    description:
      "Fill in our short form or give us a call. No pressure, no commitment — just a gentle first conversation.",
  },
  {
    title: "Working out your skills and strengths",
    description:
      "Fill in our short form or give us a call. No pressure, no commitment — just a gentle first conversation.",
  },
  {
    title: "Working out your skills and strengths",
    description:
      "Fill in our short form or give us a call. No pressure, no commitment — just a gentle first conversation.",
  },
];

const features = [
  "Strictly confidential",
  "Qualified professionals",
  "Zero judgement",
  "Flexible scheduling",
  "Evidence-based methods",
  "Ongoing support",
];

const stats = [
  { value: "500+", label: "Clients supported" },
  { value: "12+", label: "Years experience" },
  { value: "96%", label: "Feel better in 8 weeks" },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      className="relative pt-16 md:pt-20 overflow-hidden min-h-screen flex"
      style={{
        background: `
          radial-gradient(ellipse at 70% 40%, rgba(97,0,125,0.07) 0%, transparent 60%),
          radial-gradient(ellipse at 10% 80%, rgba(255,181,73,0.10) 0%, transparent 55%),
          linear-gradient(170deg, #faf5ff 8%, #f5eeff 42%, #fff8ef 92%)
        `,
      }}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        {/* Left panel */}
        <div className="relative flex flex-col justify-end gap-8 px-6 md:px-12 lg:px-16 pt-12 pb-12 lg:pb-0 lg:pt-16 bg-[#61007d]">
          <div className="absolute inset-0 bg-[#61007d]" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[rgba(255,181,73,0.08)] blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-8 pb-10 lg:pb-16">
            <AnimatedSection className="flex flex-col gap-6">
              <motion.h1
                variants={fadeUp}
                className="text-[42px] md:text-[52px] lg:text-[60px] text-white leading-[1.05] tracking-[-0.02em] uppercase"
                style={{ fontFamily: "var(--font-barlow)", fontWeight: 600 }}
              >
                <span className="font-normal opacity-90">Helping you to</span>
                <br />
                <span className="font-bold">achieve your potential</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-[16px] text-white/85 leading-[1.7] max-w-[460px] font-light">
                We offer career counselling and support to help you focus on your
                future and potential. All sessions are delivered by qualified
                professionals, and are trauma understanding and supporting.
              </motion.p>

              <motion.div variants={fadeUp}>
                <a
                  href="#"
                  className="inline-flex items-center justify-center bg-white text-[#61007d] font-bold text-[16px] px-8 py-3.5 rounded-xl shadow-[0_2px_16px_rgba(97,0,125,0.30)] hover:bg-[#faf5ff] hover:shadow-[0_4px_24px_rgba(97,0,125,0.40)] hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98]"
                >
                  Book a free consultation
                </a>
              </motion.div>
            </AnimatedSection>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="border-t border-[#eae0f5]/25 pt-8 flex items-start"
            >
              {stats.map((s, i) => (
                <div key={s.value} className="flex items-start">
                  {i > 0 && <div className="w-px h-8 bg-[#eae0f5]/35 self-center mx-6" />}
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[26px] font-extrabold text-white leading-tight">
                      {s.value}
                    </span>
                    <span className="text-[11px] text-white/55 leading-tight tracking-wide font-medium">
                      {s.label}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right image */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="relative h-[340px] lg:h-auto lg:min-h-[600px]"
        >
          <Image
            src={HERO_IMAGE}
            alt="Two women smiling together, working on a laptop"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#61007d]/15 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#ffb549] py-24 px-6 md:px-12 lg:px-16">
      <div ref={ref} className="w-full flex flex-col items-center gap-3">

        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[#61007d] text-[12px] font-bold tracking-[0.10em] uppercase"
        >
          What we offer
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-[#61007d] text-[48px] md:text-[64px] font-bold leading-[1] tracking-[-0.015em] uppercase text-center"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          How we can help you
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="text-white text-[24px] font-semibold leading-[1.24] text-center max-w-[542px]"
        >
          Every person is different. We offer a range of approaches so you can find what truly fits.
        </motion.p>

        {/* Illustration — bleeds to both edges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-[calc(100%+3rem)] md:w-[calc(100%+6rem)] lg:w-[calc(100%+8rem)] -mx-6 md:-mx-12 lg:-mx-16 mt-2"
        >
          <Image
            src="/images/services-illustration.png"
            alt=""
            width={2400}
            height={235}
            className="w-full h-auto block"
          />
        </motion.div>

        {/* Text items */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="w-full flex flex-col md:flex-row items-start justify-between text-center gap-10 md:gap-0"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } },
              }}
              className="flex-1 flex flex-col items-center gap-2 px-4"
            >
              <h3 className="text-white text-[24px] font-semibold leading-[1.2] max-w-[195px]">
                {service.title}
              </h3>
              <p className="text-[#61007d] text-[15px] leading-[1.4] max-w-[298px]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative h-[380px] lg:h-auto order-last lg:order-first"
        >
          <Image
            src={ABOUT_IMAGE}
            alt="Therapist writing on a wellbeing planning board"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

        <div ref={ref} className="flex flex-col justify-center gap-8 px-6 md:px-12 lg:px-16 py-16 lg:py-20">
          <AnimatedSection className="flex flex-col gap-6">
            <motion.p variants={fadeUp} className="text-[#61007d] text-[11px] font-bold tracking-[0.12em] uppercase">
              About Choices
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-[#1a0828] text-[44px] md:text-[56px] font-bold leading-[1.02] tracking-[-0.02em] uppercase max-w-[400px]"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              We believe change is always possible
            </motion.h2>

            <motion.p variants={fadeUp} className="text-[#5c4b6e] text-[16px] leading-[1.8] max-w-[480px] font-light">
              Choices was founded on the belief that good mental health support
              should be accessible, compassionate, and genuinely effective. Our
              qualified therapists and coaches bring warmth, experience, and a real
              commitment to your wellbeing.
            </motion.p>

            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-x-8 gap-y-3">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-sm bg-[#ffb549] flex-shrink-0" />
                  <span className="text-[13px] font-semibold text-[#5c4b6e]">{f}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <a
                href="#"
                className="inline-flex items-center justify-center bg-[#61007d] text-white font-bold text-[14px] px-7 py-3 rounded-xl shadow-[0_2px_12px_rgba(97,0,125,0.32)] hover:bg-[#7a009e] hover:shadow-[0_4px_20px_rgba(97,0,125,0.40)] hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98]"
              >
                Talk to us today
              </a>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function CtaBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#faf8ff] py-20 md:py-28 px-6 md:px-12 lg:px-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full text-center rounded-3xl bg-[#61007d] px-6 md:px-12 lg:px-16 py-16 md:py-20 relative overflow-hidden"
        style={{ boxShadow: "0 24px 80px rgba(97,0,125,0.26)" }}
      >
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[rgba(255,181,73,0.12)] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[rgba(255,255,255,0.04)] blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <p className="text-[#ffb549] text-[11px] font-bold tracking-[0.12em] uppercase">
            Get started today
          </p>
          <h2
            className="text-white text-[40px] md:text-[56px] font-bold leading-[1.05] tracking-[-0.02em] uppercase"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Ready to take the first step?
          </h2>
          <p className="text-white/75 text-[16px] leading-relaxed max-w-[480px] font-light">
            Book a free 30-minute consultation with no commitment and no pressure
            — just a gentle first conversation.
          </p>
          <a
            href="#"
            className="mt-2 inline-flex items-center justify-center bg-white text-[#61007d] font-bold text-[16px] px-10 py-3.5 rounded-xl shadow-[0_2px_16px_rgba(0,0,0,0.15)] hover:bg-[#faf5ff] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.20)] transition-all duration-200 active:scale-[0.98]"
          >
            Book a free consultation
          </a>
        </div>
      </motion.div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CtaBanner />
      <FooterComponent />
    </main>
  );
}
