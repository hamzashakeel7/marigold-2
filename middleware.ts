import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

// Matcher configuration
export const config = {
  matcher: ["/((?!.*\\.).*)"], // Match all routes except static files
};
