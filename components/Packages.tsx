'use client'

import { useEffect } from 'react'

const CheckSvg = () => (
  <svg className="w-5 h-5 text-skyblue shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)

export default function Packages() {
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

    const section = document.getElementById('packages')
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
    <section id="packages" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue font-semibold text-sm mb-3 fade-up">서비스 패키지</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy fade-up">
            비즈니스에 맞는 패키지를 선택하세요
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Package 1 — 홈페이지 제작 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg card-hover fade-up border border-slate-100 flex flex-col">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-navy mb-2">홈페이지 제작</h3>
              <p className="text-slate-500 text-sm" style={{ lineHeight: '1.7' }}>업종 맞춤 반응형 홈페이지를 7~10영업일 내 납품합니다</p>
            </div>
            <div className="border-t border-slate-100 pt-6 mb-6">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-space text-4xl font-bold text-navy">80</span>
                <span className="text-lg font-semibold text-navy">만원~</span>
                <span className="text-slate-500 text-sm ml-1">/ 일회</span>
              </div>
              <p className="text-skyblue text-xs font-semibold mb-6">기본 5페이지 이내 · 반응형 · SEO 기본</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  업종 맞춤 디자인
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  반응형 (모바일·태블릿·PC)
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  상담 폼 + 카카오톡 상담 버튼
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  기본 SEO (메타/사이트맵/OG)
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  수정 2회 보장
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-400">
                  <span className="text-xs">+ 페이지 확장·갤러리·블로그·결제 연동 등 옵션 추가 가능</span>
                </li>
              </ul>
            </div>
            <a
              href="https://pf.kakao.com/_xhGMjX/chat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="카카오톡 채널 비즈나비에서 상담하기 (새 창)"
              className="mt-auto block text-center border-2 border-navy text-navy font-semibold py-3.5 rounded-xl hover:bg-navy hover:text-white transition-all"
            >
              상담 신청
            </a>
          </div>

          {/* Package 2 — 비즈나비 자동화 패키지 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg card-hover fade-up border border-slate-100 flex flex-col relative">
            <div className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: 'linear-gradient(135deg, #4AADCF, #1B6AAA)' }}>초기비 무료</div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-navy mb-2">비즈나비 자동화 패키지</h3>
              <p className="text-slate-500 text-sm" style={{ lineHeight: '1.7' }}>예약·고객·알림 자동화. 필요한 기능만 골라서 구독하세요</p>
            </div>
            <div className="border-t border-slate-100 pt-6 mb-6">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-space text-4xl font-bold text-navy">9.9</span>
                <span className="text-lg font-semibold text-navy">만원~</span>
                <span className="text-slate-500 text-sm ml-1">/ 월</span>
              </div>
              <p className="text-skyblue text-xs font-semibold mb-6">초기 세팅비 무료 · 언제든 해지 가능</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  온라인 예약 위젯
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  예약 달력·매장 대시보드
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  알림톡 자동 발송 (확정·리마인드)
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  고객 DB 기초 (연락처·방문이력)
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-400">
                  <span className="text-xs">+ CRM·포인트·리뷰·재방문 알림 등 모듈 추가 가능</span>
                </li>
              </ul>
            </div>
            <a
              href="https://pf.kakao.com/_xhGMjX/chat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="카카오톡 채널 비즈나비에서 상담하기 (새 창)"
              className="mt-auto block text-center border-2 border-navy text-navy font-semibold py-3.5 rounded-xl hover:bg-navy hover:text-white transition-all"
            >
              상담 신청
            </a>
          </div>
        </div>

        {/* 번들 할인 배너 */}
        <div className="max-w-5xl mx-auto mt-8 fade-up">
          <div className="rounded-2xl p-6 md:p-8 text-white text-center shadow-lg" style={{ background: 'linear-gradient(135deg, #1B6AAA 0%, #0A2540 100%)' }}>
            <p className="text-sm font-semibold mb-2" style={{ color: '#B6D9EC' }}>💡 함께 시작하면 더 유리합니다</p>
            <h3 className="text-xl md:text-2xl font-bold mb-2">홈페이지 + 자동화 동시 계약 시 초기비 20% 할인</h3>
            <p className="text-sm opacity-90" style={{ lineHeight: '1.7' }}>홈페이지 80만원 → <span className="font-bold text-white">64만원</span> + 월 9.9만원~ 자동화</p>
          </div>
        </div>

        <p className="text-center text-slate-400 text-sm mt-8 fade-up">* 부가세 별도 / 상세 옵션·모듈 가격은 상담 시 맞춤 견적으로 안내드립니다</p>
      </div>
    </section>
  )
}
