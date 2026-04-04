import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PainPoint from '@/components/PainPoint'
import Solution from '@/components/Solution'
import Packages from '@/components/Packages'
import Features from '@/components/Features'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: '비즈나비',
  url: 'https://biznabi.co.kr',
  description: '소상공인·중소기업을 위한 비즈니스 자동화 에이전시',
  areaServed: {
    '@type': 'Country',
    name: 'KR',
  },
  serviceType: ['비즈니스 자동화', '매장 예약 자동화', '업무 프로세스 자동화'],
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
      <Packages />
      <Features />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}
