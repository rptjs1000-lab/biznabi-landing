'use client'

import { useEffect } from 'react'

const CheckIcon = () => (
  <svg className="w-5 h-5 text-skyblue" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)

export default function Solution() {
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

    const section = document.getElementById('solution')
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
    <section id="solution" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="fade-up order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=90"
                alt="대시보드 이미지"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent"></div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="text-blue font-semibold text-sm mb-3 fade-up">비즈나비 솔루션</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy mb-6 fade-up">
              복잡한 비즈니스 운영,<br />비즈나비가 한 번에 해결합니다
            </h2>
            <p className="text-slate-500 text-lg mb-8 fade-up" style={{ lineHeight: '1.7' }}>
              업종 맞춤 홈페이지부터 예약·고객·알림 자동화까지 — 소상공인의 디지털 전환을 한 번에 해결해 드립니다.
            </p>

            <div className="space-y-5 fade-up">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-skyblue/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckIcon />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">맞춤 홈페이지 제작</h4>
                  <p className="text-slate-500 text-sm" style={{ lineHeight: '1.7' }}>업종에 최적화된 전문 홈페이지를 빠르게 제작해 드립니다</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-skyblue/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckIcon />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">24시간 온라인 예약</h4>
                  <p className="text-slate-500 text-sm" style={{ lineHeight: '1.7' }}>링크 하나로 고객이 언제든 예약할 수 있는 시스템</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-skyblue/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckIcon />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">알림톡 자동 발송</h4>
                  <p className="text-slate-500 text-sm" style={{ lineHeight: '1.7' }}>예약 확인, 리마인드, 감사 메시지까지 자동으로</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-skyblue/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckIcon />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">고객·리뷰 통합 관리</h4>
                  <p className="text-slate-500 text-sm" style={{ lineHeight: '1.7' }}>방문 이력·단골 관리·재방문 알림·후기 수집까지 한 번에</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
