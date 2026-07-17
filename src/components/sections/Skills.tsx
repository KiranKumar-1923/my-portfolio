import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks'
import { skills } from '@/data'
import { Skill } from '@/types'
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/legacy/build/pdf'

GlobalWorkerOptions.workerSrc = new URL('pdf.worker.min.js', import.meta.url).toString()

interface SkillCategory {
  category: string
  items: Skill[]
}

const skillAliases: Record<string, string[]> = {
  Java: ['java'],
  'TypeScript': ['typescript'],
  Python: ['python'],
  JavaScript: ['javascript'],
  SQL: ['sql'],
  'Spring Boot': ['spring boot', 'spring'],
  'Spring Security': ['spring security'],
  'Hibernate/JPA': ['hibernate', 'jpa'],
  'RESTful APIs': ['rest api', 'restful api', 'api'],
  Microservices: ['microservices'],
  'React 19': ['react', 'reactjs'],
  'Tailwind CSS': ['tailwind', 'tailwindcss'],
  'HTML/CSS': ['html', 'css', 'html5', 'css3'],
  'Framer Motion': ['framer motion'],
  'Next.js': ['next.js', 'nextjs'],
  PostgreSQL: ['postgresql', 'postgres'],
  MySQL: ['mysql'],
  MongoDB: ['mongodb', 'mongo'],
  Redis: ['redis'],
  'Git/GitHub': ['git', 'github'],
  Docker: ['docker'],
  Kubernetes: ['kubernetes', 'k8s'],
  Jenkins: ['jenkins'],
  'Maven/Gradle': ['maven', 'gradle'],
  OOP: ['object oriented programming', 'oop'],
  'Design Patterns': ['design pattern', 'design patterns'],
  'System Design': ['system design'],
  Algorithms: ['algorithms', 'data structures'],
  Agile: ['agile', 'scrum', 'kanban'],
}

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const getSkillKeywords = (skill: Skill) => {
  const aliases = skillAliases[skill.name] || []
  return [skill.name, ...aliases].map((keyword) => keyword.toLowerCase())
}

const findMatchedSkills = (text: string): Skill[] => {
  const normalizedText = text.toLowerCase()

  return skills.filter((skill) => {
    return getSkillKeywords(skill).some((keyword) => {
      const pattern = new RegExp(`\\b${escapeRegExp(keyword)}\\b`, 'i')
      return pattern.test(normalizedText)
    })
  })
}

const extractTextFromPdf = async (file: File): Promise<string> => {
  const arrayBuffer = await file.arrayBuffer()
  const pdf = await getDocument({ data: new Uint8Array(arrayBuffer) }).promise
  let extractedText = ''

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber)
    const content = await page.getTextContent()
    const items = content.items as Array<{ str?: string }>
    extractedText += items
      .map((item) => item.str || '')
      .join(' ')
      .concat(' ')
  }

  return extractedText
}

const extractTextFromFile = async (file: File): Promise<string> => {
  const fileName = file.name.toLowerCase()

  if (file.type === 'application/pdf' || fileName.endsWith('.pdf')) {
    return extractTextFromPdf(file)
  }

  if (file.type === 'text/plain' || fileName.endsWith('.txt')) {
    return file.text()
  }

  throw new Error('Unsupported resume format')
}

const Skills: React.FC = () => {
  const ref = useScrollAnimation()
  const [selectedCategory, setSelectedCategory] = React.useState<string>('Languages')
  const [uploadedFileName, setUploadedFileName] = React.useState<string>('')
  const [matchedSkillNames, setMatchedSkillNames] = React.useState<Set<string>>(new Set())
  const [uploadMessage, setUploadMessage] = React.useState<string>('Upload your resume to highlight matching skills.')
  const [isParsing, setIsParsing] = React.useState<boolean>(false)

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

  const displaySkills = React.useMemo(() => {
    if (matchedSkillNames.size > 0) {
      return skills.filter((skill) => matchedSkillNames.has(skill.name))
    }
    return skillsByCategory.find((cat) => cat.category === selectedCategory)?.items || []
  }, [matchedSkillNames, selectedCategory, skillsByCategory])

  const handleResumeUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setUploadedFileName(file.name)
    setIsParsing(true)
    setUploadMessage('Reading resume...')
    setMatchedSkillNames(new Set())

    try {
      const text = await extractTextFromFile(file)
      const matchedSkills = findMatchedSkills(text)
      const matchedNames = new Set(matchedSkills.map((skill) => skill.name))
      setMatchedSkillNames(matchedNames)

      setUploadMessage(
        matchedNames.size > 0
          ? `Found ${matchedNames.size} skill${matchedNames.size > 1 ? 's' : ''} in your resume.`
          : 'No matching skills were found in your resume. Try a different resume version or check the skill wording.'
      )
    } catch {
      setUploadMessage('Could not read the resume. Please upload a PDF or plain text file.')
    } finally {
      setIsParsing(false)
      event.target.value = ''
    }
  }

  const isSkillMatched = (skill: Skill) => matchedSkillNames.has(skill.name)

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
            Upload your resume to highlight the skills that are present in it and showcase them here.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card mb-12 p-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Upload your resume
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                Supported formats: PDF and plain text. The portfolio will scan your resume and highlight matching skills.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <label
                htmlFor="resume-upload"
                className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-700 cursor-pointer"
              >
                {isParsing ? 'Scanning...' : 'Upload Resume'}
              </label>
              <input
                id="resume-upload"
                type="file"
                accept=".pdf,.txt"
                className="sr-only"
                onChange={handleResumeUpload}
                disabled={isParsing}
              />
            </div>
          </div>

          <div className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            {uploadedFileName ? `File: ${uploadedFileName}` : 'No resume uploaded yet.'}
          </div>
          <div className="mt-2 text-sm font-medium text-slate-900 dark:text-white">
            {uploadMessage}
          </div>

          {matchedSkillNames.size > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {Array.from(matchedSkillNames).map((skillName) => (
                <span
                  key={skillName}
                  className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200"
                >
                  {skillName}
                </span>
              ))}
            </div>
          )}
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
              className={`glass-card group ${isSkillMatched(skill) ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40' : ''}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-2xl">{skill.icon}</span>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {skill.name}
                    </h3>
                    {isSkillMatched(skill) && (
                      <span className="inline-flex mt-1 rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-200">
                        In Resume
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {skill.description && (
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{skill.description}</p>
              )}

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
