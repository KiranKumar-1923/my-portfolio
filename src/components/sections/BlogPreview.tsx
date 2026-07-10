import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks'
import { blogPosts } from '@/data'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

const BlogPreview: React.FC = () => {
  const ref = useScrollAnimation()
  const featuredPosts = blogPosts.slice(0, 3)

  return (
    <section className="py-20 sm:py-32 bg-white/5 dark:bg-slate-900/50">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold">Insights</span>
          <h2 className="section-title">Latest Blog Posts</h2>
          <p className="section-subtitle mb-12">
            Articles about full-stack development, best practices, and technology insights.
          </p>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card group hover:border-primary-500/50 flex flex-col"
            >
              {/* Date */}
              <span className="text-xs text-primary-600 dark:text-primary-400 font-semibold mb-2">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>

              {/* Title */}
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-grow">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 pt-4 border-t border-white/10 dark:border-slate-700/50">
                <span>{post.readTime} min read</span>
                <div className="flex gap-1">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary-500/10 text-primary-700 dark:text-primary-300 px-2 py-0.5 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Read More Link */}
              <Link
                to={`/blog/${post.slug}`}
                className="mt-4 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium flex items-center gap-1 transition-colors group/link"
              >
                Read More
                <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
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
          <Link to="/blog" className="btn-primary inline-flex items-center gap-2">
            View All Articles <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogPreview
