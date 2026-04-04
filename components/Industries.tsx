'use client'

import { useEffect } from 'react'

const storeIndustries = [
  { emoji: '🐾', name: '동물병원' },
  { emoji: '💇', name: '미용실' },
  { emoji: '🧘', name: '필라테스 / 요가' },
  { emoji: '🍽️', name: '음식점 / 카페' },
  { emoji: '💅', name: '뷰티 / 네일' },
  { emoji: '🏥', name: '병원 / 의원' },
]

const businessIndustries = [
  { emoji: '🏭', name: '제조업' },
  { emoji: '🚢', name: '무역 / 수출입' },
  { emoji: '📦', name: '유통 / 도매' },
  { emoji: '🏢', name: '일반 사무' },
  { emoji: '🏗️', name: '건설 / 인테리어' },
  { emoji: '📊', name: '기타 중소기업' },
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
    <section id="industries" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue font-semibold text-sm mb-3 fade-up">대상 업종</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy fade-up">
            다양한 업종의 비즈니스를 지원합니다
          </h2>
        </div>

        {/* 매장 자동화 */}
        <p className="text-blue font-semibold text-sm mb-4 fade-up">매장 자동화</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mb-10">
          {storeIndustries.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center card-hover fade-up shadow-sm">
              <div className="text-4xl mb-3">{item.emoji}</div>
              <h4 className="font-bold text-navy text-sm">{item.name}</h4>
            </div>
          ))}
        </div>

        {/* 중소기업 업무 자동화 */}
        <p className="text-blue font-semibold text-sm mb-4 fade-up">중소기업 업무 자동화</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {businessIndustries.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center card-hover fade-up shadow-sm">
              <div className="text-4xl mb-3">{item.emoji}</div>
              <h4 className="font-bold text-navy text-sm">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
