'use client'

import { useEffect } from 'react'

const packs = [
  {
    number: '①',
    title: '랜딩 페이지',
    desc: '청소업체 홍보·견적 문의 받는 마케팅 홈페이지. 카톡 채널 연결 + SEO 기본 포함.',
  },
  {
    number: '②',
    title: '사장 대시보드',
    desc: '문의·일정·견적·고객·매출·직원을 한 화면에서 관리. PC·태블릿 사용.',
  },
  {
    number: '③',
    title: '직원 PWA',
    desc: '핸드폰 홈화면 추가 → 앱처럼 사용. 현장 체크인·사진·체크리스트·완료 보고까지.',
  },
]

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
            <p className="text-blue font-semibold text-sm mb-3 fade-up">비즈나비 3-Pack 솔루션</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy mb-6 fade-up" style={{ wordBreak: 'keep-all', lineHeight: '1.4' }}>
              청소·인테리어 사장님을 위한<br />통합 운영 시스템
            </h2>
            <p className="text-slate-600 text-base md:text-lg mb-8 fade-up" style={{ lineHeight: '1.8', wordBreak: 'keep-all' }}>
              홈페이지·운영·현장을 한 흐름으로. 마케팅부터 직원 관리까지 한 시스템에서 해결하는 3-Pack 구성입니다.
            </p>

            <div className="space-y-5 fade-up">
              {packs.map((p, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-skyblue/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-skyblue font-extrabold text-xl">{p.number}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">{p.title}</h4>
                    <p className="text-slate-500 text-sm" style={{ lineHeight: '1.7', wordBreak: 'keep-all' }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
