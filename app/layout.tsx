import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://biznabi.co.kr'),
  title: '비즈나비 | 매장 예약 자동화 & 중소기업 업무 자동화',
  description: '소상공인·중소기업을 위한 비즈니스 자동화 에이전시. 매장 예약, 고객 관리, 업무 프로세스를 AI로 자동화하여 매출은 높이고 운영 비용은 줄여드립니다.',
  keywords: ['비즈니스 자동화', '매장 예약 자동화', '중소기업 업무 자동화', '소상공인 자동화', 'AI 자동화', '비즈나비', 'BIZNABI', '고객 관리 자동화', '업무 효율화'],
  openGraph: {
    title: '비즈나비 | 매장 예약 자동화 & 중소기업 업무 자동화',
    description: '소상공인·중소기업을 위한 비즈니스 자동화 에이전시. 매장 예약, 고객 관리, 업무 프로세스를 AI로 자동화해 드립니다.',
    url: 'https://biznabi.co.kr',
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
