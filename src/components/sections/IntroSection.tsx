'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

const pillars = [
  {
    title: 'Island Luxury',
    description:
      'Curating exceptional resort experiences across the most pristine atolls of the Maldives.',
  },
  {
    title: 'Bespoke Hospitality',
    description:
      'Every guest journey is crafted with precision, warmth, and genuine Maldivian spirit.',
  },
  {
    title: 'Premium Standards',
    description:
      'Uncompromising excellence in every detail — from architecture to service delivery.',
  },
]

export default function IntroSection() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section id="intro" ref={ref} className="section bg-navy">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <motion.div
              className="lbl mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              Who We Are
            </motion.div>

            <motion.h2
              className="font-display font-light text-white mb-6 leading-tight"
              style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              Luxury Resort Experiences
              <br />
              <span className="text-gold">Rooted in the Maldives</span>
            </motion.h2>

            <motion.div
              className="divider mb-6"
              initial={{ scaleX: 0, originX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            <motion.p
              className="text-white/45 text-base leading-relaxed mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              GIH is a Maldivian luxury hotelier creating extraordinary resort experiences across
              the Indian Ocean's most pristine islands.
            </motion.p>

            <motion.p
              className="text-white/45 text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              From concept to execution, we curate every dimension of the island lifestyle —
              bespoke hospitality, premium service, and unforgettable guest journeys.
            </motion.p>
          </div>

          {/* Right — image */}
          <motion.div
            className="relative h-[500px] overflow-hidden rounded-sm"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <img
              src="https://images.pexels.com/photos/35432584/pexels-photo-35432584.jpeg"
              alt="Luxury Maldives Resort"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(0deg, rgba(7,17,31,0.4) 0%, transparent 60%)',
              }}
            />
          </motion.div>
        </div>

        {/* Pillar cards below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
          {pillars.map(({ title, description }, i) => (
            <motion.div
              key={title}
              className="glass p-7 border-l-2 border-l-transparent hover:border-l-gold transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 + i * 0.1 }}
            >
              <h3 className="font-body font-light text-white text-base mb-2">{title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
