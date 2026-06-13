'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useTheme } from '@/lib/themeProvider'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight

      const scrolled = scrollTop / docHeight

      setProgress(scrolled)
      setIsVisible(scrollTop > 600)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // circle math
  const size = 52
  const stroke = 2
  const radius = (size - stroke) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDashoffset = circumference - progress * circumference

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50"
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{
            opacity: 0,
            scale: 0.85,
            y: 10,
            transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            onClick={scrollToTop}
            className="relative w-[52px] h-[52px] rounded-full flex items-center justify-center group transition-all duration-300"
            style={{
              background: isDark
                ? 'rgba(12, 26, 46, 0.55)'
                : 'rgba(242, 239, 232, 0.7)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: isDark
                ? '1px solid rgba(255,255,255,0.1)'
                : '1.5px solid rgba(212,168,67,0.4)',
              boxShadow: isDark
                ? '0 10px 25px rgba(0,0,0,0.25)'
                : '0 10px 25px rgba(0,0,0,0.06)',
            }}
            aria-label="Scroll to top"
          >
            {/* Background soft glow */}
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: isDark
                  ? 'radial-gradient(circle, rgba(212,168,67,0.10) 0%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(212,168,67,0.12) 0%, transparent 70%)',
              }}
            />

            {/* PROGRESS RING */}
            <svg
              className="absolute inset-0 rotate-[-90deg]"
              width={size}
              height={size}
            >
              {/* background ring */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke={isDark ? 'rgba(255,255,255,0.08)' : 'rgba(212,168,67,0.15)'}
                strokeWidth={stroke}
                fill="none"
              />

              {/* progress ring */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="rgba(212,168,67,0.9)"
                strokeWidth={stroke}
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                style={{
                  transition: 'stroke-dashoffset 0.15s linear',
                }}
              />
            </svg>

            {/* Icon */}
            <ArrowUp
              size={16}
              className="relative z-10 transition-colors duration-200"
              strokeWidth={2}
              color="#D4A843"
            />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
