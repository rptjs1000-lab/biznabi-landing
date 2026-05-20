import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://biznabi.com'),
  title: '비즈나비 | 필요한 소프트웨어를 만들어 드리는 기술 파트너',
  description: '홈페이지부터 앱·업무 자동화·AI까지, 사업에 필요한 소프트웨어를 상담으로 제작합니다. 외주처럼 떠나지 않고 납기 후에도 함께하는 기술 파트너, 비즈나비.',
  keywords: ['맞춤 소프트웨어 제작', '주문 제작 소프트웨어', '홈페이지 제작', '업무 자동화', '웹앱 개발', '앱 개발', 'AI 개발', '기술 파트너', '비즈나비', 'BIZNABI'],
  openGraph: {
    title: '비즈나비 | 필요한 소프트웨어를 만들어 드리는 기술 파트너',
    description: '기술은 저희가 만들게요. 비즈니스에만 집중하세요. 홈페이지·앱·자동화·AI까지 필요한 소프트웨어를 상담으로 제작하는 비즈나비.',
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
      <body className="bg-navy text-white antialiased">
        {children}
      </body>
    </html>
  )
}
