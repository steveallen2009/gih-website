'use client'

import { motion } from 'framer-motion'

export default function TeamHero() {
  return (
    <section
      className="relative min-h-[55vh] flex items-end overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 70% 50% at 70% 0%, rgba(27,79,216,0.25) 0%, transparent 60%), #07111F',
        paddingTop: '10rem',
        paddingBottom: '6rem',
      }}
    >
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
          className="font-display font-light text-white leading-tight max-w-3xl"
          style={{ fontSize: 'clamp(36px, 5.5vw, 78px)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          The Visionaries
          <br />
          <span className=" text-gold">Behind GIH</span>
        </motion.h1>
        <motion.p
          className="text-white/38 text-lg mt-5 max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          A carefully assembled team of hospitality visionaries, operators, and innovators united by
          a shared obsession with excellence.
        </motion.p>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(0deg, #07111F, transparent)' }}
      />
    </section>
  )
}