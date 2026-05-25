type DemoUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
};

const USERS: DemoUser[] = [
  {
    id: '1',
    name: 'Demo User',
    username: 'demo',
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
  username?: unknown;
  password?: unknown;
}): Promise<AuthorizedUser | null> {
  const username = String(credentials.username ?? '');
  const password = String(credentials.password ?? '');
  const user = USERS.find((u) => u.username === username && u.password === password);
  if (!user) return null;
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    backendAccessToken: `demo-token-${user.id}-${crypto.randomUUID()}`
  };
}
