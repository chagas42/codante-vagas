import { NextResponse, type NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const maintenanceMode = process.env.MAINTENANCE_MODE === 'true';

  if (maintenanceMode && !req.nextUrl.pathname.startsWith('/maintenance')) {
    return NextResponse.redirect(new URL('/maintenance', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher:
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
};
