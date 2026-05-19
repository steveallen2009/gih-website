'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { ArrowRight, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const resorts = [
  {
    name: 'Atoll Serenity',
    location: 'North Malé Atoll',
    type: 'Private Island Resort',
    status: 'In Development',
    statusColor: '#4ADE80',
    image: 'https://images.pexels.com/photos/28843931/pexels-photo-28843931.jpeg',
  },
  {
    name: 'Azure Horizon',
    location: 'Baa Atoll',
    type: 'Overwater Villa Collection',
    status: 'Concept Stage',
    statusColor: '#D4A843',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80',
  },
  {
    name: 'The Pearl Maldives',
    location: 'Lhaviyani Atoll',
    type: 'Luxury Beach Resort',
    status: 'Feasibility Phase',
    statusColor: '#60A5FA',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
  },
]

export default function ResortsShowcase() {
  const [ref, inView] = useInView<HTMLElement>()

  return (
    <section ref={ref} className="section bg-navy">
      <div className="wrap">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.div
              className="lbl mb-3"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7 }}
            >
              Portfolio
            </motion.div>
            <motion.h2
              className="font-display font-light text-white leading-tight"
              style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Featured Resort
              <br />
              <span className=" text-gold">Concepts</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-white/45 hover:text-gold transition-colors duration-300 group"
            >
              View All Projects
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </div>

        {/* Resort cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resorts.map(({ name, location, type, status, statusColor, image }, i) => (
            <motion.div
              key={name}
              className="proj-card group relative overflow-hidden rounded-sm"
              style={{ aspectRatio: '3/4' }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * i }}
            >
              {/* Image */}
              <Image
                src={image}
                alt={name}
                fill
                className="proj-img object-cover"
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(0deg, rgba(7,17,31,0.95) 0%, rgba(7,17,31,0.3) 60%, transparent 100%)',
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Status badge */}
                <span
                  className="self-start font-mono text-[9px] tracking-wider uppercase px-3 py-1.5 rounded-full"
                  style={{
                    background: 'rgba(7,17,31,0.6)',
                    border: `1px solid ${statusColor}50`,
                    color: statusColor,
                  }}
                >
                  {status}
                </span>

                {/* Bottom info */}
                <div>
                  <div className="font-mono text-[9px] tracking-wider text-white/35 uppercase mb-2">
                    {type}
                  </div>
                  <h3 className="font-display font-light text-white text-2xl mb-3 leading-tight">
                    {name}
                  </h3>
                  <div className="flex items-center gap-2 text-white/40 text-xs">
                    <MapPin size={11} />
                    {location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}