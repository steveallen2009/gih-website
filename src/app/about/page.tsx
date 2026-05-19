import type { Metadata } from 'next'
import AboutHero from '@/components/sections/about/AboutHero'
import MissionVision from '@/components/sections/about/MissionVision'
import ValuesSection from '@/components/sections/about/ValuesSection'
import AboutGallery from '@/components/sections/about/AboutGallery'
import Timeline from '@/components/sections/about/Timeline'
import ResortsShowcase from '@/components/sections/ResortsShowcase'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about GIH — our story, mission, vision, and values.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <ValuesSection />
      <AboutGallery />
      <Timeline />
      <ResortsShowcase />
    </>
  )
}