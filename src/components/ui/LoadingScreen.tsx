'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [shouldShowLoading, setShouldShowLoading] = useState(true)
  const [isDark, setIsDark] = useState(true) // Default to dark

  useEffect(() => {
    // Read theme directly from DOM attribute
    const updateTheme = () => {
      const htmlElement = document.documentElement
      const dataTheme = htmlElement.getAttribute('data-theme')
      setIsDark(dataTheme !== 'light')
    }

    // Call immediately
    updateTheme()

    // Watch for theme changes
    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // Check if user has visited before
    const hasVisitedBefore = localStorage.getItem('gih_app_visited')

    // Check if this is a client-side navigation event
    const navEntry = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined
    const isClientSideNav = navEntry?.type === 'navigate'

    if (hasVisitedBefore && isClientSideNav) {
      // Returning visitor doing client-side navigation - skip loading screen
      setLoading(false)
      setShouldShowLoading(false)
    } else {
      // First time visitor or full page reload - show loading screen
      localStorage.setItem('gih_app_visited', 'true')
      setShouldShowLoading(true)
    }
  }, [])

  useEffect(() => {
    if (!shouldShowLoading) return

    const duration = 2400
    const interval = 30
    const steps = duration / interval
    let step = 0

    const timer = setInterval(() => {
      step++
      setProgress(Math.min(100, Math.round(Math.pow(step / steps, 0.65) * 100)))
      if (step >= steps) {
        clearInterval(timer)
        setTimeout(() => setLoading(false), 400)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [shouldShowLoading])

  return (
    <AnimatePresence>
      {loading && shouldShowLoading && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden transition-colors duration-300"
          style={{
            background: isDark
              ? 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(27,79,216,0.18) 0%, transparent 70%), #07111F'
              : 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(27,79,216,0.08) 0%, transparent 70%), #E5DDD2',
          }}
          exit={{ y: '-100%', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Animated background circles */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full opacity-20"
            style={{
              background: isDark
                ? 'radial-gradient(circle, rgba(27,79,216,0.35), transparent 70%)'
                : 'radial-gradient(circle, rgba(27,79,216,0.12), transparent 70%)',
              filter: 'blur(70px)',
            }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full opacity-15"
            style={{
              background: isDark
                ? 'radial-gradient(circle, rgba(212,168,67,0.4), transparent 70%)'
                : 'radial-gradient(circle, rgba(212,168,67,0.25), transparent 70%)',
              filter: 'blur(60px)',
            }}
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          />

          {/* Enhanced Logo with sequential reveal */}
          <motion.div
            className="flex flex-col items-center relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Letter-by-letter reveal */}
            <div className="flex items-end gap-1 sm:gap-2">
              {['G', 'I', 'H'].map((letter, i) => (
                <motion.span
                  key={letter}
                  className="font-display font-bold select-none"
                  style={{
                    fontSize: 'clamp(72px, 12vw, 140px)',
                    letterSpacing: '0.12em',
                    color: '#1B4FD8',
                    filter: isDark
                      ? 'drop-shadow(0 0 30px rgba(59,130,246,0.5))'
                      : 'drop-shadow(0 0 15px rgba(59,130,246,0.25))',
                  }}
                  initial={{ opacity: 0, y: 60, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: 0.1 + i * 0.15,
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Gold underline with smooth draw animation */}
            <motion.div
              className="h-1 bg-gradient-to-r from-gold to-transparent mt-3"
              style={{
                width: 'clamp(180px, 25vw, 350px)',
                filter: isDark
                  ? 'drop-shadow(0 0 20px rgba(212,168,67,0.6))'
                  : 'drop-shadow(0 0 10px rgba(212,168,67,0.4))',
              }}
              initial={{ scaleX: 0, originX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            />

            {/* Tagline */}
            <motion.span
              className="font-mono tracking-[0.28em] uppercase mt-3 select-none transition-colors duration-300"
              style={{
                fontSize: 'clamp(8px, 1vw, 11px)',
                color: isDark
                ? 'rgba(255,255,255,0.30)'
                : 'rgba(23,20,17,0.55)',
            }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 0.8,
              }}
            >
              Luxury Born in the Maldives
            </motion.span>
          </motion.div>

          {/* Progress bar with dynamic colors */}
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-64 sm:w-80">
            <div
              className={`h-[2px] w-full rounded-full overflow-hidden relative transition-colors duration-300 ${
                isDark ? 'bg-white/8' : 'bg-black/12'
              }`}
            >
              <motion.div
                className="h-full rounded-full absolute top-0 left-0"
                style={{
                  width: `${progress}%`,
                  background: isDark
                    ? 'linear-gradient(90deg, #1B4FD8 0%, #3B82F6 50%, #D4A843 100%)'
                    : 'linear-gradient(90deg, #1B4FD8 0%, #3B82F6 50%, #D4A843 100%)',
                  boxShadow: isDark
                    ? '0 0 10px rgba(59,130,246,0.5)'
                    : '0 0 8px rgba(27,79,216,0.35)',
                }}
                transition={{ duration: 0.05 }}
              />
            </div>
            <p
              className={`text-right mt-2.5 font-mono text-[10px] tracking-wider transition-colors duration-300 ${
                isDark ? 'text-white/18' : 'text-black/30'
              }`}
            >
              {progress}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
