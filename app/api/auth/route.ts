import { NextRequest, NextResponse } from 'next/server';

const PASSWORD = process.env.AUTH_PASSWORD || '';

export async function POST(req: NextRequest) {
    try {
        const { password } = await req.json();

        if (!password) {
            return NextResponse.json({ success: false, message: 'Password is required' }, { status: 400 });
        }

        if (password !== PASSWORD) {
            return NextResponse.json({ success: false, message: 'Invalid password' }, { status: 401 });
        }

        const response = NextResponse.json({ success: true, message: 'Login successful' });
        response.cookies.set('auth_token', 'secure-auth-token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/'
        });

        return response;
    } catch {
        return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
    }
}
