import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const token = req.cookies.get("token");

  if (
    (pathname.startsWith("/login") ||
      pathname.startsWith("/favicon.ico") ||
      pathname.startsWith("/_next") ||
      pathname.startsWith("/api/auth") ||
      pathname.startsWith("/Assets")) &&
    !token
  ) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/login") && token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!token) {
    console.log(pathname);
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
