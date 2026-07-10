import React from 'react'
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { personalInfo } from '@/data'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: FiGithub,
      label: 'GitHub',
      url: personalInfo.socialLinks.github,
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      url: personalInfo.socialLinks.linkedin,
    },
    {
      icon: FiTwitter,
      label: 'Twitter',
      url: personalInfo.socialLinks.twitter,
    },
    {
      icon: FiMail,
      label: 'Email',
      url: `mailto:${personalInfo.socialLinks.email}`,
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      url: `https://wa.me/1234567890`,
    },
  ]

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/#contact' },
  ]

  return (
    <footer className="bg-white/5 dark:bg-slate-900/50 border-t border-white/10 dark:border-slate-700/50">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center text-white font-bold mb-4">
              JFD
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Full Stack Developer specializing in Java backend systems and modern web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <div className="flex flex-col gap-2">
              <a
                href="/resume.pdf"
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors"
              >
                Download Resume
              </a>
              <a
                href="/#projects"
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors"
              >
                View Projects
              </a>
              <a
                href="/blog"
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors"
              >
                Read Blog
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 dark:bg-slate-800 hover:bg-primary-600 dark:hover:bg-primary-600 flex items-center justify-center transition-colors text-slate-600 dark:text-slate-400 hover:text-white"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 dark:border-slate-700/50 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © {currentYear} Java Full Stack Developer. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
