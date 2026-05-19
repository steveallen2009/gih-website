'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

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

  return (
    <section ref={ref} className="section relative overflow-hidden" style={{ background: '#0C1A2E' }}>
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
            className="font-display font-light text-white"
            style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            The GIH <span className=" text-gold">Timeline</span>
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
                  <div className="absolute left-4 md:left-1/2 top-2 w-3 h-3 rounded-full border-2 border-gold bg-navy -translate-x-1/2 z-10" />

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
                      <span className="font-mono text-[9px] text-white/20 tracking-wider">
                        / {quarter}
                      </span>
                    </div>
                    <h3 className="font-body font-semibold text-gold text-base mb-2">{title}</h3>
                    <p className="text-sm text-white/38 leading-relaxed">{description}</p>
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