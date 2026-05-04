import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PainPoint from '@/components/PainPoint'
import Solution from '@/components/Solution'
import Industries from '@/components/Industries'
import Packages from '@/components/Packages'
import Features from '@/components/Features'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: '비즈나비',
  url: 'https://biznabi.com',
  description: '소상공인을 위한 홈페이지 제작 및 매장 자동화 에이전시',
  areaServed: {
    '@type': 'Country',
    name: 'KR',
  },
  serviceType: ['홈페이지 제작', '매장 예약 자동화', '고객 관리 자동화', '알림톡 자동화'],
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
      <Industries />
      <Packages />
      <Features />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}
