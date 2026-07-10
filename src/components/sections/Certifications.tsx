import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks'
import { certifications } from '@/data'

const Certifications: React.FC = () => {
  const ref = useScrollAnimation()
  const [selectedCert, setSelectedCert] = React.useState<string | null>(null)

  return (
    <section className="py-20 sm:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold">Credentials</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle mb-12">
            Industry-recognized certifications validating my expertise.
          </p>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card group cursor-pointer h-full"
              onClick={() => setSelectedCert(selectedCert === cert.id ? null : cert.id)}
            >
              {/* Certificate Icon/Image */}
              <div className="relative h-40 bg-gradient-to-br from-primary-600/20 to-accent-500/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                <div className="text-5xl">🏆</div>
              </div>

              {/* Info */}
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {cert.title}
              </h3>

              <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                {cert.issuer}
              </p>

              <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
                Issued: {new Date(cert.issuedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                })}
                {cert.expiryDate && (
                  <>
                    {' • '}
                    Expires: {new Date(cert.expiryDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                    })}
                  </>
                )}
              </p>

              {/* Expand Details */}
              {selectedCert === cert.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-3 pt-4 border-t border-white/10 dark:border-slate-700/50"
                >
                  {cert.credentialId && (
                    <div>
                      <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        CREDENTIAL ID
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-mono">
                        {cert.credentialId}
                      </p>
                    </div>
                  )}
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      View Certificate →
                    </a>
                  )}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
