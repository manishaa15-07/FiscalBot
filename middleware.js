// middleware.ts or middleware.js
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Match protected routes only
const isProtectedRoute = createRouteMatcher([
    "/dashboard(.*)",
    "/account(.*)",
    "/transactions(.*)",
]);

// Clerk middleware wrapper
const middleware = clerkMiddleware(async (auth, req) => {
    const { userId, redirectToSignIn } = await auth();

    if (!userId && isProtectedRoute(req)) {
        return redirectToSignIn();
    }

    // return NextResponse.next();
    return;
});

// ✅ Export the middleware
export default middleware;

// ✅ Required config to make middleware apply selectively
export const config = {
    matcher: [
        // Run on all routes except static files and Next.js internals
        '/((?!_next|.*\\..*).*)',
        '/(api|trpc)(.*)',
    ],
};
