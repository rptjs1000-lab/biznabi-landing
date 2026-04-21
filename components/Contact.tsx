'use client'

import { useEffect, useState } from 'react'

const PACKAGE_MAP: Record<string, string> = {
  homepage: '홈페이지제작',
  automation: '자동화패키지',
  bundle: '번들(홈페이지+자동화)',
  consult: '상담후결정',
}

export default function Contact() {
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null)

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

    const section = document.getElementById('contact')
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setResult(null)

    const formData = new FormData(e.currentTarget)
    const storeName = (formData.get('storeName') as string)?.trim()
    const industry = (formData.get('industry') as string)?.trim()
    const phone = (formData.get('phone') as string)?.trim()
    const contactName = (formData.get('contactName') as string)?.trim() || storeName
    const pkg = formData.get('package') as string
    const memo = (formData.get('memo') as string)?.trim()

    if (!storeName || !industry || !phone) {
      setResult({ ok: false, message: '필수 항목을 모두 입력해주세요.' })
      setSubmitting(false)
      return
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          storeName,
          industry,
          contactName,
          phone,
          package: PACKAGE_MAP[pkg] || '상담후결정',
          memo: memo || undefined,
        }),
      })
      const data = await res.json()
      if (data.ok) {
        setResult({ ok: true, message: '상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.' })
        e.currentTarget.reset()
      } else {
        setResult({ ok: false, message: data.error || '신청에 실패했습니다. 다시 시도해주세요.' })
      }
    } catch {
      setResult({ ok: false, message: '네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact-bg py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue font-semibold text-sm mb-3 fade-up">무료 상담 신청</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy mb-4 fade-up">
            비즈니스 자동화, 비즈나비와 함께 시작하세요
          </h2>
          <p className="text-slate-500 fade-up" style={{ lineHeight: '1.7' }}>아래 정보를 남겨주시면 1영업일 이내에 연락드리겠습니다.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 fade-up">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="storeName" className="block text-sm font-semibold text-navy mb-2">회사/매장명 *</label>
                <input
                  id="storeName"
                  name="storeName"
                  type="text"
                  required
                  placeholder="예) 해피독 동물병원, (주)ABC무역"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-all"
                />
              </div>
              <div>
                <label htmlFor="industry" className="block text-sm font-semibold text-navy mb-2">업종 *</label>
                <select id="industry" name="industry" required className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-all bg-white">
                  <option value="">업종을 선택하세요</option>
                  <optgroup label="매장">
                    <option>동물병원</option>
                    <option>미용실</option>
                    <option>필라테스 / 요가</option>
                    <option>음식점 / 카페</option>
                    <option>뷰티 / 네일</option>
                    <option>병원 / 의원</option>
                  </optgroup>
                  <optgroup label="중소기업">
                    <option>제조업</option>
                    <option>무역 / 수출입</option>
                    <option>유통 / 도매</option>
                    <option>건설 / 인테리어</option>
                    <option>일반 사무</option>
                  </optgroup>
                  <option>기타</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contactName" className="block text-sm font-semibold text-navy mb-2">담당자명 *</label>
                <input
                  id="contactName"
                  name="contactName"
                  type="text"
                  required
                  placeholder="예) 홍길동"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-all"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">연락처 *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="010-0000-0000"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-navy mb-2">관심 패키지</label>
              <div className="flex flex-wrap gap-3" role="radiogroup" aria-label="관심 패키지 선택">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="package" value="homepage" className="w-4 h-4 text-blue accent-blue" />
                  <span className="text-sm text-slate-600">홈페이지 제작</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="package" value="automation" className="w-4 h-4 text-blue accent-blue" />
                  <span className="text-sm text-slate-600">비즈나비 자동화 패키지</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="package" value="bundle" className="w-4 h-4 text-blue accent-blue" />
                  <span className="text-sm text-slate-600">번들 (홈페이지 + 자동화, 20% 할인)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="package" value="consult" className="w-4 h-4 text-blue accent-blue" defaultChecked />
                  <span className="text-sm text-slate-600">상담 후 결정</span>
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="memo" className="block text-sm font-semibold text-navy mb-2">추가 메시지</label>
              <textarea
                id="memo"
                name="memo"
                rows={3}
                placeholder="궁금한 점이나 요청사항을 자유롭게 작성해주세요"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-all resize-none"
              ></textarea>
            </div>

            {result && (
              <div className={`p-4 rounded-xl text-sm font-medium ${result.ok ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`} role="alert">
                {result.message}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full btn-primary text-white font-bold py-4 rounded-xl text-base shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? '신청 중...' : '무료 상담 신청하기'}
            </button>
            <p className="text-center text-slate-400 text-xs">* 제출하신 정보는 상담 목적으로만 사용됩니다</p>
          </form>
        </div>
      </div>
    </section>
  )
}
