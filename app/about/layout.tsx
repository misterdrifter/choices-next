import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Choices Therapy & Coaching",
  description:
    "Founded on compassion, driven by results. Meet the Choices team and learn about our mission to make mental health support accessible to everyone.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
