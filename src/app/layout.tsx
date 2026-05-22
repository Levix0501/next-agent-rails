import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';

import { Providers } from '@/components/layout/providers';

import './globals.css';
import { Toaster } from '@/components/ui/sonner';

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'next-agent-rails — Rails for AI agents building with Next.js',
  description:
    'A Next.js 16 starter that keeps AI agents on a controlled, conventional track. Native toolchain, server-first, preinstalled skills.',
  openGraph: {
    title: 'next-agent-rails',
    description: 'Rails for AI agents building with Next.js.',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className='flex min-h-full flex-col'>
        <NextTopLoader color='var(--primary)' height={2} showSpinner={false} />
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
