'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { MapPin, Clock, Layers } from 'lucide-react'
import { Gem } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 'atoll-serenity',
    name: 'Atoll Serenity Resort',
    location: 'North Malé Atoll, Maldives',
    type: 'Private Island Resort',
    status: 'In Development',
    year: '2025',
    tags: ['Resort', 'Private Island', '5-Star'],
    description:
      'A secluded private island resort offering 40 overwater villas, a signature spa, and curated marine experiences in the pristine North Malé Atoll.',
    color: '#1B4FD8',
    statusColor: '#4ADE80',
    image: 'https://images.pexels.com/photos/28843931/pexels-photo-28843931.jpeg',
  },
  {
    id: 'azure-horizon',
    name: 'Azure Horizon Collection',
    location: 'Baa Atoll, Maldives (UNESCO Biosphere)',
    type: 'Overwater Villa Collection',
    status: 'Concept Stage',
    year: '2026',
    tags: ['Villas', 'Eco-Luxury', 'Overwater'],
    description:
      'An unprecedented collection of overwater villas inspired by the UNESCO-protected Baa Atoll ecosystem — where architecture and nature coexist in harmony.',
    color: '#D4A843',
    statusColor: '#D4A843',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=85',
  },
  {
    id: 'pearl-maldives',
    name: 'The Pearl Maldives',
    location: 'Lhaviyani Atoll, Maldives',
    type: 'Luxury Beach & Lagoon Resort',
    status: 'Feasibility Phase',
    year: '2026',
    tags: ['Beach', 'Lagoon', 'Fine Dining'],
    description:
      'A modern luxury beach resort combining Maldivian architectural heritage with contemporary design — anchored by a world-class food and beverage program.',
    color: '#60A5FA',
    statusColor: '#60A5FA',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=85',
  },
  {
    id: 'gih-future-1',
    name: 'Project Confidential',
    location: 'Southern Atolls, Maldives',
    type: 'Ultra-Luxury Boutique Property',
    status: 'NDA',
    year: 'TBD',
    tags: ['Boutique', 'Ultra-Luxury', 'Exclusive'],
    description:
      'An undisclosed ultra-luxury boutique project currently under NDA — setting a new ceiling for intimacy and personalised service in the Maldives.',
    color: '#9333EA',
    statusColor: '#A855F7',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=85',
  },
]

export default function ProjectsGrid() {
  const [ref, inView] = useInView<HTMLElement>()

  return (
    <section ref={ref} className="section" style={{ background: '#07111F' }}>
      <div className="wrap">
        {/* Coming soon banner */}
        <motion.div
          className="glass p-8 text-center mb-14 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{ background: 'linear-gradient(90deg, transparent, #D4A843, transparent)' }}
          />
          <Gem size={28} className="text-gold mx-auto mb-4" strokeWidth={1} />
          <h2
            className="font-display font-semibold text-white mb-3 leading-tight"
            style={{ fontSize: 'clamp(22px, 2.5vw, 34px)' }}
          >
            The <span className="text-gold">GIH Collection</span>
          </h2>
          <p className="text-white/35 text-base max-w-lg mx-auto">
            A curated collection of luxury island destinations envisioned across the Maldives — each designed to deliver exceptional hospitality, refined experiences, and timeless ocean living.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              className="glass overflow-hidden group relative"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              {/* Color accent line */}
              <div
                className="h-0.5 w-0 group-hover:w-full transition-all duration-600"
                style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
              />

              {/* Faint glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top left, ${project.color}12 0%, transparent 70%)`,
                }}
              />

              <div className="p-8 relative z-10">
                {/* Top row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] tracking-[0.2em] uppercase px-2 py-1 rounded"
                        style={{
                          background: `${project.color}18`,
                          border: `1px solid ${project.color}30`,
                          color: project.color,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span
                    className="font-mono text-[9px] tracking-wider uppercase px-2.5 py-1 rounded-full shrink-0"
                    style={{
                      background: `${project.statusColor}15`,
                      border: `1px solid ${project.statusColor}30`,
                      color: project.statusColor,
                    }}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Image */}
                <div className="relative h-48 mb-5 overflow-hidden rounded-sm">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Name */}
                <h3
                  className="font-display font-light text-white mb-2 group-hover:text-gold transition-colors duration-400"
                  style={{ fontSize: 'clamp(22px, 2vw, 28px)' }}
                >
                  {project.name}
                </h3>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 mb-4 text-white/30 text-xs">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={11} />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Layers size={11} />
                    {project.type}
                  </span>
                </div>

                <p className="text-sm text-white/38 leading-relaxed">{project.description}</p>

                {/* Footer */}
                <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[9px] text-white/20 tracking-wider uppercase block">
                      Expected Launch
                    </span>
                    <span className="font-display text-xl text-white/40">{project.year}</span>
                  </div>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400"
                    style={{ background: project.color }}
                  >
                    <Clock size={14} className="text-white" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}