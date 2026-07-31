'use client'

import { useEffect } from 'react'

// 불만(왼쪽) ↔ 비즈나비의 답(오른쪽) 1:1 대조. 아이콘 없이 타이포·여백·명도만으로 구분한다.
const ROWS = [
  {
    complaint: '납기 끝나면 연락이 끊겨요',
    detail: '유지보수가 필요할 때 찾으면 외주는 이미 떠나고 없어요.',
    title: '떠나지 않습니다',
    answer: '납기 후에도 유지보수·기능 추가까지 함께하는 지속 파트너로 남습니다.',
  },
  {
    complaint: '프리랜서는 갑자기 끊겨요',
    detail: '한 사람에게만 맡겼다가 부재·잠수로 일이 멈춰요.',
    title: '멈추지 않습니다',
    answer: '1인 의존이 아니라 파트너 네트워크로, 한 사람의 부재에 일이 멈추지 않습니다.',
  },
  {
    complaint: '에이전시는 견적부터 부담이에요',
    detail: '작은 기능 하나에도 풀패키지 단가라 시작이 망설여져요.',
    title: '필요한 만큼만',
    answer: '풀패키지 강요 없이, 지금 필요한 기능부터 모듈 단위로 작게 시작할 수 있습니다.',
  },
  {
    complaint: '자동화는 막막하기만 해요',
    detail: '반복 업무는 쌓이는데 뭘 어떻게 도입할지 모르겠어요.',
    title: '막막하지 않게',
    answer: '무엇을 자동화할지부터 함께 설계하고, 사장님이 모르던 부분까지 역제안합니다.',
  },
]

export default function Answers() {
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

    const section = document.getElementById('pain-point')
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
    <section id="pain-point" className="py-20 md:py-28 bg-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-skyblue font-semibold text-sm mb-3 fade-up">혹시 이런 일, 겪어보셨나요?</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white fade-up leading-[1.4] break-keep">
            외주 맡겼다가 답답했던 것들,<br className="sm:hidden" /> 비즈나비는 이렇게 풉니다
          </h2>
        </div>

        {/* 상담 대화체 — 왼쪽 말풍선 = 사장님의 불만 / 오른쪽 말풍선 = 비즈나비의 답 */}
        <div id="solution" className="max-w-3xl mx-auto space-y-12 md:space-y-14">
          {ROWS.map((r) => (
            <div key={r.title} className="space-y-3 fade-up">
              {/* 사장님 */}
              <div className="flex">
                <div className="max-w-[88%] sm:max-w-[78%] bg-white/[0.07] rounded-2xl rounded-tl-md px-5 py-4">
                  <p className="text-white/85 text-base md:text-lg break-keep">{r.complaint}</p>
                  <p className="text-white/55 text-sm mt-1.5 break-keep">{r.detail}</p>
                </div>
              </div>

              {/* 비즈나비 */}
              <div className="flex justify-end">
                <div className="max-w-[88%] sm:max-w-[78%] bg-blue rounded-2xl rounded-tr-md px-5 py-4">
                  <p className="text-white font-bold text-base md:text-lg break-keep">{r.title}</p>
                  <p className="text-white/90 text-sm mt-1.5 break-keep">{r.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
