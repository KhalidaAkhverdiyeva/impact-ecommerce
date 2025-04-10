import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Create intl middleware using full routing config
const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Skip locale middleware for /admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const token = request.cookies.get('token');
    const role = request.cookies.get('role');

    if (!token || role?.value !== 'admin') {
      const loginUrl = new URL('/login', request.url);
      return NextResponse.redirect(loginUrl);
    }

    // ✅ Return nothing, skip intlMiddleware entirely for /admin
    return NextResponse.next();
  }

  // ✅ Apply intlMiddleware only for non-admin routes
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(fr|en)/:path*', '/admin/:path*'],
};
