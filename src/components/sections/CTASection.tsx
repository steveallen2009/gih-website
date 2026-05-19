'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import Link from 'next/link'

export default function CTASection() {
  const [ref, inView] = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      className="section relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0D2B8A 0%, #0C1A2E 40%, #07111F 100%)',
        borderTop: '1px solid rgba(212,168,67,0.2)',
      }}
    >
      {/* Decorative glow */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(212,168,67,0.3), transparent 70%)',
        }}
      />

      <div className="wrap text-center relative z-10">
        <motion.div
          className="lbl mb-5 justify-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          Get In Touch
        </motion.div>

        <motion.h2
          className="font-display font-light text-white mb-6 leading-tight"
          style={{ fontSize: 'clamp(32px, 5vw, 68px)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          Ready to Build the
          <br />
          <span className=" text-gold">Future of Luxury</span>
          <br />
          Together?
        </motion.h2>

        <motion.p
          className="text-white/70 text-lg max-w-xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Whether you're a resort investor, developer, or hospitality partner —
          we'd love to explore what we can create together.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="mailto:info@gih.mv" className="btn-primary">
            Email Us
          </a>

          <Link href="/about" className="btn-ghost">
            Learn More
          </Link>
        </motion.div>

        {/* Contact info */}
        <motion.div
          className="flex flex-wrap justify-center gap-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-center">
            <div className="font-mono text-[9px] text-white/20 tracking-wider uppercase mb-2">
              Email
            </div>

            <a
              href="mailto:info@gih.mv"
              className="text-sm text-white/50 hover:text-yellow-400 transition-colors"
            >
              info@gih.mv
            </a>
          </div>

          <div className="text-center">
            <div className="font-mono text-[9px] text-white/20 tracking-wider uppercase mb-2">
              Phone
            </div>

            <span className="text-sm text-white/50">
              +960 300 1234
            </span>
          </div>

          <div className="text-center">
            <div className="font-mono text-[9px] text-white/20 tracking-wider uppercase mb-2">
              Location
            </div>

            <span className="text-sm text-white/50">
              Malé, Maldives
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}