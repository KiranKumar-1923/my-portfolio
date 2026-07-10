import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks'
import { achievements } from '@/data'

const Achievements: React.FC = () => {
  const ref = useScrollAnimation()

  return (
    <section className="py-20 sm:py-32 bg-white/5 dark:bg-slate-900/50">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold">Milestones</span>
          <h2 className="section-title">Key Achievements</h2>
          <p className="section-subtitle mb-12">
            Highlighting my professional accomplishments and milestones.
          </p>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card text-center group hover:border-primary-500/50"
            >
              {/* Icon */}
              <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
                {achievement.icon}
              </div>

              {/* Counter */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                  {achievement.value}
                  {achievement.unit}
                </div>
              </motion.div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>

              {/* Description */}
              <p className="text-xs text-slate-600 dark:text-slate-400">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
