import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
    try {
        // ✅ FIX: cookies() await කරන්න
        const cookieStore = await cookies();

        // ✅ Method 1: Set empty value with immediate expiry (හොඳම ක්‍රමය)
        cookieStore.set({
            name: 'token',
            value: '',
            expires: new Date(0),  // 1970-01-01 => immediate expiry
            path: '/',
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax'
        });

        console.log('✅ Logout successful - cookie deleted');

        return NextResponse.json(
            { message: 'Logged out successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Logout error:', error);
        return NextResponse.json(
            { message: 'Logout failed' },
            { status: 500 }
        );
    }
}