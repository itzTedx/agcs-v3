import { cookies } from "next/headers";

const RATE_LIMIT_DURATION = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // Maximum 3 requests per minute

export async function rateLimit() {
  const cookieStore = await cookies();
  const rateLimitCookie = cookieStore.get("contact_ratelimit");
  const now = Date.now();

  if (rateLimitCookie) {
    const data = JSON.parse(rateLimitCookie.value);
    if (data.count >= MAX_REQUESTS) {
      if (now - data.timestamp < RATE_LIMIT_DURATION) {
        return { success: false };
      }
    }
  }

  // Set or update rate limit cookie
  cookieStore.set(
    "contact_ratelimit",
    JSON.stringify({
      count: rateLimitCookie ? JSON.parse(rateLimitCookie.value).count + 1 : 1,
      timestamp: now,
    }),
    {
      secure: true,
      httpOnly: true,
      sameSite: "strict",
    }
  );

  return { success: true };
}
