# 비즈나비 (BIZNABI) - 디자인 스펙 문서

## 1. 브랜드 컬러 시스템

| Token | Hex | 용도 |
|-------|-----|------|
| `navy` (Primary) | `#0B2545` | 메인 텍스트, 네비게이션, Footer, 다크 배경 |
| `blue` (Secondary) | `#1B6AAA` | 링크, 아이콘 강조, 버튼 hover |
| `skyblue` (Accent) | `#4AADCF` | CTA 그라디언트, 뱃지, 포인트 |
| `white` | `#FFFFFF` | 기본 배경 |
| `slate-50` | `#F8FAFC` | 교차 섹션 배경 (연한 그레이) |
| `slate-500` | `#64748B` | 서브 텍스트, 캡션 |
| `navy-900` | `#091D38` | Footer 배경, 다크 섹션 |

### 그라디언트
- **Primary Gradient:** `linear-gradient(135deg, #0B2545, #1B6AAA)`
- **Accent Gradient:** `linear-gradient(135deg, #1B6AAA, #4AADCF)`
- **Hero Overlay:** `linear-gradient(to bottom, rgba(11,37,69,0.4) 0%, rgba(11,37,69,0.6) 60%, rgba(11,37,69,0.75) 100%)`

## 2. 타이포그래피

| 요소 | 폰트 | Weight | Size (Desktop) | Line-height |
|------|------|--------|----------------|-------------|
| H1 (Hero) | Pretendard | 800 | 48px (3rem) | 1.5 |
| H2 (섹션 제목) | Pretendard | 800 | 36px (2.25rem) | 1.5 |
| H3 (카드 제목) | Pretendard | 700 | 24px (1.5rem) | 1.5 |
| Body | Pretendard | 400-500 | 16-18px | 1.7 |
| Caption/Sub | Pretendard | 400 | 14px | 1.6 |
| 숫자 강조 | Space Grotesk | 700 | 48-56px | 1.2 |

- 자간: 기본값 유지, 숫자만 `-0.02em`
- 한글 전체: Pretendard
- 영문/숫자 강조: Space Grotesk

## 3. 간격 시스템 (8px Grid)

| Token | Value | 용도 |
|-------|-------|------|
| `space-1` | 4px | 아이콘-텍스트 간격 |
| `space-2` | 8px | 인라인 요소 간격 |
| `space-4` | 16px | 카드 내부 패딩 |
| `space-6` | 24px | 섹션 내 요소 간격 |
| `space-8` | 32px | 카드 간 간격 |
| `space-16` | 64px | 섹션 상단 여백 |
| `space-24` | 96px | 섹션 간 여백 (Desktop) |
| `space-32` | 128px | 히어로 등 대형 여백 |

## 4. 반응형 브레이크포인트 (Mobile First)

| 브레이크포인트 | Width | Container |
|---------------|-------|-----------|
| Mobile | < 640px | 100% (px-4) |
| Tablet (sm) | >= 640px | 640px |
| Desktop (md) | >= 768px | 768px |
| Large (lg) | >= 1024px | 1024px |
| XL | >= 1280px | 1280px max-width |

## 5. 컴포넌트 스펙

### 버튼
- **Primary CTA:** bg-gradient(navy→blue), text-white, px-8 py-4, rounded-xl, shadow-lg, hover scale-105
- **Outline CTA:** border-2 border-white, text-white, hover bg-white/10
- **Secondary:** bg-skyblue, text-white, px-6 py-3, rounded-lg

### 카드
- bg-white, rounded-2xl, shadow-lg, p-8
- hover: shadow-xl, translateY(-4px), transition 300ms
- 다크 배경 위: bg-white/10 backdrop-blur

### 네비게이션
- 고정(fixed top), bg-white/90 backdrop-blur, shadow-sm
- 스크롤 시 활성화
- 로고(SVG 인라인) + 메뉴 5개 + CTA 버튼

### FAQ 아코디언
- border-b 구분, 클릭 시 슬라이드 토글
- 아이콘: + / - 회전 애니메이션

## 6. 애니메이션

### Scroll Fade-up
- IntersectionObserver, threshold 0.1
- opacity: 0 → 1, translateY: 30px → 0
- duration: 600ms, ease-out
- stagger: 카드 등 다중 요소는 100ms 딜레이

### 숫자 카운트업
- 다크 섹션 진입 시 트리거
- duration: 2000ms, easeOutCubic
- 숫자 뒤 단위 텍스트 (+, %, 일 등)

## 7. 섹션 구성 (12개)

1. **nav** - 네비게이션 (fixed)
2. **#hero** - 풀스크린 히어로
3. **#pain-point** - 고민 카드 3개 (bg-slate-50)
4. **#solution** - 솔루션 소개 (bg-white)
5. **#packages** - 서비스 패키지 2개 비교 (bg-slate-50)
6. **#features** - 주요 기능 4개 카드 (bg-white)
7. **#industries** - 대상 업종 6개 그리드 (bg-slate-50)
8. **#process** - 도입 프로세스 5단계 (bg-white)
9. **#stats** - 숫자 통계 (bg-navy, 다크 섹션)
10. **#faq** - FAQ 아코디언 (bg-white)
11. **#contact** - CTA + 상담 폼 (bg-gradient)
12. **footer** - 다크 Footer

## 8. 이미지 소스

- Hero: Unsplash 카페/서비스업 분위기 (w=1920)
- 솔루션: 매장/대시보드 관련 (w=800)
- 업종 아이콘: SVG 인라인 또는 이모지

---

**작성일:** 2026-03-28
**Agent:** ArchitectUX
**다음 단계:** design-preview.html 구현 → 사용자 확인 → 개발
