const LINKS = [
  { href: '#fast', label: 'Why fast' },
  { href: '#rails', label: 'Rails' },
  { href: '#skills', label: 'Skills' },
  { href: '#start', label: 'Start' }
] as const;

export function SiteNav() {
  return (
    <nav className='sticky top-0 z-40 flex items-center justify-between border-b border-white/[0.06] bg-[#0a0a0a]/70 px-7 py-3.5 text-sm backdrop-blur'>
      <a href='#main' className='flex items-center gap-2 font-medium text-white'>
        <span aria-hidden='true' className='h-1.5 w-1.5 rounded-full bg-[#98f590]' />
        next-agent-rails
      </a>
      <div className='flex items-center gap-4 text-white/65'>
        <div className='hidden items-center gap-4 md:flex'>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className='transition-colors hover:text-white'>
              {link.label}
            </a>
          ))}
        </div>
        <a
          href='https://github.com/levix0501/next-agent-rails'
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-md border border-white/15 px-3 py-1.5 text-xs text-white transition-colors hover:bg-white/[0.04]'
        >
          GitHub ↗
        </a>
      </div>
    </nav>
  );
}
