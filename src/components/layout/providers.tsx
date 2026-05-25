import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { ReactNode } from 'react';

import { TooltipProvider } from '@/components/ui/tooltip';

import { QueryProvider } from './query-provider';
import { ThemeProvider } from './theme-provider';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <NuqsAdapter>
        <ThemeProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </NuqsAdapter>
    </QueryProvider>
  );
}
