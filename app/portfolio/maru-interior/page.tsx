import type { Metadata } from 'next'
import PortfolioDemoLayout from '@/components/PortfolioDemoLayout'

export const metadata: Metadata = {
  title: 'MARU 인테리어 (포트폴리오 샘플) | 비즈나비',
  description: '비즈나비가 제작한 인테리어 업종 가상 포트폴리오 샘플. 부분 인테리어 전문 매장의 반응형 홈페이지 데모.',
  alternates: { canonical: 'https://biznabi.com/portfolio/maru-interior' },
  robots: 'noindex, nofollow',
}

const ACCENT = '#A68B6E'
const ACCENT_DEEP = '#7A5C44'
const BG = '#FDFBF8'
const SUB_BG = '#F5F0E8'

const sections = [
  { id: 'about', label: '소개' },
  { id: 'services', label: '서비스' },
  { id: 'gallery', label: '시공사례' },
  { id: 'reviews', label: '후기' },
  { id: 'contact', label: '문의' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', label: '주방 리모델링' },
  { src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80', label: '욕실 시공' },
  { src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80', label: '거실 리뉴얼' },
  { src: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80', label: '침실 리모델링' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', label: '베란다 확장' },
  { src: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80', label: '현관 리뉴얼' },
]

export default function MaruInteriorDemo() {
  return (
    <PortfolioDemoLayout
      brandName="MARU"
      brandTagline="일상 속의 아름다운 공간"
      industry="인테리어"
      accentColor={ACCENT}
      accentDeep={ACCENT_DEEP}
      bgColor={BG}
      sections={sections}
    >
      {/* Hero */}
      <section id="hero" className="pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: ACCENT }}>
              MARU INTERIOR
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-5" style={{ color: ACCENT_DEEP, lineHeight: '1.3', wordBreak: 'keep-all' }}>
              일상의 공간을<br />
              조금 더 아름답게
            </h1>
            <p className="text-base md:text-lg text-stone-600 mb-8" style={{ wordBreak: 'keep-all', lineHeight: '1.85' }}>
              주방·욕실·거실 등 부분 인테리어 전문.<br />
              전체 시공 부담 없이 필요한 공간만 새로 바꾸세요.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="px-7 py-3 rounded-full font-semibold text-white" style={{ backgroundColor: ACCENT_DEEP }}>
                무료 견적 받기
              </a>
              <a href="#gallery" className="px-7 py-3 rounded-full font-semibold border-2" style={{ borderColor: ACCENT, color: ACCENT_DEEP }}>
                시공 사례 보기
              </a>
            </div>
          </div>
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80"
              alt="MARU 인테리어 시공 메인 이미지"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20" style={{ backgroundColor: SUB_BG }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>ABOUT</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-6" style={{ color: ACCENT_DEEP, wordBreak: 'keep-all' }}>
            12년의 시공 경험,<br />믿을 수 있는 부분 인테리어
          </h2>
          <p className="text-base md:text-lg text-stone-600 max-w-3xl mx-auto" style={{ wordBreak: 'keep-all', lineHeight: '1.9' }}>
            MARU는 2014년 설립 이래 서울·수도권 1,200세대 이상의 부분 인테리어를 진행해왔습니다.
            전체 시공이 부담스러운 가정에 꼭 필요한 공간만 새롭게 바꿔드립니다.
            과한 장식 없이 따뜻하고 편안한 미니멀 디자인이 MARU의 시그니처입니다.
          </p>
          <div className="grid grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
            {[
              { num: '1,200+', label: '시공 세대' },
              { num: '12년', label: '시공 경력' },
              { num: '4.9', label: '평균 만족도' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl md:text-4xl font-bold mb-1" style={{ color: ACCENT_DEEP }}>{s.num}</p>
                <p className="text-xs md:text-sm text-stone-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>SERVICES</p>
            <h2 className="text-2xl md:text-4xl font-bold" style={{ color: ACCENT_DEEP }}>부분 인테리어 전문 분야</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: '주방 리모델링', desc: '싱크대·상부장·타일 교체부터\n동선 재구성까지' },
              { title: '욕실 시공', desc: '방수·타일·도기·조명까지\n공간 전체 새로 단장' },
              { title: '거실·침실 리뉴얼', desc: '도배·바닥재·조명 교체로\n공간 분위기 전환' },
            ].map((s) => (
              <div key={s.title} className="p-8 rounded-2xl text-center" style={{ backgroundColor: SUB_BG }}>
                <h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: ACCENT_DEEP }}>{s.title}</h3>
                <p className="text-sm md:text-[15px] text-stone-600 whitespace-pre-line" style={{ lineHeight: '1.8', wordBreak: 'keep-all' }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 md:py-24" style={{ backgroundColor: SUB_BG }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>GALLERY</p>
            <h2 className="text-2xl md:text-4xl font-bold" style={{ color: ACCENT_DEEP }}>시공 사례</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {galleryImages.map((g, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl bg-stone-100">
                <img src={g.src} alt={g.label} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>REVIEWS</p>
            <h2 className="text-2xl md:text-4xl font-bold" style={{ color: ACCENT_DEEP }}>고객 후기</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { stars: 5, txt: '주방만 새로 했는데 집 전체 분위기가 바뀌었어요. 일정도 정확하게 지켜주셨고, 마무리 청소까지 깔끔했습니다.', name: '김○○ 님 (강남구)' },
              { stars: 5, txt: '욕실 누수 때문에 시작했는데 결과적으로 고급 호텔 욕실처럼 변했네요. 사장님이 직접 디자인 상담해주셨어요.', name: '이○○ 님 (분당)' },
            ].map((r, i) => (
              <div key={i} className="p-7 rounded-2xl" style={{ backgroundColor: SUB_BG }}>
                <div className="mb-3" style={{ color: ACCENT }}>{'★'.repeat(r.stars)}</div>
                <p className="text-stone-700 mb-4" style={{ lineHeight: '1.85', wordBreak: 'keep-all' }}>{r.txt}</p>
                <p className="text-sm text-stone-500">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24" style={{ backgroundColor: ACCENT_DEEP, color: '#fff' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 opacity-80">CONTACT</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-5" style={{ wordBreak: 'keep-all', lineHeight: '1.4' }}>
            우리 집 공간,<br />어디부터 바꿀까요?
          </h2>
          <p className="text-base md:text-lg opacity-85 mb-8" style={{ wordBreak: 'keep-all', lineHeight: '1.8' }}>
            방문 상담 + 무료 견적 제공.<br />
            평일 9~18시 연락 주시면 즉시 안내드립니다.
          </p>
          <a
            href="https://pf.kakao.com/_xhGMjX/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold"
            style={{ backgroundColor: '#FEE500', color: '#191919' }}
          >
            카카오톡 문의
          </a>
        </div>
      </section>
    </PortfolioDemoLayout>
  )
}
