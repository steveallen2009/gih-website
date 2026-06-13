'use client'

import Link from 'next/link'
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { useTheme } from '@/lib/themeProvider'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Team', href: '/team' },
]

const services = [
  'Hotel Chain Management',
  'Resort Hospitality',
  'Luxury Tourism',
  'Hospitality Consulting',
  'Guest Experience Design',
]

export default function Footer() {
  const year = new Date().getFullYear()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <footer
      className="border-t transition-colors duration-300"
      style={{
        background: isDark ? 'var(--bg-primary)' : 'var(--bg-secondary)',
        borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(27,27,27,0.05)',
      }}
    >
      <div className="wrap py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-14">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-display font-bold text-2xl tracking-wide text-azure">
                GIH
              </span>
              <div className="h-0.5 w-12 mt-1 bg-gradient-to-r from-gold to-transparent" />
            </div>

            <p
              className="font-mono text-[9px] tracking-[0.3em] uppercase mb-4 transition-colors duration-300"
              style={{
                color: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(27,27,27,0.3)',
              }}
            >
              Luxury Born in the Maldives
            </p>

            <p
              className="text-sm leading-relaxed max-w-xs mb-6 transition-colors duration-300"
              style={{
                color: isDark ? 'rgba(255,255,255,0.35)' : 'rgba(27,27,27,0.6)',
              }}
            >
              Redefining luxury hospitality across the Maldives — where pristine oceans meet
              uncompromising excellence.
            </p>

            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
                style={{
                  borderColor: isDark
                    ? 'rgba(255,255,255,0.1)'
                    : 'rgba(27,27,27,0.1)',
                  color: isDark
                    ? 'rgba(255,255,255,0.35)'
                    : 'rgba(27,27,27,0.35)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#D4A843'
                  e.currentTarget.style.borderColor = 'rgba(212,168,67,0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isDark
                    ? 'rgba(255,255,255,0.35)'
                    : 'rgba(27,27,27,0.35)'
                  e.currentTarget.style.borderColor = isDark
                    ? 'rgba(255,255,255,0.1)'
                    : 'rgba(27,27,27,0.1)'
                }}
              >
                <Instagram size={14} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
                style={{
                  borderColor: isDark
                    ? 'rgba(255,255,255,0.1)'
                    : 'rgba(27,27,27,0.1)',
                  color: isDark
                    ? 'rgba(255,255,255,0.35)'
                    : 'rgba(27,27,27,0.35)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#D4A843'
                  e.currentTarget.style.borderColor = 'rgba(212,168,67,0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isDark
                    ? 'rgba(255,255,255,0.35)'
                    : 'rgba(27,27,27,0.35)'
                  e.currentTarget.style.borderColor = isDark
                    ? 'rgba(255,255,255,0.1)'
                    : 'rgba(27,27,27,0.1)'
                }}
              >
                <Linkedin size={14} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="lbl mb-5" style={{ fontSize: '9px' }}>
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-300"
                    style={{
                      color: isDark
                        ? 'rgba(255,255,255,0.35)'
                        : 'rgba(27,27,27,0.6)',
                    }}
                    onMouseEnter={(e) => {
  e.currentTarget.style.color = '#D4A843'
}}
onMouseLeave={(e) => {
  e.currentTarget.style.color = isDark
    ? 'rgba(255,255,255,0.35)'
    : 'rgba(27,27,27,0.6)'
}}
                  >
                    {link.label}
                    
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="lbl mb-5" style={{ fontSize: '9px' }}>
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li
                  key={s}
                  className="text-sm transition-colors duration-300"
                  style={{
                    color: isDark
                      ? 'rgba(255,255,255,0.35)'
                      : 'rgba(27,27,27,0.6)',
                  }}
                  onMouseEnter={(e) => {
  e.currentTarget.style.color = isDark
    ? 'rgba(255,255,255,0.6)'
    : 'rgba(27,27,27,0.8)'
}}
onMouseLeave={(e) => {
  e.currentTarget.style.color = isDark
    ? 'rgba(255,255,255,0.35)'
    : 'rgba(27,27,27,0.6)'
}}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="lbl mb-5" style={{ fontSize: '9px' }}>
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@gih.mv"
                  className="flex items-start gap-3 text-sm transition-colors duration-300"
                  style={{
                    color: isDark
                      ? 'rgba(255,255,255,0.35)'
                      : 'rgba(27,27,27,0.6)',
                  }}
                  onMouseEnter={(e) => {
  e.currentTarget.style.color = '#D4A843'
}}
onMouseLeave={(e) => {
  e.currentTarget.style.color = isDark
    ? 'rgba(255,255,255,0.35)'
    : 'rgba(27,27,27,0.6)'
}}
                >
                  <Mail size={14} className="mt-0.5 shrink-0" />
                  info@gih.mv
                </a>
              </li>

              <li>
                <a
                  href="tel:+9603001234"
                  className="flex items-start gap-3 text-sm transition-colors duration-300"
                  style={{
                    color: isDark
                      ? 'rgba(255,255,255,0.35)'
                      : 'rgba(27,27,27,0.6)',
                  }}
                  onMouseEnter={(e) => {
  e.currentTarget.style.color = '#D4A843'
}}
onMouseLeave={(e) => {
  e.currentTarget.style.color = isDark
    ? 'rgba(255,255,255,0.35)'
    : 'rgba(27,27,27,0.6)'
}}
                >
                  <Phone size={14} className="mt-0.5 shrink-0" />
                  +960 300 1234
                </a>
              </li>

              <li>
                <div
                  className="flex items-start gap-3 text-sm transition-colors duration-300"
                  style={{
                    color: isDark
                      ? 'rgba(255,255,255,0.35)'
                      : 'rgba(27,27,27,0.6)',
                  }}
                  onMouseEnter={(e) => {
  e.currentTarget.style.color = isDark
    ? 'rgba(255,255,255,0.6)'
    : 'rgba(27,27,27,0.8)'
}}
onMouseLeave={(e) => {
  e.currentTarget.style.color = isDark
    ? 'rgba(255,255,255,0.35)'
    : 'rgba(27,27,27,0.6)'
}}
                >
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  <span>Malé, Republic of Maldives</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="h-px mb-8 transition-colors duration-300"
          style={{
            background: isDark
              ? 'rgba(255,255,255,0.05)'
              : 'rgba(27,27,27,0.05)',
          }}
        />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="font-mono text-[9px] tracking-[0.2em] uppercase transition-colors duration-300"
            style={{
              color: isDark
                ? 'rgba(255,255,255,0.30)'
                : 'rgba(23,20,17,0.55)',
            }}
          >
            © {year} GIH — All rights reserved.
          </p>

          <div className="flex gap-6">
  <Link
    href="/privacy"
    className="font-mono text-[9px] tracking-wider transition-colors duration-300 cursor-pointer"
    style={{
      color: isDark
        ? 'rgba(255,255,255,0.30)'
        : 'rgba(23,20,17,0.55)',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.color = isDark
        ? 'rgba(255,255,255,0.5)'
        : 'rgba(23,20,17,0.75)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.color = isDark
        ? 'rgba(255,255,255,0.30)'
        : 'rgba(23,20,17,0.55)'
    }}
  >
    Privacy Policy
  </Link>

  <Link
    href="/terms"
    className="font-mono text-[9px] tracking-wider transition-colors duration-300 cursor-pointer"
    style={{
      color: isDark
        ? 'rgba(255,255,255,0.30)'
        : 'rgba(23,20,17,0.55)',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.color = isDark
        ? 'rgba(255,255,255,0.5)'
        : 'rgba(23,20,17,0.75)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.color = isDark
        ? 'rgba(255,255,255,0.30)'
        : 'rgba(23,20,17,0.55)'
    }}
  >
    Terms of Use
  </Link>
</div>
        </div>
      </div>
    </footer>
  )
}
