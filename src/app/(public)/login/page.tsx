import { Suspense } from 'react';

import { LoginForm } from '@/features/auth/components/login-form';

export default function LoginPage() {
  return (
    <main className='bg-background text-foreground flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
      <div className='w-full max-w-sm'>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
