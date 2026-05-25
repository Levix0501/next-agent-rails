const STACK = [
  { job: 'Framework', lib: 'Next.js 16 · React 19' },
  { job: 'Styling', lib: 'Tailwind CSS v4' },
  { job: 'UI', lib: 'shadcn/ui · Radix · lucide' },
  { job: 'Server state', lib: 'TanStack Query' },
  { job: 'URL state', lib: 'nuqs' },
  { job: 'Client state', lib: 'Zustand' },
  { job: 'Forms', lib: 'React Hook Form · Zod' },
  { job: 'Auth', lib: 'Auth.js (next-auth)' }
] as const;

export function CuratedStack() {
  return (
    <section
      id='stack'
      className='border-border bg-background scroll-mt-16 border-b px-7 py-14 md:py-16'
    >
      <div className='mx-auto max-w-5xl'>
        <div className='mb-3 font-mono text-[11px] tracking-wider text-[#15803d]/85 dark:text-[#98f590]/85'>
          {'// SECTION 03 — THE STACK'}
        </div>
        <h2 className='text-foreground text-2xl font-semibold tracking-tight md:text-[28px]'>
          Picked once, not per feature.
        </h2>
        <p className='text-muted-foreground mt-2 max-w-xl text-sm md:text-base'>
          Mainstream libraries, each with one job — so your agent reaches for the same tool you
          would. Already wired up in providers.
        </p>

        <div className='mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4'>
          {STACK.map((item) => (
            <div key={item.job} className='border-border bg-card rounded-lg border px-3.5 py-3'>
              <div className='text-muted-foreground/70 text-[10.5px] tracking-wider uppercase'>
                {item.job}
              </div>
              <div className='text-foreground mt-0.5 font-mono text-[13px]'>{item.lib}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
