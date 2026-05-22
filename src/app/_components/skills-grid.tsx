const SKILLS = [
  { name: 'next-best-practices', source: 'vercel-labs' },
  { name: 'vercel-react-best-practices', source: 'vercel-labs' },
  { name: 'vercel-composition-patterns', source: 'vercel-labs' },
  { name: 'shadcn-component-discovery', source: 'mattbx' },
  { name: 'shadcn-component-review', source: 'mattbx' },
  { name: 'frontend-design', source: 'anthropics' },
  { name: 'web-design-guidelines', source: 'vercel-labs' },
  { name: 'find-skills', source: 'vercel-labs' },
  { name: 'skill-creator', source: 'anthropics' }
] as const;

export function SkillsGrid() {
  return (
    <section
      id='skills'
      className='scroll-mt-16 border-b border-white/[0.06] bg-[#0a0a0a] px-7 py-14 md:py-16'
    >
      <div className='mx-auto max-w-5xl'>
        <div className='mb-3 font-mono text-[11px] tracking-wider text-[#98f590]/85'>
          // SECTION 03 — SKILLS PREINSTALLED
        </div>
        <h2 className='text-2xl font-semibold tracking-tight text-white md:text-[28px]'>
          9 skills, locked &amp; ready.
        </h2>
        <p className='mt-2 max-w-xl text-sm text-white/60 md:text-base'>
          Open the project. Your agent already knows how to do these things.
        </p>

        <div className='mt-7 grid grid-cols-1 gap-2.5 font-mono text-xs sm:grid-cols-2 lg:grid-cols-3'>
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className='rounded-lg border border-white/[0.07] bg-white/[0.015] px-3.5 py-3'
            >
              <div className='text-white'>{skill.name}</div>
              <div className='mt-0.5 text-[10.5px] text-white/40'>{skill.source}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
