import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks'
import { personalInfo, education } from '@/data'

const About: React.FC = () => {
  const ref = useScrollAnimation()

  const strengths = [
    'Full-stack development',
    'Microservices architecture',
    'RESTful API design',
    'System design',
    'Performance optimization',
    'Clean code practices',
  ]

  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold">About Me</span>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle mb-12">
            A passionate developer with expertise in building scalable systems and creating beautiful user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              With {new Date().getFullYear() - 2018}+ years of professional experience, I've successfully delivered
              enterprise-grade applications and led development teams. My passion for clean code and innovative
              solutions drives me to continuously learn and adapt to new technologies.
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I specialize in Java backend systems, modern React frontends, and cloud-native architectures. I'm
              committed to writing maintainable code, following SOLID principles, and creating performant applications.
            </p>

            <div>
              <h3 className="font-semibold text-lg mb-4">Core Strengths</h3>
              <div className="grid grid-cols-2 gap-3">
                {strengths.map((strength, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 text-slate-700 dark:text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                    {strength}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Education */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">{edu.degree}</h4>
                        <p className="text-sm text-primary-600 dark:text-primary-400">{edu.institution}</p>
                      </div>
                      {edu.gpa && <span className="text-sm bg-green-500/10 px-3 py-1 rounded-full">GPA: {edu.gpa}</span>}
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {edu.field} • {new Date(edu.startDate).getFullYear()} - {new Date(edu.endDate).getFullYear()}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages & Availability */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card">
                <h4 className="font-semibold mb-3">Languages</h4>
                <div className="space-y-2">
                  {personalInfo.languages.map((lang, index) => (
                    <div key={index} className="text-sm">
                      <p className="font-medium">{lang.language}</p>
                      <p className="text-slate-600 dark:text-slate-400 text-xs">{lang.proficiency}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card">
                <h4 className="font-semibold mb-3">Availability</h4>
                <div className="space-y-2">
                  <div className="text-sm">
                    <p className="font-medium text-green-600 dark:text-green-400">✓ Available</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">
                      {personalInfo.availability}
                    </p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">📍 Location</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
