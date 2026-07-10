import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks'
import { validateEmail } from '@/utils'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { personalInfo } from '@/data'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const Contact: React.FC = () => {
  const ref = useScrollAnimation()
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = React.useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitMessage, setSubmitMessage] = React.useState<{
    type: 'success' | 'error'
    text: string
  } | null>(null)

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email'
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Simulate sending email via EmailJS
      // In production, integrate with EmailJS service
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSubmitMessage({
        type: 'success',
        text: 'Message sent successfully! I will get back to you soon.',
      })

      setFormData({ name: '', email: '', subject: '', message: '' })

      setTimeout(() => setSubmitMessage(null), 5000)
    } catch {
      setSubmitMessage({
        type: 'error',
        text: 'Failed to send message. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: FiMail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: 'Chat with me',
      href: 'https://wa.me/1234567890',
    },
  ]

  return (
    <section id="contact" className="py-20 sm:py-32 bg-white/5 dark:bg-slate-900/50">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle mb-12">
            Have a project in mind? Get in touch and let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass-card group hover:border-primary-500/50 flex items-start gap-4 hover:bg-white/15 dark:hover:bg-slate-900/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-600/20 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-all flex-shrink-0">
                  <method.icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{method.label}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{method.value}</p>
                </div>
              </a>
            ))}

            {/* Location */}
            <div className="glass-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-600/20 flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="lg:col-span-2 glass-card"
          >
            <div className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-slate-800 border ${
                    errors.name
                      ? 'border-red-500'
                      : 'border-white/20 dark:border-slate-700/50'
                  } text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-primary-600 transition-colors`}
                  placeholder="Your name"
                  disabled={isSubmitting}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-slate-800 border ${
                    errors.email
                      ? 'border-red-500'
                      : 'border-white/20 dark:border-slate-700/50'
                  } text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-primary-600 transition-colors`}
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-slate-800 border ${
                    errors.subject
                      ? 'border-red-500'
                      : 'border-white/20 dark:border-slate-700/50'
                  } text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-primary-600 transition-colors`}
                  placeholder="Project inquiry"
                  disabled={isSubmitting}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-slate-800 border ${
                    errors.message
                      ? 'border-red-500'
                      : 'border-white/20 dark:border-slate-700/50'
                  } text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-primary-600 transition-colors resize-none`}
                  placeholder="Tell me about your project..."
                  disabled={isSubmitting}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Submit Message */}
              {submitMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    submitMessage.type === 'success'
                      ? 'bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20'
                      : 'bg-red-500/10 text-red-700 dark:text-red-400 border border-red-500/20'
                  }`}
                >
                  {submitMessage.text}
                </motion.div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
