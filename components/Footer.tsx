'use client'

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
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
  }

  return (
    <footer className="pt-16 pb-8" style={{ backgroundColor: '#091D38' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/logo-horizontal.png"
                alt="비즈나비 로고"
                style={{ height: '44px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="text-white/50 text-sm mb-4" style={{ lineHeight: '1.7' }}>
              비즈니스 자동화를 돕는<br />IT 에이전시
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">바로가기</h4>
            <ul className="space-y-2">
              <li><a href="#pain-point" onClick={(e) => handleClick(e, '#pain-point')} className="text-white/50 text-sm hover:text-skyblue transition-colors">서비스 소개</a></li>
              <li><a href="#features" onClick={(e) => handleClick(e, '#features')} className="text-white/50 text-sm hover:text-skyblue transition-colors">주요 기능</a></li>
              <li><a href="#packages" onClick={(e) => handleClick(e, '#packages')} className="text-white/50 text-sm hover:text-skyblue transition-colors">요금 안내</a></li>
              <li><a href="#process" onClick={(e) => handleClick(e, '#process')} className="text-white/50 text-sm hover:text-skyblue transition-colors">도입 프로세스</a></li>
              <li><a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="text-white/50 text-sm hover:text-skyblue transition-colors">상담 신청</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">연락처</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-white/50 text-sm">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                contact@biznabi.kr
              </li>
              <li className="flex items-center gap-2 text-white/50 text-sm">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                02-1234-5678
              </li>
              <li className="flex items-start gap-2 text-white/50 text-sm">
                <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                서울특별시 강남구
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/30 text-xs">&copy; 2026 비즈나비 (BIZNABI). All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
