'use client'

import { useEffect, useRef, useState } from 'react'

const SLIDES = [
  '/hero/slide-1.jpg',
  '/hero/slide-2.jpg',
  '/hero/slide-4.jpg',
]

export default function Hero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const prevRef = useRef(0) // 직전 슬라이드 (페이드인 동안 밑에 깔아 둠)

  const goTo = (next: number) => {
    setActive((cur) => {
      prevRef.current = cur
      return next
    })
  }

  // reduced-motion 사용자는 자동 전환·크로스페이드 정지 상태로 시작
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReducedMotion(true)
      setPaused(true)
    }
  }, [])

  // 배경 슬라이드 자동 전환 (5초, 일시정지 시 멈춤)
  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setActive((cur) => {
        prevRef.current = cur
        return (cur + 1) % SLIDES.length
      })
    }, 5000)
    return () => clearInterval(timer)
  }, [paused])

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
                transitionDuration: isActive && !reducedMotion ? '1500ms' : '0ms',
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
              홈페이지부터 앱·자동화·AI까지,
              <br className="sm:hidden" />{' '}
              필요한 건 모듈 단위로 만들고{' '}
              <br />
              <span className="font-bold text-white">납기 후에도 함께하는</span> 기술 파트너입니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 fade-up justify-center">
              <a
                href="https://pf.kakao.com/_xhGMjX/chat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="카카오톡 채널 비즈나비에서 무료 상담 받기 (새 창)"
                className="bg-white text-navy font-bold px-7 py-3.5 rounded-xl text-base shadow-lg shadow-black/30 hover:bg-slate-100 transition-colors text-center"
              >
                무료 상담 받기
              </a>
              <a
                href="#pain-point"
                onClick={(e) => handleClick(e, '#pain-point')}
                className="border-2 border-white/40 text-white font-semibold px-7 py-3.5 rounded-xl text-base hover:bg-white hover:text-navy transition-colors text-center"
              >
                서비스 알아보기
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 슬라이드 인디케이터 + 일시정지 (Reicon pause/play) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        <button
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? '슬라이드쇼 재생' : '슬라이드쇼 일시정지'}
          className="p-3 text-white/70 hover:text-white transition-colors"
        >
          {paused ? (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.23832 3.04445C5.65196 2.1818 3.75 3.31957 3.75 5.03299L3.75 18.9672C3.75 20.6806 5.65196 21.8184 7.23832 20.9557L20.0503 13.9886C21.6499 13.1188 21.6499 10.8814 20.0503 10.0116L7.23832 3.04445ZM2.25 5.03299C2.25 2.12798 5.41674 0.346438 7.95491 1.72669L20.7669 8.6938C23.411 10.1317 23.411 13.8685 20.7669 15.3064L7.95491 22.2735C5.41674 23.6537 2.25 21.8722 2.25 18.9672L2.25 5.03299Z" fill="currentColor"/>
            </svg>
          ) : (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.948 1.25H6.052C6.95048 1.24997 7.6997 1.24995 8.29448 1.32991C8.92228 1.41432 9.48908 1.59999 9.94455 2.05546C10.4 2.51093 10.5857 3.07773 10.6701 3.70552C10.7501 4.30031 10.75 5.04953 10.75 5.94801V18.052C10.75 18.9505 10.7501 19.6997 10.6701 20.2945C10.5857 20.9223 10.4 21.4891 9.94455 21.9445C9.48908 22.4 8.92228 22.5857 8.29448 22.6701C7.6997 22.7501 6.95048 22.75 6.052 22.75H5.94801C5.04953 22.75 4.30031 22.7501 3.70552 22.6701C3.07773 22.5857 2.51093 22.4 2.05546 21.9445C1.59999 21.4891 1.41432 20.9223 1.32991 20.2945C1.24995 19.6997 1.24997 18.9505 1.25 18.052V5.948C1.24997 5.04952 1.24995 4.3003 1.32991 3.70552C1.41432 3.07773 1.59999 2.51093 2.05546 2.05546C2.51093 1.59999 3.07773 1.41432 3.70552 1.32991C4.3003 1.24995 5.04952 1.24997 5.948 1.25ZM3.90539 2.81654C3.44393 2.87858 3.24644 2.9858 3.11612 3.11612C2.9858 3.24644 2.87858 3.44393 2.81654 3.90539C2.7516 4.38843 2.75 5.03599 2.75 6V18C2.75 18.964 2.7516 19.6116 2.81654 20.0946C2.87858 20.5561 2.9858 20.7536 3.11612 20.8839C3.24644 21.0142 3.44393 21.1214 3.90539 21.1835C4.38843 21.2484 5.03599 21.25 6 21.25C6.96401 21.25 7.61157 21.2484 8.09461 21.1835C8.55607 21.1214 8.75357 21.0142 8.88389 20.8839C9.0142 20.7536 9.12143 20.5561 9.18347 20.0946C9.24841 19.6116 9.25 18.964 9.25 18V6C9.25 5.03599 9.24841 4.38843 9.18347 3.90539C9.12143 3.44393 9.0142 3.24644 8.88389 3.11612C8.75357 2.9858 8.55607 2.87858 8.09461 2.81654C7.61157 2.7516 6.96401 2.75 6 2.75C5.03599 2.75 4.38843 2.7516 3.90539 2.81654ZM17.948 1.25H18.052C18.9505 1.24997 19.6997 1.24995 20.2945 1.32991C20.9223 1.41432 21.4891 1.59999 21.9445 2.05546C22.4 2.51093 22.5857 3.07773 22.6701 3.70552C22.7501 4.30031 22.75 5.04953 22.75 5.94801V18.052C22.75 18.9505 22.7501 19.6997 22.6701 20.2945C22.5857 20.9223 22.4 21.4891 21.9445 21.9445C21.4891 22.4 20.9223 22.5857 20.2945 22.6701C19.6997 22.7501 18.9505 22.75 18.052 22.75H17.948C17.0495 22.75 16.3003 22.7501 15.7055 22.6701C15.0777 22.5857 14.5109 22.4 14.0555 21.9445C13.6 21.4891 13.4143 20.9223 13.3299 20.2945C13.2499 19.6997 13.25 18.9505 13.25 18.052V5.94801C13.25 5.04953 13.2499 4.3003 13.3299 3.70552C13.4143 3.07773 13.6 2.51093 14.0555 2.05546C14.5109 1.59999 15.0777 1.41432 15.7055 1.32991C16.3003 1.24995 17.0495 1.24997 17.948 1.25ZM15.9054 2.81654C15.4439 2.87858 15.2464 2.9858 15.1161 3.11612C14.9858 3.24644 14.8786 3.44393 14.8165 3.90539C14.7516 4.38843 14.75 5.03599 14.75 6V18C14.75 18.964 14.7516 19.6116 14.8165 20.0946C14.8786 20.5561 14.9858 20.7536 15.1161 20.8839C15.2464 21.0142 15.4439 21.1214 15.9054 21.1835C16.3884 21.2484 17.036 21.25 18 21.25C18.964 21.25 19.6116 21.2484 20.0946 21.1835C20.5561 21.1214 20.7536 21.0142 20.8839 20.8839C21.0142 20.7536 21.1214 20.5561 21.1835 20.0946C21.2484 19.6116 21.25 18.964 21.25 18V6C21.25 5.03599 21.2484 4.38843 21.1835 3.90539C21.1214 3.44393 21.0142 3.24644 20.8839 3.11612C20.7536 2.9858 20.5561 2.87858 20.0946 2.81654C19.6116 2.7516 18.964 2.75 18 2.75C17.036 2.75 16.3884 2.7516 15.9054 2.81654Z" fill="currentColor"/>
            </svg>
          )}
        </button>
        <div className="flex items-center gap-4">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`슬라이드 ${i + 1}로 이동`}
              aria-current={i === active ? 'true' : undefined}
              className="relative h-2 rounded-full transition-[width,background-color] duration-300 after:absolute after:content-[''] after:-inset-2"
              style={{
                width: i === active ? '28px' : '8px',
                background: i === active ? '#7DD3E8' : 'rgba(255,255,255,0.4)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
