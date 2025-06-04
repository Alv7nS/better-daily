import { NextResponse } from 'next/server';
import { getWeeklyReview } from '@/utils/gpt';

export async function POST(req: Request) {
  const { habit } = await req.json();
  const review = await getWeeklyReview(habit);
  return NextResponse.json({ review });
}