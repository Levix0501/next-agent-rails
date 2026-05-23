import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';

export default async function DashboardPage() {
  const session = await auth();
  // proxy.ts has already redirected unauthenticated users, so session is non-null here
  return (
    <main className='bg-background text-foreground flex min-h-svh flex-1 flex-col items-center justify-center gap-6 p-8'>
      <h1 className='text-2xl font-semibold'>Welcome, {session?.user?.name ?? 'friend'}</h1>
      <p className='text-muted-foreground text-sm'>
        You are signed in as <code>{session?.user?.email}</code>.
      </p>
      <form
        action={async () => {
          'use server';
          await signOut({ redirectTo: '/' });
        }}
      >
        <Button type='submit' variant='outline'>
          Sign out
        </Button>
      </form>
    </main>
  );
}
