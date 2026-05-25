import { TerminalWindow } from './terminal-window';

export function GetStarted() {
  return (
    <section
      id='start'
      className='border-border bg-background scroll-mt-16 border-b px-7 py-14 md:py-16'
    >
      <div className='mx-auto max-w-5xl'>
        <div className='mb-3 font-mono text-[11px] tracking-wider text-[#15803d]/85 dark:text-[#98f590]/85'>
          {'// SECTION 01 — GET STARTED'}
        </div>
        <h2 className='text-foreground text-2xl font-semibold tracking-tight md:text-[28px]'>
          One command. Two minutes.
        </h2>
        <p className='text-muted-foreground mt-2 max-w-xl text-sm md:text-base'>
          Scaffold the repo, install, and start building. Ships with a public landing and a
          protected dashboard as a working example of the rails.
        </p>

        <TerminalWindow title='getting-started.sh' className='mt-6'>
          <p className='text-[#5a7a55]'># 1. clone &amp; install</p>
          <p>
            <span className='text-[#6ee7ff]'>$</span> bunx degit levix0501/next-agent-rails my-app
          </p>
          <p>
            <span className='text-[#6ee7ff]'>$</span>
            {' cd my-app && bun install'}
          </p>
          <p className='mt-3 text-[#5a7a55]'># 2. run the dev server</p>
          <p>
            <span className='text-[#6ee7ff]'>$</span> bun dev
          </p>
          <p className='mt-3 text-[#5a7a55]'># 3. ship</p>
          <p>
            <span className='text-[#6ee7ff]'>$</span>
            {' bun run build && vercel deploy'}
          </p>
        </TerminalWindow>

        <p className='text-muted-foreground mt-4 font-mono text-xs'>
          Demo dashboard login <span className='text-foreground'>demo</span> /{' '}
          <span className='text-foreground'>demo123</span> · auto-fix on save with{' '}
          <span className='text-foreground'>bun run lint:fix</span>
        </p>
      </div>
    </section>
  );
}
