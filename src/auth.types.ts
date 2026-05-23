import type { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id?: string;
      backendAccessToken?: string;
    } & DefaultSession['user'];
  }

  interface User {
    backendAccessToken?: string;
  }
}

declare module '@auth/core/jwt' {
  interface JWT {
    id?: string;
    backendAccessToken?: string;
  }
}
