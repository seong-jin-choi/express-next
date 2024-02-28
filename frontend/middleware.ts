import next from "next";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log(request.cookies.get("connect.sid"));
  return NextResponse.next();
}
