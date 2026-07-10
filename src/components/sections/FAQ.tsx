import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '@/hooks'
import { FiChevronDown } from 'react-icons/fi'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const FAQ: React.FC = () => {
  const ref = useScrollAnimation()
  const [openId, setOpenId] = React.useState<string | null>('1')

  const faqs: FAQItem[] = [
    {
      id: '1',
      question: 'What technologies do you specialize in?',
      answer:
        'I specialize in Java backend development with Spring Boot, modern React frontends, and cloud technologies like AWS and Kubernetes. I have expertise in building scalable microservices architectures and RESTful APIs.',
    },
    {
      id: '2',
      question: 'Are you available for freelance projects?',
      answer:
        'Yes, I am available for freelance projects and consulting work. I can help with architecture design, system optimization, and full-stack development. Feel free to reach out to discuss your requirements.',
    },
    {
      id: '3',
      question: 'What is your typical project timeline?',
      answer:
        'Project timelines vary depending on scope and complexity. Small projects might take 2-4 weeks, while larger applications could take 2-3 months or more. I will provide a detailed estimate after understanding your requirements.',
    },
    {
      id: '4',
      question: 'Do you provide post-deployment support?',
      answer:
        'Yes, I provide post-deployment support including bug fixes, performance optimization, and feature enhancements. I can offer maintenance packages tailored to your needs.',
    },
    {
      id: '5',
      question: 'How do you handle project communication?',
      answer:
        'I prioritize clear and regular communication. I use tools like Slack, email, and video calls for updates. I provide weekly progress reports and maintain transparency throughout the project lifecycle.',
    },
    {
      id: '6',
      question: 'What is your approach to code quality?',
      answer:
        'Code quality is paramount. I follow SOLID principles, write comprehensive tests, use version control best practices, and conduct code reviews. I aim for maintainable, scalable, and well-documented code.',
    },
  ]

  return (
    <section className="py-20 sm:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold">Help Center</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle mb-12">
            Find answers to common questions about my services and expertise.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full glass-card text-left flex items-center justify-between hover:border-primary-500/50 transition-all"
              >
                <h3 className="font-semibold text-slate-900 dark:text-white">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="text-primary-600" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 text-slate-600 dark:text-slate-400 bg-white/5 dark:bg-slate-800/20 rounded-lg mt-1 border border-white/10 dark:border-slate-700/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
