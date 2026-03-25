import type { Metadata } from "next";
import { Barlow_Condensed, Nunito } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Choices — Mental Health Therapy & Coaching",
  description:
    "Compassionate mental health therapy and coaching. We help you achieve your potential with qualified professionals. Book a free consultation today.",
  icons: {
    icon: "/favicon-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${barlow.variable} ${nunito.variable}`}>
      <body className="antialiased">
        {children}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async></script>
      </body>
    </html>
  );
}
