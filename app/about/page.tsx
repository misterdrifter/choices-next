"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
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
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerSection({
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

const values = [
  {
    title: "Compassion",
    desc: "We lead with empathy in every interaction, no matter what.",
  },
  {
    title: "Integrity",
    desc: "Honest, ethical, and transparent — always.",
  },
  {
    title: "Accessibility",
    desc: "Quality mental health support should be available to all.",
  },
  {
    title: "Growth",
    desc: "We believe in the capacity for positive change in every person.",
  },
];

const team = [
  {
    name: "Dr. Sarah Mitchell",
    initials: "SM",
    role: "Founder & Lead Therapist",
    bio: "15 years experience in CBT and trauma-informed therapy.",
  },
  {
    name: "James Okafor",
    initials: "JO",
    role: "Senior Coach",
    bio: "Specialises in career transitions, confidence building, and executive coaching.",
  },
  {
    name: "Priya Sharma",
    initials: "PS",
    role: "Therapist & Group Facilitator",
    bio: "Trained in psychodynamic therapy and mindfulness-based approaches.",
  },
];

const stats = [
  { number: "500+", label: "Clients supported" },
  { number: "96%", label: "Feel better in 8 weeks" },
  { number: "12+", label: "Years experience" },
  { number: "4.9★", label: "Average rating" },
];

const missionFeatures = [
  "Personalised therapy and coaching tailored to you",
  "Qualified, accredited therapists and coaches",
  "Flexible online and in-person sessions",
  "Affordable pricing and sliding scale options",
];

export default function AboutPage() {
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
              About Choices
            </p>
            <h1
              className="text-5xl md:text-6xl font-bold text-white uppercase leading-tight max-w-xl"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              We believe change is always possible
            </h1>
            <p
              className="text-lg md:text-xl text-white/70 max-w-xl"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Founded on compassion, driven by results — and committed to you.
            </p>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative h-[320px] lg:h-auto min-h-[400px]"
          >
            <img
              src="/images/about.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#61007d]/30 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{
                color: "#61007d",
                fontFamily: "var(--font-barlow)",
              }}
            >
              Our Mission
            </p>
            <h2
              className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6"
              style={{ color: "#1a0828", fontFamily: "var(--font-barlow)" }}
            >
              Accessible, compassionate support for everyone
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "#5c4b6e", fontFamily: "var(--font-nunito)" }}
            >
              At Choices, we believe that every person deserves access to high-quality
              mental health and wellbeing support — regardless of background, circumstance,
              or budget. Our mission is simple: to make compassionate, professional care
              available to all who need it.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#5c4b6e", fontFamily: "var(--font-nunito)" }}
            >
              We work with individuals, couples, and organisations to provide therapy,
              coaching, and wellbeing programmes that create lasting, meaningful change.
              Every session is built around you — your needs, your pace, and your goals.
            </p>
            <ul className="space-y-3">
              {missionFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3"
                  style={{ fontFamily: "var(--font-nunito)", color: "#1a0828" }}
                >
                  <span
                    className="mt-1.5 w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "#ffb549" }}
                  />
                  <span className="text-sm font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative h-[340px] lg:h-auto lg:min-h-[600px]"
          >
            <img
              src="/images/mission.png"
              alt="About Choices"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-20 px-6 md:px-12 lg:px-16"
        style={{ backgroundColor: "#faf8ff" }}
      >
        <AnimatedSection className="text-center mb-14">
          <h2
            className="text-4xl md:text-5xl font-black uppercase"
            style={{ color: "#61007d", fontFamily: "var(--font-barlow)" }}
          >
            What we stand for
          </h2>
        </AnimatedSection>

        <StaggerSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 border transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg cursor-default"
              style={{ borderColor: "#eae0f5" }}
            >
              <span
                className="block w-3 h-3 rounded-full mb-6"
                style={{ backgroundColor: "#ffb549" }}
              />
              <h3
                className="text-xl font-black uppercase mb-3"
                style={{ color: "#1a0828", fontFamily: "var(--font-barlow)" }}
              >
                {v.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#5c4b6e", fontFamily: "var(--font-nunito)" }}
              >
                {v.desc}
              </p>
            </motion.div>
          ))}
        </StaggerSection>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-6 md:px-12 lg:px-16"
        style={{ backgroundColor: "#faf8ff" }}
      >
        <AnimatedSection>
          <div
            className="rounded-3xl px-10 py-16 text-center"
            style={{ backgroundColor: "#61007d" }}
          >
            <h2
              className="text-4xl md:text-5xl font-black uppercase text-white mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Start your journey today
            </h2>
            <p
              className="text-white/70 mb-8 text-lg max-w-xl mx-auto"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Take the first step towards lasting change. We&apos;re here whenever you&apos;re ready.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white font-bold rounded-xl px-8 py-4 text-sm uppercase tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                color: "#61007d",
                fontFamily: "var(--font-barlow)",
              }}
            >
              Book a free consultation
            </a>
          </div>
        </AnimatedSection>
      </section>
      </main>

      <Footer />
    </>
  );
}
