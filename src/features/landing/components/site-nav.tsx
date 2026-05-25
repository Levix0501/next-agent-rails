import Link from 'next/link';

import { auth } from '@/auth';
import { ThemeToggle } from '@/components/layout/theme-toggle';

const LINKS = [
  { href: '#rails', label: 'Rails' },
  { href: '#stack', label: 'Stack' },
  { href: '#skills', label: 'Skills' },
  { href: '#fast', label: 'Fast' }
] as const;

export async function SiteNav() {
  const session = await auth();
  return (
    <nav className='border-border bg-background/70 sticky top-0 z-40 flex items-center justify-between border-b px-7 py-3.5 text-sm backdrop-blur'>
      <a href='#main' className='text-foreground flex items-center gap-2 font-medium'>
        <span
          aria-hidden='true'
          className='h-1.5 w-1.5 rounded-full bg-[#15803d] dark:bg-[#98f590]'
        />
        next-agent-rails
      </a>
      <div className='text-muted-foreground flex items-center gap-3'>
        <div className='hidden items-center gap-4 md:flex'>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className='hover:text-foreground transition-colors'>
              {link.label}
            </a>
          ))}
        </div>
        {session?.user ? (
          <Link href='/dashboard' className='hover:text-foreground transition-colors'>
            Dashboard
          </Link>
        ) : (
          <Link href='/login' className='hover:text-foreground transition-colors'>
            Sign in
          </Link>
        )}
        <a
          href='https://github.com/levix0501/next-agent-rails'
          target='_blank'
          rel='noopener noreferrer'
          className='border-border text-foreground hover:bg-accent hover:text-accent-foreground rounded-md border px-3 py-1.5 text-xs transition-colors'
        >
          GitHub ↗
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
