import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Choices Therapy & Coaching",
  description:
    "Book a free consultation or get in touch. We respond within one working day. Call, email, or use our online form to start your journey.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
