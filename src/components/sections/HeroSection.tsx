'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

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
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(1.1)' }}
        >
          <source src="https://www.pexels.com/download/video/4069480/" type="video/mp4" />
        </video>
      </div>

      {/* Cinematic Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(0deg, rgba(7,17,31,0.85) 0%, rgba(7,17,31,0.4) 50%, rgba(7,17,31,0.75) 100%), radial-gradient(ellipse 80% 60% at 30% 50%, rgba(13,43,138,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="wrap relative z-10 py-32 w-full">
        {/* Top centered eyebrow */}
        <motion.div
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-3 mb-14"
        >
          <div className="h-px w-10 bg-gold opacity-60" />

          <span className="font-mono text-[8px] tracking-[0.35em] uppercase text-white/35">
            Maldives · Since 2015
          </span>

          <div className="h-px w-10 bg-gold opacity-60" />
        </motion.div>

        {/* LEFT CONTENT BLOCK */}
        <div className="max-w-3xl text-center md:text-left md:ml-12 lg:ml-20">
          {/* Headline */}
          <motion.h1
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display font-light text-white leading-[1.08] mb-6"
            style={{ fontSize: 'clamp(42px, 3.8vw, 76px)' }}
          >
            Crafting Extraordinary
            <br />
            Island Destinations
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={0.6}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-white/70 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-light"
          >
            Curated luxury resort experiences inspired by the beauty, privacy,
            and spirit of the Maldives.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={0.8}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-20"
          >
            <Link href="/about" className="btn-primary">
              Discover GIH
              <span className="relative z-10">→</span>
            </Link>

            <Link href="/projects" className="btn-ghost">
              Our Portfolio
            </Link>
          </motion.div>

          {/* Metrics */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center md:justify-start gap-6"
          >
            {[
              { value: '5★', label: 'Luxury Standard' },
              { value: '100%', label: 'Guest Satisfaction' },
              { value: 'Malé', label: 'Headquartered' },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center px-6 py-3 rounded-full backdrop-blur-md transition-all duration-500 hover:backdrop-blur-xl"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <span className="font-display text-xl text-gold font-light leading-none">
                  {value}
                </span>

                <span className="font-mono text-[9px] text-white/30 tracking-widest uppercase mt-1">
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