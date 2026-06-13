'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { useTheme } from '@/lib/themeProvider'

const stats = [
  { value: 5, suffix: '★', label: 'Luxury Standard', description: 'Every property, every time' },
  { value: 100, suffix: '%', label: 'Guest Satisfaction', description: 'Our unwavering commitment' },
  { value: 12, suffix: '+', label: 'Expert Team Members', description: 'And growing fast' },
  { value: 2015, suffix: '', label: 'Year Founded', description: 'Born in the Maldives' },
]

function Counter({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const duration = 1800
    const start = Date.now()

    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(target * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [active, target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.2 })
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section
      ref={ref}
      className="section relative transition-colors duration-300"
      style={{
        background: isDark
          ? 'linear-gradient(135deg, #0C1A2E 0%, #112240 50%, #0C1A2E 100%)'
          : `linear-gradient(135deg, var(--bg-secondary) 0%, ${isDark ? '#112240' : 'var(--bg-tertiary)'} 50%, var(--bg-secondary) 100%)`,
        borderTop: isDark
          ? '1px solid rgba(27,79,216,0.2)'
          : '1px solid rgba(27,79,216,0.1)',
        borderBottom: isDark
          ? '1px solid rgba(27,79,216,0.2)'
          : '1px solid rgba(27,79,216,0.1)',
      }}
    >
      <div className="wrap">
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-0 transition-colors duration-300"
          style={{
            borderColor: isDark
              ? 'rgba(255,255,255,0.05)'
              : 'rgba(27,27,27,0.05)',
          }}
        >
          {stats.map(({ value, suffix, label, description }, i) => (
            <motion.div
              key={label}
              className="text-center px-6 py-12 transition-colors duration-300"
              style={{
                borderRight: i < stats.length - 1
                  ? isDark
                    ? '1px solid rgba(255,255,255,0.05)'
                    : '1px solid rgba(27,27,27,0.05)'
                  : 'none',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <div className="stat-num mb-3">
                <Counter target={value} suffix={suffix} active={inView} />
              </div>
              <div
                className="text-sm font-medium mb-1 transition-colors duration-300"
                style={{
                  color: isDark
                    ? 'rgba(255,255,255,0.7)'
                    : 'rgba(27,27,27,0.7)',
                }}
              >
                {label}
              </div>
              <div
                className="font-mono text-[9px] tracking-wider uppercase transition-colors duration-300"
                style={{
                  color: isDark
                ? 'rgba(255,255,255,0.30)'
                : 'rgba(23,20,17,0.55)',
            }}
              >
                {description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
