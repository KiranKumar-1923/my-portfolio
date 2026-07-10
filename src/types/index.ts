export interface Skill {
  name: string
  category: 'Languages' | 'Backend' | 'Frontend' | 'Database' | 'Tools' | 'Core Concepts'
  level: number // 0-100
  icon?: string
  description?: string
}

export interface Project {
  id: string
  title: string
  description: string
  shortDescription: string
  image: string
  technologies: string[]
  githubLink?: string
  demoLink?: string
  featured?: boolean
  category?: string
  architecture?: string
  apiDocumentation?: string
  databaseSchema?: string
  challenges?: string[]
  futureImprovements?: string[]
  screenshots?: string[]
}

export interface Experience {
  id: string
  title: string
  company: string
  location?: string
  startDate: string
  endDate?: string
  current?: boolean
  description: string
  responsibilities?: string[]
  technologies?: string[]
}

export interface Education {
  id: string
  degree: string
  institution: string
  field: string
  startDate: string
  endDate: string
  description?: string
  gpa?: string
}

export interface Certification {
  id: string
  title: string
  issuer: string
  issuedDate: string
  expiryDate?: string
  credentialId?: string
  credentialUrl?: string
  image?: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  tags: string[]
  featured?: boolean
  readTime?: number
  image?: string
}

export interface Achievement {
  id: string
  title: string
  description: string
  value: number
  unit: string
  icon?: string
}

export interface CodingProfile {
  name: 'LeetCode' | 'HackerRank' | 'CodeChef' | 'GeeksforGeeks'
  username: string
  profileUrl: string
  stats?: {
    rank?: number
    rating?: number
    problemsSolved?: number
    contests?: number
  }
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface Theme {
  mode: 'light' | 'dark'
  primaryColor?: string
  accentColor?: string
}
