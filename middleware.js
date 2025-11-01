import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/jobposter") || pathname.startsWith("/jobfinder")) {
    if (!token) {
      console.log("🚫 No token found — redirecting to /login");
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      jwt.verify(token, process.env.JWT_SECRET);
      console.log("✅ Token verified — access granted to", pathname);
    } catch (err) {
      console.log("❌ Invalid token:", err.message);
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/jobposter/:path*", "/jobfinder/:path*"],
};
