import { TerminalWindow } from './terminal-window';

export function GetStarted() {
  return (
    <section
      id='start'
      className='scroll-mt-16 border-b border-white/[0.06] bg-[#0a0a0a] px-7 py-14 md:py-16'
    >
      <div className='mx-auto max-w-5xl'>
        <div className='mb-3 font-mono text-[11px] tracking-wider text-[#98f590]/85'>
          // SECTION 04 — GET STARTED
        </div>
        <h2 className='text-2xl font-semibold tracking-tight text-white md:text-[28px]'>
          One command. Two minutes.
        </h2>

        <TerminalWindow title='getting-started.sh' className='mt-6'>
          <p className='text-[#5a7a55]'># 1. clone &amp; install</p>
          <p>
            <span className='text-[#6ee7ff]'>$</span> bunx degit levix0501/next-agent-rails my-app
          </p>
          <p>
            <span className='text-[#6ee7ff]'>$</span>
            {' cd my-app && bun install'}
          </p>
          <p className='mt-3 text-[#5a7a55]'># 2. run dev server</p>
          <p>
            <span className='text-[#6ee7ff]'>$</span> bun dev
          </p>
          <p className='mt-3 text-[#5a7a55]'># 3. ship</p>
          <p>
            <span className='text-[#6ee7ff]'>$</span>
            {' bun run build && vercel deploy'}
          </p>
        </TerminalWindow>
      </div>
    </section>
  );
}
