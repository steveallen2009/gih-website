'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { Target, Eye } from 'lucide-react'
import Image from 'next/image'
import { useTheme } from '@/lib/themeProvider'

export default function MissionVision() {
  const [ref, inView] = useInView<HTMLElement>()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section
      ref={ref}
      className="section transition-colors duration-300"
      style={{
        background: isDark ? '#07111F' : 'var(--bg-primary)',
      }}
    >
      <div className="wrap">
        {/* Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            className="relative h-[500px] overflow-hidden rounded-sm order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1600&q=90"
              alt="Luxury Maldives resort sunset"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(0deg, rgba(7,17,31,0.3) 0%, transparent 50%)',
              }}
            />
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Target
                size={18}
                className="text-gold opacity-60"
                strokeWidth={1.5}
              />
              <span className="lbl" style={{ fontSize: '9px' }}>
                Our Mission
              </span>
            </div>
            <h2
              className="font-display font-light mb-5 leading-tight transition-colors duration-300"
              style={{
                fontSize: 'clamp(28px, 3vw, 42px)',
                color: 'var(--text-primary)',
              }}
            >
              To Redefine Luxury Living
            </h2>
            <div className="w-12 h-px bg-gold opacity-30 mb-6" />
            <p
              className="text-base leading-relaxed transition-colors duration-300"
              style={{
                color: 'var(--text-tertiary)',
              }}
            >
              To operate and manage world-class hospitality properties across the Maldives that
              deliver transformative experiences — setting new benchmarks for luxury, sustainability,
              and guest delight in the Indian Ocean.
            </p>
          </motion.div>
        </div>

        {/* Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Eye
                size={18}
                className="text-gold opacity-60"
                strokeWidth={1.5}
              />
              <span className="lbl" style={{ fontSize: '9px' }}>
                Our Vision
              </span>
            </div>
            <h2
              className="font-display font-light mb-5 leading-tight transition-colors duration-300"
              style={{
                fontSize: 'clamp(28px, 3vw, 42px)',
                color: 'var(--text-primary)',
              }}
            >
              Maldives' Most Trusted Brand
            </h2>
            <div className="w-12 h-px bg-gold opacity-30 mb-6" />
            <p
              className="text-base leading-relaxed transition-colors duration-300"
              style={{
                color: 'var(--text-tertiary)',
              }}
            >
              To become the most trusted and celebrated luxury hospitality management company in the
              Maldives — recognised globally for craftsmanship, integrity, and the ability to create
              experiences that endure.
            </p>
          </motion.div>

          <motion.div
            className="relative h-[500px] overflow-hidden rounded-sm"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&q=90"
              alt="Overwater villas Maldives"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(0deg, rgba(7,17,31,0.3) 0%, transparent 50%)',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
