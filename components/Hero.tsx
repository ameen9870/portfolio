"use client";

import { motion } from "framer-motion";
import AIOrb from "@/components/AIOrb";

export default function Hero() {
  return (
    <section id="home" className="hero-shell">
      <div className="hero-red-cloud" />
      <div className="hero-vignette" />

      <div className="pointer-events-none absolute inset-0 opacity-70">
        {Array.from({ length: 70 }).map((_, index) => (
          <span
            key={index}
            className="absolute h-[1px] w-[1px] rounded-full bg-[#ff9ca5]"
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${(index * 61) % 70}%`,
              opacity: 0.15 + ((index * 17) % 70) / 100,
            }}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute left-7 top-[20%] hidden h-[330px] items-center md:flex">
        <div className="relative h-full w-px bg-gradient-to-b from-transparent via-[#ff5363]/30 to-transparent">
          <span className="absolute -left-[2px] bottom-0 h-[5px] w-[5px] rounded-full border border-[#ff5363]" />
        </div>

        <span className="absolute -left-1 top-0 -translate-y-full rotate-90 text-[7px] tracking-[0.5em] text-white/15">
          2026
        </span>
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1320px] items-center px-6 pt-20 md:px-10">
        <div className="grid w-full items-center gap-0 md:grid-cols-[0.9fr_1.15fr_0.55fr] lg:grid-cols-[0.85fr_1.25fr_0.55fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative z-20"
          >
            <p className="eyebrow">
              AI / AGENTIC SYSTEMS
            </p>

            <h1 className="mt-5 font-display text-[52px] font-bold leading-[0.8] tracking-[-0.075em] sm:text-[64px] md:text-[60px] lg:text-[80px]">
              <span className="block text-white">
                AMEEN
              </span>

              <span className="mt-2 block bg-gradient-to-r from-[#ff7a87] via-[#ff9ca5] to-[#ff5363] bg-clip-text text-transparent">
                MUHAMMED
              </span>
            </h1>

            <p className="mt-7 max-w-[340px] text-[15px] leading-6 text-white/55">
              Building intelligent systems
              <br />
              that think, reason and act.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                Explore My Work
                <span>→</span>
              </a>

              <a href="#about" className="btn-outline">
                About Me
              </a>
            </div>

            <div className="mt-9 flex items-center gap-6">
              <div>
                <p className="font-display text-sm text-white">
                  01
                </p>
                <p className="mt-2 text-[10px] text-white/35">
                  Projects
                </p>
              </div>

              <div className="h-8 w-px bg-white/15" />

              <div>
                <p className="font-display text-sm text-white">
                  ∞
                </p>
                <p className="mt-2 text-[10px] text-white/35">
                  Learning
                </p>
              </div>

              <div className="h-8 w-px bg-white/15" />

              <div>
                <p className="font-display text-sm text-white">
                  100%
                </p>
                <p className="mt-2 text-[10px] text-white/35">
                  Committed
                </p>
              </div>
            </div>
          </motion.div>

          {/* CENTER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.15 }}
            className="relative order-first md:order-none"
          >
            <AIOrb />
          </motion.div>

          {/* RIGHT HUD */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="hidden self-center md:block"
          >
            <p className="eyebrow">
              SYSTEM 01
            </p>

            <div className="mt-6 space-y-3 text-[10px]">
              <div className="flex justify-between gap-5">
                <span className="uppercase tracking-[0.16em] text-white/30">
                  Status
                </span>

                <span className="flex items-center gap-2 text-white/75">
                  ACTIVE
                  <i className="h-1.5 w-1.5 rounded-full bg-[#ff5363] shadow-[0_0_8px_#ff5363]" />
                </span>
              </div>

              <div className="flex justify-between gap-5">
                <span className="uppercase tracking-[0.16em] text-white/30">
                  Model
                </span>

                <span className="text-white/65">
                  MULTI
                </span>
              </div>

              <div className="flex justify-between gap-5">
                <span className="uppercase tracking-[0.16em] text-white/30">
                  Latency
                </span>

                <span className="text-white/65">
                  12ms
                </span>
              </div>

              <div className="flex justify-between gap-5">
                <span className="uppercase tracking-[0.16em] text-white/30">
                  Uptime
                </span>

                <span className="text-white/65">
                  100%
                </span>
              </div>
            </div>

            <div className="my-7 h-px w-full bg-[#ff5363]/20" />

            <div className="space-y-1 text-[9px] uppercase tracking-[0.3em] text-white/35">
              <p>IDEAS</p>
              <p>INTO A MORE</p>
              <p>INTELLIGENT</p>
              <p>TOMORROW</p>
            </div>
          </motion.aside>
        </div>
      </div>

      <div className="planet-horizon">
        <div className="planet-ridge" />
      </div>

      <div className="planet-disc planet-disc-right" />

      <div className="absolute bottom-8 right-10 hidden text-[8px] uppercase tracking-[0.4em] text-white/20 lg:block">
        Explore / 01
      </div>
    </section>
  );
}