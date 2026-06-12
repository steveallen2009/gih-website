'use client'

import { useTheme } from '@/lib/themeProvider'

interface PolicySection {
  id: string
  title: string
  content: React.ReactNode
}

interface PolicyContentProps {
  sections: PolicySection[]
}

export default function PolicyContent({ sections }: PolicyContentProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section
      className="section transition-colors duration-300"
      style={{
        background: isDark ? 'var(--bg-primary)' : 'var(--bg-primary)',
      }}
    >
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar - Table of Contents */}
          <div className="lg:col-span-1">
            <div
              className="sticky top-24 rounded-lg p-6 transition-colors duration-300"
              style={{
                background: isDark
                  ? 'rgba(255,255,255,0.03)'
                  : 'rgba(0,0,0,0.02)',
                border: isDark
                  ? '1px solid rgba(255,255,255,0.05)'
                  : '1px solid rgba(0,0,0,0.05)',
              }}
            >
              <h3
                className="font-body font-semibold text-sm mb-4 transition-colors duration-300"
                style={{
                  color: isDark
                    ? 'rgba(255,255,255,0.8)'
                    : 'rgba(0,0,0,0.8)',
                }}
              >
                Contents
              </h3>
              <nav className="space-y-3">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm transition-all duration-300 hover:translate-x-1"
                    style={{
                      color: isDark
                        ? 'rgba(255,255,255,0.5)'
                        : 'rgba(0,0,0,0.5)',
                    }}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="scroll-mt-32"
              >
                <h2
                  className="font-display font-light text-3xl mb-4 transition-colors duration-300"
                  style={{
                    color: isDark
                      ? 'var(--text-primary)'
                      : 'var(--text-primary)',
                  }}
                >
                  {section.title}
                </h2>
                <div
                  className="h-1 w-12 mb-6 transition-colors duration-300"
                  style={{
                    background: isDark
                      ? 'rgba(212,168,67,0.4)'
                      : 'rgba(212,168,67,0.5)',
                  }}
                />
                <div
                  className="prose prose-invert max-w-none transition-colors duration-300 space-y-4"
                  style={{
                    color: isDark
                      ? 'rgba(255,255,255,0.65)'
                      : 'rgba(0,0,0,0.7)',
                  }}
                >
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
