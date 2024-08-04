import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

const MAX_REQUESTS = 2;
const TIME_WINDOW = 60 * 60 * 1000; // 1 hour

export async function GET() {
  const count = await kv.get("counter");
  return NextResponse.json({ count: count ?? 0 });
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || req.ip || "unknown";

  // Get request count for the IP
  const requestCount =
    ((await kv.get(`request_count_${ip}`)) as number | null) ?? 0;

  if (requestCount >= MAX_REQUESTS) {
    const count = await kv.get("counter");
    return NextResponse.json({ count });
  }

  // Increment request count for the IP
  await kv.incr(`request_count_${ip}`);
  await kv.expire(`request_count_${ip}`, TIME_WINDOW / 1000); // Set expiry for the key

  // Increment the counter
  const count = await kv.incr("counter");
  return NextResponse.json({ count });
}
