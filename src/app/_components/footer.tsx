export function Footer() {
  return (
    <footer className='flex flex-wrap items-center justify-between gap-2 bg-[#0a0a0a] px-7 py-8 font-mono text-xs text-white/45'>
      <span>$ next-agent-rails — MIT</span>
      <span>
        built by{' '}
        <a
          href='https://github.com/levix0501'
          target='_blank'
          rel='noopener noreferrer'
          className='underline-offset-4 hover:text-white hover:underline'
        >
          levix0501
        </a>
      </span>
    </footer>
  );
}
