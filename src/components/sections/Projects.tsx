import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '@/hooks'
import { projects } from '@/data'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const Projects: React.FC = () => {
  const ref = useScrollAnimation()
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null)

  const categories = Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))
  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
    : projects

  return (
    <section id="projects" className="py-20 sm:py-32 bg-white/5 dark:bg-slate-900/50">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold">Featured Work</span>
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle mb-12">
            A selection of projects showcasing my skills in full-stack development.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12"
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedCategory === null
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-white/10 dark:bg-slate-800 hover:bg-white/20 dark:hover:bg-slate-700'
            }`}
          >
            All
          </button>
          {categories.map((category) => category && (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as string)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white/10 dark:bg-slate-800 hover:bg-white/20 dark:hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card group h-full flex flex-col hover:border-primary-500/50"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-600/20 to-accent-500/20 rounded-lg mb-4 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-50">
                  📁
                </div>
              </div>

              {/* Project Info */}
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-grow">
                {project.shortDescription}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-primary-500/10 text-primary-700 dark:text-primary-300 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-auto">
                <Link
                  to={`/project/${project.id}`}
                  className="flex-1 px-4 py-2 bg-primary-600/20 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-600/30 transition-colors text-center font-medium text-sm"
                >
                  View Details
                </Link>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 dark:bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-colors text-slate-700 dark:text-slate-300 hover:text-white"
                    aria-label="GitHub"
                  >
                    <FiGithub size={18} />
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 dark:bg-slate-800 hover:bg-primary-600 flex items-center justify-center transition-colors text-slate-700 dark:text-slate-300 hover:text-white"
                    aria-label="Live Demo"
                  >
                    <FiExternalLink size={18} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a href="#" className="btn-primary inline-flex items-center gap-2">
            View All Projects <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
