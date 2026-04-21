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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
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
              소상공인을 위한<br />홈페이지 제작 + 매장 자동화 에이전시
            </p>
            <p className="text-white/40 text-xs" style={{ lineHeight: '1.7' }}>
              상담·견적 문의는 하단 <a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="text-skyblue hover:underline">무료 상담 신청</a> 을 이용해주세요.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:text-right">
            <h4 className="font-bold text-white text-sm mb-4">바로가기</h4>
            <ul className="space-y-2">
              <li><a href="#pain-point" onClick={(e) => handleClick(e, '#pain-point')} className="text-white/50 text-sm hover:text-skyblue transition-colors">서비스 소개</a></li>
              <li><a href="#features" onClick={(e) => handleClick(e, '#features')} className="text-white/50 text-sm hover:text-skyblue transition-colors">주요 기능</a></li>
              <li><a href="#packages" onClick={(e) => handleClick(e, '#packages')} className="text-white/50 text-sm hover:text-skyblue transition-colors">요금 안내</a></li>
              <li><a href="#faq" onClick={(e) => handleClick(e, '#faq')} className="text-white/50 text-sm hover:text-skyblue transition-colors">자주 묻는 질문</a></li>
              <li><a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="text-white/50 text-sm hover:text-skyblue transition-colors">상담 신청</a></li>
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
