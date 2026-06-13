'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import Image from 'next/image'
import { useTheme } from '@/lib/themeProvider'

const teamMembers = [
  {
    id: 1,
    name: 'Mohamed Riyaz',
    role: 'Founder & CEO',
    bio: 'Hospitality entrepreneur with deep roots in the Maldives. Passionate about building world-class luxury experiences from the Indian Ocean outward.',
    initials: 'MR',
    gradient: 'linear-gradient(145deg, #0D2B8A, #1B4FD8)',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
  },
  {
    id: 2,
    name: 'Aisha Latheef',
    role: 'Chief Operations Officer',
    bio: 'Former operations lead at a leading Maldivian resort group. Expert in luxury standards, team excellence, and seamless guest journeys.',
    initials: 'AL',
    gradient: 'linear-gradient(145deg, #0A1F4D, #1346B0)',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Head of Resort Development',
    bio: 'International luxury resort developer with projects across Asia Pacific. Brings a design-forward perspective to every GIH property.',
    initials: 'DC',
    gradient: 'linear-gradient(145deg, #6B3200, #C87020)',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80',
  },
  {
    id: 4,
    name: 'Fathimath Nasha',
    role: 'Director of Guest Experience',
    bio: 'Passionate about the human side of hospitality. Designs the emotional architecture of every GIH guest journey with precision and warmth.',
    initials: 'FN',
    gradient: 'linear-gradient(145deg, #0B1F4A, #1E5098)',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
  },
  {
    id: 5,
    name: 'Ismail Waheed',
    role: 'Finance & Strategy Director',
    bio: "Former investment banker turned hospitality strategist. Ensures GIH's financial architecture is as strong as its vision for the future.",
    initials: 'IW',
    gradient: 'linear-gradient(145deg, #071628, #1236A0)',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80',
  },
  {
    id: 6,
    name: 'Saraa Khalid',
    role: 'Head of Brand & Marketing',
    bio: 'Brand storyteller with a background in luxury fashion and hospitality. Crafts the GIH narrative with precision, elegance and authority.',
    initials: 'SK',
    gradient: 'linear-gradient(145deg, #5A2D00, #B86018)',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80',
  },
]

export default function TeamGrid() {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              className="team-card glass overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              {/* Avatar */}
              <div className="relative h-56 overflow-hidden" style={{ background: member.gradient }}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="team-img object-cover opacity-85"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.08), transparent 60%)',
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="font-body font-light text-lg mb-0.5 transition-colors duration-300"
                  style={{
                    color: 'var(--text-primary)',
                  }}
                >
                  {member.name}
                </h3>
                <p
                  className="font-mono text-[10px] tracking-[0.22em] text-gold opacity-75 uppercase mb-3"
                >
                  {member.role}
                </p>
                <p
                  className="text-sm leading-relaxed transition-colors duration-300"
                  style={{
                    color: 'var(--text-tertiary)',
                  }}
                >
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
