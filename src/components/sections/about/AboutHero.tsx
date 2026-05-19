'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutHero() {
  return (
    <section
      className="relative min-h-[75vh] flex items-end overflow-hidden"
      style={{
        paddingTop: '10rem',
        paddingBottom: '6rem',
      }}
    >
      {/* Background Image with Subtle Zoom */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
      >
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=2400&q=90"
          alt="Maldives luxury resort"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </motion.div>

      {/* Cinematic Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(0deg, rgba(7,17,31,0.92) 0%, rgba(7,17,31,0.5) 50%, rgba(7,17,31,0.8) 100%), radial-gradient(ellipse 60% 50% at 50% 60%, rgba(212,168,67,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="wrap relative z-10">
        <motion.div
          className="lbl mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Our Story
        </motion.div>

        <motion.h1
          className="font-display font-light text-white leading-[1.08] max-w-4xl"
          style={{ fontSize: 'clamp(40px, 6vw, 84px)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          Built for the
          <br />
          <span className="text-gold-lt" style={{ fontWeight: 500 }}>Indian Ocean.</span>
          <br />
          Built for Eternity.
        </motion.h1>

        <motion.p
          className="text-white/45 text-lg mt-6 max-w-xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          GIH was born from a belief that the Maldives deserves a homegrown luxury hospitality
          company with global ambition, local soul, and an obsession with excellence.
        </motion.p>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(0deg, #07111F, transparent)' }}
      />
    </section>
  )
}