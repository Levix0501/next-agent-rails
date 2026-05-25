const TREE = [
  { path: 'src/', note: '' },
  { path: '  app/', note: 'routing · route groups · handlers' },
  { path: '    (public)/', note: 'SEO-facing pages' },
  { path: '    (protected)/', note: 'auth-gated pages' },
  { path: '    api/', note: 'thin BFF → your backend' },
  { path: '  features/<feature>/', note: 'components · api · actions · lib · store' },
  { path: '  components/', note: 'ui/ (shadcn) · layout/ (providers)' },
  { path: '  lib/  hooks/  styles/', note: 'shared utils · hooks · tokens' },
  { path: '  auth.ts  proxy.ts', note: 'auth · route-protection middleware' }
] as const;

const RULES = [
  {
    num: '01',
    title: 'Use Bun',
    body: 'bun install / bun add, respect bun.lock. No npm, pnpm, or yarn.'
  },
  {
    num: '02',
    title: 'Server Components first',
    body: "Default to Server Components; push 'use client' down to the smallest leaf that needs it."
  },
  {
    num: '03',
    title: 'Official CLI first',
    body: "Scaffold through a tool's own CLI (bunx shadcn@latest add …), never by hand."
  },
  {
    num: '04',
    title: 'One home per state',
    body: 'URL state → nuqs, client state → zustand. No per-feature reinvention.'
  }
] as const;

export function OnTheRails() {
  return (
    <section
      id='rails'
      className='border-border bg-background scroll-mt-16 border-b px-7 py-14 md:py-16'
    >
      <div className='mx-auto max-w-5xl'>
        <div className='mb-3 font-mono text-[11px] tracking-wider text-[#15803d]/85 dark:text-[#98f590]/85'>
          {'// SECTION 02 — ON THE RAILS'}
        </div>
        <h2 className='text-foreground text-2xl font-semibold tracking-tight md:text-[28px]'>
          Guardrails, not handcuffs.
        </h2>
        <p className='text-muted-foreground mt-2 max-w-xl text-sm md:text-base'>
          A fixed directory structure and a short list of conventions keep agent output predictable
          and easy to review — no sprawl, no surprise patterns.
        </p>

        <div className='border-border bg-card mt-7 overflow-x-auto rounded-[10px] border p-5 font-mono text-[12.5px] leading-relaxed'>
          {TREE.map((row) => (
            <div key={row.path} className='whitespace-pre'>
              <span className='text-foreground'>{row.path}</span>
              {row.note ? <span className='text-muted-foreground'>{`  # ${row.note}`}</span> : null}
            </div>
          ))}
        </div>

        <div className='mt-3.5 grid grid-cols-1 gap-3.5 md:grid-cols-2'>
          {RULES.map((rule) => (
            <div key={rule.num} className='border-border bg-card rounded-[10px] border p-5'>
              <div className='font-mono text-[11px] text-[#15803d]/80 dark:text-[#98f590]/70'>
                {rule.num}
              </div>
              <h3 className='text-foreground mt-1.5 text-[15px] font-semibold'>{rule.title}</h3>
              <p className='text-muted-foreground mt-1.5 text-[13px] leading-relaxed'>
                {rule.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
