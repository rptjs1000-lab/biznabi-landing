'use client'

import { useEffect, useRef, useState } from 'react'

const SLIDES = [
  '/hero/slide-1.jpg',
  '/hero/slide-2.jpg',
  '/hero/slide-4.jpg',
]

export default function Hero() {
  const [active, setActive] = useState(0)
  const prevRef = useRef(0) // 직전 슬라이드 (페이드인 동안 밑에 깔아 둠)

  const goTo = (next: number) => {
    setActive((cur) => {
      prevRef.current = cur
      return next
    })
  }

  // 배경 슬라이드 자동 전환 (5초)
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((cur) => {
        prevRef.current = cur
        return (cur + 1) % SLIDES.length
      })
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // 카피 fade-up 애니메이션
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
    <section id="hero" className="relative min-h-screen overflow-hidden bg-navy">
      {/* 배경 슬라이드쇼 (isolate: 슬라이드 z-index를 이 안에 가둬 오버레이를 가리지 않게) */}
      <div className="absolute inset-0 isolate">
        {SLIDES.map((src, i) => {
          const isActive = i === active
          const isPrev = i === prevRef.current
          return (
            <div
              key={src}
              className="absolute inset-0 bg-cover bg-center ease-in-out"
              style={{
                backgroundImage: `url(${src})`,
                // 활성·직전 슬라이드는 떠 있고(꽉 채움), 활성만 페이드인
                opacity: isActive || isPrev ? 1 : 0,
                zIndex: isActive ? 2 : isPrev ? 1 : 0,
                transitionProperty: 'opacity',
                transitionDuration: isActive ? '1500ms' : '0ms',
              }}
              aria-hidden="true"
            />
          )
        })}
      </div>

      {/* 가독성 확보용 네이비 오버레이 (좌측 진하게) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(9,29,56,0.82) 0%, rgba(11,37,69,0.76) 50%, rgba(9,29,56,0.86) 100%)',
        }}
        aria-hidden="true"
      />

      {/* 카피 */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-20 md:pt-0">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-skyblue font-bold text-sm md:text-base tracking-wide mb-4 fade-up">
              주문 제작 소프트웨어 · <span className="text-white">떠나지 않는 기술 파트너</span>
            </p>
            <h1
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 fade-up"
              style={{ lineHeight: '1.3', wordBreak: 'keep-all' }}
            >
              기술은 저희가 만들게요.<br />비즈니스에만 집중하세요.
            </h1>
            <div
              className="w-12 h-1 rounded-full mb-6 mx-auto fade-up"
              style={{ background: 'linear-gradient(to right, #4AADCF, #7DD3E8)' }}
            />
            <p
              className="text-base sm:text-lg text-slate-200 mb-10 fade-up"
              style={{ lineHeight: '1.8', wordBreak: 'keep-all' }}
            >
              홈페이지부터 앱·자동화·AI까지, 필요한 건 모듈 단위로 만들고<br />
              <span className="font-bold text-white">납기 후에도 함께하는</span> 기술 파트너입니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 fade-up justify-center">
              <a
                href="https://pf.kakao.com/_xhGMjX/chat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="카카오톡 채널 비즈나비에서 무료 상담 받기 (새 창)"
                className="bg-white text-navy font-bold px-7 py-3.5 rounded-xl text-base shadow-lg shadow-black/30 hover:bg-slate-100 transition-all text-center"
              >
                무료 상담 받기
              </a>
              <a
                href="#pain-point"
                onClick={(e) => handleClick(e, '#pain-point')}
                className="border-2 border-white/40 text-white font-semibold px-7 py-3.5 rounded-xl text-base hover:bg-white hover:text-navy transition-all text-center"
              >
                서비스 알아보기
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 슬라이드 인디케이터 */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`슬라이드 ${i + 1}로 이동`}
            className="h-2 rounded-full transition-all duration-300"
            style={{
              width: i === active ? '28px' : '8px',
              background: i === active ? '#7DD3E8' : 'rgba(255,255,255,0.4)',
            }}
          />
        ))}
      </div>
    </section>
  )
}
