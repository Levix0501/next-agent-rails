import { auth } from '@/auth';
import { dashboardMock } from '@/features/dashboard/lib/mock-data';

export const GET = auth(async (req) => {
  if (!req.auth?.user) {
    return Response.json({ error: 'unauthorized' }, { status: 401 });
  }
  // 模拟真实后端延迟,便于观察 client query 的 loading 态
  await new Promise((resolve) => setTimeout(resolve, 600));
  return Response.json(dashboardMock);
});
