'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTheme } from '@/lib/themeProvider'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export default function HeroSection() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{
            filter: isDark
              ? 'brightness(1.1)'
              : 'brightness(0.95) contrast(1.1) saturate(1.05)',
          }}
        >
          <source src="https://www.pexels.com/download/video/4069480/" type="video/mp4" />
        </video>
      </div>

      {/* Sophisticated overlay - same for both modes but adjusted */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'linear-gradient(0deg, rgba(7,17,31,0.25), rgba(7,17,31,0.55))'
            : 'linear-gradient(135deg, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.28) 100%)',
        }}
      />

      {/* Top overlay for navbar visibility */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: isDark
            ? 'linear-gradient(to bottom, rgba(7,17,31,0.75), transparent)'
            : 'linear-gradient(to bottom, rgba(0,0,0,0.45), transparent)',
        }}
      />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: isDark
            ? 'linear-gradient(to top, rgba(7,17,31,0.75), transparent)'
            : 'linear-gradient(to top, rgba(0,0,0,0.2), transparent)',
        }}
      />

      {/* Content */}
      <div className="wrap relative z-20 py-32 w-full">

        {/* Eyebrow */}
        <motion.div
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-3 mb-14"
        >
          <div 
            className="h-px w-10 opacity-70"
            style={{
              background: isDark ? 'rgba(212,168,67,0.6)' : 'rgba(212,168,67,0.75)'
            }}
          />

          <span
            className="font-mono text-[8px] tracking-[0.35em] uppercase font-medium"
            style={{
              color: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.88)',
              textShadow: isDark
                ? 'none'
                : '0 2px 8px rgba(0,0,0,0.2)',
            }}
          >
            Maldives · Since 2015
          </span>

          <div 
            className="h-px w-10 opacity-70"
            style={{
              background: isDark ? 'rgba(212,168,67,0.6)' : 'rgba(212,168,67,0.75)'
            }}
          />
        </motion.div>

        {/* Content */}
        <div className="max-w-3xl text-center md:text-left md:ml-12 lg:ml-20">

          {/* Title */}
          <motion.h1
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display font-light leading-[1.08] mb-6"
            style={{
              fontSize: 'clamp(42px, 3.8vw, 76px)',
              color: isDark ? 'var(--text-primary)' : '#FFFFFF',
              textShadow: isDark
                ? 'none'
                : '0 4px 20px rgba(0,0,0,0.3)',
              letterSpacing: '-0.01em',
            }}
          >
            Crafting Extraordinary
            <br />
            Island Destinations
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={0.6}
            variants={fadeUp}
            className="text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-light"
            style={{
              color: isDark
                ? 'rgba(255,255,255,0.7)'
                : 'rgba(255,255,255,0.92)',
              textShadow: isDark
                ? 'none'
                : '0 2px 10px rgba(0,0,0,0.2)',
            }}
          >
            Curated luxury resort experiences inspired by the beauty, privacy,
            and spirit of the Maldives.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={0.8}
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-20"
          >
            <Link href="/about" className="btn-primary">
              Discover GIH
              <span className="relative z-10">→</span>
            </Link>

            <Link href="/projects" className="btn-ghost" style={{
              borderColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.35)',
              color: isDark ? 'rgba(255,255,255,0.6)' : '#FFFFFF',
            }}>
              Our Portfolio
            </Link>
          </motion.div>

          {/* Glass Cards */}
          <motion.div
            custom={1}
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center md:justify-start gap-5"
          >
            {[
              { value: '5★', label: 'Luxury Standard' },
              { value: '100%', label: 'Guest Satisfaction' },
              { value: 'Malé', label: 'Headquartered' },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="group relative flex flex-col items-center px-6 py-3 rounded-full backdrop-blur-md transition-all duration-500 hover:scale-[1.06] hover:-translate-y-1"
                style={{
                  background: isDark
                    ? 'rgba(255,255,255,0.04)'
                    : 'rgba(255,255,255,0.15)',
                  border: isDark
                    ? '1px solid rgba(255,255,255,0.08)'
                    : '1px solid rgba(255,255,255,0.3)',
                  boxShadow: isDark
                    ? '0 8px 32px rgba(0,0,0,0.1)'
                    : '0 4px 20px rgba(0,0,0,0.12), inset 1px 1px 2px rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                }}
              >
                {/* Subtle highlight on top */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: isDark
                      ? 'radial-gradient(circle at top, rgba(255,255,255,0.06), transparent 60%)'
                      : 'radial-gradient(circle at top, rgba(255,255,255,0.3), transparent 60%)',
                  }}
                />

                {/* Value */}
                <span 
                  className="relative font-display text-lg font-light leading-none group-hover:scale-110 transition-transform duration-300"
                  style={{
                    color: isDark ? '#D4A843' : '#FFD700',
                    textShadow: isDark
                      ? '0 0 10px rgba(212,168,67,0.3)'
                      : '0 1px 4px rgba(0,0,0,0.15)',
                  }}
                >
                  {value}
                </span>

                {/* Label */}
                <span
                  className="relative font-mono text-[8px] tracking-widest uppercase mt-1 font-medium"
                  style={{
                    color: isDark
                      ? 'rgba(255,255,255,0.22)'
                      : 'rgba(255,255,255,0.82)',
                    textShadow: isDark
                      ? 'none'
                      : '0 1px 3px rgba(0,0,0,0.1)',
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
