import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { findUserByEmail, verifyPassword, generateToken } from '@/lib/auth';

export async function POST(request: Request) {
    console.log('=== Login API Called ===');

    try {
        const body = await request.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json(
                { message: 'Email and password are required' },
                { status: 400 }
            );
        }

        const user = await findUserByEmail(email);

        if (!user) {
            return NextResponse.json(
                { message: 'Invalid credentials' },
                { status: 401 }
            );
        }

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) {
            return NextResponse.json(
                { message: 'Invalid credentials' },
                { status: 401 }
            );
        }

        const token = generateToken(user);

        // ✅ FIX: cookies() await කරන්න
        const cookieStore = await cookies();

        cookieStore.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 7,
            path: '/'
        });

        return NextResponse.json(
            {
                message: 'Login successful',
                user: { email: user.email }
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { message: 'Login failed. Please try again.' },
            { status: 500 }
        );
    }
}