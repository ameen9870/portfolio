import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const projectDetails: Record<
  string,
  {
    number: string;
    eyebrow: string;
    overview: string;
    role: string;
    focus: string[];
    nextStep: string;
  }
> = {
  "agentic-research-assistant": {
    number: "01",
    eyebrow: "CURRENT EXPERIMENT",
    overview:
      "This project explores how an AI system can move beyond a simple question-and-answer workflow. The goal is to create an agent that can break a research task into steps, use available tools, gather information, and turn the results into a useful response.",
    role: "AI / Agentic AI",
    focus: [
      "Agent workflows",
      "LLM interaction",
      "Tool usage",
      "API integration",
      "Structured outputs",
    ],
    nextStep:
      "Build the first working version and gradually add planning, tool calling, memory, and evaluation.",
  },

  "ai-knowledge-assistant": {
    number: "02",
    eyebrow: "EXPLORATION",
    overview:
      "A planned knowledge assistant focused on retrieving useful information from a private knowledge base and generating responses based on the retrieved context.",
    role: "RAG / AI",
    focus: [
      "Retrieval-Augmented Generation",
      "Embeddings",
      "Vector search",
      "Context retrieval",
      "LLM responses",
    ],
    nextStep:
      "Explore document ingestion, embeddings, vector databases, retrieval quality, and grounded responses.",
  },

  ecomap: {
    number: "03",
    eyebrow: "COMPLETED PROJECT",
    overview:
      "EcoMap is a civic environmental issue reporting system designed to connect citizens and local authorities. Users can report issues such as potholes, waste, and water pollution while attaching media and location information.",
    role: "Full-Stack Application",
    focus: [
      "Issue reporting",
      "Media uploads",
      "Location tracking",
      "Complaint management",
      "Issue visualization",
    ],
    nextStep:
      "Explore how AI-based prioritization and clustering could make the system more intelligent.",
  },

  venueease: {
    number: "04",
    eyebrow: "COMPLETED PROJECT",
    overview:
      "VenueEase is a web-based auditorium and convention-center booking platform designed around different user roles. The system separates customer, venue-manager, and administrator workflows.",
    role: "Web Application",
    focus: [
      "Venue discovery",
      "Booking workflows",
      "Role-based interfaces",
      "Database management",
      "Administration",
    ],
    nextStep:
      "Improve the platform with stronger UX, availability handling, and additional automation.",
  },
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  const details = projectDetails[project.slug];

  if (!details) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#080607] text-white">
      {/* Background atmosphere */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[60%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#ff3048]/[0.07] blur-[140px]" />

        <div className="absolute left-[10%] top-[60%] h-[400px] w-[400px] rounded-full bg-[#ff3048]/[0.035] blur-[120px]" />
      </div>

      {/* Grid */}
      <div className="pointer-events-none fixed inset-0 opacity-30">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,83,99,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,83,99,0.015) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/[0.06]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a
            href="/"
            className="font-[var(--font-display)] text-xl font-semibold tracking-[-0.08em]"
          >
            AM
            <span className="text-[#ff5363]">.</span>
          </a>

          <a
            href="/#projects"
            className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/35 transition hover:text-white"
          >
            <ArrowLeft
              size={13}
              className="transition-transform group-hover:-translate-x-1"
            />

            Back to projects
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-6 pb-24 pt-24 md:pb-32 md:pt-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_0.38fr]">
            <div>
              <div className="flex items-center gap-4">
                <span className="font-[var(--font-display)] text-xs text-[#ff5363]/60">
                  {details.number}
                </span>

                <span className="h-px w-10 bg-[#ff5363]/20" />

                <span className="text-[9px] uppercase tracking-[0.3em] text-[#ff7a86]/60">
                  {details.eyebrow}
                </span>
              </div>

              <p className="mt-10 text-[10px] uppercase tracking-[0.25em] text-white/25">
                {project.category}
              </p>

              <h1 className="mt-5 max-w-5xl font-[var(--font-display)] text-5xl font-medium leading-[0.95] tracking-[-0.065em] md:text-7xl lg:text-8xl">
                {project.title}
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/40 md:text-lg">
                {project.description}
              </p>

              <div className="mt-9 flex flex-wrap gap-2">
                {project.technologies.map(
                  (technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-[9px] tracking-[0.08em] text-white/40"
                    >
                      {technology}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Project marker */}
            <div className="hidden lg:block">
              <div className="sticky top-24 border-l border-white/[0.08] pl-7">
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                  Project status
                </p>

                <p className="mt-3 font-[var(--font-display)] text-xl text-[#ff7c87]">
                  {project.status}
                </p>

                <div className="mt-10 h-px w-full bg-white/[0.06]" />

                <p className="mt-7 text-[9px] uppercase tracking-[0.25em] text-white/25">
                  Focus
                </p>

                <p className="mt-3 text-sm text-white/50">
                  {details.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="relative border-t border-white/[0.06] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            {/* Label */}
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#ff6d7a]/60">
                01 / Overview
              </p>

              <p className="mt-5 max-w-xs text-sm leading-7 text-white/25">
                What this project is about and what I&apos;m
                trying to achieve with it.
              </p>
            </div>

            {/* Overview */}
            <div>
              <p className="max-w-3xl text-xl leading-9 text-white/65 md:text-2xl md:leading-10">
                {details.overview}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus */}
      <section className="relative border-t border-white/[0.06] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#ff6d7a]/60">
                02 / Focus
              </p>

              <p className="mt-5 max-w-xs text-sm leading-7 text-white/25">
                The areas, concepts and technologies involved
                in the project.
              </p>
            </div>

            <div className="grid gap-0 border-t border-white/[0.07]">
              {details.focus.map(
                (item, index) => (
                  <div
                    key={item}
                    className="group flex items-center justify-between border-b border-white/[0.07] py-6"
                  >
                    <div className="flex items-center gap-5">
                      <span className="text-[9px] text-[#ff5363]/40">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <span className="font-[var(--font-display)] text-lg text-white/55 transition group-hover:text-white">
                        {item}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="text-white/15 transition group-hover:text-[#ff5363]"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Next step */}
      <section className="relative border-t border-white/[0.06] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[30px] border border-[#ff5363]/10 bg-[#10090b]/60 p-8 md:p-12">
            <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#ff6d7a]/60">
                  03 / What&apos;s Next
                </p>

                <h2 className="mt-5 max-w-2xl font-[var(--font-display)] text-3xl font-medium tracking-[-0.04em] text-white md:text-5xl">
                  Still evolving.
                </h2>
              </div>

              <span className="font-[var(--font-display)] text-6xl text-[#ff5363]/10">
                →
              </span>
            </div>

            <p className="mt-8 max-w-3xl text-base leading-8 text-white/40">
              {details.nextStep}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-[9px] uppercase tracking-[0.2em] text-white/20 md:flex-row">
          <p>
            Ameen Muhammed T S
          </p>

          <a
            href="/#projects"
            className="transition hover:text-white/50"
          >
            All Projects
          </a>
        </div>
      </footer>
    </main>
  );
}