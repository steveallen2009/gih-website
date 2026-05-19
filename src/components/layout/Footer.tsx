import Link from 'next/link'
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

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

  return (
    <footer className="bg-navy border-t border-white/5">
      <div className="wrap py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-14">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-display font-bold text-2xl tracking-wide text-azure">GIH</span>
              <div className="h-0.5 w-12 mt-1 bg-gradient-to-r from-gold to-transparent" />
            </div>
            <p className="font-mono text-[9px] tracking-[0.3em] text-white/20 uppercase mb-4">
              Luxury Born in the Maldives
            </p>
            <p className="text-sm text-white/35 leading-relaxed max-w-xs mb-6">
              Redefining luxury hospitality across the Maldives — where pristine oceans meet uncompromising excellence.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/35 hover:text-gold hover:border-gold/40 transition-all duration-300"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/35 hover:text-gold hover:border-gold/40 transition-all duration-300"
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
                    className="text-sm text-white/35 hover:text-white transition-colors duration-300"
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
                <li key={s} className="text-sm text-white/35 hover:text-white/60 transition-colors duration-300">
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
                  className="flex items-start gap-3 text-sm text-white/35 hover:text-gold transition-colors duration-300"
                >
                  <Mail size={14} className="mt-0.5 shrink-0" />
                  info@gih.mv
                </a>
              </li>
              <li>
                <a
                  href="tel:+9603001234"
                  className="flex items-start gap-3 text-sm text-white/35 hover:text-gold transition-colors duration-300"
                >
                  <Phone size={14} className="mt-0.5 shrink-0" />
                  +960 300 1234
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/35">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  <span>Malé, Republic of Maldives</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-white/5 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[9px] tracking-[0.2em] text-white/15 uppercase">
            © {year} GIH — All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="font-mono text-[9px] tracking-wider text-white/15 hover:text-white/30 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="font-mono text-[9px] tracking-wider text-white/15 hover:text-white/30 transition-colors cursor-pointer">
              Terms of Use
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}