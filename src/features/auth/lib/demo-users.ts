type DemoUser = {
  id: string;
  name: string;
  email: string;
  password: string;
};

const USERS: DemoUser[] = [
  {
    id: '1',
    name: 'Demo User',
    email: 'demo@example.com',
    password: 'demo123'
  }
];

export type AuthorizedUser = {
  id: string;
  name: string;
  email: string;
  backendAccessToken: string;
};

export async function verifyDemoUser(credentials: {
  email?: unknown;
  password?: unknown;
}): Promise<AuthorizedUser | null> {
  const email = String(credentials.email ?? '');
  const password = String(credentials.password ?? '');
  const user = USERS.find((u) => u.email === email && u.password === password);
  if (!user) return null;
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    backendAccessToken: `demo-token-${user.id}-${crypto.randomUUID()}`
  };
}
