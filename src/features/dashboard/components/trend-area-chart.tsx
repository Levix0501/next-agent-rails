'use client';

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig
} from '@/components/ui/chart';

import type { MonthlyRevenuePoint } from '../lib/types';

const chartConfig = {
  revenue: { label: 'Revenue', color: 'var(--chart-1)' },
  profit: { label: 'Profit', color: 'var(--chart-2)' }
} satisfies ChartConfig;

export function TrendAreaChart({ data }: { data: MonthlyRevenuePoint[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue & Profit</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className='h-[280px] w-full'>
          <AreaChart data={data} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey='month' tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip content={<ChartTooltipContent indicator='dot' />} />
            <defs>
              <linearGradient id='fillRevenue' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='var(--color-revenue)' stopOpacity={0.8} />
                <stop offset='95%' stopColor='var(--color-revenue)' stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id='fillProfit' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='var(--color-profit)' stopOpacity={0.8} />
                <stop offset='95%' stopColor='var(--color-profit)' stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              dataKey='revenue'
              type='natural'
              fill='url(#fillRevenue)'
              stroke='var(--color-revenue)'
            />
            <Area
              dataKey='profit'
              type='natural'
              fill='url(#fillProfit)'
              stroke='var(--color-profit)'
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
