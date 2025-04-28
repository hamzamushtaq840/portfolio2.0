import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

// Initialize Redis
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const MAX_REQUESTS = 2;
const TIME_WINDOW = 60 * 60; // 1 hour (in seconds) - no need to multiply by 1000 because expire uses seconds

export async function GET() {
  const count = await redis.get<number>("counter");
  return NextResponse.json({ count: count ?? 0 });
}

export async function POST(req: NextRequest) {
  const count = await redis.incr("counter");
  return NextResponse.json({ count });
}
