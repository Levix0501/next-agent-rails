import { Suspense } from 'react';

import { LoginForm } from '@/features/auth/components/login-form';

export default function LoginPage() {
  return (
    <main className='bg-background text-foreground flex min-h-svh flex-1 items-center justify-center p-8'>
      <div className='flex w-full max-w-sm flex-col gap-6'>
        <h1 className='text-2xl font-semibold'>Sign in</h1>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
