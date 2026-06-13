'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { useTheme } from '@/lib/themeProvider'

const milestones = [
  {
    year: '2015',
    quarter: 'Q1',
    title: 'GIH is Founded',
    description:
      'Global Integrated Hospitality is established in Malé, Maldives — with a vision to redefine luxury hospitality management in the Indian Ocean.',
  },
  {
    year: '2015',
    quarter: 'Q2',
    title: 'Team Assembly',
    description:
      'We handpick our founding team — hospitality veterans, designers, and strategists united by a passion for excellence.',
  },
  {
    year: '2015',
    quarter: 'Q3',
    title: 'First Advisory Engagements',
    description:
      'GIH begins its first confidential advisory engagements with resort developers and investors.',
  },
  {
    year: '2025',
    quarter: 'Q1',
    title: 'Portfolio Development Begins',
    description:
      "Work begins on GIH's first resort portfolio concepts — laying the groundwork for flagship luxury properties.",
  },
  {
    year: '2025',
    quarter: 'Future',
    title: 'First Resort Launch',
    description:
      'Our first managed luxury resort opens its doors — a milestone moment in Maldivian hospitality.',
  },
]

export default function Timeline() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.05 })
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section
      ref={ref}
      className="section relative overflow-hidden transition-colors duration-300"
      style={{
        background: isDark ? '#0C1A2E' : 'var(--bg-secondary)',
      }}
    >
      <div className="wrap">
        <div className="text-center mb-16">
          <motion.div
            className="lbl mb-4 justify-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            Our Journey
          </motion.div>
          <motion.h2
            className="font-display font-light transition-colors duration-300"
            style={{
              fontSize: 'clamp(28px, 3.5vw, 52px)',
              color: 'var(--text-primary)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            The GIH <span className="text-gold">Timeline</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{
              background:
                'linear-gradient(180deg, transparent, rgba(212,168,67,0.3) 10%, rgba(212,168,67,0.3) 90%, transparent)',
            }}
          />

          <div className="space-y-10">
            {milestones.map(({ year, quarter, title, description }, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={`${year}-${quarter}`}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.12 }}
                >
                  {/* Dot */}
                  <div
                    className="absolute left-4 md:left-1/2 top-2 w-3 h-3 rounded-full border-2 border-gold -translate-x-1/2 z-10 transition-colors duration-300"
                    style={{
                      background: isDark ? '#07111F' : 'var(--bg-primary)',
                    }}
                  />

                  {/* Card */}
                  <div
                    className={`glass p-6 ml-10 md:ml-0 w-full md:w-[45%] ${
                      isLeft ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="lbl" style={{ fontSize: '9px' }}>
                        {year}
                      </span>
                      <span
                        className="font-mono text-[9px] tracking-wider transition-colors duration-300"
                        style={{
                          color: isDark
                            ? 'rgba(255,255,255,0.30)'
                : 'rgba(23,20,17,0.55)',
                        }}
                      >
                        / {quarter}
                      </span>
                    </div>
                    <h3
                      className="font-body font-semibold text-gold text-base mb-2 transition-colors duration-300"
                    >
                      {title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed transition-colors duration-300"
                      style={{
                        color: isDark
                          ? 'rgba(255,255,255,0.38)'
                          : 'rgba(27,27,27,0.45)',
                      }}
                    >
                      {description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
