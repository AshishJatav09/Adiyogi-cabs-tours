import { NextResponse } from "next/server";

import { localeCookieName, normalizeLocale } from "@/shared/i18n";

export async function POST(request: Request) {
  const payload = (await request.json()) as {
    locale?: string;
  };

  const response = NextResponse.json({ ok: true });

  response.cookies.set(localeCookieName, normalizeLocale(payload.locale), {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });

  return response;
}
