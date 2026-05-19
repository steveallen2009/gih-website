'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useInView } from '@/hooks/useInView'

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
      {/* Slideshow Background */}
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

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(0deg, rgba(7,17,31,0.85) 0%, rgba(7,17,31,0.4) 50%, rgba(7,17,31,0.7) 100%)',
          }}
        />

        {/* Gradient accents */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(27,79,216,0.12) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        className="wrap relative z-10 flex items-center justify-center"
        style={{ minHeight: '80vh' }}
      >
        <div className="text-center max-w-3xl">
          <motion.div
            className="lbl mb-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Island Living
          </motion.div>

          <motion.h2
            className="font-display font-light text-white mb-6 leading-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 68px)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            Where Ocean Meets
            <br />
            <span className="text-gold">Exceptional Hospitality</span>
          </motion.h2>

          <motion.p
            className="text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
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