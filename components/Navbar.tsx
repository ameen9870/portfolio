"use client";

const links = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex h-[78px] max-w-[1320px] items-center justify-between px-5 sm:px-7 md:px-10">
        {/* Logo */}
        <a
          href="#home"
          className="shrink-0 font-display text-[21px] font-bold tracking-[-0.09em] text-[#ffb0b6]"
        >
          AM<span className="text-[#ff5363]">.</span>
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-5 sm:gap-7 md:gap-9 lg:gap-10">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative whitespace-nowrap text-[10px] transition-colors duration-300 sm:text-[11px] ${
                index === 0
                  ? "text-white"
                  : "text-white/55 hover:text-white"
              }`}
            >
              {link.label}

              {index === 0 && (
                <span className="absolute -bottom-[23px] left-1/2 h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-[#ff5363] shadow-[0_0_10px_#ff5363]" />
              )}
            </a>
          ))}
        </nav>

        {/* Connect */}
        <a
          href="#contact"
          className="hidden shrink-0 items-center gap-3 rounded-full border border-[#ff5363]/70 px-4 py-2 text-[9px] text-white transition duration-300 hover:bg-[#ff5363]/10 sm:flex md:px-5 md:py-2.5 md:text-[10px]"
        >
          Let&apos;s Connect
          <span className="text-[#ff5363]">→</span>
        </a>
      </div>
    </header>
  );
}