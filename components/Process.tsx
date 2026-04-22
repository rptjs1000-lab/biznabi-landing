'use client'

import { useEffect } from 'react'

const steps = [
  { num: '1', title: '상담 문의', descDesktop: '카카오톡 채널에서\n편하게 문의하세요', descMobile: '카카오톡 채널에서 편하게 문의하세요', gradient: 'from-skyblue to-blue' },
  { num: '2', title: '요구사항 분석', descDesktop: '비즈니스 특성과 필요한\n기능을 파악합니다', descMobile: '비즈니스 특성과 필요한 기능을 파악합니다', gradient: 'from-skyblue to-blue' },
  { num: '3', title: '제작 / 설정', descDesktop: '홈페이지 제작과\n시스템 세팅을 진행합니다', descMobile: '홈페이지 제작과 시스템 세팅을 진행합니다', gradient: 'from-skyblue to-blue' },
  { num: '4', title: '교육', descDesktop: '대시보드 사용법을\n쉽게 알려드립니다', descMobile: '대시보드 사용법을 쉽게 알려드립니다', gradient: 'from-skyblue to-blue' },
  { num: '5', title: '운영 시작', descDesktop: '비즈니스 자동화를\n시작합니다', descMobile: '비즈니스 자동화를 시작합니다', gradient: 'from-navy to-blue' },
]

export default function Process() {
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

    const section = document.getElementById('process')
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
    <section id="process" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue font-semibold text-sm mb-3 fade-up">도입 프로세스</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy fade-up">
            5단계로 간편하게 시작하세요
          </h2>
        </div>

        {/* Desktop Process (horizontal) */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connector Line */}
            <div className="absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-skyblue via-blue to-navy"></div>

            <div className="grid grid-cols-5 gap-4 relative">
              {steps.map((step, i) => (
                <div key={i} className="text-center fade-up">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg`}>
                    <span className="font-space text-lg font-bold text-white">{step.num}</span>
                  </div>
                  <h4 className="font-bold text-navy text-sm mb-1">{step.title}</h4>
                  <p className="text-slate-500 text-xs" style={{ lineHeight: '1.6' }}>
                    {step.descDesktop.split('\n').map((line, j) => (
                      <span key={j}>
                        {line}
                        {j < step.descDesktop.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Process (vertical) */}
        <div className="md:hidden space-y-6">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start gap-4 fade-up">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shrink-0 shadow-md`}>
                <span className="font-space text-sm font-bold text-white">{step.num}</span>
              </div>
              <div>
                <h4 className="font-bold text-navy text-sm">{step.title}</h4>
                <p className="text-slate-500 text-xs mt-1" style={{ lineHeight: '1.6' }}>{step.descMobile}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
