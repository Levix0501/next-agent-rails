import { redirect } from 'next/navigation';
import { Suspense, type ReactNode } from 'react';

import { auth } from '@/auth';

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<div className='min-h-svh' />}>
      <Guard>{children}</Guard>
    </Suspense>
  );
}

async function Guard({ children }: { children: ReactNode }) {
  const session = await auth();
  if (!session?.user) redirect('/login');
  return <>{children}</>;
}
