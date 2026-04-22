'use client'

import { useEffect } from 'react'

const INQUIRY_EXAMPLES = [
  '홈페이지 제작 견적·기간 문의',
  '예약·고객 자동화 패키지 설치 문의',
  '번들(홈페이지 + 자동화) 할인 적용 문의',
  '업종별 맞춤 기능 제안 요청',
]

export default function Contact() {
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

    const section = document.getElementById('contact')
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
    <section id="contact" className="contact-bg py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue font-semibold text-sm mb-3 fade-up">무료 상담</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy mb-4 fade-up">
            비즈니스 자동화, 비즈나비와 함께 시작하세요
          </h2>
          <p className="text-slate-500 fade-up" style={{ lineHeight: '1.7' }}>
            복잡한 폼 없이 카카오톡으로 편하게 문의하세요.<br />
            평일 1영업일 이내 답변드립니다.
          </p>
        </div>

        <a
          href="https://pf.kakao.com/_xhGMjX/chat"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="카카오톡 채널 비즈나비에서 바로 상담하기 (새 창)"
          className="fade-up group block rounded-2xl shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1"
          style={{ backgroundColor: '#FEE500' }}
        >
          <div className="flex flex-col items-center text-center p-8 md:p-12">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center mb-5 shadow-sm">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="md:w-10 md:h-10">
                <path d="M12 3C6.48 3 2 6.58 2 11c0 2.85 1.86 5.36 4.68 6.8-.2.7-.72 2.55-.82 2.95-.13.5.18.5.4.36.17-.11 2.66-1.8 3.73-2.52.66.1 1.34.16 2.01.16 5.52 0 10-3.58 10-8S17.52 3 12 3z" fill="#191919"/>
              </svg>
            </div>
            <p className="text-sm font-semibold mb-1" style={{ color: '#5C4A00' }}>카카오톡 채널 @비즈나비</p>
            <h3 className="text-xl md:text-2xl font-extrabold mb-5" style={{ color: '#191919' }}>
              카카오톡으로 바로 상담하기
            </h3>
            <div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-base transition-transform group-hover:scale-105"
              style={{ backgroundColor: '#191919', color: '#FEE500' }}
            >
              지금 바로 문의하기
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-xs mt-4" style={{ color: '#5C4A00' }}>평일 10:00 ~ 18:00 · 주말/공휴일은 다음 영업일 답변</p>
          </div>
        </a>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mt-6 fade-up">
          <p className="text-sm font-semibold text-navy mb-4">이런 문의를 환영합니다</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {INQUIRY_EXAMPLES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0 mt-0.5">
                  <path d="M5 12l5 5L20 7" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
