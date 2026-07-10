import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '@/data'
import { FiArrowLeft, FiGithub, FiExternalLink } from 'react-icons/fi'

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/#projects" className="btn-primary inline-flex items-center gap-2">
            <FiArrowLeft /> Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-20"
    >
      <div className="section-container">
        {/* Back Button */}
        <Link to="/#projects" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 font-medium">
          <FiArrowLeft /> Back to Projects
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h1 className="section-title mb-4">{project.title}</h1>
          <p className="section-subtitle">{project.description}</p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="h-96 bg-gradient-to-br from-primary-600/20 to-accent-500/20 rounded-xl mb-12 flex items-center justify-center text-6xl"
        >
          📁
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                {project.description}
              </p>
            </motion.section>

            {/* Technologies */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary-600/20 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Architecture */}
            {project.architecture && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-4">Architecture</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.architecture}
                </p>
              </motion.section>
            )}

            {/* Challenges */}
            {project.challenges && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-400">
                      <span className="text-primary-600 dark:text-primary-400 font-bold flex-shrink-0">
                        •
                      </span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}

            {/* Future Improvements */}
            {project.futureImprovements && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h2 className="text-2xl font-bold mb-4">Future Improvements</h2>
                <ul className="space-y-3">
                  {project.futureImprovements.map((improvement, i) => (
                    <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-400">
                      <span className="text-primary-600 dark:text-primary-400 font-bold flex-shrink-0">
                        ✓
                      </span>
                      <span>{improvement}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Project Links */}
            <div className="glass-card">
              <h3 className="font-bold text-lg mb-4">Project Links</h3>
              <div className="space-y-2">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-full px-4 py-3 bg-primary-600/20 text-primary-700 dark:text-primary-300 rounded-lg hover:bg-primary-600/30 transition-colors"
                  >
                    <FiGithub /> View on GitHub
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-full px-4 py-3 bg-accent-600/20 text-accent-700 dark:text-accent-300 rounded-lg hover:bg-accent-600/30 transition-colors"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Project Info */}
            <div className="glass-card">
              <h3 className="font-bold text-lg mb-4">Details</h3>
              <div className="space-y-4">
                {project.category && (
                  <div>
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      CATEGORY
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{project.category}</p>
                  </div>
                )}
                <div>
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    TECHNOLOGIES
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {project.technologies.length} technologies
                  </p>
                </div>
                {project.featured && (
                  <div>
                    <span className="inline-block px-3 py-1 bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20 rounded text-xs font-semibold">
                      ⭐ Featured Project
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectDetail
