const SKILLS = [
  { name: 'next-best-practices', source: 'vercel-labs' },
  { name: 'vercel-react-best-practices', source: 'vercel-labs' },
  { name: 'vercel-composition-patterns', source: 'vercel-labs' },
  { name: 'shadcn', source: 'shadcn-ui' },
  { name: 'frontend-design', source: 'anthropics' },
  { name: 'web-design-guidelines', source: 'vercel-labs' },
  { name: 'find-skills', source: 'vercel-labs' },
  { name: 'skill-creator', source: 'anthropics' }
] as const;

export function SkillsGrid() {
  return (
    <section
      id='skills'
      className='border-border bg-background scroll-mt-16 border-b px-7 py-14 md:py-16'
    >
      <div className='mx-auto max-w-5xl'>
        <div className='mb-3 font-mono text-[11px] tracking-wider text-[#15803d]/85 dark:text-[#98f590]/85'>
          {'// SECTION 04 — SKILLS PREINSTALLED'}
        </div>
        <h2 className='text-foreground text-2xl font-semibold tracking-tight md:text-[28px]'>
          {`${SKILLS.length} skills, locked & ready.`}
        </h2>
        <p className='text-muted-foreground mt-2 max-w-xl text-sm md:text-base'>
          Open the project. Your agent already knows how to do these things.
        </p>

        <div className='mt-7 grid grid-cols-1 gap-2.5 font-mono text-xs sm:grid-cols-2 lg:grid-cols-3'>
          {SKILLS.map((skill) => (
            <div key={skill.name} className='border-border bg-card rounded-lg border px-3.5 py-3'>
              <div className='text-foreground'>{skill.name}</div>
              <div className='text-muted-foreground/70 mt-0.5 text-[10.5px]'>{skill.source}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
