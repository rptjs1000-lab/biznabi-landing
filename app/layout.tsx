import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://biznabi.com'),
  title: '비즈나비 | 소상공인 홈페이지 제작 & 매장 자동화 에이전시',
  description: '소상공인을 위한 홈페이지 제작 + 예약·고객·알림 자동화 에이전시. 업종 맞춤 반응형 홈페이지부터 비즈나비 자동화 패키지까지, 한 파트너에서 해결.',
  keywords: ['홈페이지 제작', '반응형 홈페이지', '소상공인 홈페이지', '매장 예약 자동화', '고객 관리 자동화', '비즈나비 자동화 패키지', '알림톡 자동화', '재방문 알림', '비즈나비', 'BIZNABI'],
  openGraph: {
    title: '비즈나비 | 소상공인 홈페이지 제작 & 매장 자동화 에이전시',
    description: '업종 맞춤 홈페이지부터 예약·고객 자동화까지, 소상공인의 디지털 전환을 한 번에.',
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
