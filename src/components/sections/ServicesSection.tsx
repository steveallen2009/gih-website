'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import Image from 'next/image'

const services = [
  {
    title: 'Luxury Resort Ownership',
    description: 'Developing and operating premier island properties that define Maldivian excellence.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=85',
  },
  {
    title: 'Bespoke Guest Experiences',
    description: 'Crafting personalized journeys that transform stays into unforgettable memories.',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=85',
  },
  {
    title: 'Island Lifestyle Curation',
    description: 'Designing environments where luxury, nature, and authenticity converge seamlessly.',
    image: 'https://images.pexels.com/photos/30037393/pexels-photo-30037393.jpeg',
  },
  {
    title: 'Premium Hospitality Standards',
    description: 'Delivering service excellence that exceeds the expectations of discerning travelers.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=85',
  },
  {
    title: 'Resort Development',
    description: 'Bringing visionary resort concepts to life with precision and architectural elegance.',
    image: 'https://images.pexels.com/photos/5785085/pexels-photo-5785085.jpeg',
  },
  {
    title: 'Curated Ocean Living',
    description: 'Elevating the art of overwater luxury with thoughtful design and impeccable detail.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=85',
  },
]

export default function ServicesSection() {
  const [ref, inView] = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      className="section relative"
      style={{
        background: 'linear-gradient(180deg, #0C1A2E 0%, #07111F 100%)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="wrap">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="lbl mb-4 justify-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            What We Create
          </motion.div>
          <motion.h2
            className="font-display font-light text-white leading-tight"
            style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            The World of
            <span className="text-gold"> GIH</span>
          </motion.h2>
        </div>

        {/* Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, description, image }, i) => (
            <motion.div
              key={title}
              className="group relative overflow-hidden rounded-sm"
              style={{ aspectRatio: '4/5' }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.05 * i }}
            >
              {/* Image */}
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(0deg, rgba(7,17,31,0.95) 0%, rgba(7,17,31,0.3) 60%, transparent 100%)',
                }}
              />

              {/* Accent line on hover */}
              <div
                className="absolute top-0 left-0 w-0 h-1 bg-gold transition-all duration-500 group-hover:w-full"
              />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="font-display font-light text-white text-xl mb-2 leading-tight group-hover:text-gold transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}