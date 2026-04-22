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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=90"
          alt="모던 비즈니스 오피스"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p
          className="text-white font-bold text-sm md:text-base tracking-wide mb-4 fade-up"
          style={{ textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}
        >
          비즈니스 자동화 에이전시
        </p>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 fade-up"
          style={{ lineHeight: '1.4' }}
        >
          당신의 비즈니스에<br />날개를 달아드립니다
        </h1>
        <p
          className="text-base sm:text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto fade-up"
          style={{ lineHeight: '1.7' }}
        >
          업종 맞춤 홈페이지부터 예약·고객 자동화까지<br />
          소상공인의 디지털 전환을 한 번에
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up">
          <a
            href="https://pf.kakao.com/_xhGMjX/chat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="카카오톡 채널 비즈나비에서 무료 상담하기 (새 창)"
            className="btn-primary text-white font-bold px-8 py-4 rounded-xl text-base shadow-lg shadow-navy/20"
          >
            무료 상담 신청
          </a>
          <a
            href="#pain-point"
            onClick={(e) => handleClick(e, '#pain-point')}
            className="border-2 border-white/60 text-white font-semibold px-8 py-4 rounded-xl text-base hover:bg-white/10 transition-all"
          >
            서비스 알아보기
          </a>
        </div>
      </div>

      {/* Bounce Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bounce-arrow">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
