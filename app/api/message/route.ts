import { NextResponse } from 'next/server';
import { getMotivationalMessage } from '@/utils/gpt';

export async function POST(req: Request) {
  const { habit } = await req.json();
  const message = await getMotivationalMessage(habit);
  return NextResponse.json({ message });
}