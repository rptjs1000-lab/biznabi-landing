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
    <section id="packages" className="py-20 md:py-28 bg-[#FAF5EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue font-semibold text-sm mb-3 fade-up">필요한 만큼만, 3-Pack 구성</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy fade-up">
            홈페이지부터 운영 시스템까지<br className="sm:hidden" /> 한 파트너에서
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Pack ① — 랜딩 페이지 */}
          <div className="bg-white rounded-2xl p-7 shadow-lg card-hover fade-up border border-slate-100 flex flex-col">
            <div className="mb-5">
              <p className="text-skyblue text-xs font-bold mb-2">① 랜딩 페이지</p>
              <h3 className="text-xl font-bold text-navy mb-2">홈페이지 제작</h3>
              <p className="text-slate-500 text-sm" style={{ lineHeight: '1.7' }}>업종 맞춤 반응형 홈페이지로 견적 문의를 받으세요</p>
            </div>
            <div className="border-t border-slate-100 pt-5 mb-6">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-space text-4xl font-bold text-navy">80</span>
                <span className="text-lg font-semibold text-navy">만원~</span>
                <span className="text-slate-500 text-sm ml-1">/ 일회</span>
              </div>
              <p className="text-skyblue text-xs font-semibold mb-5">기본 5페이지 이내 · 반응형 · SEO 기본</p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  업종 맞춤 디자인 + 반응형
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  카톡 상담 버튼 + 견적 문의 폼
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  기본 SEO (메타·사이트맵·OG)
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-400">
                  <span className="text-xs">+ 페이지 확장·갤러리·견적계산기 등 옵션 추가 가능</span>
                </li>
              </ul>
            </div>
            <a
              href="https://pf.kakao.com/_xhGMjX/chat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="카카오톡 채널 비즈나비에서 상담하기 (새 창)"
              className="mt-auto block text-center border-2 border-navy text-navy font-semibold py-3 rounded-xl hover:bg-navy hover:text-white transition-all text-sm"
            >
              상담 신청
            </a>
          </div>

          {/* Pack ② — 사장 대시보드 */}
          <div className="bg-white rounded-2xl p-7 shadow-lg card-hover fade-up border-2 border-skyblue flex flex-col relative">
            <div className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: 'linear-gradient(135deg, #4AADCF, #1B6AAA)' }}>핵심 운영</div>
            <div className="mb-5">
              <p className="text-skyblue text-xs font-bold mb-2">② 사장 대시보드</p>
              <h3 className="text-xl font-bold text-navy mb-2">운영 시스템</h3>
              <p className="text-slate-500 text-sm" style={{ lineHeight: '1.7' }}>문의·일정·견적·고객·직원을 한 화면에서 관리</p>
            </div>
            <div className="border-t border-slate-100 pt-5 mb-6">
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-space text-4xl font-bold text-navy">100</span>
                <span className="text-lg font-semibold text-navy">만원~</span>
                <span className="text-slate-500 text-sm ml-1">셋업</span>
              </div>
              <p className="text-slate-500 text-sm mb-5">+ <span className="font-bold text-navy">월 5만원~</span> 구독</p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  카톡 문의 자동 접수·답변
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  일정 캘린더·직원 배정
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  견적서 자동 생성·발송
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  고객 DB·정기 청구
                </li>
              </ul>
            </div>
            <a
              href="https://pf.kakao.com/_xhGMjX/chat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="카카오톡 채널 비즈나비에서 상담하기 (새 창)"
              className="mt-auto block text-center btn-primary text-white font-semibold py-3 rounded-xl text-sm"
            >
              상담 신청
            </a>
          </div>

          {/* Pack ③ — 직원 PWA */}
          <div className="bg-white rounded-2xl p-7 shadow-lg card-hover fade-up border border-slate-100 flex flex-col">
            <div className="mb-5">
              <p className="text-skyblue text-xs font-bold mb-2">③ 직원 PWA</p>
              <h3 className="text-xl font-bold text-navy mb-2">현장 모바일</h3>
              <p className="text-slate-500 text-sm" style={{ lineHeight: '1.7' }}>직원이 현장에서 핸드폰으로 바로 사용</p>
            </div>
            <div className="border-t border-slate-100 pt-5 mb-6">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-space text-2xl font-bold text-navy">사장 대시보드</span>
              </div>
              <p className="text-skyblue text-xs font-semibold mb-5">구독에 포함 (5명까지) · 앱스토어 설치 X</p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  핸드폰 홈화면 추가 (PWA)
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  오늘 일정·현장 위치 확인
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  현장 체크인·사진·체크리스트
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckSvg />
                  완료 보고 → 사장님께 자동 통보
                </li>
              </ul>
            </div>
            <a
              href="https://pf.kakao.com/_xhGMjX/chat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="카카오톡 채널 비즈나비에서 상담하기 (새 창)"
              className="mt-auto block text-center border-2 border-navy text-navy font-semibold py-3 rounded-xl hover:bg-navy hover:text-white transition-all text-sm"
            >
              상담 신청
            </a>
          </div>
        </div>

        {/* 풀세트 번들 할인 배너 */}
        <div className="max-w-6xl mx-auto mt-10 fade-up">
          <div className="rounded-2xl p-6 md:p-8 text-white text-center shadow-lg" style={{ background: 'linear-gradient(135deg, #1B6AAA 0%, #0A2540 100%)' }}>
            <p className="text-sm font-semibold mb-2" style={{ color: '#B6D9EC' }}>💡 풀세트로 시작하면 가장 이득입니다</p>
            <h3 className="text-xl md:text-2xl font-bold mb-2">3-Pack 풀세트 + 자체 도메인 연결 시 셋업비 25% 할인</h3>
            <p className="text-sm opacity-90" style={{ lineHeight: '1.7' }}>
              사장님 회사 도메인(예: cleanco.com)에 홈페이지·사장 대시보드·직원 PWA를 모두 연결할 수 있습니다.
            </p>
          </div>
        </div>

        <p className="text-center text-slate-400 text-sm mt-8 fade-up">
          * 부가세 별도 · 상세 옵션·모듈 가격은 상담 시 맞춤 견적으로 안내드립니다 ·
          첫 결제는 계좌이체, 향후 카드 자동결제 추가 예정
        </p>
      </div>
    </section>
  )
}
