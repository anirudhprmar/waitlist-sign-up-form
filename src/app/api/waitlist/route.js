import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Email from '@/models/Email';

export async function POST(request) {
    try {
        await connectDB();
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        const newEmail = await Email.create({ email });
        return NextResponse.json(
            { message: 'Email stored successfully' },
            { status: 201 }
        );

    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to store email' },
            { status: 500 }
        );
    }
}