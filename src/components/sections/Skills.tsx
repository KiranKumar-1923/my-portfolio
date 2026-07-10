import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks'
import { skills } from '@/data'
import { Skill } from '@/types'

interface SkillCategory {
  category: string
  items: Skill[]
}

const Skills: React.FC = () => {
  const ref = useScrollAnimation()
  const [selectedCategory, setSelectedCategory] = React.useState<string>('Languages')

  const skillsByCategory: SkillCategory[] = React.useMemo(() => {
    const categories = new Map<string, Skill[]>()
    skills.forEach((skill) => {
      if (!categories.has(skill.category)) {
        categories.set(skill.category, [])
      }
      categories.get(skill.category)!.push(skill)
    })
    return Array.from(categories.entries()).map(([category, items]) => ({
      category,
      items,
    }))
  }, [])

  const displaySkills = skillsByCategory.find((cat) => cat.category === selectedCategory)?.items || []

  return (
    <section id="skills" className="py-20 sm:py-32 bg-white/5 dark:bg-slate-900/50">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold">My Expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle mb-12">
            Proficient in a wide range of technologies across full-stack development.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {skillsByCategory.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setSelectedCategory(cat.category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === cat.category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white/10 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-white/20 dark:hover:bg-slate-700'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displaySkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {skill.name}
                  </h3>
                </div>
              </div>

              {/* Skill Description */}
              {skill.description && (
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{skill.description}</p>
              )}

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-600 dark:text-slate-400">Proficiency</span>
                  <span className="text-xs font-semibold text-primary-600 dark:text-primary-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="h-full bg-gradient-to-r from-primary-600 to-accent-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
