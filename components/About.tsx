import {
  BarChart3,
  BookOpen,
  Cuboid,
} from "lucide-react";

const items = [
  {
    title: "LEARN",
    text: "Exploring AI agents, tool use, reasoning and LLM applications.",
    icon: BookOpen,
  },
  {
    title: "BUILD",
    text: "Turning ideas into real projects with modern technologies.",
    icon: Cuboid,
  },
  {
    title: "GROW",
    text: "Becoming a developer who can design useful AI-powered products.",
    icon: BarChart3,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-line relative overflow-hidden px-6 py-20 md:px-10 md:py-24"
    >
      <div className="planet-disc planet-disc-large opacity-70" />

      <div className="absolute right-[-150px] top-[20%] h-[500px] w-[500px] rounded-full bg-[#ff3048]/[0.035] blur-[100px]" />

      <div className="relative z-10 mx-auto grid max-w-[1170px] gap-10 md:grid-cols-[0.85fr_1fr] md:gap-12 lg:gap-24">
        {/* LEFT */}
        <div>
          <div className="flex items-center gap-5">
            <span className="section-number">
              01
            </span>

            <span className="eyebrow">
              ABOUT ME
            </span>
          </div>

          <h2 className="mt-5 max-w-[400px] font-display text-4xl font-semibold leading-[0.92] tracking-[-0.055em] md:text-[48px]">
            More than
            <br />
            a developer.
          </h2>

          <p className="mt-6 max-w-[430px] text-[13px] leading-6 text-white/50">
            I&apos;m Ameen Muhammed, a BTech graduate
            interested in artificial intelligence, agentic AI,
            and modern software development. I build practical
            AI applications and intelligent systems that can
            understand, reason and take action.
          </p>

          <a
            href="#contact"
            className="btn-outline mt-6"
          >
            Know More About Me
            <span>→</span>
          </a>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-center gap-5 md:pt-10">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center gap-5"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#ff5363]/35 bg-[#100608] shadow-[0_0_25px_rgba(255,50,70,0.08)]">
                  <Icon
                    size={24}
                    strokeWidth={1.3}
                    className="text-[#ff7884]"
                  />
                </div>

                <div>
                  <p className="text-[10px] font-medium tracking-[0.18em] text-[#ff6574]">
                    {item.title}
                  </p>

                  <p className="mt-2 max-w-[330px] text-[12px] leading-5 text-white/45">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}

          <div className="mt-3 ml-auto max-w-[250px] text-[10px] uppercase leading-5 tracking-[0.32em] text-white/35">
            “ A MORE
            <br />
            INTELLIGENT
            <br />
            TOMORROW ”
          </div>
        </div>
      </div>
    </section>
  );
}