'use client'

import { useEffect } from 'react'

const answers = [
  {
    pain: '납기 끝나면 연락이 끊겨요',
    title: '떠나지 않습니다',
    desc: '납기 후에도 유지보수·기능 추가까지 함께하는 지속 파트너로 남습니다.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    ),
  },
  {
    pain: '프리랜서는 갑자기 끊겨요',
    title: '멈추지 않습니다',
    desc: '1인 의존이 아니라 파트너 네트워크로, 한 사람의 부재에 일이 멈추지 않습니다.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    pain: '에이전시는 견적부터 부담',
    title: '필요한 만큼만',
    desc: '풀패키지 강요 없이, 지금 필요한 기능부터 모듈 단위로 작게 시작할 수 있습니다.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
      </svg>
    ),
  },
  {
    pain: '자동화는 막막하기만 해요',
    title: '막막하지 않게',
    desc: '무엇을 자동화할지부터 함께 설계하고, 사장님이 모르던 부분까지 역제안합니다.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
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
    <section id="solution" className="py-20 md:py-28 bg-[#091D38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-skyblue font-semibold text-sm mb-3 fade-up">그래서, 비즈나비는</p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white fade-up"
            style={{ wordBreak: 'keep-all', lineHeight: '1.4' }}
          >
            외주의 답답함,<br className="sm:hidden" /> 비즈나비는 이렇게 풉니다
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {answers.map((a, i) => (
            <div
              key={i}
              className="bg-white/[0.04] rounded-2xl p-7 border border-white/10 card-hover fade-up"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue to-skyblue text-white flex items-center justify-center mb-5">
                {a.icon}
              </div>
              <p className="text-xs text-white/40 mb-1.5" style={{ wordBreak: 'keep-all' }}>
                &ldquo;{a.pain}&rdquo;
              </p>
              <h3 className="text-lg font-bold text-white mb-2.5" style={{ wordBreak: 'keep-all' }}>
                {a.title}
              </h3>
              <p className="text-white/60 text-sm" style={{ lineHeight: '1.7', wordBreak: 'keep-all' }}>
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
