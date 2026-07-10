import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks'
import { experience } from '@/data'

const Experience: React.FC = () => {
  const ref = useScrollAnimation()

  return (
    <section id="experience" className="py-20 sm:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold">Career Path</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle mb-12">
            A timeline of my professional journey and key accomplishments.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-600 to-accent-500 -translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Content */}
                <div className="glass-card">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-4 h-4 rounded-full bg-primary-600 ring-4 ring-white dark:ring-slate-950" />
                    <span className="text-xs font-semibold text-primary-600 dark:text-primary-400">
                      {exp.current ? 'CURRENT' : 'PAST ROLE'}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">{exp.company}</p>

                  {exp.location && (
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">📍 {exp.location}</p>
                  )}

                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{exp.description}</p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">PERIOD</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {new Date(exp.startDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                      })}
                      {' - '}
                      {exp.endDate
                        ? new Date(exp.endDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                          })
                        : 'Present'}
                    </p>
                  </div>

                  {exp.responsibilities && (
                    <div>
                      <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        KEY RESPONSIBILITIES
                      </p>
                      <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                        {exp.responsibilities.slice(0, 2).map((resp, i) => (
                          <li key={i} className="flex gap-2">
                            <span>•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {exp.technologies && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-primary-500/10 text-primary-700 dark:text-primary-300 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Empty Space for Timeline */}
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
