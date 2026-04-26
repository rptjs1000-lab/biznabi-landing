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
  const solid = scrolled || mobileOpen || !isHome

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? 'nav-scrolled' : 'bg-transparent'
      }`}
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
                filter: solid ? 'none' : 'brightness(0) invert(1)',
              }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href={hashHref('#pain-point')}
              onClick={(e) => handleHashClick(e, '#pain-point')}
              className={`text-sm font-medium transition-colors ${
                solid ? 'text-slate-600 hover:text-navy' : 'text-white/80 hover:text-white'
              }`}
            >
              서비스
            </a>
            <a
              href={hashHref('#features')}
              onClick={(e) => handleHashClick(e, '#features')}
              className={`text-sm font-medium transition-colors ${
                solid ? 'text-slate-600 hover:text-navy' : 'text-white/80 hover:text-white'
              }`}
            >
              기능
            </a>
            <a
              href={hashHref('#packages')}
              onClick={(e) => handleHashClick(e, '#packages')}
              className={`text-sm font-medium transition-colors ${
                solid ? 'text-slate-600 hover:text-navy' : 'text-white/80 hover:text-white'
              }`}
            >
              요금
            </a>
            <Link
              href="/portfolio"
              className={`text-sm font-medium transition-colors ${
                solid ? 'text-slate-600 hover:text-navy' : 'text-white/80 hover:text-white'
              }`}
            >
              포트폴리오
            </Link>
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
              className={`w-6 h-6 ${solid ? 'text-navy' : 'text-white'}`}
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
          <div className="pb-4 space-y-2 border-t border-slate-100 pt-3">
            <a href={hashHref('#pain-point')} onClick={(e) => handleHashClick(e, '#pain-point')} className="block py-2 text-sm font-medium text-slate-600 hover:text-navy">서비스</a>
            <a href={hashHref('#features')} onClick={(e) => handleHashClick(e, '#features')} className="block py-2 text-sm font-medium text-slate-600 hover:text-navy">기능</a>
            <a href={hashHref('#packages')} onClick={(e) => handleHashClick(e, '#packages')} className="block py-2 text-sm font-medium text-slate-600 hover:text-navy">요금</a>
            <Link href="/portfolio" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-slate-600 hover:text-navy">포트폴리오</Link>
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
