import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services — Choices Therapy & Coaching",
  description:
    "Explore our range of mental health services including individual therapy, personal coaching, group sessions, and online support. Find the right fit for you.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
