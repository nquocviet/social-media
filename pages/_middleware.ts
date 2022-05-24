import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const PUBLIC_FILE = /\.([a-zA-Z]+$)/

export function middleware(request: NextRequest) {
  const { origin, pathname, search, locale } = request.nextUrl.clone()
  const shouldHandleLocale =
    !PUBLIC_FILE.test(pathname) &&
    !pathname.includes('/api/') &&
    locale === 'default'

  return (
    shouldHandleLocale &&
    NextResponse.redirect(new URL(`${origin}/en${pathname}${search}`))
  )
}
