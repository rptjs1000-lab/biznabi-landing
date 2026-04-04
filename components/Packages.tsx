'use client'

import { useEffect } from 'react'

const CheckSvg = () => (
  <svg className="w-5 h-5 text-skyblue shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)

const CrossSvg = () => (
  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.querySelector('#contact')
    if (target) {
      const offset = 80
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section id="packages" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue font-semibold text-sm mb-3 fade-up">서비스 패키지</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy fade-up">
            비즈니스에 맞는 패키지를 선택하세요
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Package 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg card-hover fade-up border border-slate-100 flex flex-col relative">
            <div className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: 'linear-gradient(135deg, #4AADCF, #1B6AAA)' }}>초기비 무료</div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-navy mb-2">예약 자동화 패키지</h3>
              <p className="text-slate-500 text-sm" style={{ lineHeight: '1.7' }}>홈페이지 없이도 예약 자동화를 바로 시작할 수 있습니다</p>
            </div>
            <div className="border-t border-slate-100 pt-6 mb-6">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-space text-4xl font-bold text-navy">9.9</span>
                <span className="text-lg font-semibold text-navy">만원~</span>
                <span className="text-slate-500 text-sm ml-1">/ 월</span>
              </div>
              <p className="text-skyblue text-xs font-semibold mb-6">초기 설정비 무료</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  온라인 예약 위젯 (링크 공유)
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  매장 관리 대시보드
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  알림톡 자동 발송 (확인/리마인드)
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  고객 데이터 관리
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-400">
                  <CrossSvg />
                  <span>맞춤 홈페이지</span>
                </li>
              </ul>
            </div>
            <a href="#contact" onClick={handleClick} className="mt-auto block text-center border-2 border-navy text-navy font-semibold py-3.5 rounded-xl hover:bg-navy hover:text-white transition-all">
              상담 신청
            </a>
          </div>

          {/* Package 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg card-hover fade-up border border-slate-100 flex flex-col">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-navy mb-2">홈페이지 + 자동화 패키지</h3>
              <p className="text-slate-500 text-sm" style={{ lineHeight: '1.7' }}>전문 홈페이지와 예약 자동화를 한 번에 시작하세요</p>
            </div>
            <div className="border-t border-slate-100 pt-6 mb-6">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-space text-4xl font-bold text-navy">200</span>
                <span className="text-lg font-semibold text-navy">만원~</span>
                <span className="text-slate-500 text-sm ml-1">/ 초기 제작비</span>
              </div>
              <p className="text-slate-500 text-xs mb-6">+ 월 유지비 15만원~</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  온라인 예약 위젯 (링크 공유)
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  매장 관리 대시보드
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  알림톡 자동 발송 (확인/리마인드)
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  고객 데이터 관리
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold text-navy">
                  <CheckSvg />
                  업종별 맞춤 홈페이지
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold text-navy">
                  <CheckSvg />
                  SEO 기본 최적화
                </li>
              </ul>
            </div>
            <a href="#contact" onClick={handleClick} className="mt-auto block text-center border-2 border-navy text-navy font-semibold py-3.5 rounded-xl hover:bg-navy hover:text-white transition-all">
              상담 신청
            </a>
          </div>

          {/* Package 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg card-hover fade-up border border-slate-100 flex flex-col">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-navy mb-2">업무 자동화 패키지</h3>
              <p className="text-slate-500 text-sm" style={{ lineHeight: '1.7' }}>중소기업 반복 업무를 맞춤 자동화 프로그램으로 해결합니다</p>
            </div>
            <div className="border-t border-slate-100 pt-6 mb-6">
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-space text-3xl font-bold text-navy">맞춤 견적</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  견적서/발주서 자동 생성
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  매출/업무 리포트 자동화
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  재고/발주 관리 시스템
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  업무 프로세스 맞춤 개발
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  관리자 대시보드
                </li>
              </ul>
            </div>
            <a href="#contact" onClick={handleClick} className="mt-auto block text-center border-2 border-navy text-navy font-semibold py-3.5 rounded-xl hover:bg-navy hover:text-white transition-all">
              상담 신청
            </a>
          </div>
        </div>

        <p className="text-center text-slate-400 text-sm mt-8 fade-up">* 부가세 별도 / 상세 견적은 상담 시 안내드립니다</p>
      </div>
    </section>
  )
}
