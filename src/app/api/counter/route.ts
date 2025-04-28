import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

// Initialize Redis
const redis = Redis.fromEnv();

const MAX_REQUESTS = 2;
const TIME_WINDOW = 60 * 60; // 1 hour (in seconds) - no need to multiply by 1000 because expire uses seconds

export async function GET() {
  const count = await redis.get<number>("counter");
  return NextResponse.json({ count: count ?? 0 });
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || req.ip || "unknown";

  const requestKey = `request_count_${ip}`;

  // Get request count for the IP
  const requestCount = (await redis.get<number>(requestKey)) ?? 0;

  if (requestCount >= MAX_REQUESTS) {
    const count = await redis.get<number>("counter");
    return NextResponse.json({ count });
  }

  // Increment request count for the IP
  const newRequestCount = await redis.incr(requestKey);

  // Set expiry only if it's a new key (if first time seeing this IP)
  if (newRequestCount === 1) {
    await redis.expire(requestKey, TIME_WINDOW);
  }

  // Increment the counter
  const count = await redis.incr("counter");

  return NextResponse.json({ count });
}
