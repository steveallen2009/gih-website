'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/lib/themeProvider'

export default function TeamHero() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section
      className="relative min-h-[55vh] flex items-end overflow-hidden transition-colors duration-300"
      style={{
        background: isDark
          ? `linear-gradient(
              180deg,
              #020814 0%,
              #07111F 30%,
              #0C1A2E 70%,
              var(--bg-primary) 100%
            )`
          : `linear-gradient(
              180deg,
              #D9CCBE 0%,
              #DFD6C9 25%,
              #E5DDD2 50%,
              #EBE5DC 75%,
              var(--bg-primary) 100%
            )`,
        paddingTop: '10rem',
        paddingBottom: '6rem',
      }}
    >
      {/* Top overlay for navigation visibility */}
      <div
        className="absolute top-0 left-0 right-0 h-52 pointer-events-none z-0"
        style={{
          background: isDark
            ? `linear-gradient(
                180deg,
                rgba(0,3,10,0.96) 0%,
                rgba(2,8,20,0.82) 28%,
                rgba(2,8,20,0.45) 58%,
                rgba(2,8,20,0.12) 85%,
                transparent 100%
              )`
            : `linear-gradient(
                180deg,
                rgba(15,20,28,0.40) 0%,
                rgba(15,20,28,0.28) 35%,
                rgba(15,20,28,0.12) 70%,
                transparent 100%
              )`,
        }}
      />

      {/* Ambient glow orb */}
      <div
        className="absolute -top-48 -right-48 w-[620px] h-[620px] rounded-full pointer-events-none"
        style={{
          background: isDark
            ? 'rgba(27,79,216,0.04)'
            : 'rgba(27,79,216,0.055)',
          filter: 'blur(150px)',
        }}
      />

      {/* Content */}
      <div className="wrap relative z-10">
        <motion.div
          className="lbl mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The People
        </motion.div>
        <motion.h1
          className="font-display font-light leading-tight max-w-3xl transition-colors duration-300"
          style={{
            fontSize: 'clamp(36px, 5.5vw, 78px)',
            color: 'var(--text-primary)',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          The Visionaries
          <br />
          <span className="text-gold">Behind GIH</span>
        </motion.h1>
        <motion.p
          className="text-lg mt-5 max-w-lg transition-colors duration-300"
          style={{
            color: isDark
              ? 'rgba(255,255,255,0.38)'
              : 'rgba(27,27,27,0.60)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          A carefully assembled team of hospitality visionaries, operators, and innovators united by
          a shared obsession with excellence.
        </motion.p>
      </div>

      {/* Mid-section overlay for depth */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.045) 100%)',
        }}
      />

      {/* Elegant divider line */}
      <div
        className="absolute bottom-8 left-0 right-0 h-px pointer-events-none z-20"
        style={{
          background: isDark
            ? 'linear-gradient(90deg, transparent 0%, rgba(212,168,67,0.35) 20%, rgba(212,168,67,0.35) 80%, transparent 100%)'
            : 'linear-gradient(90deg, transparent 0%, rgba(212,168,67,0.45) 20%, rgba(212,168,67,0.45) 80%, transparent 100%)',
          boxShadow: isDark
            ? '0 0 20px rgba(212,168,67,0.15)'
            : '0 0 16px rgba(212,168,67,0.12)',
        }}
      />

      {/* Subtle accent dots */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full pointer-events-none z-20"
        style={{
          background: isDark ? 'rgba(212,168,67,0.6)' : 'rgba(212,168,67,0.7)',
          boxShadow: isDark
            ? '0 0 8px rgba(212,168,67,0.4)'
            : '0 0 6px rgba(212,168,67,0.3)',
        }}
      />

      {/* Bottom fade to page background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none transition-all duration-300"
        style={{
          background: isDark
            ? 'linear-gradient(0deg, var(--bg-primary), transparent)'
            : 'linear-gradient(0deg, var(--bg-primary), transparent)',
        }}
      />
    </section>
  )
}
