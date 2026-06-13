'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from '@/lib/themeProvider'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Team', href: '/team' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  useEffect(() => {
    if (!menuOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [menuOpen])

  useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    document.body.style.touchAction = 'none'
  } else {
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
    document.body.style.touchAction = ''
  }

  return () => {
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
    document.body.style.touchAction = ''
  }
}, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }

    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside)
    }, 100)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen])

  const isDark = theme === 'dark'

  // Navbar styling based on scroll state
  let headerBg = 'transparent'
  let headerBorder = 'transparent'

  if (scrolled) {
    if (isDark) {
      headerBg = 'rgba(7, 17, 31, 0.9)'
      headerBorder = 'rgba(255, 255, 255, 0.05)'
    } else {
      headerBg = 'rgba(242, 239, 232, 0.8)'
      headerBorder = 'rgba(27, 27, 27, 0.05)'
    }
  }

  // Text color for nav items: white at top, theme-aware when scrolled
  const getNavTextClass = (active: boolean = false) => {
    if (active) {
  return !scrolled
    ? 'text-gold brightness-150 drop-shadow-[0_0_14px_rgba(212,168,67,0.5)]'
    : 'text-gold'
}

    if (!scrolled) {
      // Always white over hero
      return 'text-white/70 hover:text-[#F2E6C8]'
    }

    // When scrolled, adapt to theme
    return isDark
      ? 'text-white/60 hover:text-white'
      : 'text-black/70 hover:text-black'
  }

  // Icon color for theme toggle and menu: white at top, theme-aware when scrolled
  const getIconClass = () => {
    if (!scrolled) {
      return 'text-white/70 hover:text-white'
    }

    return isDark
      ? 'text-white/60 hover:text-white'
      : 'text-black/70 hover:text-black'
  }

  // Theme toggle button styling
  const getThemeToggleClass = () => {
    if (!scrolled) {
      return 'bg-white/10 text-white/70 hover:text-white hover:bg-white/20'
    }

    return isDark
      ? 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
      : 'bg-black/5 text-black/60 hover:text-black hover:bg-black/10'
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: headerBg,
          borderBottom: `1px solid ${headerBorder}`,
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          padding: scrolled ? '12px 0' : '16px 0',
        }}
      >
        <div className="wrap flex items-center justify-between">
          {/* Logo - Left */}
          <Link href="/" className="flex flex-col group flex-shrink-0">
            <span className="font-display font-bold text-xl tracking-[0.12em] text-azure transition-colors duration-300">
              GIH
            </span>
            <div className="h-[2px] w-full mt-0.5 bg-gradient-to-r from-gold to-transparent" />
            <span
              className="font-mono text-[7px] tracking-[0.28em] uppercase mt-0.5 transition-colors duration-300"
              style={{
                color: !scrolled
                  ? 'rgba(255,255,255,0.4)'
                  : isDark
                  ? 'rgba(255,255,255,0.35)'
    : 'rgba(27,27,27,0.6)'
              }}
            >
              Maldives Luxury
            </span>
          </Link>

          {/* Desktop nav - Right */}
          <nav className="hidden md:flex items-center gap-8 ml-auto mr-6">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative font-body text-[12px] tracking-[0.14em] uppercase transition-all duration-300 ${
  active && !scrolled
    ? 'drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]'
    : ''
} ${getNavTextClass(active)}`}
                >
                  {link.label}
                  <span
  className={`absolute -bottom-1 left-1/2 h-[2px] -translate-x-1/2 transition-all duration-300 ease-out ${
    active
      ? 'w-full opacity-100 shadow-[0_0_5px_rgba(170,130,45,0.25)]'
      : 'w-0 opacity-80 group-hover:w-full group-hover:opacity-100'
  }`}
  style={{
    background: active ? '#BE9032' : '#C79A3B',
  }}
/>
                </Link>
              )
            })}
          </nav>

          {/* Theme toggle + Mobile hamburger - Right */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${getThemeToggleClass()}`}
              aria-label="Toggle theme"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile hamburger */}
            <button
              className={`md:hidden p-2 transition-colors relative z-[60] ${getIconClass()}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[55] md:hidden overflow-hidden overscroll-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
  background: isDark
    ? 'var(--bg-primary)'
    : 'var(--bg-secondary)',
  backdropFilter: 'blur(28px)',
  WebkitBackdropFilter: 'blur(24px)',
}}
          >
            {/* Menu content */}
<div
  ref={menuRef}
  className="relative flex flex-col items-center justify-center h-full px-6"
  
>
  {/* Close button */}
<button
  onClick={() => setMenuOpen(false)}
  className={`absolute top-7 right-7 p-2 transition-colors duration-300 ${
    isDark
      ? 'text-white/60 hover:text-white'
      : 'text-black/60 hover:text-black'
  }`}
  aria-label="Close menu"
>
  <X size={22} />
</button>
{/* Mobile menu logo */}
<motion.div
  className="absolute top-[16%] w-[220px] h-[220px] rounded-full pointer-events-none"
  style={{
    background: isDark
      ? 'radial-gradient(circle, rgba(27,79,216,0.18), transparent 70%)'
      : 'radial-gradient(circle, rgba(27,79,216,0.08), transparent 70%)',
    filter: 'blur(40px)',
  }}
  animate={{
    scale: [1, 1.15, 1],
    opacity: [0.35, 0.55, 0.35],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
/>
<motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="flex flex-col items-center mb-10 -mt-8"
>
  <motion.span
    initial={{ opacity: 0, letterSpacing: '0.4em' }}
    animate={{ opacity: 1, letterSpacing: '0.12em' }}
    transition={{
      duration: 0.8,
      ease: 'easeOut',
    }}
    className="font-display font-bold tracking-[0.12em] text-azure"
  style={{
    fontSize: 'clamp(3.8rem, 14vw, 5rem)',
    filter: isDark
      ? 'drop-shadow(0 0 18px rgba(59,130,246,0.28))'
      : 'drop-shadow(0 0 10px rgba(27,79,216,0.18))',
  }}
  >
    GIH
  </motion.span>

  <motion.div className="h-1 mt-1 bg-gradient-to-r from-gold to-transparent"
  style={{
    width: '140px',
    filter: isDark
      ? 'drop-shadow(0 0 10px rgba(212,168,67,0.35))'
      : 'drop-shadow(0 0 6px rgba(212,168,67,0.18))',
  }}
  initial={{
    scaleX: 0,
    opacity: 0,
  }}
  animate={{
    scaleX: 1,
    opacity: 1,
  }}
  transition={{
    delay: 0.25,
    duration: 0.7,
    ease: [0.16, 1, 0.3, 1],
  }}
/>
<motion.p
  className="font-mono text-[9px] tracking-[0.35em] uppercase text-center mt-3 transition-colors duration-300"
  style={{
    color: isDark
      ? 'rgba(255,255,255,0.30)'
      : 'rgba(23,20,17,0.55)',
  }}
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    delay: 0.45,
    duration: 0.7,
  }}
>
  Luxury Born in the Maldives
</motion.p>
</motion.div>

              <nav className="flex flex-col items-center gap-7 mb-10 mt-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`font-display text-3xl font-medium tracking-wide transition-colors duration-300 ${
                        isDark
                          ? 'text-white/80 hover:text-gold'
                          : 'text-black/80 hover:text-gold'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Theme toggle in mobile menu */}
              <motion.button
  onClick={toggleTheme}
  className={`mt-2 p-3 rounded-full transition-all duration-300 ${
                  isDark
                    ? 'bg-white/10 text-white/70 hover:text-white'
                    : 'bg-black/10 text-black/70 hover:text-black'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
