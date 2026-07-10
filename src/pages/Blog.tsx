import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { blogPosts } from '@/data'
import { FiArrowLeft } from 'react-icons/fi'

const Blog: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>()
  const [searchTerm, setSearchTerm] = React.useState('')

  // If slug is provided, show single post detail
  if (slug) {
    const post = blogPosts.find((p) => p.slug === slug)

    if (!post) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <Link to="/blog" className="btn-primary inline-flex items-center gap-2">
              <FiArrowLeft /> Back to Blog
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
        <div className="section-container max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 mb-8 font-medium">
            <FiArrowLeft /> Back to Blog
          </Link>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm text-primary-600 dark:text-primary-400 font-semibold">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="text-sm text-slate-600 dark:text-slate-400">•</span>
              <span className="text-sm text-slate-600 dark:text-slate-400">{post.readTime} min read</span>
            </div>
            <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary-500/10 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose dark:prose-invert max-w-none"
          >
            <div className="text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
          </motion.div>

          {/* Author */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 pt-8 border-t border-white/10 dark:border-slate-700/50"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold">{post.author}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Full Stack Developer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    )
  }

  // Blog list view
  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-20"
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold">Insights</span>
          <h1 className="section-title">Blog Articles</h1>
          <p className="section-subtitle">
            Thoughts and insights about full-stack development, best practices, and technology.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-6 py-3 rounded-lg bg-white/10 dark:bg-slate-800 border border-white/20 dark:border-slate-700/50 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-primary-600 transition-colors"
          />
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={`/blog/${post.slug}`} className="glass-card group hover:border-primary-500/50 h-full flex flex-col transition-all">
                  <span className="text-xs text-primary-600 dark:text-primary-400 font-semibold mb-2">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>

                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-grow">
                    {post.excerpt}
                  </p>

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
                </Link>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-12"
            >
              <p className="text-slate-600 dark:text-slate-400">No articles found matching your search.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Blog
