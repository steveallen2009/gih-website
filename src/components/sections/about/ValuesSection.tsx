'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useInView } from '@/hooks/useInView'
import { Heart, Shield, Leaf, Zap, Award, Globe } from 'lucide-react'
import { useTheme } from '@/lib/themeProvider'


const values = [
  {
    icon: Award,
    title: 'Excellence',
    description:
      'We refuse to compromise. Every detail matters, from architecture to the warmth of a smile.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description:
      'Hospitality is our calling — not a profession. We lead with genuine care for every guest.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'Transparency and honesty in every relationship — with guests, partners, and our own team.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description:
      'Committed to preserving the Maldivian ecosystem for generations to come.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description:
      'We embrace the future — intelligent technology, thoughtful design, and new approaches.',
  },
  {
    icon: Globe,
    title: 'Inclusion',
    description:
      'A diverse team that reflects the world we serve, bound by a shared passion for luxury.',
  },
]

export default function ValuesSection() {
  const [ref, inView] = useInView<HTMLElement>()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const [activeCard, setActiveCard] = useState<number | null>(null)

const handleCardTap = (index: number) => {
  setActiveCard(index)
  setTimeout(() => setActiveCard(null), 250)
}

  const gradientBg = isDark
    ? 'linear-gradient(180deg, #07111F 0%, #0C1A2E 100%)'
    : `linear-gradient(180deg, ${isDark ? '#07111F' : 'var(--bg-primary)'} 0%, ${isDark ? '#0C1A2E' : 'var(--bg-secondary)'} 100%)`

  return (
    <section
      ref={ref}
      className="section relative transition-colors duration-300"
      style={{
        background: isDark
          ? 'linear-gradient(180deg, #07111F 0%, #0C1A2E 100%)'
          : `linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)`,
      }}
    >
      <div className="wrap">
        <div className="text-center mb-16">
          <motion.div
            className="lbl mb-4 justify-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            Our Values
          </motion.div>
          <motion.h2
            className="font-display font-light leading-tight transition-colors duration-300"
            style={{
              fontSize: 'clamp(28px, 3.5vw, 52px)',
              color: 'var(--text-primary)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            The Principles That
            <br />
            <span className="text-gold">Guide Everything</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, description }, i) => (
            <motion.div
  key={title}
  className="p-8 relative overflow-hidden group rounded-sm cursor-default transition-[border-color,box-shadow,background-color] duration-300"
    onTouchStart={() => handleCardTap(i)}
  style={{
  background: isDark
    ? 'rgba(255,255,255,0.035)'
    : 'rgba(0,0,0,0.03)',
  border: isDark
    ? '1px solid rgba(255,255,255,0.07)'
    : '1px solid rgba(27,27,27,0.08)',
  boxShadow: isDark
    ? '0 8px 32px rgba(0,0,0,0.18)'
    : '0 8px 24px rgba(0,0,0,0.05)',
}}
  initial={{
    opacity: 0,
    y: 40,
    scale: 0.96,
  }}
  animate={
  inView
    ? {
        opacity: 1,
        y: activeCard === i ? -6 : 0,
        scale: 1,
        backgroundColor:
          activeCard === i
            ? isDark
              ? 'rgba(255,255,255,0.05)'
              : 'rgba(0,0,0,0.045)'
            : isDark
            ? 'rgba(255,255,255,0.035)'
            : 'rgba(0,0,0,0.03)',
        borderColor:
          activeCard === i
            ? 'rgba(212,168,67,0.28)'
            : isDark
            ? 'rgba(255,255,255,0.07)'
            : 'rgba(27,27,27,0.08)',
      }
    : {}
}
  whileHover={{
  y: -6,
  backgroundColor: isDark
    ? 'rgba(255,255,255,0.05)'
    : 'rgba(0,0,0,0.045)',
  borderColor: isDark
    ? 'rgba(212,168,67,0.28)'
    : 'rgba(212,168,67,0.22)',
  boxShadow: isDark
    ? '0 12px 36px rgba(0,0,0,0.22), 0 0 0 1px rgba(212,168,67,0.08)'
    : '0 12px 30px rgba(0,0,0,0.08), 0 0 0 1px rgba(212,168,67,0.06)',
  transition: {
    duration: 0.28,
    ease: [0.16, 1, 0.3, 1],
  },
}}
>
              {/* Subtle texture overlay */}
              <motion.div
  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
  style={{
    background: isDark
      ? 'radial-gradient(circle at top left, rgba(212,168,67,0.06), transparent 65%)'
      : 'radial-gradient(circle at top left, rgba(212,168,67,0.04), transparent 65%)',
  }}
/>
              <motion.div
  whileHover={{
    y: -2,
    scale: 1.08,
    rotate: 2,
  }}
  transition={{
    duration: 0.35,
    ease: "easeOut",
  }}
>
  <Icon
    size={20}
    strokeWidth={1.5}
    className="text-gold opacity-60 mb-5 group-hover:opacity-100 transition-opacity duration-500"
  />
</motion.div>
              <h3
                className="font-display font-light text-lg mb-3 leading-tight transition-colors duration-300"
                style={{
                  color: 'var(--text-primary)',
                }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed transition-colors duration-300"
                style={{
                  color: 'var(--text-tertiary)',
                }}
              >
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
