import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    to: process.env.MAILGUN_DEFAULT_TO || '',
    subject: process.env.MAILGUN_DEFAULT_SUBJECT || '',
    text: process.env.MAILGUN_DEFAULT_TEXT || '',
  });
} 