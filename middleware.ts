import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("token")?.value || ""
  const { pathname } = request.nextUrl

  if (!cookie) return NextResponse.redirect(new URL("/signin", request.url))

  if (cookie && pathname === "/signin") return NextResponse.redirect(new URL("/dashboard/my", request.url))

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*"],
}
