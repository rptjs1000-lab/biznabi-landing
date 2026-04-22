'use client'

import { useEffect } from 'react'

const features = [
  {
    title: '온라인 예약 위젯',
    desc: (
      <>
        링크 하나로 고객이 24시간 예약 가능.<br />
        카카오톡, 인스타 등 어디서든 공유하세요.
      </>
    ),
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
      </svg>
    ),
  },
  {
    title: '매장 관리 대시보드',
    desc: (
      <>
        예약, 고객, 방문 현황을 한눈에 파악.<br />
        데이터 기반으로 매장을 운영하세요.
      </>
    ),
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: '알림톡 자동 발송',
    desc: (
      <>
        예약 확인, 전날 리마인드, 방문 후 감사 메시지까지<br />
        카카오 알림톡으로 자동 전송.
      </>
    ),
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    title: '맞춤 홈페이지',
    desc: (
      <>
        업종별로 최적화된 전문 홈페이지.<br />
        모바일 반응형, SEO 최적화 기본 포함.
      </>
    ),
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
]

export default function Features() {
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

    const section = document.getElementById('features')
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
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue font-semibold text-sm mb-3 fade-up">주요 기능</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy fade-up">
            비즈니스 운영에 필요한 모든 기능
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {features.map((feature, i) => (
            <div key={i} className="bg-slate-50 rounded-2xl p-7 card-hover fade-up text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue to-skyblue flex items-center justify-center mx-auto mb-5">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-navy mb-2" style={{ wordBreak: 'keep-all' }}>{feature.title}</h3>
              <p className="text-slate-500 text-sm" style={{ lineHeight: '1.7', wordBreak: 'keep-all' }}>{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* 맞춤 자동화 개발 배너 */}
        <div className="mt-10 fade-up">
          <div
            className="rounded-2xl p-7 md:p-10 text-white shadow-lg flex flex-col md:flex-row items-center gap-6 md:gap-8"
            style={{ background: 'linear-gradient(135deg, #1B6AAA 0%, #0A2540 100%)' }}
          >
            <div className="shrink-0 w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
              <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.127c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.127.332-.183.582-.495.644-.869l.214-1.281z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="flex-1 text-center md:text-left" style={{ wordBreak: 'keep-all' }}>
              <p className="text-sm font-semibold mb-2" style={{ color: '#B6D9EC' }}>맞춤 자동화 개발</p>
              <h3 className="text-xl md:text-2xl font-bold mb-2">필요한 자동화가 따로 있나요?</h3>
              <p className="text-sm md:text-base opacity-90" style={{ lineHeight: '1.7' }}>
                매장·업종별 고유 업무 흐름에 맞춘 자동화 기능을<br />
                상담을 통해 개별 설계·개발해드립니다.<br />
                공개 리스트에 없는 기능도 가능합니다.
              </p>
            </div>
            <a
              href="https://pf.kakao.com/_xhGMjX/chat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="카카오톡 채널 비즈나비에서 맞춤 자동화 상담하기 (새 창)"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm md:text-base transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#FEE500', color: '#191919' }}
            >
              맞춤 상담 문의
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
