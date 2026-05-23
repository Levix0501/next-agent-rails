'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';

export function LoginForm() {
  const searchParams = useSearchParams();
  const [pending, setPending] = useState(false);

  async function action(formData: FormData) {
    setPending(true);
    try {
      const res = await signIn('credentials', {
        email: formData.get('email'),
        password: formData.get('password'),
        redirect: false
      });
      if (!res || res.error) {
        toast.error('Email or password is incorrect');
        return;
      }
      const from = searchParams.get('from');
      const destination =
        from && from.startsWith('/') && !from.startsWith('//') ? from : '/dashboard';
      window.location.href = destination;
    } finally {
      setPending(false);
    }
  }

  return (
    <form action={action} className='flex w-full max-w-sm flex-col gap-3'>
      <label className='flex flex-col gap-1 text-sm'>
        <span>Email</span>
        <input
          name='email'
          type='email'
          required
          autoComplete='email'
          aria-label='Email'
          className='border-input bg-background focus-visible:ring-ring rounded-md border px-3 py-2 text-sm outline-none focus-visible:ring-2'
        />
      </label>
      <label className='flex flex-col gap-1 text-sm'>
        <span>Password</span>
        <input
          name='password'
          type='password'
          required
          autoComplete='current-password'
          aria-label='Password'
          className='border-input bg-background focus-visible:ring-ring rounded-md border px-3 py-2 text-sm outline-none focus-visible:ring-2'
        />
      </label>
      <Button type='submit' disabled={pending}>
        {pending ? 'Signing in…' : 'Sign in'}
      </Button>
      <p className='text-muted-foreground text-xs'>
        Demo credentials: <code>demo@example.com</code> / <code>demo123</code>
      </p>
    </form>
  );
}
