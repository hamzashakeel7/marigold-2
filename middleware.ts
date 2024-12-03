import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default clerkMiddleware({
  publicRoutes: ["/", "/rooms(.*)"],
  afterAuth(auth: clerkMiddleware, req: NextRequest) {
    // Handle the redirection after sign-in
    if (!auth.userId && !auth.isPublicRoute) {
      const signInUrl = new URL("/sign-in", req.url);
      signInUrl.searchParams.set("redirect_url", req.url);
      return NextResponse.redirect(signInUrl);
    }

    // If the user is signed in and trying to access the sign-in page,
    // redirect them to the home page or dashboard
    if (auth.userId && req.nextUrl.pathname === "/sign-in") {
      const homeUrl = new URL("/", req.url);
      return NextResponse.redirect(homeUrl);
    }

    // Allow the request to proceed
    return NextResponse.next();
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
