'use client'

import { useEffect } from 'react'

// 2인 구조 — "초보한테 맡기기 불안하다"를 정면으로 받는 신뢰 블록.
// 두 개의 색면을 맞붙여 "두 사람, 한 팀"을 형태로 보여준다. 아이콘 없음.
// 사이트는 비즈나비 브랜드 면이라 개인 이름 대신 역할로 표기한다.

export default function Team() {
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

    const section = document.getElementById('team')
    if (section) {
      section.querySelectorAll('.fade-up').forEach((el) => {
        const parent = el.parentElement
        if (parent) {
          const siblings = Array.from(parent.children).filter((c) => c.classList.contains('fade-up'))
          const siblingIndex = siblings.indexOf(el)
          ;(el as HTMLElement).style.transitionDelay = `${siblingIndex * 120}ms`
        }
        fadeObserver.observe(el)
      })
    }

    return () => fadeObserver.disconnect()
  }, [])

  return (
    <section id="team" className="py-20 md:py-28 bg-[#091D38]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-14">
          <p className="text-skyblue font-semibold text-sm mb-3 fade-up">혼자 만들지 않습니다</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white fade-up leading-[1.4] break-keep">
            만드는 사람과,<br className="sm:hidden" /> 지켜보는 사람
          </h2>
        </div>

        {/* 맞붙은 두 색면 = 두 사람, 한 팀 */}
        <div className="rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 fade-up">
          <div className="bg-white/[0.07] px-8 py-10 md:px-10 md:py-14">
            <p className="text-white/60 text-sm font-semibold mb-4">만드는 사람</p>
            <p className="text-4xl md:text-5xl font-extrabold text-white mb-5 break-keep">직접</p>
            <p className="text-white/70 text-sm md:text-base break-keep">
              기획부터 디자인·개발까지 한 사람이 끝까지 맡습니다. 넘겨받는 단계가 없어 말이 중간에 바뀌지 않습니다.
            </p>
          </div>

          <div className="bg-blue px-8 py-10 md:px-10 md:py-14">
            <p className="text-white/90 text-sm font-semibold mb-4">지켜보는 사람</p>
            <p className="text-4xl md:text-5xl font-extrabold text-white mb-5 break-keep">20년차</p>
            <p className="text-white text-sm md:text-base break-keep">
              시니어 개발자가 구조와 위험을 뒤에서 검증합니다. 당장 돌아가는 것과 오래 버티는 것은 다르기 때문입니다.
            </p>
          </div>
        </div>

        <p className="mt-10 text-center text-white/60 text-sm md:text-base break-keep fade-up">
          속도만 있으면 위태롭고, 검증만 있으면 느립니다.
        </p>
      </div>
    </section>
  )
}
