import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';

export async function GET(request: Request) {
    console.log('=== Verify API Called ===');

    try {
        // ✅ FIX: cookies() await කරන්න!
        const cookieStore = await cookies();

        // ✅ දැන් get() use කරන්න පුලුවන්
        const token = cookieStore.get('token')?.value;

        console.log('Token exists:', token ? 'Yes' : 'No');

        if (!token) {
            console.log('No token found');
            return NextResponse.json(
                { message: 'Not authenticated' },
                { status: 401 }
            );
        }

        const user = verifyToken(token);

        if (!user) {
            console.log('Invalid token');
            return NextResponse.json(
                { message: 'Invalid token' },
                { status: 401 }
            );
        }

        console.log('User verified:', user.email);

        return NextResponse.json(
            { user: { email: user.email } },
            { status: 200 }
        );

    } catch (error) {
        console.error('Verify API error:', error);
        return NextResponse.json(
            { message: 'Verification failed' },
            { status: 500 }
        );
    }
}