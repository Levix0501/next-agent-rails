import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

import type { StatCard } from '../lib/types';

export function StatCards({ stats }: { stats: StatCard[] }) {
  return (
    <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
      {stats.map((stat) => {
        const positive = stat.deltaPct >= 0;
        const Icon = positive ? ArrowUpRight : ArrowDownRight;
        return (
          <Card key={stat.label}>
            <CardHeader className='pb-2'>
              <CardTitle className='text-muted-foreground text-sm font-medium'>
                {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>{stat.value}</div>
              <p
                className={cn(
                  'mt-1 flex items-center gap-1 text-xs',
                  positive ? 'text-muted-foreground' : 'text-destructive'
                )}
              >
                <Icon className='size-3' />
                {positive ? '+' : ''}
                {stat.deltaPct}% vs last month
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
