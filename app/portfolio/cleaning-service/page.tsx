import type { Metadata } from 'next'
import PortfolioDemoLayout, { type DemoSection } from '@/components/PortfolioDemoLayout'

export const metadata: Metadata = {
  title: '청소업 홈페이지 데모 | 비즈나비',
  description: '비즈나비가 제작한 청소업 데모 페이지. 입주·이사·정기·사무실·배관 청소 서비스 안내, 시공 사례, 견적 문의 플로우.',
  robots: 'noindex, nofollow',
  alternates: {
    canonical: 'https://biznabi.com/portfolio/cleaning-service',
  },
}

const sections: DemoSection[] = [
  { id: 'hero', label: '홈' },
  { id: 'services', label: '서비스' },
  { id: 'process', label: '공정' },
  { id: 'gallery', label: '시공 사례' },
  { id: 'contact', label: '견적 문의' },
]

const accentColor = '#5BA88A'
const accentDeep = '#2F6B5A'
const bgColor = '#F7FAF8'

const services = [
  {
    icon: '🏠',
    title: '입주·이사 청소',
    desc: '이사 전·후 깊이 있는 전체 청소. 화장실·주방·창틀까지 빠짐없이.',
  },
  {
    icon: '🔁',
    title: '정기 청소',
    desc: '주 1회 / 월 2회 등 정기 방문. 단골 고객님 우선 일정 배정.',
  },
  {
    icon: '🏢',
    title: '사무실 청소',
    desc: '근무 시간 외 야간·주말 가능. 정기 계약 단가 협의.',
  },
  {
    icon: '🚿',
    title: '배관·특수 청소',
    desc: '배관·에어컨·매트리스 등 전문 장비 필요한 청소.',
  },
]

const process = [
  {
    step: '01',
    title: '카톡 문의',
    desc: '평수·서비스 종류·희망 일정 알려주세요. 5분 안에 답변드립니다.',
  },
  {
    step: '02',
    title: '맞춤 견적',
    desc: '평수·서비스에 따른 명확한 견적서를 카톡으로 받으세요.',
  },
  {
    step: '03',
    title: '방문 청소',
    desc: '약속한 시간에 정확히 방문, 체크리스트대로 꼼꼼히 진행.',
  },
  {
    step: '04',
    title: '완료 보고',
    desc: '작업 전·후 사진과 함께 완료 보고. 정기 고객은 다음 일정도 자동 안내.',
  },
]

const gallery = [
  {
    title: '신축 입주 청소 (32평)',
    location: '경기도 용인시 · 단독주택',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
  },
  {
    title: '사무실 정기 청소 (월 2회)',
    location: '서울시 강남구 · 오피스 80평',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    title: '이사 후 입주 청소 (24평)',
    location: '경기도 성남시 · 아파트',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80',
  },
  {
    title: '주방·화장실 특수 청소',
    location: '경기도 수원시 · 빌라',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  },
]

const promises = [
  '약속한 시간에 정확히 방문',
  '작업 전·후 사진 촬영·전달',
  '체크리스트 기반 꼼꼼한 작업',
  '재청소 보장 (불만족 시 24시간 내 무상)',
]

export default function CleaningServicePage() {
  return (
    <PortfolioDemoLayout
      brandName="맑음 청소"
      brandTagline="깨끗하게, 정성껏, 약속한 그대로"
      industry="청소업"
      accentColor={accentColor}
      accentDeep={accentDeep}
      bgColor={bgColor}
      sections={sections}
    >
      {/* Hero */}
      <section id="hero" className="py-20 md:py-28 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: accentDeep }}
          >
            CLEANING · SINCE 2020
          </p>
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6"
            style={{ color: accentDeep, lineHeight: '1.3', wordBreak: 'keep-all' }}
          >
            깨끗하게, 정성껏,<br />
            약속한 그대로
          </h1>
          <p
            className="text-base md:text-lg mb-10 max-w-2xl mx-auto"
            style={{ color: '#4B5563', lineHeight: '1.8', wordBreak: 'keep-all' }}
          >
            입주·이사부터 정기·사무실·배관 청소까지,<br />
            현장에서 뛰는 사장님이 직접 챙기는 정직한 청소.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-xl font-bold text-base shadow-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: accentDeep, color: '#FFFFFF' }}
          >
            견적 문의하기
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-24 px-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: accentDeep }}>
              SERVICES
            </p>
            <h2 className="text-2xl md:text-4xl font-bold" style={{ color: accentDeep, wordBreak: 'keep-all' }}>
              필요한 청소, 필요한 만큼
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 text-center transition-transform hover:-translate-y-1"
                style={{ backgroundColor: bgColor, border: `1px solid ${accentColor}33` }}
              >
                <div className="text-5xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: accentDeep }}>{s.title}</h3>
                <p className="text-sm" style={{ color: '#4B5563', lineHeight: '1.7', wordBreak: 'keep-all' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: accentDeep }}>
              PROCESS
            </p>
            <h2 className="text-2xl md:text-4xl font-bold" style={{ color: accentDeep, wordBreak: 'keep-all' }}>
              문의부터 완료까지, 4단계
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div
                key={i}
                className="rounded-2xl p-7"
                style={{ backgroundColor: '#FFFFFF', border: `1px solid ${accentColor}33` }}
              >
                <p className="text-3xl font-extrabold mb-3" style={{ color: accentColor }}>{p.step}</p>
                <h3 className="text-lg font-bold mb-2" style={{ color: accentDeep }}>{p.title}</h3>
                <p className="text-sm" style={{ color: '#4B5563', lineHeight: '1.7', wordBreak: 'keep-all' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 md:py-24 px-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: accentDeep }}>
              GALLERY
            </p>
            <h2 className="text-2xl md:text-4xl font-bold" style={{ color: accentDeep, wordBreak: 'keep-all' }}>
              최근 시공 사례
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {gallery.map((g, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{ backgroundColor: bgColor, border: `1px solid ${accentColor}33` }}
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img src={g.image} alt={g.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold mb-1" style={{ color: accentDeep }}>{g.title}</h3>
                  <p className="text-xs" style={{ color: '#6B7280' }}>{g.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promises (후기 대신 약속) */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12" style={{ backgroundColor: accentDeep, color: '#FFFFFF' }}>
          <div className="text-center mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3 opacity-80">OUR PROMISE</p>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ wordBreak: 'keep-all' }}>
              우리는 이렇게 약속드립니다
            </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {promises.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-base">
                <span className="text-xl shrink-0" aria-hidden="true">✓</span>
                <span style={{ wordBreak: 'keep-all', lineHeight: '1.6' }}>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: accentDeep }}>
            CONTACT
          </p>
          <h2 className="text-2xl md:text-4xl font-bold mb-5" style={{ color: accentDeep, wordBreak: 'keep-all' }}>
            견적 문의·일정 예약
          </h2>
          <p className="text-base mb-10" style={{ color: '#4B5563', lineHeight: '1.7', wordBreak: 'keep-all' }}>
            평수·서비스 종류·희망 일정만 알려주시면<br />
            5분 안에 맞춤 견적 보내드립니다.
          </p>
          <a
            href="https://pf.kakao.com/_xhGMjX/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#FEE500', color: '#191919' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 3C6.48 3 2 6.58 2 11c0 2.85 1.86 5.36 4.68 6.8-.2.7-.72 2.55-.82 2.95-.13.5.18.5.4.36.17-.11 2.66-1.8 3.73-2.52.66.1 1.34.16 2.01.16 5.52 0 10-3.58 10-8S17.52 3 12 3z" fill="#191919" />
            </svg>
            카카오톡으로 문의하기
          </a>
        </div>
      </section>
    </PortfolioDemoLayout>
  )
}
