import Link from 'next/link'

export interface DemoSection {
  id: string
  label: string
}

interface PortfolioDemoLayoutProps {
  brandName: string
  brandTagline: string
  industry: string
  accentColor: string
  accentDeep: string
  bgColor: string
  textColor?: string
  fontFamily?: string
  sections: DemoSection[]
  children: React.ReactNode
}

export default function PortfolioDemoLayout({
  brandName,
  brandTagline,
  industry,
  accentColor,
  accentDeep,
  bgColor,
  textColor = '#1F2937',
  fontFamily = 'Pretendard, system-ui, sans-serif',
  sections,
  children,
}: PortfolioDemoLayoutProps) {
  return (
    <div style={{ backgroundColor: bgColor, color: textColor, fontFamily, minHeight: '100vh' }}>
      {/* 비즈나비 데모 배너 */}
      <div className="bg-navy text-white text-xs md:text-sm py-2.5 px-4 text-center">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <span className="opacity-90">
            <strong>비즈나비 포트폴리오 샘플</strong> — {industry} 업종 데모 페이지입니다
          </span>
          <span className="opacity-50" aria-hidden="true">·</span>
          <Link href="/portfolio" className="underline opacity-90 hover:opacity-100">
            다른 샘플 보기
          </Link>
          <span className="opacity-50" aria-hidden="true">·</span>
          <Link href="/" className="underline opacity-90 hover:opacity-100">
            비즈나비로 ←
          </Link>
        </div>
      </div>

      {/* 데모 사이트 자체 네비 */}
      <header className="sticky top-0 z-40 backdrop-blur-md" style={{ backgroundColor: `${bgColor}E6`, borderBottom: `1px solid ${accentColor}33` }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="text-lg md:text-xl font-bold tracking-tight" style={{ color: accentDeep }}>
            {brandName}
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="hover:opacity-70 transition-opacity"
                style={{ color: textColor }}
              >
                {s.label}
              </a>
            ))}
            <a
              href="https://pf.kakao.com/_xhGMjX/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: accentDeep, color: '#FFFFFF' }}
            >
              문의하기
            </a>
          </nav>
        </div>
      </header>

      {/* Body */}
      <main>{children}</main>

      {/* 데모 사이트 자체 푸터 */}
      <footer className="py-10 px-4 text-center text-sm" style={{ backgroundColor: accentDeep, color: '#FFFFFF' }}>
        <p className="font-bold text-base mb-1">{brandName}</p>
        <p className="opacity-80 mb-3">{brandTagline}</p>
        <p className="opacity-60 text-xs">
          본 페이지는 <Link href="/" className="underline">비즈나비</Link>가 제작한 가상 포트폴리오 샘플입니다
        </p>
      </footer>
    </div>
  )
}
