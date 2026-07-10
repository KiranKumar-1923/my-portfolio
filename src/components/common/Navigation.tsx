import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useThemeStore } from '@/context/themeContext'
import { FiMenu, FiX } from 'react-icons/fi'
import { BsSun, BsMoon } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'

const Navigation: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore()
  const [isOpen, setIsOpen] = React.useState(false)
  const location = useLocation()

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/#contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname === href || location.hash === href.split('#')[1]
  }

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/10 dark:border-slate-700/50">
      <div className="section-container flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center text-white font-bold">
            JFD
          </div>
          <span className="hidden sm:block font-bold text-lg gradient-text">Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-white/10 dark:hover:bg-slate-800/50 rounded-lg transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <BsMoon size={20} /> : <BsSun size={20} />}
          </button>

          {/* Resume Download */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 btn-primary text-sm"
          >
            <HiDownload /> Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-white/10 dark:hover:bg-slate-800/50 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-white/10 dark:border-slate-700/50"
        >
          <div className="section-container flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-primary-600'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm flex items-center gap-2"
            >
              <HiDownload /> Download Resume
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navigation
