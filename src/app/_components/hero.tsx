import { TerminalWindow } from './terminal-window';

const HERO_ASCII = ` _ __   ___  _ __   __ _  __ _  ___ _ __ | |_     _ __ __ _(_) |___
| '_ \\ / _ \\| '_ \\ / _\` |/ _\` |/ _ \\ '_ \\| __|___| '__/ _\` | | / __|
| | | | __/| | | | (_| | (_| |  __/ | | | ||___| | | (_| | | \\__ \\
|_| |_|\\___||_| |_|\\__,_|\\__, |\\___|_| |_|\\__|  |_|  \\__,_|_|_|___/
                         |___/`;

export function Hero() {
  return (
    <section className='border-b border-white/[0.06] bg-[#0a0a0a] px-7 pt-16 pb-14 md:pt-24'>
      <div className='mx-auto max-w-5xl'>
        <span className='inline-flex items-center gap-2 rounded-full border border-[#98f590]/20 bg-[#98f590]/[0.04] px-2.5 py-1 font-mono text-[11px] tracking-wider text-[#98f590]'>
          ▸ rails for agents
        </span>

        <h1 className='mt-5 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight text-white md:text-5xl'>
          Rails for AI agents <span className='text-white/50'>building with Next.js.</span>
        </h1>

        <p className='mt-4 max-w-xl text-base leading-relaxed text-white/60 md:text-lg'>
          A starter that keeps agents on a controlled, conventional track. Native toolchain.
          Server-first. Preinstalled skills. Modern baseline.
        </p>

        <TerminalWindow title='~/ — bash' className='mt-7 max-w-2xl'>
          <pre aria-hidden='true' className='text-[10px] leading-tight text-[#98f590]'>
            {HERO_ASCII}
          </pre>
          <p className='mt-4 text-[#5a7a55]'># clone the starter</p>
          <p>
            <span className='text-[#6ee7ff]'>$</span> bunx degit levix0501/next-agent-rails my-app
          </p>
          <p>
            <span className='text-[#6ee7ff]'>$</span>
            {' cd my-app && bun install'}
          </p>
          <p>
            <span className='text-[#6ee7ff]'>$</span> bun dev
            <span aria-hidden='true' className='terminal-cursor' />
          </p>
        </TerminalWindow>

        <div className='mt-6 flex flex-wrap gap-2.5 text-sm'>
          <a
            href='#start'
            className='rounded-md bg-white px-4 py-2.5 font-medium text-[#0a0a0a] transition-colors hover:bg-white/90'
          >
            Get started
          </a>
          <a
            href='https://github.com/levix0501/next-agent-rails'
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-md border border-white/15 px-4 py-2.5 text-white transition-colors hover:bg-white/[0.04]'
          >
            ⭐ View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
