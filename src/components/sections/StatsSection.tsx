'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

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

  return (
    <section
      ref={ref}
      className="section relative"
      style={{
        background: 'linear-gradient(135deg, #0C1A2E 0%, #112240 50%, #0C1A2E 100%)',
        borderTop: '1px solid rgba(27,79,216,0.2)',
        borderBottom: '1px solid rgba(27,79,216,0.2)',
      }}
    >
      <div className="wrap">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/5">
          {stats.map(({ value, suffix, label, description }, i) => (
            <motion.div
              key={label}
              className="text-center px-6 py-12"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <div className="stat-num mb-3">
                <Counter target={value} suffix={suffix} active={inView} />
              </div>
              <div className="text-sm font-medium text-white/70 mb-1">{label}</div>
              <div className="font-mono text-[9px] tracking-wider text-white/20 uppercase">
                {description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}