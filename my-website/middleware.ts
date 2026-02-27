import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/token';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;
    const { pathname } = request.nextUrl;

    // If token exists but is empty string, treat as not logged in
    if (token === '') {
        const response = NextResponse.next();
        response.cookies.delete('token'); // Clean up empty cookie
        return response;
    }

    // Protect dashboard routes
    if (pathname.startsWith('/dashboard')) {
        if (!token) {
            return NextResponse.redirect(new URL('/login', request.url));
        }

        const user = verifyToken(token);
        if (!user) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    // Redirect to dashboard if already logged in
    if (pathname === '/login' && token) {
        const user = verifyToken(token);
        if (user) {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/login']
};