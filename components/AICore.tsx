"use client";

export default function AICore() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="absolute h-40 w-40 rounded-full bg-[#ff5363]/10 blur-3xl" />

      <div className="relative h-28 w-28 rounded-full border border-[#ff5363]/40 bg-[#ff5363]/5 shadow-[0_0_50px_rgba(255,83,99,0.18)]">
        <div className="absolute inset-4 rounded-full border border-[#ff8d98]/30" />

        <div className="absolute inset-8 rounded-full bg-[#ff5363]/20 shadow-[0_0_30px_rgba(255,83,99,0.25)]" />
      </div>
    </div>
  );
}