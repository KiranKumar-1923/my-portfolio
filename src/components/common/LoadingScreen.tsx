import React from 'react'
import { motion } from 'framer-motion'

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary-900 via-slate-900 to-slate-950 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        {/* Animated Logo */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-lg"
        >
          <span className="text-3xl font-bold text-white">JFD</span>
        </motion.div>

        {/* Loading Text */}
        <h1 className="text-3xl font-bold text-white mb-2">Loading</h1>
        <p className="text-slate-400 mb-8">Preparing your portfolio...</p>

        {/* Loading Animation */}
        <div className="flex gap-2 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              className="w-3 h-3 bg-primary-500 rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default LoadingScreen
