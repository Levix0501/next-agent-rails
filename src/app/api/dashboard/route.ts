import { auth } from '@/auth';
import { dashboardMock } from '@/features/dashboard/lib/mock-data';

export const GET = auth(async (req) => {
  if (!req.auth?.user) {
    return Response.json({ error: 'unauthorized' }, { status: 401 });
  }
  // Simulated backend latency so the client-query loading state is observable.
  await new Promise((resolve) => setTimeout(resolve, 600));
  return Response.json(dashboardMock);
});
