import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '포트폴리오 | 비즈나비',
  description: '비즈나비가 제작한 업종별 홈페이지 샘플. 인테리어·제조업·미용실·필라테스 등 소상공인을 위한 반응형 홈페이지 + 매장 자동화 데모.',
  alternates: {
    canonical: 'https://biznabi.com/portfolio',
  },
}

interface SampleCard {
  slug: string
  industry: string
  brandName: string
  tagline: string
  description: string
  imageUrl: string
  accentColor: string
  badgeColor: string
  badgeText: string
}

const samples: SampleCard[] = [
  {
    slug: 'maru-interior',
    industry: '인테리어',
    brandName: 'MARU 인테리어',
    tagline: '일상 속의 아름다운 공간',
    description: '베이지·아이보리 톤의 따뜻한 미니멀 디자인. 시공 사례 갤러리 + 비포/애프터 비교 + 견적 문의 플로우.',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    accentColor: '#A68B6E',
    badgeColor: '#F5F0E8',
    badgeText: '인테리어',
  },
  {
    slug: 'precision-mfg',
    industry: '제조업',
    brandName: '한성정밀(주)',
    tagline: '정밀이 기술이 되다',
    description: '다크 인더스트리얼 B2B 톤. 다국어(한·영) 지원, 제품 카탈로그, 인증 현황, 견적 RFQ 플로우.',
    imageUrl: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80',
    accentColor: '#2563EB',
    badgeColor: '#DBEAFE',
    badgeText: '제조업 / B2B',
  },
  {
    slug: 'beauty-salon',
    industry: '미용실',
    brandName: 'LUMIN 헤어살롱',
    tagline: '오늘의 나를 더 빛나게',
    description: '소프트 로즈 톤의 감각적인 살롱 페이지. 디자이너 소개 + 시술 메뉴 + 온라인 예약 + 후기 갤러리.',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
    accentColor: '#C57B85',
    badgeColor: '#FCE7E9',
    badgeText: '미용실',
  },
  {
    slug: 'pilates',
    industry: '필라테스',
    brandName: 'BLOOM 필라테스',
    tagline: '오늘의 호흡, 내일의 나',
    description: '소프트 그린·베이지 톤의 웰니스 페이지. 클래스 안내 + 강사 소개 + 시간표 + 체험 예약 + 멤버십.',
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80',
    accentColor: '#7A9B7E',
    badgeColor: '#E8F0E8',
    badgeText: '필라테스',
  },
]

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-blue uppercase tracking-wider mb-4">PORTFOLIO</p>
            <h1
              className="text-3xl md:text-5xl font-bold text-navy mb-5"
              style={{ wordBreak: 'keep-all', lineHeight: '1.3' }}
            >
              업종별 홈페이지 샘플
            </h1>
            <p
              className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto"
              style={{ wordBreak: 'keep-all', lineHeight: '1.7' }}
            >
              비즈나비가 직접 제작한 업종별 데모 페이지입니다.<br />
              실제 의뢰 시 매장 컨셉·자료에 맞춰 새로 디자인됩니다.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-amber-400" aria-hidden="true" />
              표시된 사례는 모두 비즈나비 자체 제작 가상 샘플입니다
            </div>
          </div>
        </section>

        {/* Sample Grid */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {samples.map((s) => (
                <Link
                  key={s.slug}
                  href={`/portfolio/${s.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                    <img
                      src={s.imageUrl}
                      alt={`${s.brandName} 데모 미리보기`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <span
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ backgroundColor: s.badgeColor, color: s.accentColor }}
                    >
                      {s.badgeText}
                    </span>
                  </div>
                  <div className="p-6 md:p-7">
                    <h3 className="text-xl md:text-2xl font-bold text-navy mb-1.5">{s.brandName}</h3>
                    <p className="text-sm text-slate-500 italic mb-3">&ldquo;{s.tagline}&rdquo;</p>
                    <p className="text-sm md:text-[15px] text-slate-600 mb-5" style={{ wordBreak: 'keep-all', lineHeight: '1.7' }}>
                      {s.description}
                    </p>
                    <span
                      className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all"
                      style={{ color: s.accentColor }}
                    >
                      데모 보기
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-navy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-5" style={{ wordBreak: 'keep-all', lineHeight: '1.4' }}>
              이런 홈페이지, 우리 매장에도 가능할까요?
            </h2>
            <p className="text-base md:text-lg text-white/80 mb-8" style={{ wordBreak: 'keep-all', lineHeight: '1.7' }}>
              위 샘플은 모두 비즈나비가 직접 제작한 데모입니다.<br />
              실제 의뢰 시 매장 컨셉·로고·자료를 바탕으로 새로 디자인해드립니다.
            </p>
            <a
              href="https://pf.kakao.com/_xhGMjX/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-base font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#FEE500', color: '#191919' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 3C6.48 3 2 6.58 2 11c0 2.85 1.86 5.36 4.68 6.8-.2.7-.72 2.55-.82 2.95-.13.5.18.5.4.36.17-.11 2.66-1.8 3.73-2.52.66.1 1.34.16 2.01.16 5.52 0 10-3.58 10-8S17.52 3 12 3z" fill="#191919" />
              </svg>
              카카오톡으로 무료 상담
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
