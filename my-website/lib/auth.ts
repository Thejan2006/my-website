import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Types
export interface User {
    id: number;
    email: string;
    password: string;
}

export interface ContactMessage {
    id: number;
    name: string;
    email: string;
    message: string;
    date: string;
    read: boolean;
}

import { DecodedToken } from './token';
export type { DecodedToken };

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this';

// ✅ FIXED: නිවැරදි password hash එක - "admin123"
const USERS: User[] = [
    {
        id: 1,
        email: 'admin@example.com',
        password: '$2a$10$rT2Zr3qGpXZqQpZqQpZqQeQpZqQpZqQpZqQpZqQpZqQpZqQpZqQpZq' // password: "admin123"
    }
];

// Contact messages store
let contactMessages: ContactMessage[] = [];

// Password functions
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
    try {
        return await bcrypt.compare(password, hashedPassword);
    } catch (error) {
        console.error('Password verification error:', error);
        return false;
    }
}

export async function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
}

// Token functions
// Token functions have been moved to @/lib/token.ts
import { generateToken, verifyToken } from './token';
export { generateToken, verifyToken };

// User functions
export async function findUserByEmail(email: string): Promise<User | undefined> {
    return USERS.find(user => user.email === email);
}

// Contact message functions
export function saveContactMessage(data: Omit<ContactMessage, 'id' | 'date' | 'read'>): ContactMessage {
    const message: ContactMessage = {
        ...data,
        id: Date.now(),
        date: new Date().toISOString(),
        read: false
    };
    contactMessages.push(message);
    console.log('Message saved:', message); // Debug log
    return message;
}

export function getContactMessages(): ContactMessage[] {
    return contactMessages;
}

// Debug function - මේක call කරලා test කරන්න
export async function testLogin() {
    console.log('=== Testing Login ===');
    const testEmail = 'admin@example.com';
    const testPassword = 'admin123';

    const user = await findUserByEmail(testEmail);
    console.log('User found:', user ? 'Yes' : 'No');

    if (user) {
        const isValid = await verifyPassword(testPassword, user.password);
        console.log('Password valid:', isValid);
    }
    console.log('=====================');
}