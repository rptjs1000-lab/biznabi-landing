'use client'

import { useEffect, useState } from 'react'

const faqs = [
  {
    question: '홈페이지 제작 기간은 얼마나 걸리나요?',
    answer: '업종과 요구사항에 따라 다르지만, 평균적으로 5~7 영업일 이내에 완성됩니다. 예약 자동화만 도입하시는 경우 2~3일이면 세팅이 완료됩니다.',
  },
  {
    question: 'IT를 잘 모르는데 사용할 수 있나요?',
    answer: '물론입니다. 비즈나비는 IT에 익숙하지 않은 소상공인 분들을 위해 설계되었습니다. 직관적인 대시보드와 1:1 교육을 제공하며, 운영 중에도 지속적으로 지원해드립니다.',
  },
  {
    question: '알림톡 발송 비용은 별도인가요?',
    answer: '알림톡 발송 비용은 카카오 정책에 따라 건당 약 8~15원 정도이며, 월 유지보수 비용에 기본 발송량이 포함됩니다. 자세한 내용은 상담 시 안내드립니다.',
  },
  {
    question: '기존 홈페이지가 있어도 예약 시스템만 추가할 수 있나요?',
    answer: '네, 가능합니다. 예약 자동화 패키지를 선택하시면 기존 홈페이지에 예약 링크만 연동하여 사용하실 수 있습니다. 별도의 홈페이지 제작 없이도 이용 가능합니다.',
  },
  {
    question: '계약 기간에 제한이 있나요?',
    answer: '최소 계약 기간은 없습니다. 월 단위로 유지보수를 이용하시며, 언제든지 해지 가능합니다. 초기 설정비만 1회 결제하시면 됩니다.',
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

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

    const section = document.getElementById('faq')
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

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue font-semibold text-sm mb-3 fade-up">자주 묻는 질문</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy fade-up">FAQ</h2>
        </div>

        <div className="space-y-0 fade-up">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item border-b border-slate-200 ${activeIndex === i ? 'active' : ''}`}>
              <button
                className="faq-trigger w-full flex items-center justify-between py-5 text-left"
                onClick={() => toggle(i)}
                aria-expanded={activeIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="font-semibold text-navy pr-4">{faq.question}</span>
                <span className="faq-icon text-blue text-xl font-light shrink-0" aria-hidden="true">+</span>
              </button>
              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-hidden={activeIndex !== i}
                className={`faq-answer ${activeIndex === i ? 'open' : ''}`}
              >
                <p className="pb-5 text-slate-500 text-sm" style={{ lineHeight: '1.7' }}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
