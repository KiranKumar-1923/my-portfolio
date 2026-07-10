import React from 'react'
import { motion } from 'framer-motion'
import { HiDownload, HiArrowRight } from 'react-icons/hi'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { personalInfo } from '@/data'

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = React.useState('')
  const fullText = 'Full Stack Developer | Java | Spring Boot | React'

  React.useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.substring(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const socialLinks = [
    { icon: FiGithub, url: personalInfo.socialLinks.github, label: 'GitHub' },
    { icon: FiLinkedin, url: personalInfo.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: FiMail, url: `mailto:${personalInfo.socialLinks.email}`, label: 'Email' },
    { icon: FaWhatsapp, url: 'https://wa.me/1234567890', label: 'WhatsApp' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" />
      </motion.div>

      <div className="section-container">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-primary-600 dark:text-primary-400 font-semibold">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl sm:text-6xl font-bold mb-4">
                <span className="block text-slate-900 dark:text-white">
                  {personalInfo.name}
                </span>
                <span className="block gradient-text mt-2">{displayText}</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              {personalInfo.bio}
            </motion.p>

            {/* Availability Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-green-700 dark:text-green-400">
                {personalInfo.availability}
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <HiDownload /> Download Resume
              </a>
              <a href="#projects" className="btn-secondary flex items-center gap-2">
                View Projects <HiArrowRight />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4">
              <span className="text-sm text-slate-600 dark:text-slate-400">Connect with me:</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 dark:bg-slate-800 hover:bg-primary-600 dark:hover:bg-primary-600 flex items-center justify-center transition-colors text-slate-700 dark:text-slate-300 hover:text-white"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Illustration */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 md:h-full hidden md:flex items-center justify-center"
          >
            <motion.div
              className="relative w-64 h-64"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {/* Main Circle */}
              <motion.div
                className="w-64 h-64 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 shadow-2xl flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-56 h-56 rounded-full bg-white dark:bg-slate-950 flex items-center justify-center">
                  <div className="text-6xl text-center">💻</div>
                </div>
              </motion.div>

              {/* Floating Icons */}
              {[
                { icon: '☕', delay: 0, position: 'top-0 left-0' },
                { icon: '⚛️', delay: 0.2, position: 'top-0 right-0' },
                { icon: '🐘', delay: 0.4, position: 'bottom-0 left-0' },
                { icon: '🐳', delay: 0.6, position: 'bottom-0 right-0' },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${tech.position} w-16 h-16 rounded-full bg-white/10 dark:bg-slate-800/50 flex items-center justify-center text-3xl border border-white/20 dark:border-slate-700/50`}
                  animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
                  transition={{ duration: 4, delay: tech.delay, repeat: Infinity }}
                >
                  {tech.icon}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary-600 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-primary-600 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
