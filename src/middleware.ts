import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

  console.log('url', request.url)
  const url = request.nextUrl.pathname;
  if(url === '/profile')
  {
    console.log('token', request.cookies.get('token'));
    const token  = request.cookies.get('token');
    if(!token)
    return NextResponse.redirect(new URL('/login', request.url))
  }
  //return NextResponse.redirect(new URL('/', request.url))
  //return NextResponse.redirect(new URL('/', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/profile',
}