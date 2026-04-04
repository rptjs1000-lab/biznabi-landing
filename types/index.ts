/** 상담 신청 폼 데이터 타입 */
export interface ContactInquiry {
  /** 업종 */
  industry: string;
  /** 매장명/회사명 */
  storeName: string;
  /** 담당자명 */
  contactName: string;
  /** 연락처 (한국 전화번호) */
  phone: string;
  /** 관심 패키지 */
  package: PackageType;
  /** 추가 메모 (선택) */
  memo?: string;
}

/** 패키지 종류 */
export type PackageType = "예약자동화" | "홈페이지+자동화" | "업무자동화";

/** 상담 신청 성공 응답 */
export interface ContactSuccessResponse {
  ok: true;
  id: string;
}

/** 상담 신청 에러 응답 */
export interface ContactErrorResponse {
  ok: false;
  error: string;
}
