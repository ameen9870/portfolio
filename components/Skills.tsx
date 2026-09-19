import {
  Bot,
  Braces,
  Code2,
  Database,
  Globe,
  Layers3,
  Network,
  Palette,
  Puzzle,
  Server,
  Terminal,
  Workflow,
} from "lucide-react";

const skills = [
  {
    name: "Python",
    icon: Terminal,
  },
  {
    name: "JavaScript",
    icon: Braces,
  },
  {
    name: "TypeScript",
    icon: Code2,
  },
  {
    name: "Next.js",
    icon: Globe,
  },
  {
    name: "React",
    icon: Layers3,
  },
  {
    name: "Node.js",
    icon: Server,
  },
  {
    name: "AI & LLMs",
    icon: Bot,
  },
  {
    name: "Agentic AI",
    icon: Network,
  },
  {
    name: "APIs",
    icon: Puzzle,
  },
  {
    name: "PostgreSQL",
    icon: Database,
  },
  {
    name: "Git & GitHub",
    icon: Workflow,
  },
  {
    name: "Prompt Eng.",
    icon: Palette,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-line relative overflow-hidden px-6 py-20 md:px-10 md:py-24"
    >
      <div className="pointer-events-none absolute bottom-[-150px] left-[-100px] h-[400px] w-[400px] rounded-full bg-[#ff3048]/[0.05] blur-[100px]" />

      <div className="relative z-10 mx-auto grid max-w-[1170px] gap-12 lg:grid-cols-[0.65fr_1.35fr]">
        {/* Intro */}
        <div>
          <div className="flex items-center gap-5">
            <span className="section-number">
              02
            </span>

            <span className="eyebrow">
              SKILLS
            </span>
          </div>

          <h2 className="mt-5 font-display text-4xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-[46px]">
            Tools I work with.
          </h2>

          <p className="mt-5 max-w-[280px] text-[12px] leading-5 text-white/40">
            Technologies, frameworks and concepts I use to
            build intelligent systems.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group flex h-[88px] flex-col items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.012] transition duration-300 hover:-translate-y-1 hover:border-[#ff5363]/40 hover:bg-[#ff5363]/[0.035]"
              >
                <Icon
                  size={25}
                  strokeWidth={1.4}
                  className="text-white/75 transition group-hover:text-[#ff7884]"
                />

                <span className="mt-2 text-[10px] text-white/65">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}