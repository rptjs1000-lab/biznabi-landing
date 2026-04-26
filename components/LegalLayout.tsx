import Link from 'next/link'

interface LegalLayoutProps {
  title: string
  effectiveDate: string
  version: string
  children: React.ReactNode
}

export default function LegalLayout({ title, effectiveDate, version, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-100 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          <Link href="/" aria-label="비즈나비 홈으로 이동" className="flex items-center">
            <img
              src="/logo-horizontal.png"
              alt="비즈나비 로고"
              style={{ height: '40px', objectFit: 'contain' }}
            />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-slate-600 hover:text-navy transition-colors"
          >
            홈으로 ←
          </Link>
        </div>
      </header>

      {/* Document Body */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-navy mb-3" style={{ wordBreak: 'keep-all' }}>
            {title}
          </h1>
          <p className="text-sm text-slate-500">
            시행일: {effectiveDate} · 버전 {version}
          </p>
        </div>

        <article className="legal-doc text-slate-600" style={{ wordBreak: 'keep-all', lineHeight: '1.85' }}>
          {children}
        </article>
      </main>

      {/* Footer */}
      <footer className="pt-12 pb-8 mt-16" style={{ backgroundColor: '#091D38' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm mb-4">
            <Link href="/" className="text-white/60 hover:text-skyblue transition-colors">
              홈
            </Link>
            <Link href="/privacy" className="text-white/60 hover:text-skyblue transition-colors">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="text-white/60 hover:text-skyblue transition-colors">
              이용약관
            </Link>
            <a
              href="https://pf.kakao.com/_xhGMjX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-skyblue transition-colors"
            >
              카카오톡 채널 @비즈나비
            </a>
          </div>
          <p className="text-white/30 text-xs">&copy; 2026 비즈나비 (BIZNABI). All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
