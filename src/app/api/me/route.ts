import { auth } from '@/auth';

export const GET = auth(async (req) => {
  if (!req.auth?.user) {
    return Response.json({ error: 'unauthorized' }, { status: 401 });
  }
  // Future real backend:
  //   const res = await fetch(`${process.env.BACKEND_URL}/me`, {
  //     headers: { Authorization: `Bearer ${req.auth.user.backendAccessToken}` },
  //   });
  //   return Response.json(await res.json());
  return Response.json({
    user: {
      id: req.auth.user.id,
      name: req.auth.user.name,
      email: req.auth.user.email,
      backendAccessTokenPresent: !!req.auth.user.backendAccessToken
    }
  });
});
