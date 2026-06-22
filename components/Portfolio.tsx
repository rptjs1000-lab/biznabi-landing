'use client'

import { useEffect } from 'react'
import Link from 'next/link'

interface Work {
  title: string
  category: string
  desc: string
  image: string
  href?: string // 외부 라이브 사이트 또는 데모 페이지
  external?: boolean
}

// 직접 제작·운영 중인 소프트웨어 (실제 화면 캡쳐)
const products: Work[] = [
  {
    title: '폐쇄형 공동구매 쇼핑몰',
    category: '공동구매 플랫폼 · 라이브 운영',
    desc: '폐쇄형 공동구매 커머스. 회원·상품·주문·정산까지 운영 중인 실서비스.',
    image: '/portfolio/nangman.png',
  },
  {
    title: 'BizNabi AI',
    category: '로컬 AI 업무 도구',
    desc: 'Ollama 기반 로컬 AI. 챗봇·문서 요약·번역·PPT 작성까지, 구독료 없이 내 PC에서 처리하는 올인원 도구.',
    image: '/portfolio/biznabi-ai.png',
  },
  {
    title: '데이터 수집·분석 대시보드',
    category: '데이터 자동화',
    desc: '흩어진 데이터를 자동 수집하고, 핵심 지표를 한눈에 보이는 대시보드로 정리하는 분석 프로그램.',
    image: '/portfolio/data-analyzer.png',
  },
  {
    title: 'TeacherNote',
    category: '유치원 원생 관리 소프트웨어',
    desc: '원생·반·출결·갤러리를 한 곳에서 관리하는 유치원 운영 프로그램.',
    image: '/portfolio/teachernote.png',
  },
  {
    title: '홈페이지 제작',
    category: '홈페이지 · 랜딩',
    desc: '브랜드에 맞춰 처음부터 디자인하는 반응형 홈페이지·랜딩 페이지.',
    image: '/portfolio/homepage.png',
  },
]

function WorkCard({ work, large }: { work: Work; large?: boolean }) {
  const inner = (
    <>
      <div className="aspect-[16/10] overflow-hidden bg-black/20 relative">
        <img
          src={work.image}
          alt={`${work.title} 화면`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            const img = e.currentTarget
            if (!img.src.endsWith('_placeholder.svg')) img.src = '/portfolio/_placeholder.svg'
          }}
        />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-navy/85 text-white backdrop-blur-sm">
          {work.category}
        </span>
      </div>
      <div className={large ? 'p-6' : 'p-5'}>
        <h3 className={`font-bold text-white mb-1.5 ${large ? 'text-xl' : 'text-lg'}`}>{work.title}</h3>
        <p className="text-sm text-white/55" style={{ wordBreak: 'keep-all', lineHeight: '1.65' }}>
          {work.desc}
        </p>
      </div>
    </>
  )

  const cardClass =
    'group block bg-white/[0.05] rounded-2xl overflow-hidden border-2 border-white/20 hover:border-skyblue/70 hover:shadow-xl transition-all duration-300 fade-up'

  if (work.href && work.external) {
    return (
      <a href={work.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
        {inner}
      </a>
    )
  }
  if (work.href) {
    return (
      <Link href={work.href} className={cardClass}>
        {inner}
      </Link>
    )
  }
  return <div className={cardClass}>{inner}</div>
}

export default function Portfolio() {
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

    const section = document.getElementById('portfolio')
    if (section) {
      section.querySelectorAll('.fade-up').forEach((el) => {
        const parent = el.parentElement
        if (parent) {
          const siblings = Array.from(parent.children).filter((c) => c.classList.contains('fade-up'))
          const siblingIndex = siblings.indexOf(el)
          ;(el as HTMLElement).style.transitionDelay = `${siblingIndex * 80}ms`
        }
        fadeObserver.observe(el)
      })
    }

    return () => fadeObserver.disconnect()
  }, [])

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-skyblue font-semibold text-sm tracking-wider mb-3 fade-up">PORTFOLIO</p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white fade-up"
            style={{ wordBreak: 'keep-all', lineHeight: '1.4' }}
          >
            필요한 소프트웨어,<br className="sm:hidden" /> 상담으로 만들어 드립니다
          </h2>
          <p
            className="text-base md:text-lg text-white/55 mt-4 max-w-2xl mx-auto fade-up"
            style={{ wordBreak: 'keep-all', lineHeight: '1.7' }}
          >
            정해진 패키지가 아니라, 사업에 필요한 걸 듣고 그대로 제작합니다.
          </p>
        </div>

        {/* 제작물 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((w) => (
            <WorkCard key={w.title} work={w} large />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 fade-up">
          <p className="text-white/60 mb-5" style={{ wordBreak: 'keep-all' }}>
            만들고 싶은 소프트웨어가 있으신가요? 어떤 것이든 상담부터 시작합니다.
          </p>
          <a
            href="https://pf.kakao.com/_xhGMjX/chat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="카카오톡 채널 비즈나비에서 무료 상담 받기 (새 창)"
            className="inline-flex items-center gap-2 bg-skyblue hover:bg-skyblue/90 text-navy font-bold px-7 py-3.5 rounded-xl text-base shadow-lg shadow-skyblue/20 transition-all"
          >
            제작 상담 받기
          </a>
        </div>
      </div>
    </section>
  )
}
