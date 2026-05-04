'use client'

import { useEffect } from 'react'

export default function Hero() {
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

    const section = document.getElementById('hero')
    if (section) {
      section.querySelectorAll('.fade-up').forEach((el, index) => {
        ;(el as HTMLElement).style.transitionDelay = `${index * 100}ms`
        fadeObserver.observe(el)
      })
    }

    return () => fadeObserver.disconnect()
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    if (targetId === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const target = document.querySelector(targetId)
    if (target) {
      const offset = 80
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
      style={{ background: 'linear-gradient(to right, #FAF5EC 0%, #F5EEE0 60%, #F0E6D2 100%)' }}
    >
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center pt-20 md:pt-0">
        {/* Left: Copy */}
        <div className="px-6 sm:px-10 md:pl-10 md:pr-6 lg:pl-14 lg:pr-8 py-12 md:py-0 order-2 md:order-1">
          <div className="max-w-xl mx-auto md:ml-auto md:mr-0">
            <p
              className="text-blue font-bold text-sm md:text-base tracking-wide mb-4 fade-up"
            >
              청소·인테리어 사장님을 위한 <span className="text-navy">자동화 파트너</span>
            </p>
            <h1
              className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-navy mb-6 fade-up"
              style={{ lineHeight: '1.35', wordBreak: 'keep-all' }}
            >
              견적·일정·고객관리,<br />아직도 사장님이 직접<br />다 하고 계신가요?
            </h1>
            <div
              className="w-12 h-1 rounded-full mb-6 fade-up"
              style={{ background: 'linear-gradient(to right, #C9A66B, #A68B6E)' }}
            />
            <p
              className="text-base sm:text-lg text-slate-600 mb-10 fade-up"
              style={{ lineHeight: '1.8', wordBreak: 'keep-all' }}
            >
              반복 업무는 줄이고, 놓치던 고객은 잡아드릴게요.<br />
              사장님은 <span className="font-bold text-navy">더 중요한 일에 집중</span>하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 fade-up">
              <a
                href="https://pf.kakao.com/_xhGMjX/chat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="카카오톡 채널 비즈나비에서 무료 자동화 진단 받기 (새 창)"
                className="btn-primary text-white font-bold px-7 py-3.5 rounded-xl text-base shadow-lg shadow-navy/20 text-center"
              >
                무료 자동화 진단 받기
              </a>
              <a
                href="#pain-point"
                onClick={(e) => handleClick(e, '#pain-point')}
                className="border-2 border-navy/30 text-navy font-semibold px-7 py-3.5 rounded-xl text-base hover:bg-navy hover:text-white transition-all text-center"
              >
                서비스 알아보기
              </a>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative order-1 md:order-2 h-[40vh] sm:h-[50vh] md:h-screen fade-up">
          <img
            src="/hero-partner.png"
            alt="청소·인테리어 사장님과 함께 성장하는 비즈나비 파트너"
            className="w-full h-full object-cover"
            style={{
              objectPosition: '85% center',
              maskImage: 'linear-gradient(to right, transparent 0%, black 18%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 18%)',
            }}
          />
        </div>
      </div>

      {/* Bounce Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bounce-arrow hidden md:block">
        <svg className="w-6 h-6 text-navy/40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
