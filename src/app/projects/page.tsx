import type { Metadata } from 'next'
import ProjectsHero from '@/components/sections/projects/ProjectsHero'
import ProjectsGrid from '@/components/sections/projects/ProjectsGrid'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'GIH luxury resort projects across the Maldives.',
}

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
    </>
  )
}