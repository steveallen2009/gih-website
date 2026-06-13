'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from '@/lib/themeProvider'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    // ONLY disable on actual mobile/tablet coarse-pointer devices
    const isMobilePointer = window.matchMedia('(pointer: coarse)').matches
    setEnabled(!isMobilePointer)
  }, [])

  useEffect(() => {
    if (!enabled) {
      document.body.style.cursor = 'auto'
      return
    }

    document.body.style.cursor = 'none'

    const dot = dotRef.current
    const ring = ringRef.current

    if (!dot || !ring) return

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let rafId: number

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12

      ring.style.transform = `translate(${ringX - 15}px, ${ringY - 15}px)`

      rafId = requestAnimationFrame(animate)
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      if (target.closest('a, button, [role="button"]')) {
        ring.classList.add('hov')
      } else {
        ring.classList.remove('hov')
      }
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mouseover', onMouseOver, { passive: true })

    rafId = requestAnimationFrame(animate)

    return () => {
      document.body.style.cursor = 'auto'

      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)

      cancelAnimationFrame(rafId)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div ref={dotRef} className="cur-dot" aria-hidden="true" />
      <div ref={ringRef} className="cur-ring" aria-hidden="true" />
    </>
  )
}
