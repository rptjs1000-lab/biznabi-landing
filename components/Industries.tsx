'use client'

import { useEffect } from 'react'

const tier1Industries = [
  {
    emoji: '🧹',
    name: '청소업',
    desc: '입주·이사·정기·사무실·배관 청소',
  },
  {
    emoji: '🛠️',
    name: '인테리어',
    desc: '시공·견적·포트폴리오·고객 응대',
  },
]

const tier2Industries = [
  { emoji: '💇', name: '미용실' },
  { emoji: '🧘', name: '필라테스 / 요가' },
  { emoji: '🐾', name: '동물병원' },
  { emoji: '🍽️', name: '음식점 / 카페' },
  { emoji: '💅', name: '뷰티 / 네일' },
]

export default function Industries() {
  useEffect(() => {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            fadeObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('industries')
    if (section) {
      section.querySelectorAll('.fade-up').forEach((el) => {
        const parent = el.parentElement
        if (parent) {
          const siblings = Array.from(parent.children).filter((c) => c.classList.contains('fade-up'))
          const siblingIndex = siblings.indexOf(el)
          ;(el as HTMLElement).style.transitionDelay = `${siblingIndex * 100}ms`
        }
        fadeObserver.observe(el)
      })
    }

    return () => fadeObserver.disconnect()
  }, [])

  return (
    <section id="industries" className="py-20 md:py-28 bg-[#F5EEE0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue font-semibold text-sm mb-3 fade-up">이런 업종 사장님과 일합니다</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy fade-up">
            현장에서 뛰는 사장님이<br className="sm:hidden" /> 우리의 주력 고객입니다
          </h2>
        </div>

        {/* Tier 1 — 청소·인테리어 강조 */}
        <p className="text-blue font-semibold text-sm mb-4 fade-up">주력 업종</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {tier1Industries.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 md:p-10 card-hover fade-up shadow-lg border-2 border-skyblue/20 text-center"
            >
              <div className="text-6xl mb-4">{item.emoji}</div>
              <div style={{ wordBreak: 'keep-all' }}>
                <h4 className="font-extrabold text-navy text-xl md:text-2xl mb-2">{item.name}</h4>
                <p className="text-slate-500 text-sm md:text-base" style={{ lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tier 2 — 그 외 가능 업종 */}
        <p className="text-slate-500 font-semibold text-sm mb-4 fade-up">그 외 가능 업종</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
          {tier2Industries.map((item, i) => (
            <div
              key={i}
              className="bg-white/70 rounded-xl p-4 text-center card-hover fade-up"
            >
              <div className="text-3xl mb-2 opacity-80">{item.emoji}</div>
              <h4 className="font-semibold text-slate-600 text-sm">{item.name}</h4>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-400 text-xs mt-6 fade-up">* 위 업종 외에도 상담 가능합니다</p>
      </div>
    </section>
  )
}
