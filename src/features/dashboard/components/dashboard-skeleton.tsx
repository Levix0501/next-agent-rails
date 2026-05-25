import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function DashboardSkeleton() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {[0, 1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader className='pb-2'>
              <Skeleton className='h-4 w-24' />
            </CardHeader>
            <CardContent>
              <Skeleton className='h-8 w-32' />
              <Skeleton className='mt-2 h-3 w-28' />
            </CardContent>
          </Card>
        ))}
      </div>
      <div className='grid gap-4 lg:grid-cols-2'>
        {[0, 1].map((i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className='h-5 w-40' />
            </CardHeader>
            <CardContent>
              <Skeleton className='h-[280px] w-full' />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
