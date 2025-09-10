import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const user = request.cookies.get('user')?.value;
  const pathname = request.nextUrl.pathname;

  if (user) {
    const userData = JSON.parse(user);
    const role = userData.role;

    // Redirect logged-in users away from login page
    if (pathname === '/login') {
      if (role === 'DAEMON') return NextResponse.redirect(new URL('/daemons', request.url));
      if (role === 'NETWORK_ADMIN') return NextResponse.redirect(new URL('/resistance', request.url));
      if (role === 'ANDREI') return NextResponse.redirect(new URL('/maestro_supremo', request.url));
    }

    // Role-based access control
    if (role === 'DAEMON' && pathname !== '/daemons') {
      return NextResponse.redirect(new URL('/daemons', request.url));
    }
    
    if (role === 'NETWORK_ADMIN' && pathname !== '/resistance') {
      return NextResponse.redirect(new URL('/resistance', request.url));
    }
    
    // ANDREI can access all pages except login (already handled above)
  } else {
    // Redirect unauthenticated users to login
    if (pathname !== '/login') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};