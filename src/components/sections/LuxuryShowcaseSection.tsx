'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useInView } from '@/hooks/useInView'
import { useTheme } from '@/lib/themeProvider'

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=2400&q=90',
    alt: 'Maldives luxury resort aerial view',
  },
  {
    image:
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=2400&q=90',
    alt: 'Overwater villa sunset',
  },
  {
    image:
      'https://images.pexels.com/photos/7832609/pexels-photo-7832609.jpeg',
    alt: 'Private island seaplane arrival',
  },
  {
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=2400&q=90',
    alt: 'Luxury island architecture',
  },
]

export default function LuxuryShowcaseSection() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.2 })
  const [currentSlide, setCurrentSlide] = useState(0)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ minHeight: '80vh' }}
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].alt}
              fill
              className="object-cover"
              quality={90}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* FIXED overlay (balanced readability, not heavy) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'linear-gradient(0deg, rgba(7,17,31,0.65), rgba(7,17,31,0.25), rgba(7,17,31,0.55))'

            // FIX: lighter but higher contrast than before
            : 'linear-gradient(0deg, rgba(255,255,255,0.25) 0%, rgba(0,0,0,0.18) 50%, rgba(255,255,255,0.22) 100%)',
        }}
      />

      {/* Accent glow (kept subtle) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(27,79,216,0.12), transparent 70%)'
            : 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(27,79,216,0.05), transparent 75%)',
        }}
      />

      {/* Content */}
<div
  className="wrap relative z-10 flex items-center justify-center"
  style={{ minHeight: '80vh' }}
>
  {/* NEW: soft readability fade (mode-aware) */}
<div className="absolute inset-0 pointer-events-none flex items-center justify-center">
  <div
    style={{
      width: '100%',
      height: '100%',

      background: isDark
        // DARK MODE: cinematic vignette (unchanged feel)
        ? 'radial-gradient(circle at center, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.02) 30%, transparent 90%)'

        // LIGHT MODE: soft WHITE fade (key fix)
        : 'radial-gradient(circle at center, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.20) 45%, transparent 75%)',
    }}
  />
</div>

  {/* Content (unchanged structure, just now sits above fade) */}
  <div className="text-center max-w-3xl relative">

    {/* Label */}
    <motion.div
      className="lbl mb-6 justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      style={{
        color: isDark
          ? 'rgba(212,168,67,0.95)'
          : 'rgba(186,140,40,0.95)',
        letterSpacing: '0.12em',
      }}
    >
      Island Living
    </motion.div>

    {/* Title */}
    <motion.h2
      className="font-display font-light mb-6 leading-tight"
      style={{
        fontSize: 'clamp(36px, 5vw, 68px)',
        color: isDark
          ? 'var(--text-primary)'
          : 'rgba(10,10,10,0.95)',
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: 0.15 }}
    >
      Where Ocean Meets
      <br />
      <span className="text-gold">Exceptional Hospitality</span>
    </motion.h2>

    {/* Subtitle */}
    <motion.p
      className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
      style={{
        color: isDark
          ? 'rgba(255,255,255,0.65)'
          : 'rgba(10,10,10,0.78)',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      Discover curated luxury across the Maldives' most pristine atolls — where every moment
      is designed to transcend the ordinary.
    </motion.p>

  </div>
</div>
    </section>
  )
}
