import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PainPoint from '@/components/PainPoint'
import Solution from '@/components/Solution'
import Portfolio from '@/components/Portfolio'
import Footer from '@/components/Footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: '비즈나비',
  url: 'https://biznabi.com',
  description: '필요한 소프트웨어를 상담으로 제작하는 기술 파트너. 홈페이지·웹앱·업무 자동화·AI까지.',
  areaServed: {
    '@type': 'Country',
    name: 'KR',
  },
  serviceType: ['맞춤 소프트웨어 제작', '홈페이지 제작', '웹앱 개발', '업무 자동화', 'AI 개발'],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <PainPoint />
      <Solution />
      <Portfolio />
      <Footer />
    </>
  )
}
