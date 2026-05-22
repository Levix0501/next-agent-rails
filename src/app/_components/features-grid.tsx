const FEATURES = [
  {
    num: '01',
    title: 'Agent guardrails',
    body: "AGENTS.md pins the must-follow conventions: use bun, default to Server Components, push 'use client' to the smallest leaf components."
  },
  {
    num: '02',
    title: 'Preinstalled skills',
    body: 'A curated set under .agents/skills, tracked by skills-lock.json — Next.js best practices, React patterns, shadcn discovery and review, frontend design.'
  },
  {
    num: '03',
    title: 'Modern baseline',
    body: 'Next.js 16, React 19, Tailwind v4, TypeScript, Geist font. shadcn/ui wired up with the radix-nova style preset.'
  },
  {
    num: '04',
    title: 'Native toolchain',
    body: 'Bun, oxlint, oxfmt, Turbopack, Tailwind Oxide — every hot-path tool is Rust or Zig. No JS interpreter on the dev loop.'
  }
] as const;

export function FeaturesGrid() {
  return (
    <section
      id='rails'
      className='scroll-mt-16 border-b border-white/[0.06] bg-[#0a0a0a] px-7 py-14 md:py-16'
    >
      <div className='mx-auto max-w-5xl'>
        <div className='mb-3 font-mono text-[11px] tracking-wider text-[#98f590]/85'>
          // SECTION 02 — WHAT&apos;S ON THE RAILS
        </div>
        <h2 className='text-2xl font-semibold tracking-tight text-white md:text-[28px]'>
          Guardrails, not handcuffs.
        </h2>
        <p className='mt-2 max-w-xl text-sm text-white/60 md:text-base'>
          Conventions that keep agents productive without locking down design.
        </p>

        <div className='mt-7 grid grid-cols-1 gap-3.5 md:grid-cols-2'>
          {FEATURES.map((f) => (
            <div
              key={f.num}
              className='rounded-[10px] border border-white/[0.07] bg-white/[0.015] p-5'
            >
              <div className='font-mono text-[11px] text-[#98f590]/70'>{f.num}</div>
              <h3 className='mt-1.5 text-[15px] font-semibold text-white'>{f.title}</h3>
              <p className='mt-1.5 text-[13px] leading-relaxed text-white/65'>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
