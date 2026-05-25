'use client';

import { RefreshCw } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { useDashboardQuery } from '../api/queries';
import { CategoryBarChart } from './category-bar-chart';
import { DashboardSkeleton } from './dashboard-skeleton';
import { StatCards } from './stat-cards';
import { TrendAreaChart } from './trend-area-chart';

export function DashboardView() {
  const { data, isError, error, refetch, isFetching } = useDashboardQuery();

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold'>Overview</h1>
        <Button variant='outline' size='sm' onClick={() => refetch()} disabled={isFetching}>
          <RefreshCw className={cn('size-4', isFetching && 'animate-spin')} />
          Refresh
        </Button>
      </div>

      {isError && !data ? (
        <Alert variant='destructive'>
          <AlertTitle>Failed to load dashboard</AlertTitle>
          <AlertDescription className='flex flex-col items-start gap-2'>
            <span>{error instanceof Error ? error.message : 'Unknown error'}</span>
            <Button variant='outline' size='sm' onClick={() => refetch()}>
              Retry
            </Button>
          </AlertDescription>
        </Alert>
      ) : data ? (
        <>
          <StatCards stats={data.stats} />
          <div className='grid gap-4 lg:grid-cols-2'>
            <TrendAreaChart data={data.monthlyRevenue} />
            <CategoryBarChart data={data.categorySales} />
          </div>
        </>
      ) : (
        <DashboardSkeleton />
      )}
    </div>
  );
}
