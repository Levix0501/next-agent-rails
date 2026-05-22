import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type TerminalWindowProps = {
  title: string;
  className?: string;
  children: ReactNode;
};

export function TerminalWindow({ title, className, children }: TerminalWindowProps) {
  return (
    <div
      className={cn('overflow-hidden rounded-lg border border-[#1a2a18] bg-[#0b0f0a]', className)}
    >
      <div className='flex items-center gap-1.5 border-b border-[#1a2a18] bg-[#08110a] px-3 py-2'>
        <span aria-hidden='true' className='h-2.5 w-2.5 rounded-full bg-[#ff5f56]' />
        <span aria-hidden='true' className='h-2.5 w-2.5 rounded-full bg-[#ffbd2e]' />
        <span aria-hidden='true' className='h-2.5 w-2.5 rounded-full bg-[#27c93f]' />
        <span className='ml-3 font-mono text-[11px] text-white/50'>{title}</span>
      </div>
      <div className='px-5 py-4 font-mono text-[13px] leading-relaxed text-[#c0f5b0]'>
        {children}
      </div>
    </div>
  );
}
