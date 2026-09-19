"use client";

import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

const visuals = [
  "wave",
  "notes",
  "core",
  "network",
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-line relative overflow-hidden px-6 py-20 md:px-10 md:py-24"
    >
      <div className="relative z-10 mx-auto grid max-w-[1170px] gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        {/* Intro */}
        <div>
          <div className="flex items-center gap-5">
            <span className="section-number">
              03
            </span>

            <span className="eyebrow">
              PROJECTS
            </span>
          </div>

          <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.055em] md:text-[46px]">
            AI Lab
          </h2>

          <p className="mt-5 max-w-[270px] text-[12px] leading-5 text-white/45">
            A collection of AI-powered projects built to
            explore ideas and solve real problems.
          </p>

          <a
            href="#projects"
            className="btn-outline mt-6"
          >
            View All Projects
            <span>→</span>
          </a>
        </div>

        {/* Cards */}
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {projects
            .slice(0, 3)
            .map((project, index) => (
              <a
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group overflow-hidden rounded-xl border border-white/[0.1] bg-[#0c0608]/80 transition duration-500 hover:-translate-y-1 hover:border-[#ff5363]/40"
              >
                {/* Visual */}
                <div className="relative h-[115px] overflow-hidden border-b border-white/[0.08]">
                  {visuals[index] ===
                    "wave" && (
                    <div className="absolute inset-0 bg-[#110709]">
                      <div className="absolute left-[-10%] top-[40%] h-14 w-[120%] rotate-[-9deg] rounded-[50%] border border-[#ff5363]/60 shadow-[0_0_30px_rgba(255,50,70,0.25)]" />

                      <div className="absolute left-[-10%] top-[48%] h-12 w-[120%] rotate-[5deg] rounded-[50%] border border-[#ff8d98]/30" />

                      <div className="absolute left-[20%] top-[15%] h-20 w-20 rounded-full bg-[#ff5363]/10 blur-2xl" />
                    </div>
                  )}

                  {visuals[index] ===
                    "notes" && (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#170a0c] via-[#0d0608] to-[#16090c]">
                      <div className="absolute left-1/2 top-1/2 h-20 w-32 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] rounded-md border border-[#ff5363]/25 bg-[#12090b] shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                        <div className="mx-4 mt-4 h-1 w-16 bg-[#ff5363]/40" />
                        <div className="mx-4 mt-3 h-1 w-24 bg-white/10" />
                        <div className="mx-4 mt-2 h-1 w-20 bg-white/10" />
                      </div>
                    </div>
                  )}

                  {visuals[index] ===
                    "core" && (
                    <div className="absolute inset-0 bg-[#0b0507]">
                      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff5363]/50 bg-[#ff5363]/[0.08] shadow-[0_0_40px_rgba(255,50,70,0.2)]">
                        <div className="absolute inset-4 rounded-full border border-[#ff8d98]/30" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-sm font-medium text-white transition group-hover:text-[#ff8792]">
                      {project.title}
                    </h3>

                    <ArrowRight
                      size={14}
                      className="text-[#ff5363] transition group-hover:translate-x-1"
                    />
                  </div>

                  <p className="mt-2 line-clamp-2 text-[10px] leading-4 text-white/40">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies
                      .slice(0, 3)
                      .map(
                        (technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-[#ff5363]/25 px-2.5 py-1 text-[8px] text-white/50"
                          >
                            {technology}
                          </span>
                        )
                      )}
                  </div>
                </div>
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}