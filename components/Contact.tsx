import {
  Mail,
  Code2,
  BriefcaseBusiness,
} from "lucide-react";

const contacts = [
  {
    title: "Email",
    value: "ameenmuhammedts047@gmail.com",
    href: "mailto:ameenmuhammedts047@gmail.com",
    icon: Mail,
  },
  {
    title: "GitHub",
    value: "github.com/ameen9870",
    href: "https://github.com/ameen9870/",
    icon: Code2,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/ameen-muhammedts",
    href: "https://linkedin.com/in/ameen-muhammedts/",
    icon: BriefcaseBusiness,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-line relative overflow-hidden px-6 py-20 md:px-10 md:py-24"
    >
      <div className="absolute bottom-[-200px] left-[-100px] h-[500px] w-[500px] rounded-full bg-[#ff3048]/[0.06] blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-[1170px] gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        {/* Intro */}
        <div>
          <div className="flex items-center gap-5">
            <span className="section-number">
              04
            </span>

            <span className="eyebrow">
              CONTACT
            </span>
          </div>

          <h2 className="mt-5 max-w-[430px] font-display text-4xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-[44px]">
            Let&apos;s build
            <br />
            something intelligent.
          </h2>

          <p className="mt-5 max-w-[360px] text-[12px] leading-5 text-white/45">
            I&apos;m open to opportunities, collaborations and
            interesting AI projects. Feel free to reach out.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid gap-3 sm:grid-cols-3">
          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.title}
                href={contact.href}
                target={
                  contact.title === "Email"
                    ? undefined
                    : "_blank"
                }
                rel={
                  contact.title === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group flex min-h-[150px] flex-col justify-between rounded-xl border border-white/[0.09] bg-white/[0.012] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#ff5363]/35 hover:bg-[#ff5363]/[0.025]"
              >
                <Icon
                  size={23}
                  strokeWidth={1.4}
                  className="text-[#ff5363] transition group-hover:text-[#ff8994]"
                />

                <div>
                  <p className="text-[12px] font-medium text-white">
                    {contact.title}
                  </p>

                  <p className="mt-2 break-all text-[9px] leading-4 text-white/35">
                    {contact.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}