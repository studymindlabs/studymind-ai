import { NextRequest, NextResponse } from "next/server";

import { getSession } from "@/lib/auth";

const protectedRoutes = ["/dashboard"];

const authRoutes = [
  "/login",
  "/register",
];

export async function middleware(
  request: NextRequest
) {
  const session = await getSession();

  const { pathname } = request.nextUrl;

  const isProtected =
    protectedRoutes.some((route) =>
      pathname.startsWith(route)
    );

  const isAuthRoute =
    authRoutes.some((route) =>
      pathname.startsWith(route)
    );

  if (isProtected && !session) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  if (isAuthRoute && session) {
    return NextResponse.redirect(
      new URL("/dashboard", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/login",
    "/register",
  ],
};