'use client'

import { useEffect, useRef, useState } from 'react'

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true
            const duration = 2000
            const startTime = performance.now()

            const update = (currentTime: number) => {
              const elapsed = currentTime - startTime
              const progress = Math.min(elapsed / duration, 1)
              const easedProgress = easeOutCubic(progress)
              const current = Math.floor(easedProgress * target)
              setValue(current)

              if (progress < 1) {
                requestAnimationFrame(update)
              } else {
                setValue(target)
              }
            }

            requestAnimationFrame(update)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <>
      <span ref={ref} className="count-up">{value.toLocaleString()}</span>
      <span className="text-skyblue">{suffix}</span>
    </>
  )
}

const stats = [
  { target: 7, suffix: '일', label: '평균 제작 소요 기간' },
  { target: 95, suffix: '%', label: '예약 자동화율' },
  { target: 60, suffix: '%', label: '노쇼 감소율' },
  { target: 150, suffix: '+', label: '도입 기업 수' },
]

export default function Stats() {
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

    const section = document.getElementById('stats')
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
    <section id="stats" className="stats-bg py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-skyblue font-semibold text-sm mb-3 fade-up">숫자로 보는 비즈나비</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white fade-up">
            데이터가 증명합니다
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center fade-up">
              <div className="font-space text-4xl sm:text-5xl font-bold text-white mb-2">
                <CountUp target={stat.target} suffix={stat.suffix} />
              </div>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
