import { useEffect, useRef, useState } from 'react'

function parseValue(value) {
  const str = String(value)
  const match = str.match(/^(\d+)(.*)$/)
  if (!match) return { number: 0, suffix: str }
  return { number: parseInt(match[1], 10), suffix: match[2] }
}

export function useAnimatedCounter(target, duration = 2000) {
  const [display, setDisplay] = useState('0')
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const { number, suffix } = parseValue(target)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const start = performance.now()

          const animate = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = Math.round(number * eased)
            setDisplay(`${current}${suffix}`)
            if (progress < 1) requestAnimationFrame(animate)
          }

          requestAnimationFrame(animate)
          observer.unobserve(element)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [target, duration])

  return { ref, display }
}
