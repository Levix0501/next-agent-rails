import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { verifyDemoUser } from '@/features/auth/lib/demo-users';
import '@/auth.types';

export const {
  handlers: { GET, POST },
  handlers,
  signIn,
  signOut,
  auth
} = NextAuth({
  session: { strategy: 'jwt' },
  pages: { signIn: '/login' },
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials) => {
        // Future external backend:
        //   const res = await fetch(`${process.env.BACKEND_URL}/login`, {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        //   });
        //   if (!res.ok) return null;
        //   const { user, token } = await res.json();
        //   return { id: user.id, name: user.name, email: user.email, backendAccessToken: token };
        const user = await verifyDemoUser(credentials);
        return user;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = (user as { id?: string }).id;
        token.backendAccessToken = (user as { backendAccessToken?: string }).backendAccessToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.id) session.user.id = token.id;
      if (session.user) session.user.backendAccessToken = token.backendAccessToken;
      return session;
    },
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const path = request.nextUrl.pathname;
      if (path.startsWith('/dashboard') && !isLoggedIn) {
        const url = new URL('/login', request.nextUrl.origin);
        url.searchParams.set('from', path);
        return Response.redirect(url);
      }
      if (path === '/login' && isLoggedIn) {
        return Response.redirect(new URL('/dashboard', request.nextUrl.origin));
      }
      return true;
    }
  }
});
