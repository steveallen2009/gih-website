'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import Image from 'next/image'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1600&q=90',
    alt: 'Aerial island view',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600&q=90',
    alt: 'Overwater villa interior',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/7832609/pexels-photo-7832609.jpeg',
    alt: 'Seaplane arrival',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1600&q=90',
    alt: 'Sunset ocean experience',
    span: 'col-span-2 row-span-1',
  },
]

export default function AboutGallery() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={ref} className="section" style={{ background: '#0C1A2E' }}>
      <div className="wrap">
        <div className="text-center mb-14">
          <motion.div
            className="lbl mb-4 justify-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            Our Vision
          </motion.div>
          <motion.h2
            className="font-display font-light text-white leading-tight mb-5"
            style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            The World We Are Building
          </motion.h2>
          <motion.p
            className="text-white/45 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            A future collection of extraordinary island destinations shaped by Maldivian beauty,
            timeless hospitality, and global ambition.
          </motion.p>
        </div>

        {/* Asymmetrical Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden rounded-sm group ${image.span}`}
              style={{ minHeight: '300px' }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-50"
                style={{
                  background: 'linear-gradient(0deg, rgba(7,17,31,0.4) 0%, transparent 60%)',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}