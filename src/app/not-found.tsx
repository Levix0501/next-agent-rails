import { Compass } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle
} from '@/components/ui/empty';

export default function NotFound() {
  return (
    <main className='flex flex-1 flex-col px-7 py-12'>
      <Empty className='justify-center gap-6'>
        <EmptyHeader className='max-w-md gap-4'>
          <EmptyMedia variant='icon' className='size-16 rounded-2xl'>
            <Compass className='size-7' />
          </EmptyMedia>
          <p className='text-muted-foreground font-mono text-[11px] tracking-wider'>
            {'// 404 — TRAIL ENDS HERE'}
          </p>
          <EmptyTitle className='text-3xl font-semibold tracking-tight md:text-4xl'>
            Page not found
          </EmptyTitle>
          <EmptyDescription className='text-base md:text-lg'>
            The route you followed does not exist, or has been moved.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button asChild>
            <Link href='/'>← Back to start</Link>
          </Button>
        </EmptyContent>
      </Empty>
    </main>
  );
}
