import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import type { ContactInquiry, PackageType } from "@/types";

/** 허용된 패키지 목록 */
const VALID_PACKAGES: PackageType[] = [
  "예약자동화",
  "홈페이지+자동화",
  "업무자동화",
];

/** 한국 전화번호 검증 (010-1234-5678 / 01012345678 / 02-123-4567 등) */
const PHONE_REGEX = /^0\d{1,2}-?\d{3,4}-?\d{4}$/;

/** 허용할 Origin 목록 (운영 환경에 맞게 수정) */
const ALLOWED_ORIGINS = [
  process.env.NEXT_PUBLIC_SITE_URL,
  "https://biznabi.co.kr",
  "https://www.biznabi.co.kr",
].filter(Boolean) as string[];

/** CORS 헤더 생성 */
function corsHeaders(origin?: string | null) {
  const allowedOrigin =
    origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowedOrigin || "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

/** CORS preflight 처리 */
export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get("origin");
  return NextResponse.json(null, {
    status: 204,
    headers: corsHeaders(origin),
  });
}

/** 상담 신청 접수 */
export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  const headers = corsHeaders(origin);

  try {
    // 1. 요청 본문 파싱
    let body: Record<string, unknown>;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { ok: false, error: "잘못된 요청 형식입니다." },
        { status: 400, headers }
      );
    }

    const { industry, storeName, contactName, phone, package: pkg, memo } = body;

    // 2. 필수 필드 검증
    const missing: string[] = [];
    if (!industry || typeof industry !== "string") missing.push("industry");
    if (!storeName || typeof storeName !== "string") missing.push("storeName");
    if (!contactName || typeof contactName !== "string") missing.push("contactName");
    if (!phone || typeof phone !== "string") missing.push("phone");
    if (!pkg || typeof pkg !== "string") missing.push("package");

    if (missing.length > 0) {
      return NextResponse.json(
        { ok: false, error: `필수 항목이 누락되었습니다: ${missing.join(", ")}` },
        { status: 400, headers }
      );
    }

    // 3. 패키지 유효성 검증
    if (!VALID_PACKAGES.includes(pkg as PackageType)) {
      return NextResponse.json(
        { ok: false, error: `유효하지 않은 패키지입니다. (${VALID_PACKAGES.join(" / ")})` },
        { status: 400, headers }
      );
    }

    // 4. 전화번호 형식 검증
    const phoneStr = (phone as string).trim();
    if (!PHONE_REGEX.test(phoneStr)) {
      return NextResponse.json(
        { ok: false, error: "올바른 전화번호 형식이 아닙니다. (예: 010-1234-5678)" },
        { status: 400, headers }
      );
    }

    // 5. Supabase에 저장
    const insertData: ContactInquiry = {
      industry: (industry as string).trim(),
      storeName: (storeName as string).trim(),
      contactName: (contactName as string).trim(),
      phone: phoneStr,
      package: pkg as PackageType,
      ...(memo && typeof memo === "string" ? { memo: memo.trim() } : {}),
    };

    const supabaseAdmin = getSupabaseAdmin();
    const { data, error } = await supabaseAdmin
      .from("contact_inquiries")
      .insert({
        industry: insertData.industry,
        store_name: insertData.storeName,
        contact_name: insertData.contactName,
        phone: insertData.phone,
        package: insertData.package,
        memo: insertData.memo || null,
      })
      .select("id")
      .single();

    if (error) {
      console.error("[contact] Supabase insert 실패:", error);
      return NextResponse.json(
        { ok: false, error: "상담 신청 저장에 실패했습니다. 잠시 후 다시 시도해주세요." },
        { status: 500, headers }
      );
    }

    // 6. 성공 응답
    return NextResponse.json(
      { ok: true, id: data.id },
      { status: 201, headers }
    );
  } catch (err) {
    console.error("[contact] 서버 오류:", err);
    return NextResponse.json(
      { ok: false, error: "서버 오류가 발생했습니다." },
      { status: 500, headers }
    );
  }
}
