'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({
  children,
}: {
  children: ReactNode
}) {
  // Give it a default value immediately
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null

    let initialTheme: Theme

    if (storedTheme === 'light' || storedTheme === 'dark') {
      initialTheme = storedTheme
    } else {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      initialTheme = prefersDark ? 'dark' : 'light'
    }

    setTheme(initialTheme)
    document.documentElement.setAttribute('data-theme', initialTheme)
    localStorage.setItem('theme', initialTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'dark' ? 'light' : 'dark'

    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }

  return context
}
