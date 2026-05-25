import { useQuery } from '@tanstack/react-query';

type MeResponse = {
  user: {
    id?: string;
    name?: string | null;
    email?: string | null;
    backendAccessTokenPresent: boolean;
  };
};

async function fetchMe(): Promise<MeResponse> {
  const res = await fetch('/api/me', {
    headers: { Accept: 'application/json' }
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch /api/me (${res.status})`);
  }
  return res.json() as Promise<MeResponse>;
}

export function useMeQuery() {
  return useQuery({
    queryKey: ['auth', 'me'] as const,
    queryFn: fetchMe
  });
}
