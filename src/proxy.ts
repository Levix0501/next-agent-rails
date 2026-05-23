export { auth as proxy } from '@/auth';

export const config = {
  // Run on all paths except Next internals and Auth.js's own callback endpoints
  matcher: ['/((?!api/auth|_next/static|_next/image|favicon.ico).*)']
};
