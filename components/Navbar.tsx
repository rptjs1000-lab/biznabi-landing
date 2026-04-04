'use client'

import { useEffect, useState, useCallback } from 'react'

export default function Navbar() {
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

  const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
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
  }, [])

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="flex items-center shrink-0">
            <img
              src="/logo-horizontal.png"
              alt="비즈나비 로고"
              className="nav-logo-img"
              style={{
                height: '48px',
                objectFit: 'contain',
                filter: scrolled ? 'none' : 'brightness(0) invert(1)',
              }}
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#pain-point"
              onClick={(e) => handleLinkClick(e, '#pain-point')}
              className={`text-sm font-medium transition-colors ${
                scrolled ? 'text-slate-600 hover:text-navy' : 'text-white/80 hover:text-white'
              }`}
            >
              서비스
            </a>
            <a
              href="#features"
              onClick={(e) => handleLinkClick(e, '#features')}
              className={`text-sm font-medium transition-colors ${
                scrolled ? 'text-slate-600 hover:text-navy' : 'text-white/80 hover:text-white'
              }`}
            >
              기능
            </a>
            <a
              href="#packages"
              onClick={(e) => handleLinkClick(e, '#packages')}
              className={`text-sm font-medium transition-colors ${
                scrolled ? 'text-slate-600 hover:text-navy' : 'text-white/80 hover:text-white'
              }`}
            >
              요금
            </a>
            <a
              href="#process"
              onClick={(e) => handleLinkClick(e, '#process')}
              className={`text-sm font-medium transition-colors ${
                scrolled ? 'text-slate-600 hover:text-navy' : 'text-white/80 hover:text-white'
              }`}
            >
              프로세스
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className={`text-sm font-medium transition-colors ${
                scrolled ? 'text-slate-600 hover:text-navy' : 'text-white/80 hover:text-white'
              }`}
            >
              문의
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
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
          >
            <svg
              className={`w-6 h-6 ${scrolled ? 'text-navy' : 'text-white'}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu md:hidden ${mobileOpen ? 'open' : ''}`}>
          <div className="pb-4 space-y-2">
            <a href="#pain-point" onClick={(e) => handleLinkClick(e, '#pain-point')} className="block py-2 text-sm font-medium text-slate-600 hover:text-navy">서비스</a>
            <a href="#features" onClick={(e) => handleLinkClick(e, '#features')} className="block py-2 text-sm font-medium text-slate-600 hover:text-navy">기능</a>
            <a href="#packages" onClick={(e) => handleLinkClick(e, '#packages')} className="block py-2 text-sm font-medium text-slate-600 hover:text-navy">요금</a>
            <a href="#process" onClick={(e) => handleLinkClick(e, '#process')} className="block py-2 text-sm font-medium text-slate-600 hover:text-navy">프로세스</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="block py-2 text-sm font-medium text-slate-600 hover:text-navy">문의</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="inline-block btn-primary text-white text-sm font-semibold px-6 py-2.5 rounded-lg mt-2">무료 상담</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
