import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://biznabi.com'),
  title: '비즈나비 | 청소·인테리어 사장님을 위한 자동화 파트너',
  description: '청소·인테리어 사장님을 위한 홈페이지·사장 대시보드·직원 PWA. 비즈나비가 견적·일정·고객관리 반복 업무를 줄이고 놓치던 고객을 잡아드립니다.',
  keywords: ['청소업 자동화', '인테리어 자동화', '청소업 홈페이지', '인테리어 홈페이지', '견적 자동화', '일정 관리', '직원 PWA', '현장 관리 시스템', '소상공인 홈페이지', '비즈나비', 'BIZNABI'],
  openGraph: {
    title: '비즈나비 | 청소·인테리어 사장님을 위한 자동화 파트너',
    description: '견적·일정·고객관리, 아직도 사장님이 직접 다 하고 계신가요? 비즈나비가 반복 업무를 줄이고 놓치던 고객을 잡아드립니다.',
    url: 'https://biznabi.com',
    siteName: '비즈나비',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-navy antialiased">
        {children}
      </body>
    </html>
  )
}
