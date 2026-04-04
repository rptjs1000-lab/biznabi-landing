'use client'

import { useEffect } from 'react'

export default function PainPoint() {
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

    const section = document.getElementById('pain-point')
    if (section) {
      section.querySelectorAll('.fade-up').forEach((el, index) => {
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
    <section id="pain-point" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue font-semibold text-sm mb-3 fade-up">이런 고민, 있으신가요?</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy fade-up">
            비즈니스 운영, 혼자 다 하기 힘드시죠?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg card-hover fade-up">
            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">예약 전화, 놓치고 계세요?</h3>
            <p className="text-slate-500" style={{ lineHeight: '1.7' }}>바쁜 시간에 걸려오는 예약 전화를 받지 못해 고객을 놓치고 있진 않으신가요? 24시간 온라인 예약으로 해결하세요.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg card-hover fade-up">
            <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">노쇼 때문에 매출 손실?</h3>
            <p className="text-slate-500" style={{ lineHeight: '1.7' }}>예약하고 나타나지 않는 고객 때문에 빈 자리가 생기고 있나요? 알림톡 자동 리마인드로 노쇼를 줄여드립니다.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg card-hover fade-up">
            <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-sky-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">반복 업무에 시간을 빼앗기고 있나요?</h3>
            <p className="text-slate-500" style={{ lineHeight: '1.7' }}>견적서 작성, 보고서 정리, 재고 확인... 매일 반복되는 업무를 자동화하면 핵심 비즈니스에 집중할 수 있습니다.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
