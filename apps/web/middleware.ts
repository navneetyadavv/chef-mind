import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isUnderConstruction = process.env.NEXT_PUBLIC_SITE_UNDER_CONSTRUCTION === 'true';
  const { pathname } = request.nextUrl;

  // 1. If SITE IS UNDER CONSTRUCTION
  if (isUnderConstruction) {
    const allowedPaths = ['/api', '/_next', '/favicon.ico', '/construction'];
    const isAllowedPath = allowedPaths.some(path => pathname.startsWith(path));

    if (!isAllowedPath) {
      return NextResponse.redirect(new URL('/construction', request.url));
    }
  } 

  // 2. If SITE IS LIVE (Not under construction)
  // Prevent users from accessing the /construction page manually
  else if (pathname === '/construction') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};