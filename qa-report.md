# QA Report - 비즈나비 (BIZNABI)

**검토일:** 2026-04-04
**검토 대상:** 20260328-biznabi/output 전체 코드

---

## 요약

전반적으로 코드 품질과 구조가 양호하나, Contact 폼이 API와 전혀 연결되지 않아 상담 신청 기능이 작동하지 않는 치명적 버그가 있었습니다. 해당 이슈를 포함한 High 이슈 3건을 직접 수정 완료했습니다.

---

## 발견 이슈

### 높음 (High)

| # | 파일 | 이슈 | 상태 |
|---|------|------|------|
| H-1 | `components/Contact.tsx` | **폼 제출 기능 미구현** — `onSubmit` 핸들러 없음, 입력 필드에 `name` 속성 없음, 상태 관리 없음. 폼 제출 시 페이지만 새로고침되고 `/api/contact`에 데이터가 전송되지 않음. API route가 존재하지만 프론트엔드에서 호출하는 코드가 전혀 없음. | **수정 완료** |
| H-2 | `components/Contact.tsx` | **담당자명(contactName) 필드 누락** — API route(`route.ts`)에서 `contactName`을 필수 필드로 검증하지만, Contact 폼에 해당 입력 필드가 없어 API 호출 시 항상 400 에러 발생. | **수정 완료** |
| H-3 | `components/FAQ.tsx` | **접근성(a11y) 필수 속성 누락** — FAQ 토글 버튼에 `aria-expanded` 없음, 답변 영역에 `aria-hidden`, `role`, `id` 없음. 스크린 리더 사용자가 FAQ를 사용할 수 없음. | **수정 완료** |

### 중간 (Medium)

| # | 파일 | 이슈 | 수정 제안 |
|---|------|------|-----------|
| M-1 | `components/Contact.tsx` | **패키지 value 불일치** — 라디오 버튼의 `value`가 `reservation`, `full`, `business`, `consult`인데, API route의 `VALID_PACKAGES`는 `"예약자동화"`, `"홈페이지+자동화"`, `"업무자동화"`. 매핑 로직이 필요. (수정 시 PACKAGE_MAP으로 해결 완료) | 수정 시 함께 반영됨 |
| M-2 | `lib/supabase.ts` | **환경변수 검증 시점 문제** — Non-null assertion(`!`) 사용 후 바로 아래에서 falsy 체크를 하지만, `!` 선언 시점에 이미 타입이 `string`으로 확정되어 런타임에서만 의미가 있음. `as string \| undefined` 패턴이 더 안전. | `process.env.NEXT_PUBLIC_SUPABASE_URL as string \| undefined`로 변경 |
| M-3 | `app/layout.tsx` | **외부 폰트 CDN 직접 로드** — `<head>`에 Google Fonts와 Pretendard를 `<link>`로 직접 로드. Next.js의 `next/font` 최적화를 활용하지 못함. FOUT(Flash of Unstyled Text) 발생 가능. | `next/font/google`의 `Space_Grotesk` 사용, Pretendard는 `next/font/local` 또는 현재 방식 유지 |
| M-4 | `components/Hero.tsx` | **외부 이미지 직접 참조** — Unsplash 이미지를 하드코딩 URL로 로드. 외부 서비스 장애 시 히어로 섹션이 빈 화면이 됨. | 로컬 이미지로 교체하거나 `next.config.js`에 remotePatterns 설정 + `next/image` 사용 |
| M-5 | `components/Navbar.tsx` | **모바일 메뉴 배경색 문제** — 스크롤 전 상태에서 모바일 메뉴 열면 `bg-transparent` 상태이므로 메뉴 텍스트(`text-slate-600`)가 히어로 배경 위에서 보이지 않을 수 있음. | 모바일 메뉴 오픈 시 강제로 `nav-scrolled` 클래스를 추가하거나, 모바일 메뉴에 자체 배경색 적용 |
| M-6 | 전체 컴포넌트 | **IntersectionObserver 중복 코드** — 거의 모든 컴포넌트에서 동일한 fade-up 애니메이션 옵저버 코드가 반복. | `useFadeUpObserver(sectionId: string)` 커스텀 훅으로 추출 |
| M-7 | `app/api/contact/route.ts` | **Rate Limiting 없음** — 상담 신청 API에 요청 빈도 제한이 없어, 악의적 대량 요청(스팸) 가능. | 미들웨어 또는 API 레벨에서 IP 기반 rate limiting 적용 |

### 낮음 (Low)

| # | 파일 | 이슈 | 수정 제안 |
|---|------|------|-----------|
| L-1 | `components/PainPoint.tsx` | **미사용 변수** — `useEffect` 내 `.forEach((el, index)` 에서 `index` 파라미터가 선언되었으나 사용되지 않음. `Solution.tsx`도 동일. | `index` 파라미터 제거 |
| L-2 | `components/Navbar.tsx` | **로고 이미지 상대 경로** — `src="logo-horizontal.png"` 상대 경로 사용. 서브 라우트 추가 시 경로가 깨질 수 있음. Footer도 동일. | `src="/logo-horizontal.png"` 절대 경로로 변경 |
| L-3 | `globals.css` | **FAQ max-height 고정값** — `.faq-answer.open { max-height: 300px }` 고정값 사용. 긴 답변은 잘릴 수 있음. | `max-height: 500px` 또는 JS로 실제 높이 계산 |
| L-4 | `components/Hero.tsx` | **`window.pageYOffset` deprecated** — `window.pageYOffset` 대신 `window.scrollY` 사용 권장. Navbar, Footer, Packages에서도 동일. | `window.scrollY`로 교체 |
| L-5 | `tailwind.config.ts` | **Tailwind 기본 색상 덮어쓰기** — `blue`, `slate` 등 Tailwind 기본 색상을 `extend` 내에서 재정의. 기본 유틸리티(`text-blue-600` 등)와 충돌 가능. | 커스텀 네임스페이스 사용 (예: `brand-blue`) 또는 현재 방식 인지 후 유지 |
| L-6 | `components/Footer.tsx` | **연락처 하드코딩** — 이메일, 전화번호, 주소가 컴포넌트에 하드코딩. | 환경변수 또는 설정 파일로 분리 |
| L-7 | `components/Contact.tsx` | **`<select>` option에 value 미지정** — `<option>동물병원</option>` 등 value가 없어 텍스트가 그대로 value로 사용됨. 의도적일 수 있으나 명시적 value 설정이 안전. | 각 option에 명시적 value 속성 추가 |

---

## 수정 완료 내역

### H-1, H-2: Contact 폼 제출 기능 구현 (`components/Contact.tsx`)
- `useState`로 `submitting`, `result` 상태 관리 추가
- `handleSubmit` 함수 구현: FormData 추출 -> 클라이언트 유효성 검증 -> `/api/contact` POST 요청 -> 결과 표시
- 모든 input에 `name` 속성 추가 (`storeName`, `industry`, `contactName`, `phone`, `package`, `memo`)
- 담당자명(`contactName`) 입력 필드 추가
- `PACKAGE_MAP`으로 라디오 value -> API 패키지명 매핑
- 제출 중 버튼 비활성화 (`disabled` + 로딩 텍스트)
- 성공/실패 결과 메시지 표시 (`role="alert"`)
- `htmlFor` 속성으로 label-input 연결 (a11y)
- `required` 속성 추가 (브라우저 기본 유효성 검증)

### H-3: FAQ 접근성 개선 (`components/FAQ.tsx`)
- 토글 버튼에 `aria-expanded` 속성 추가
- 토글 버튼에 `aria-controls` 속성으로 답변 영역 연결
- 답변 영역에 `id`, `role="region"`, `aria-hidden` 속성 추가
- `+` 아이콘에 `aria-hidden="true"` 추가

---

## 전체 평가

**조건부 합격**

High 이슈 3건은 모두 수정 완료되었습니다. Medium 이슈 중 M-5(모바일 메뉴 배경색)와 M-7(Rate Limiting)은 운영 환경 배포 전 반드시 대응이 필요합니다. 나머지 Medium/Low 이슈는 코드 품질 개선 사항으로, 기능 동작에는 영향이 없습니다.
