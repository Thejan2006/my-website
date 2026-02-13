import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyToken, saveContactMessage, getContactMessages } from '@/lib/auth';

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

// POST - Public (no auth required)
export async function POST(request: Request) {
    try {
        const data: ContactFormData = await request.json();

        if (!data.name || !data.email || !data.message) {
            return NextResponse.json(
                { message: 'All fields are required' },
                { status: 400 }
            );
        }

        const message = saveContactMessage(data);

        return NextResponse.json(
            { message: 'Message sent successfully', data: message },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { message: 'Failed to send message' },
            { status: 500 }
        );
    }
}

// GET - Protected (admin only)
export async function GET(request: Request) {
    try {
        // ✅ FIX: cookies() await කරන්න!
        const cookieStore = await cookies();

        // ✅ දැන් get() use කරන්න පුලුවන්
        const token = cookieStore.get('token')?.value;

        if (!token) {
            return NextResponse.json(
                { message: 'Unauthorized' },
                { status: 401 }
            );
        }

        const user = verifyToken(token);

        if (!user) {
            return NextResponse.json(
                { message: 'Unauthorized' },
                { status: 401 }
            );
        }

        const messages = getContactMessages();
        return NextResponse.json({ messages });

    } catch (error) {
        console.error('Get messages error:', error);
        return NextResponse.json(
            { message: 'Failed to fetch messages' },
            { status: 500 }
        );
    }
}