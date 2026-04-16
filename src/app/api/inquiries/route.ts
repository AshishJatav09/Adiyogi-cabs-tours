import { NextResponse } from "next/server";

import { submitInquiry } from "@/backend/inquiries/service";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const result = await submitInquiry(payload);

    if (!result.ok) {
      return NextResponse.json(result, { status: 400 });
    }

    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "We could not save your inquiry right now. Please try again.",
      },
      { status: 500 },
    );
  }
}

