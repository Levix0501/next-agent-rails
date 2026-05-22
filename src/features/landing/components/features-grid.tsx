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
      className='border-border bg-background scroll-mt-16 border-b px-7 py-14 md:py-16'
    >
      <div className='mx-auto max-w-5xl'>
        <div className='mb-3 font-mono text-[11px] tracking-wider text-[#15803d]/85 dark:text-[#98f590]/85'>
          {`// SECTION 02 — WHAT'S ON THE RAILS`}
        </div>
        <h2 className='text-foreground text-2xl font-semibold tracking-tight md:text-[28px]'>
          Guardrails, not handcuffs.
        </h2>
        <p className='text-muted-foreground mt-2 max-w-xl text-sm md:text-base'>
          Conventions that keep agents productive without locking down design.
        </p>

        <div className='mt-7 grid grid-cols-1 gap-3.5 md:grid-cols-2'>
          {FEATURES.map((f) => (
            <div key={f.num} className='border-border bg-card rounded-[10px] border p-5'>
              <div className='font-mono text-[11px] text-[#15803d]/80 dark:text-[#98f590]/70'>
                {f.num}
              </div>
              <h3 className='text-foreground mt-1.5 text-[15px] font-semibold'>{f.title}</h3>
              <p className='text-muted-foreground mt-1.5 text-[13px] leading-relaxed'>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
