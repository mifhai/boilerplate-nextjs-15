import { authMiddleware, authPathnameMatcher, devMiddleware, devPathnameMatcher, publicMiddleware, publicPathnameMatcher } from "./middlewares";

import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (devPathnameMatcher(pathname)) {
    return devMiddleware(request);
  }

  if (publicPathnameMatcher(pathname)) {
    return publicMiddleware();
  }

  if (authPathnameMatcher(pathname)) {
    return authMiddleware(request);
  }
}

export const config = {
  matcher: [
    "/",
    {
      source: "/((?!api|_next/static|_next/image|images|favicon.ico|sitemap.xml|robots.txt).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
