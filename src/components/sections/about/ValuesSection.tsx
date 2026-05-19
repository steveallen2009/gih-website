'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { Heart, Shield, Leaf, Zap, Award, Globe } from 'lucide-react'

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description:
      'We refuse to compromise. Every detail matters, from architecture to the warmth of a smile.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description:
      'Hospitality is our calling — not a profession. We lead with genuine care for every guest.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'Transparency and honesty in every relationship — with guests, partners, and our own team.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description:
      'Committed to preserving the Maldivian ecosystem for generations to come.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description:
      'We embrace the future — intelligent technology, thoughtful design, and new approaches.',
  },
  {
    icon: Globe,
    title: 'Inclusion',
    description:
      'A diverse team that reflects the world we serve, bound by a shared passion for luxury.',
  },
]

export default function ValuesSection() {
  const [ref, inView] = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      className="section relative"
      style={{ background: 'linear-gradient(180deg, #07111F 0%, #0C1A2E 100%)' }}
    >
      <div className="wrap">
        <div className="text-center mb-16">
          <motion.div
            className="lbl mb-4 justify-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            Our Values
          </motion.div>
          <motion.h2
            className="font-display font-light text-white leading-tight"
            style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            The Principles That
            <br />
            <span className="text-gold">Guide Everything</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              className="p-8 relative overflow-hidden group rounded-sm transition-all duration-500 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              {/* Subtle warm texture overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at top left, rgba(212,168,67,0.04) 0%, transparent 60%)',
                }}
              />

              <Icon
                size={20}
                strokeWidth={1.5}
                className="text-gold opacity-60 mb-5 group-hover:opacity-100 transition-opacity duration-500"
              />
              <h3 className="font-display font-light text-white text-lg mb-3 leading-tight">
                {title}
              </h3>
              <p className="text-sm text-white/45 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}