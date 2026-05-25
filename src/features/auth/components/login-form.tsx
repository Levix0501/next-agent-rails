'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required')
});

type LoginValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const searchParams = useSearchParams();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: '', password: '' }
  });

  async function onSubmit(values: LoginValues) {
    try {
      const res = await signIn('credentials', {
        username: values.username,
        password: values.password,
        redirect: false
      });
      if (!res || res.error) {
        toast.error('Username or password is incorrect');
        return;
      }
      const callbackUrl = searchParams.get('callbackUrl');
      const destination =
        callbackUrl && callbackUrl.startsWith('/') && !callbackUrl.startsWith('//')
          ? callbackUrl
          : '/dashboard';
      window.location.href = destination;
    } catch {
      toast.error('Something went wrong. Please try again.');
    }
  }

  return (
    <div className='flex flex-col gap-6'>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>Enter your username below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field data-invalid={!!errors.username}>
                <FieldLabel htmlFor='username'>Username</FieldLabel>
                <Input
                  id='username'
                  type='text'
                  placeholder='demo'
                  autoComplete='username'
                  aria-invalid={!!errors.username}
                  {...register('username')}
                />
                <FieldError errors={[errors.username]} />
              </Field>
              <Field data-invalid={!!errors.password}>
                <div className='flex items-center'>
                  <FieldLabel htmlFor='password'>Password</FieldLabel>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid -- placeholder link, matches official login-01 */}
                  <a
                    href='#'
                    className='ml-auto inline-block text-sm underline-offset-4 hover:underline'
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id='password'
                  type='password'
                  placeholder='demo123'
                  autoComplete='current-password'
                  aria-invalid={!!errors.password}
                  {...register('password')}
                />
                <FieldError errors={[errors.password]} />
              </Field>
              <Field>
                <Button type='submit' disabled={isSubmitting}>
                  {isSubmitting ? 'Logging in…' : 'Login'}
                </Button>
                <Button variant='outline' type='button'>
                  Login with Google
                </Button>
                <FieldDescription className='text-center'>
                  Don&apos;t have an account?{' '}
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid -- placeholder link, matches official login-01 */}
                  <a href='#'>Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
