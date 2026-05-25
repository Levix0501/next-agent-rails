import { useQuery } from '@tanstack/react-query';

import type { DashboardData } from '../lib/types';

async function fetchDashboard(): Promise<DashboardData> {
  const res = await fetch('/api/dashboard', {
    headers: { Accept: 'application/json' }
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch /api/dashboard (${res.status})`);
  }
  return res.json() as Promise<DashboardData>;
}

export function useDashboardQuery() {
  return useQuery({
    queryKey: ['dashboard', 'overview'] as const,
    queryFn: fetchDashboard
  });
}
