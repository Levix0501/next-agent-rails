export function Footer() {
  return (
    <footer className='bg-background text-muted-foreground flex flex-wrap items-center justify-between gap-2 px-7 py-8 font-mono text-xs'>
      <span>$ next-agent-rails — MIT</span>
      <span>
        built by{' '}
        <a
          href='https://github.com/levix0501'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-foreground underline-offset-4 hover:underline'
        >
          levix0501
        </a>
      </span>
    </footer>
  );
}
