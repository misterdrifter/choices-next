"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const steps = [
  {
    number: "01",
    title: "Book a free consultation",
    description:
      "Fill in our short form or give us a call. No pressure, no commitment — just a gentle first conversation to understand what you need.",
    tags: ["Free", "20 minutes", "No obligation"],
  },
  {
    number: "02",
    title: "Get matched with your therapist",
    description:
      "We take time to understand your goals, personality, and preferences before suggesting the right therapist or coach for you.",
    tags: ["Personalised", "Expert matching"],
  },
  {
    number: "03",
    title: "Begin your sessions",
    description:
      "Start at a pace that feels right. Sessions are 50 minutes, weekly or fortnightly, in-person or online — whatever suits you.",
    tags: ["50 mins", "Weekly or fortnightly", "In-person or online"],
  },
  {
    number: "04",
    title: "Track your progress",
    description:
      "We check in regularly to make sure you're getting the most from your sessions. Change takes time — we're with you every step of the way.",
    tags: ["Regular reviews", "Ongoing support"],
  },
];

const faqs = [
  {
    question: "How long does therapy take?",
    answer:
      "Everyone's journey is different. Some people notice meaningful change after 6–8 sessions; others prefer longer-term support. We review together regularly.",
  },
  {
    question: "Is everything confidential?",
    answer:
      "Absolutely. Everything discussed in your sessions stays between you and your therapist, within the bounds of professional ethical guidelines.",
  },
  {
    question: "Do you offer online sessions?",
    answer:
      "Yes — all our services are available online via secure video call. Many clients find this more convenient and just as effective.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Individual therapy starts from £65 per session. We also offer a limited number of subsidised places. Contact us to discuss your options.",
  },
  {
    question: "What if I don't click with my therapist?",
    answer:
      "It's important you feel comfortable. If things don't feel right, we'll help you find someone better suited — no awkwardness, no extra cost.",
  },
];

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
            The Process
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-bold text-white uppercase leading-tight"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Simple steps to feeling better
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-white/75 text-lg leading-relaxed max-w-xl"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Getting started can feel like the hardest part. We've made the process
            as clear and straightforward as possible, so you can focus on what
            matters.
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
            src="/images/hiw.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#61007d]/30 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}

function StepRow({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="flex flex-col md:flex-row items-start gap-6 md:gap-12 py-10 border-b border-[#eae0f5] last:border-none"
    >
      <div className="flex-shrink-0 w-full md:w-40 flex md:justify-end">
        <span
          className="font-bold text-[#eae0f5] leading-none select-none"
          style={{
            fontFamily: "var(--font-barlow)",
            fontSize: "clamp(72px, 10vw, 120px)",
            lineHeight: 1,
          }}
        >
          {step.number}
        </span>
      </div>
      <div className="flex flex-col gap-3 flex-1 pt-2 md:pt-4">
        <h3
          className="text-2xl md:text-3xl font-bold text-[#1a0828] uppercase"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          {step.title}
        </h3>
        <p
          className="text-[#5c4b6e] text-base leading-relaxed max-w-xl"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          {step.description}
        </p>
        {step.tags && step.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {step.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold text-[#61007d] bg-[#faf5ff] border border-[#eae0f5] px-3 py-1 rounded-full"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function StepsSection() {
  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-16">
      <div className="flex flex-col">
        {steps.map((step, i) => (
          <StepRow key={step.number} step={step} index={i} />
        ))}
      </div>
    </section>
  );
}

function AccordionItem({
  faq,
  index,
}: {
  faq: (typeof faqs)[number];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease: "easeOut",
      }}
      className="border-b border-[#eae0f5]"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        aria-expanded={open}
      >
        <span
          className="text-base md:text-lg font-semibold text-[#1a0828] group-hover:text-[#61007d] transition-colors"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="flex-shrink-0 w-7 h-7 rounded-full bg-[#eae0f5] flex items-center justify-center text-[#61007d] font-bold text-lg leading-none"
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="pb-5 text-[#5c4b6e] text-base leading-relaxed max-w-2xl"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#faf8ff] py-20 px-6 md:px-12 lg:px-16">
      <div className="flex flex-col gap-10">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-[#1a0828] uppercase"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          Common questions
        </motion.h2>
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.question} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#61007d] py-20 px-6 md:px-12 lg:px-16">
      <div ref={ref} className="flex flex-col items-center text-center gap-8">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-white uppercase"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          Ready when you are
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          className="text-white/75 text-lg max-w-xl leading-relaxed"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          There's no perfect moment to start. Whenever you're ready, we're
          here — and we'll move at your pace, every step of the way.
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

export default function HowItWorksPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">
        <HeroSection />
        <StepsSection />
        <FAQSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
