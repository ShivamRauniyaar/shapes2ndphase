import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { TOKEN } from './Functions/Auth'; // Assuming cookie is named like 'shapesAccessToken'

const protectedRoutes = ['/my-account', '/checkout'];
// Middleware function
export function middleware(request: NextRequest) {
  const token = request.cookies.get(TOKEN)?.value;
  const isAuthenticated = !!token;

  const { pathname } = request.nextUrl;

  // If authenticated and trying to access /login, redirect to home or dashboard
  if (isAuthenticated && pathname === '/login') {
    return NextResponse.redirect(new URL('/my-account', request.url));
  }

  // If not authenticated and trying to access protected routes
  if (!isAuthenticated && protectedRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  // Allow access
  return NextResponse.next();
}
export const config = {
  matcher: ['/login', '/my-account/:path*' ,'/checkout'],
};
