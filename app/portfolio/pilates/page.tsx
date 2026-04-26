import type { Metadata } from 'next'
import PortfolioDemoLayout from '@/components/PortfolioDemoLayout'

export const metadata: Metadata = {
  title: 'BLOOM 필라테스 (포트폴리오 샘플) | 비즈나비',
  description: '비즈나비가 제작한 필라테스 가상 포트폴리오 샘플. 클래스 안내·강사 소개·시간표·체험 예약·멤버십을 갖춘 웰니스 페이지 데모.',
  alternates: { canonical: 'https://biznabi.com/portfolio/pilates' },
  robots: 'noindex, nofollow',
}

const ACCENT = '#7A9B7E'
const ACCENT_DEEP = '#4A6B4F'
const BG = '#FAFAF5'
const SUB_BG = '#E8F0E8'

const sections = [
  { id: 'about', label: '소개' },
  { id: 'classes', label: '클래스' },
  { id: 'instructors', label: '강사' },
  { id: 'schedule', label: '시간표' },
  { id: 'membership', label: '멤버십' },
]

export default function PilatesDemo() {
  return (
    <PortfolioDemoLayout
      brandName="BLOOM"
      brandTagline="오늘의 호흡, 내일의 나"
      industry="필라테스"
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
              BLOOM PILATES STUDIO
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-5" style={{ color: ACCENT_DEEP, lineHeight: '1.3', wordBreak: 'keep-all' }}>
              오늘의 호흡,<br />
              <span className="font-light italic" style={{ color: ACCENT }}>내일의 나</span>
            </h1>
            <p className="text-base md:text-lg mb-8" style={{ color: '#5A6B5C', wordBreak: 'keep-all', lineHeight: '1.85' }}>
              내 몸의 소리에 귀 기울이는 시간.<br />
              호흡과 코어, 그리고 균형을 회복하세요.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#membership" className="px-7 py-3 rounded-full font-semibold text-white" style={{ backgroundColor: ACCENT_DEEP }}>
                무료 체험 예약
              </a>
              <a href="#classes" className="px-7 py-3 rounded-full font-semibold border-2" style={{ borderColor: ACCENT, color: ACCENT_DEEP }}>
                클래스 보기
              </a>
            </div>
          </div>
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&q=80"
              alt="BLOOM 필라테스 메인 이미지"
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
            나만의 속도로,<br />지속 가능한 운동
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#576B59', lineHeight: '1.9', wordBreak: 'keep-all' }}>
            BLOOM은 강도 높은 운동이 아닌, 자기 몸을 이해하고 회복하는 시간을 제안합니다.
            국제 자격을 보유한 강사들이 1:1 또는 소그룹으로 자세를 세심하게 봐드리며,
            처음 필라테스를 접하는 분도 부담 없이 시작할 수 있습니다.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
            {[
              { num: '1:3', label: '소그룹 정원' },
              { num: '6명', label: '전문 강사' },
              { num: '24/7', label: '예약 가능' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl md:text-3xl font-bold mb-1" style={{ color: ACCENT_DEEP }}>{s.num}</p>
                <p className="text-xs md:text-sm" style={{ color: '#7A8A7C' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes */}
      <section id="classes" className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: ACCENT }}>CLASSES</p>
            <h2 className="text-2xl md:text-4xl font-bold" style={{ color: ACCENT_DEEP }}>클래스 안내</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
            {[
              { title: '1:1 개인 레슨', tag: '맞춤형', desc: '체형 분석 후 1대1 자세 교정\n주 2회 / 50분' },
              { title: '소그룹 레슨', tag: '인기', desc: '최대 3명 정원 소규모 그룹\n주 3회 / 50분' },
              { title: '리포머 클래스', tag: '심화', desc: '기구를 활용한 심화 트레이닝\n중급자 이상' },
            ].map((c) => (
              <div key={c.title} className="p-7 rounded-2xl" style={{ backgroundColor: SUB_BG }}>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: '#fff', color: ACCENT_DEEP }}>
                  {c.tag}
                </span>
                <h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: ACCENT_DEEP }}>{c.title}</h3>
                <p className="text-sm md:text-[15px] whitespace-pre-line" style={{ color: '#576B59', lineHeight: '1.8', wordBreak: 'keep-all' }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section id="instructors" className="py-20 md:py-24" style={{ backgroundColor: SUB_BG }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: ACCENT }}>INSTRUCTORS</p>
            <h2 className="text-2xl md:text-4xl font-bold" style={{ color: ACCENT_DEEP }}>강사 소개</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { name: '원장 지나', spec: 'PMA 자격 / 10년차', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80' },
              { name: '강사 도연', spec: '리포머 전문 / 7년차', img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&q=80' },
              { name: '강사 수민', spec: '재활·자세 교정 / 6년차', img: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&q=80' },
            ].map((d) => (
              <div key={d.name} className="text-center">
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-white">
                  <img src={d.img} alt={`${d.name} 강사`} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 className="text-base md:text-lg font-bold" style={{ color: ACCENT_DEEP }}>{d.name}</h3>
                <p className="text-xs md:text-sm mt-1" style={{ color: '#7A8A7C' }}>{d.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: ACCENT }}>SCHEDULE</p>
            <h2 className="text-2xl md:text-4xl font-bold" style={{ color: ACCENT_DEEP }}>운영 시간</h2>
          </div>
          <div className="rounded-2xl p-6 md:p-8 border" style={{ backgroundColor: '#fff', borderColor: SUB_BG }}>
            <table className="w-full text-sm md:text-base">
              <tbody>
                {[
                  { day: '월·수·금', time: '07:00 - 22:00' },
                  { day: '화·목', time: '09:00 - 22:00' },
                  { day: '토요일', time: '08:00 - 18:00' },
                  { day: '일요일', time: '휴무' },
                ].map((r) => (
                  <tr key={r.day} className="border-b last:border-b-0" style={{ borderColor: SUB_BG }}>
                    <td className="py-3 font-semibold" style={{ color: ACCENT_DEEP }}>{r.day}</td>
                    <td className="py-3 text-right" style={{ color: '#576B59' }}>{r.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Membership / CTA */}
      <section id="membership" className="py-24" style={{ backgroundColor: ACCENT_DEEP, color: '#fff' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] mb-3 opacity-80">MEMBERSHIP</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-5" style={{ wordBreak: 'keep-all', lineHeight: '1.4' }}>
            첫 수업은 무료 체험으로<br />부담 없이 시작하세요
          </h2>
          <p className="text-base md:text-lg opacity-90 mb-8" style={{ wordBreak: 'keep-all', lineHeight: '1.8' }}>
            체형 분석 + 1회 무료 체험 레슨 제공.<br />
            카카오톡으로 원하시는 시간을 알려주세요.
          </p>
          <a
            href="https://pf.kakao.com/_xhGMjX/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold"
            style={{ backgroundColor: '#FEE500', color: '#191919' }}
          >
            카카오톡으로 무료 체험 예약
          </a>
        </div>
      </section>
    </PortfolioDemoLayout>
  )
}
