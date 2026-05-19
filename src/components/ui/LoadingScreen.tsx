'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [shouldShowLoading, setShouldShowLoading] = useState(false)

  useEffect(() => {
    // Check if navigation happened (not a full page reload)
    const isNavigation = window.performance.getEntriesByType('navigation')[0]?.type === 'navigate'
    
    if (isNavigation || !sessionStorage.getItem('app_visited')) {
      // Mark app as visited
      sessionStorage.setItem('app_visited', 'true')
      setShouldShowLoading(true)
    } else {
      // Navigation event (client-side routing), hide loading screen immediately
      setLoading(false)
      setShouldShowLoading(false)
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
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(27,79,216,0.18) 0%, transparent 70%), #07111F',
          }}
          exit={{ y: '-100%', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Animated background circles */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, rgba(27,79,216,0.35), transparent 70%)', filter: 'blur(70px)' }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full opacity-15"
            style={{ background: 'radial-gradient(circle, rgba(212,168,67,0.4), transparent 70%)', filter: 'blur(60px)' }}
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          />

          {/* Logo - Same as navbar/footer/hero */}
          <motion.div
            className="flex flex-col items-center relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              className="font-display font-bold text-azure select-none"
              style={{ 
                fontSize: 'clamp(72px, 12vw, 140px)', 
                letterSpacing: '0.12em',
                filter: 'drop-shadow(0 0 30px rgba(59,130,246,0.5))'
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              GIH
            </motion.span>
            
            <motion.div
              className="h-1 bg-gradient-to-r from-gold to-transparent mt-3"
              style={{ 
                width: 'clamp(180px, 25vw, 350px)',
                filter: 'drop-shadow(0 0 20px rgba(212,168,67,0.6))'
              }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
            
            <motion.span
              className="font-mono tracking-[0.28em] text-white/20 uppercase mt-3 select-none"
              style={{ fontSize: 'clamp(8px, 1vw, 11px)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Luxury Born in the Maldives
            </motion.span>
          </motion.div>

          {/* Progress bar */}
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-64 sm:w-80">
            <div className="h-[2px] bg-white/8 w-full rounded-full overflow-hidden relative">
              <motion.div
                className="h-full rounded-full absolute top-0 left-0"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #1B4FD8 0%, #3B82F6 50%, #D4A843 100%)',
                  boxShadow: '0 0 10px rgba(59,130,246,0.5)',
                }}
                transition={{ duration: 0.05 }}
              />
            </div>
            <p className="text-right mt-2.5 font-mono text-[10px] text-white/18 tracking-wider">
              {progress}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
