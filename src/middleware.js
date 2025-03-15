import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const protectedRoutes = [ "/home" ];
const publicRoutes = [ "/" ];

export default async function middleware(req) {
    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);
    const session = (await cookies()).get("session")?.value;

    if (isProtectedRoute && !session) {
        return NextResponse.redirect(new URL("/", req.nextUrl));
    }
    
    if (isPublicRoute && session) {
        return NextResponse.redirect(new URL("/home", req.nextUrl));
    }
}