import HeroSection from '@/components/sections/HeroSection'
import IntroSection from '@/components/sections/IntroSection'
import LuxuryShowcaseSection from '@/components/sections/LuxuryShowcaseSection'
import ServicesSection from '@/components/sections/ServicesSection'
import StatsSection from '@/components/sections/StatsSection'
import ResortsShowcase from '@/components/sections/ResortsShowcase'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <LuxuryShowcaseSection />
      <ServicesSection />
      <StatsSection />
      <ResortsShowcase />
    </>
  )
}