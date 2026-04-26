import type { Metadata } from 'next'
import PortfolioDemoLayout from '@/components/PortfolioDemoLayout'

export const metadata: Metadata = {
  title: 'LUMIN 헤어살롱 (포트폴리오 샘플) | 비즈나비',
  description: '비즈나비가 제작한 미용실 가상 포트폴리오 샘플. 디자이너 소개·시술 메뉴·온라인 예약·후기 갤러리를 갖춘 살롱 페이지 데모.',
  alternates: { canonical: 'https://biznabi.com/portfolio/beauty-salon' },
  robots: 'noindex, nofollow',
}

const ACCENT = '#C57B85'
const ACCENT_DEEP = '#8E4A56'
const BG = '#FFF9F8'
const SUB_BG = '#FCE7E9'

const sections = [
  { id: 'about', label: '소개' },
  { id: 'services', label: '시술' },
  { id: 'designers', label: '디자이너' },
  { id: 'reviews', label: '후기' },
  { id: 'booking', label: '예약' },
]

export default function BeautySalonDemo() {
  return (
    <PortfolioDemoLayout
      brandName="LUMIN"
      brandTagline="오늘의 나를 더 빛나게"
      industry="미용실"
      accentColor={ACCENT}
      accentDeep={ACCENT_DEEP}
      bgColor={BG}
      sections={sections}
    >
      {/* Hero */}
      <section id="hero" className="pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] mb-5" style={{ color: ACCENT }}>
              LUMIN HAIR SALON
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-5" style={{ color: ACCENT_DEEP, lineHeight: '1.3', wordBreak: 'keep-all' }}>
              오늘의 나를<br />
              <span className="italic font-light" style={{ color: ACCENT }}>더 빛나게</span>
            </h1>
            <p className="text-base md:text-lg text-stone-600 mb-8" style={{ wordBreak: 'keep-all', lineHeight: '1.85' }}>
              모발 진단부터 컬러·펌·트리트먼트까지.<br />
              내 모발에 꼭 맞는 시술, 한 자리에서.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#booking" className="px-7 py-3 rounded-full font-semibold text-white" style={{ backgroundColor: ACCENT_DEEP }}>
                온라인 예약
              </a>
              <a href="#services" className="px-7 py-3 rounded-full font-semibold border-2" style={{ borderColor: ACCENT, color: ACCENT_DEEP }}>
                시술 보기
              </a>
            </div>
          </div>
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=80"
              alt="LUMIN 헤어살롱 메인 이미지"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20" style={{ backgroundColor: SUB_BG }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: ACCENT }}>ABOUT</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-6" style={{ color: ACCENT_DEEP, wordBreak: 'keep-all' }}>
            모발의 결을 살리는<br />프리미엄 헤어 살롱
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#6B5862', lineHeight: '1.9', wordBreak: 'keep-all' }}>
            LUMIN은 한 사람 한 사람의 모발 상태를 진단하고,
            그에 맞는 시술과 홈케어를 제안합니다.
            과한 손상을 줄이는 저자극 약제, 결을 살리는 전용 트리트먼트로
            오랜 시간 머무는 살롱 경험을 만들어드립니다.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: ACCENT }}>SERVICES</p>
            <h2 className="text-2xl md:text-4xl font-bold" style={{ color: ACCENT_DEEP }}>시술 메뉴</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {[
              { title: '커트', price: '25,000원~', desc: '모발 진단 + 두상 분석 후 맞춤 커트' },
              { title: '컬러', price: '95,000원~', desc: '저자극 약제 + 두피 보호제 적용' },
              { title: '디지털펌', price: '180,000원~', desc: 'C펌·S펌·볼륨매직 등 컨설팅 후 결정' },
              { title: '트리트먼트', price: '60,000원~', desc: '모발 손상도별 단백질·수분 케어' },
            ].map((s) => (
              <div key={s.title} className="p-7 rounded-2xl border" style={{ borderColor: SUB_BG, backgroundColor: '#fff' }}>
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-lg md:text-xl font-bold" style={{ color: ACCENT_DEEP }}>{s.title}</h3>
                  <span className="text-sm font-semibold" style={{ color: ACCENT }}>{s.price}</span>
                </div>
                <p className="text-sm md:text-[15px]" style={{ color: '#6B5862', lineHeight: '1.7', wordBreak: 'keep-all' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Designers */}
      <section id="designers" className="py-20 md:py-24" style={{ backgroundColor: SUB_BG }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: ACCENT }}>DESIGNERS</p>
            <h2 className="text-2xl md:text-4xl font-bold" style={{ color: ACCENT_DEEP }}>디자이너 소개</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
            {[
              { name: '원장 미라', spec: '컬러 전문 / 12년차', img: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80' },
              { name: '실장 지호', spec: '디지털펌 전문 / 8년차', img: 'https://images.unsplash.com/photo-1590502593747-42a996133562?w=600&q=80' },
              { name: '디자이너 수아', spec: '커트·트리트먼트 / 5년차', img: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=600&q=80' },
            ].map((d) => (
              <div key={d.name} className="text-center">
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-white">
                  <img src={d.img} alt={`${d.name} 디자이너`} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 className="text-base md:text-lg font-bold" style={{ color: ACCENT_DEEP }}>{d.name}</h3>
                <p className="text-xs md:text-sm mt-1" style={{ color: '#8E6772' }}>{d.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: ACCENT }}>REVIEWS</p>
            <h2 className="text-2xl md:text-4xl font-bold" style={{ color: ACCENT_DEEP }}>고객 후기</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { txt: '컬러를 자주 하는 편이라 손상이 걱정됐는데, 이번엔 결이 정말 매끄러워요. 약제가 다른 게 느껴집니다.', name: '김○○ 님 (29세)' },
              { txt: '디지털펌인데 자연스러워서 회사에서 너무 좋아하더라고요. 두피도 안 따끔거렸어요.', name: '이○○ 님 (34세)' },
            ].map((r, i) => (
              <div key={i} className="p-7 rounded-2xl" style={{ backgroundColor: SUB_BG }}>
                <div className="mb-3" style={{ color: ACCENT }}>★★★★★</div>
                <p className="mb-4" style={{ color: '#5C4750', lineHeight: '1.85', wordBreak: 'keep-all' }}>{r.txt}</p>
                <p className="text-sm" style={{ color: '#8E6772' }}>— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="booking" className="py-24" style={{ backgroundColor: ACCENT_DEEP, color: '#fff' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] mb-3 opacity-80">BOOKING</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-5" style={{ wordBreak: 'keep-all', lineHeight: '1.4' }}>
            오늘의 나,<br />지금 예약하세요
          </h2>
          <p className="text-base md:text-lg opacity-90 mb-8" style={{ wordBreak: 'keep-all', lineHeight: '1.8' }}>
            카카오톡 문의 또는 온라인 예약 폼으로<br />
            원하는 디자이너·시술·시간을 선택하세요.
          </p>
          <a
            href="https://pf.kakao.com/_xhGMjX/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold"
            style={{ backgroundColor: '#FEE500', color: '#191919' }}
          >
            카카오톡으로 예약
          </a>
        </div>
      </section>
    </PortfolioDemoLayout>
  )
}
