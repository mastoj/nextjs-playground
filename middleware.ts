import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('==> Request: ', request.nextUrl.pathname);
  const newPath = request.nextUrl.pathname.replace('/mw', '');
  const q = request.nextUrl.searchParams;
  console.log('==> Query: ', q.toString());
  const newUrl = new URL(newPath, request.nextUrl);
  return NextResponse.rewrite(newUrl);
}

export const config = {
  matcher: '/mw/:path*',
};
