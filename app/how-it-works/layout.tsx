import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — Choices Therapy & Coaching",
  description:
    "Getting started is simple. Learn how our three-step process works — from booking your free consultation to your first session and beyond.",
};

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
