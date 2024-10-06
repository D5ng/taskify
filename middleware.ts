import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export const RESTRICT_AUTH_PAGE = ["/auth/signin", "/auth/signup"]

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("token")?.value || ""
  const pathname = request.nextUrl.pathname
  const isRestrictAuthPage = RESTRICT_AUTH_PAGE.some((page) => pathname.includes(page))

  if (!cookie) return NextResponse.redirect(new URL("/auth/signin", request.url))
  if (cookie && (isRestrictAuthPage || pathname === "/"))
    return NextResponse.redirect(new URL("/dashboard/my", request.url))

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*", "/"],
}
