'use client'

import { useEffect } from 'react'

export default function PainPoint() {
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
    <section id="pain-point" className="py-20 md:py-28 bg-[#FAF5EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue font-semibold text-sm mb-3 fade-up">혹시 이런 고민, 하고 계신가요?</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy fade-up">
            현장 뛰랴, 사장님 혼자<br className="sm:hidden" /> 다 하기 힘드시죠?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {/* Card 1 — 문의 놓침 */}
          <div className="bg-white rounded-2xl p-7 shadow-lg card-hover fade-up text-center">
            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-5 mx-auto">
              <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-navy mb-3" style={{ wordBreak: 'keep-all' }}>문의 놓침으로 매출 손실</h3>
            <p className="text-slate-500 text-sm" style={{ lineHeight: '1.7', wordBreak: 'keep-all' }}>
              바쁜 작업 중 전화·메시지를 놓쳐<br />고객을 잃고 있어요.
            </p>
          </div>

          {/* Card 2 — 일정 꼬임 */}
          <div className="bg-white rounded-2xl p-7 shadow-lg card-hover fade-up text-center">
            <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center mb-5 mx-auto">
              <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-navy mb-3" style={{ wordBreak: 'keep-all' }}>일정 관리가 자주 꼬여요</h3>
            <p className="text-slate-500 text-sm" style={{ lineHeight: '1.7', wordBreak: 'keep-all' }}>
              직원·현장이 수기 관리되다 보니<br />중복·누락이 잦아요.
            </p>
          </div>

          {/* Card 3 — 견적서 번거로움 */}
          <div className="bg-white rounded-2xl p-7 shadow-lg card-hover fade-up text-center">
            <div className="w-14 h-14 rounded-xl bg-sky-50 flex items-center justify-center mb-5 mx-auto">
              <svg className="w-7 h-7 text-sky-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-navy mb-3" style={{ wordBreak: 'keep-all' }}>견적서 작성도 번거로워요</h3>
            <p className="text-slate-500 text-sm" style={{ lineHeight: '1.7', wordBreak: 'keep-all' }}>
              매번 새로 작성하고 찾아보느라<br />시간이 너무 많이 들어요.
            </p>
          </div>

          {/* Card 4 — 반복 업무 */}
          <div className="bg-white rounded-2xl p-7 shadow-lg card-hover fade-up text-center">
            <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-5 mx-auto">
              <svg className="w-7 h-7 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-navy mb-3" style={{ wordBreak: 'keep-all' }}>반복 업무에 하루가 다 갑니다</h3>
            <p className="text-slate-500 text-sm" style={{ lineHeight: '1.7', wordBreak: 'keep-all' }}>
              고객 응대·자료 정리 같은 반복 일에<br />시간을 다 뺏겨요.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
