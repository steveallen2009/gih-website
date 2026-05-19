import type { Metadata } from 'next'
import TeamHero from '@/components/sections/team/TeamHero'
import TeamGrid from '@/components/sections/team/TeamGrid'

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet the GIH team — hospitality experts and visionaries.',
}

export default function TeamPage() {
  return (
    <>
      <TeamHero />
      <TeamGrid />
    </>
  )
}