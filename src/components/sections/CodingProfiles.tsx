import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks'
import { codingProfiles } from '@/data'
import { FiExternalLink } from 'react-icons/fi'

const CodingProfiles: React.FC = () => {
  const ref = useScrollAnimation()

  return (
    <section className="py-20 sm:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold">Problem Solving</span>
          <h2 className="section-title">Coding Profiles</h2>
          <p className="section-subtitle mb-12">
            Active participation in competitive programming platforms.
          </p>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {codingProfiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card group hover:border-primary-500/50 hover:bg-white/15 dark:hover:bg-slate-900/50 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {profile.name}
                </h3>
                <FiExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">@{profile.username}</p>

              {profile.stats && (
                <div className="space-y-2 text-sm">
                  {profile.stats.rank && (
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Rank:</span>
                      <span className="font-semibold">{profile.stats.rank.toLocaleString()}</span>
                    </div>
                  )}
                  {profile.stats.rating && (
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Rating:</span>
                      <span className="font-semibold text-primary-600 dark:text-primary-400">
                        {profile.stats.rating}
                      </span>
                    </div>
                  )}
                  {profile.stats.problemsSolved && (
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Problems:</span>
                      <span className="font-semibold">{profile.stats.problemsSolved}+</span>
                    </div>
                  )}
                  {profile.stats.contests && (
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-slate-400">Contests:</span>
                      <span className="font-semibold">{profile.stats.contests}</span>
                    </div>
                  )}
                </div>
              )}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CodingProfiles
