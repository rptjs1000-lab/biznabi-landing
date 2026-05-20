'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleHashClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (!isHome) return
    e.preventDefault()
    setMobileOpen(false)
    if (targetId === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const target = document.querySelector(targetId)
    if (target) {
      const offset = 80
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [isHome])

  const hashHref = (hash: string) => (isHome ? hash : `/${hash}`)
  // 홈: 최상단 투명(흰 글자) → 스크롤 시 다크 네이비 바(흰 글자 유지).
  // 그 외 페이지(밝은 배경): 항상 흰 바 + 어두운 글자.
  const navSolid = scrolled || mobileOpen
  const lightText = isHome // 홈은 투명/다크 바 모두 흰 글자
  const barClass = !isHome
    ? 'nav-scrolled'
    : navSolid
      ? 'bg-navy/90 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/10'
      : 'bg-transparent'

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${barClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label="비즈나비 홈으로 이동">
            <img
              src="/logo-horizontal.png"
              alt="비즈나비 로고"
              className="nav-logo-img"
              style={{
                height: '48px',
                objectFit: 'contain',
                filter: lightText ? 'brightness(0) invert(1)' : 'none',
              }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-7">
            <a
              href={hashHref('#solution')}
              onClick={(e) => handleHashClick(e, '#solution')}
              className={`text-sm font-medium transition-colors ${
                lightText ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-navy'
              }`}
            >
              솔루션
            </a>
            <a
              href={hashHref('#portfolio')}
              onClick={(e) => handleHashClick(e, '#portfolio')}
              className={`text-sm font-medium transition-colors ${
                lightText ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-navy'
              }`}
            >
              포트폴리오
            </a>
            <a
              href="https://pf.kakao.com/_xhGMjX/chat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="카카오톡 채널 비즈나비에서 무료 상담하기 (새 창)"
              className="btn-primary text-white text-sm font-semibold px-6 py-2.5 rounded-lg"
            >
              무료 상담
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
            aria-label="메뉴"
            aria-expanded={mobileOpen}
          >
            <svg
              className={`w-6 h-6 ${lightText ? 'text-white' : 'text-navy'}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu md:hidden ${mobileOpen ? 'open' : ''}`}>
          <div className={`pb-4 space-y-2 border-t pt-3 ${lightText ? 'border-white/10' : 'border-slate-100'}`}>
            <a href={hashHref('#solution')} onClick={(e) => handleHashClick(e, '#solution')} className={`block py-2 text-sm font-medium ${lightText ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-navy'}`}>솔루션</a>
            <a href={hashHref('#portfolio')} onClick={(e) => handleHashClick(e, '#portfolio')} className={`block py-2 text-sm font-medium ${lightText ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-navy'}`}>포트폴리오</a>
            <a
              href="https://pf.kakao.com/_xhGMjX/chat"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              aria-label="카카오톡 채널 비즈나비에서 무료 상담하기 (새 창)"
              className="inline-block btn-primary text-white text-sm font-semibold px-6 py-2.5 rounded-lg mt-2"
            >
              무료 상담
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
