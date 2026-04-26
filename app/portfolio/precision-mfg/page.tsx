import type { Metadata } from 'next'
import PortfolioDemoLayout from '@/components/PortfolioDemoLayout'

export const metadata: Metadata = {
  title: '한성정밀(주) (포트폴리오 샘플) | 비즈나비',
  description: '비즈나비가 제작한 제조업 B2B 가상 포트폴리오 샘플. CNC 정밀 부품 제조사의 다국어 기업 홈페이지 데모.',
  alternates: { canonical: 'https://biznabi.com/portfolio/precision-mfg' },
  robots: 'noindex, nofollow',
}

const ACCENT = '#2563EB'
const ACCENT_DEEP = '#0F172A'
const BG = '#FFFFFF'

const sections = [
  { id: 'about', label: '회사 소개' },
  { id: 'capability', label: '설비·기술' },
  { id: 'products', label: '제품' },
  { id: 'certs', label: '인증' },
  { id: 'rfq', label: '견적 문의' },
]

export default function PrecisionMfgDemo() {
  return (
    <PortfolioDemoLayout
      brandName="HANSUNG PRECISION"
      brandTagline="Precision Becomes Technology"
      industry="제조업 B2B"
      accentColor={ACCENT}
      accentDeep={ACCENT_DEEP}
      bgColor={BG}
      sections={sections}
    >
      {/* Hero — 다크 인더스트리얼 */}
      <section id="hero" className="relative min-h-[600px] md:min-h-[700px] flex items-center" style={{ backgroundColor: ACCENT_DEEP }}>
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1600&q=80"
            alt="한성정밀 CNC 가공 공장"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${ACCENT_DEEP}EE 0%, ${ACCENT_DEEP}AA 100%)` }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-white py-24">
          <p className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: '#3B82F6' }}>
            CNC PRECISION MANUFACTURING SINCE 1998
          </p>
          <h1 className="text-3xl md:text-6xl font-bold mb-6" style={{ lineHeight: '1.2', wordBreak: 'keep-all' }}>
            정밀이 기술이 되다.<br />
            <span style={{ color: '#3B82F6' }}>Precision Becomes Technology.</span>
          </h1>
          <p className="text-base md:text-xl text-white/80 mb-10 max-w-2xl" style={{ wordBreak: 'keep-all', lineHeight: '1.8' }}>
            현대·삼성·LG 등 국내 대기업 1차 협력사.<br />
            ±0.001mm 초정밀 CNC 가공으로 28년간 신뢰를 쌓아왔습니다.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#rfq" className="px-7 py-3.5 rounded font-semibold text-white" style={{ backgroundColor: ACCENT }}>
              견적 요청 (RFQ)
            </a>
            <a href="#capability" className="px-7 py-3.5 rounded font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition">
              설비 현황 보기
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 md:py-12 border-y" style={{ backgroundColor: '#F1F5F9', borderColor: '#E2E8F0' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: '28+', label: '년 업력' },
            { num: '120억', label: '연 매출' },
            { num: '40+', label: 'CNC 보유' },
            { num: 'ISO 9001', label: '품질 인증' },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl md:text-3xl font-bold" style={{ color: ACCENT_DEEP }}>{s.num}</p>
              <p className="text-xs md:text-sm mt-1" style={{ color: '#64748B' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>ABOUT US</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-6" style={{ color: ACCENT_DEEP, wordBreak: 'keep-all' }}>
            정밀 가공 28년의 누적이<br />최고의 신뢰가 됩니다
          </h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto" style={{ color: '#475569', lineHeight: '1.9', wordBreak: 'keep-all' }}>
            한성정밀(주)은 1998년 설립 이래 자동차·반도체·디스플레이 핵심 부품을 가공해온 1차 협력사입니다.
            5축 CNC 머시닝센터 40대 보유, 일평균 12,000개 부품을 안정적으로 납품하고 있습니다.
            국내 대기업뿐 아니라 미국·일본·독일 등 글로벌 바이어와도 장기 파트너십을 유지합니다.
          </p>
        </div>
      </section>

      {/* Capability */}
      <section id="capability" className="py-20 md:py-24" style={{ backgroundColor: '#1E293B', color: '#fff' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#3B82F6' }}>CAPABILITY</p>
            <h2 className="text-2xl md:text-4xl font-bold">설비 · 기술 역량</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: '5축 CNC 머시닝', desc: '동시 5축 가공 18대·\n3축 22대 보유' },
              { title: '와이어컷 / EDM', desc: '미세 형상·\n금형 정밀 가공' },
              { title: '3D 측정 / 검사', desc: 'CMM 측정기 4대\n전수검사 가능' },
            ].map((c) => (
              <div key={c.title} className="p-7 rounded-lg border border-white/10" style={{ backgroundColor: '#0F172A' }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#3B82F6' }}>{c.title}</h3>
                <p className="text-sm text-white/75 whitespace-pre-line" style={{ lineHeight: '1.8' }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>PRODUCTS</p>
            <h2 className="text-2xl md:text-4xl font-bold" style={{ color: ACCENT_DEEP }}>제품 카탈로그</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { src: 'https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?w=600&q=80', title: '자동차 부품' },
              { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80', title: '반도체 지그' },
              { src: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80', title: '디스플레이 부품' },
              { src: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=600&q=80', title: '의료기기 부품' },
            ].map((p) => (
              <div key={p.title} className="rounded-lg overflow-hidden border" style={{ borderColor: '#E2E8F0' }}>
                <div className="aspect-square overflow-hidden">
                  <img src={p.src} alt={p.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold" style={{ color: ACCENT_DEEP }}>{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certs" className="py-20" style={{ backgroundColor: '#F1F5F9' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>CERTIFICATIONS</p>
            <h2 className="text-2xl md:text-4xl font-bold" style={{ color: ACCENT_DEEP }}>품질 · 환경 인증</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['ISO 9001', 'ISO 14001', 'IATF 16949', 'KS 인증'].map((c) => (
              <div key={c} className="bg-white p-6 rounded-lg text-center border" style={{ borderColor: '#E2E8F0' }}>
                <p className="font-bold text-base md:text-lg" style={{ color: ACCENT }}>{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RFQ */}
      <section id="rfq" className="py-24" style={{ backgroundColor: ACCENT, color: '#fff' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 opacity-80">REQUEST FOR QUOTATION</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-5" style={{ wordBreak: 'keep-all', lineHeight: '1.4' }}>
            견적 요청 (RFQ)<br />24시간 이내 회신
          </h2>
          <p className="text-base md:text-lg opacity-90 mb-8" style={{ wordBreak: 'keep-all', lineHeight: '1.8' }}>
            도면(.dwg/.step/.iges) 첨부 + 수량·납기 입력만으로<br />
            정밀 견적을 받아보실 수 있습니다.
          </p>
          <a
            href="https://pf.kakao.com/_xhGMjX/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded font-bold bg-white"
            style={{ color: ACCENT_DEEP }}
          >
            지금 견적 요청
          </a>
        </div>
      </section>
    </PortfolioDemoLayout>
  )
}
