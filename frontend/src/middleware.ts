import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('connect.sid')

  // 로그인 페이지 내부일경우
  if (request.nextUrl.pathname.startsWith('/admin/')) {
    if (!accessToken) return NextResponse.redirect(new URL('/admin', request.url))
    const res = await fetch('http://localhost:8080/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Cookie: `${accessToken.name}=${accessToken.value}; ` }
    })
    const data = await res.json()
    if (data.role === 'admin' || data.role === 'master') {
      return NextResponse.next()
    }

    return NextResponse.redirect(new URL('/admin', request.url))
  } else {
    // 로그인페이지일경우
    if (accessToken) {
      const res = await fetch('http://localhost:8080/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Cookie: `${accessToken.name}=${accessToken.value}; ` }
      })
      const data = await res.json()

      if (data.role === 'admin' || data.role === 'master') {
        return NextResponse.redirect(new URL('/admin/dashboard', request.url))
      }
    }

    return NextResponse.next()
  }
}

export const config = {
  matcher: ['/admin/:path*']
}
