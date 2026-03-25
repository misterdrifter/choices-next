import Image from "next/image";

export default function Footer() {
  const footerLinks = {
    Services: [
      { label: "Individual Therapy", href: "/services" },
      { label: "Personal Coaching", href: "/services" },
      { label: "Group Sessions", href: "/services" },
      { label: "Online Support", href: "/services" },
      { label: "Workplace Wellbeing", href: "/services" },
    ],
    Company: [
      { label: "About us", href: "/about" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy policy", href: "#" },
      { label: "Terms of service", href: "#" },
    ],
  };

  return (
    <footer className="bg-[#61007d] px-6 md:px-12 lg:px-16 pt-16 pb-8">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">
          <div className="flex flex-col gap-5">
            <Image
              src="/images/logo-icon.png"
              alt="Choices"
              width={1369}
              height={240}
              className="h-8 w-auto object-contain object-left opacity-90"
            />
            <p className="text-[14px] text-white/78 leading-relaxed max-w-[260px] font-regular">
              Compassionate mental health therapy and coaching for everyone ready
              to feel well again.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="flex flex-col gap-5">
              <p className="text-white text-[11px] font-bold tracking-[0.10em] uppercase">
                {heading}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[14px] text-white/78 hover:text-white/90 transition-colors duration-200 font-regular"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.08] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-white/55 font-light">
            © 2026 Choices™. All rights reserved.
          </p>
          <p className="text-[13px] text-white/55 font-light">
            Designed with care for those who need it.
          </p>
        </div>
      </div>
    </footer>
  );
}
