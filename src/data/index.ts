import {
  Skill,
  Project,
  Experience,
  Education,
  Certification,
  BlogPost,
  Achievement,
  CodingProfile,
} from '@/types'

export const skills: Skill[] = [
  // Languages
  {
    name: 'Java',
    category: 'Languages',
    level: 95,
    icon: '☕',
    description: 'Core programming language with expertise in OOP, design patterns, and enterprise applications',
  },
  {
    name: 'TypeScript',
    category: 'Languages',
    level: 90,
    icon: '📘',
    description: 'Type-safe JavaScript for building robust frontend applications',
  },
  {
    name: 'Python',
    category: 'Languages',
    level: 85,
    icon: '🐍',
    description: 'Scripting and automation',
  },
  {
    name: 'JavaScript',
    category: 'Languages',
    level: 92,
    icon: '⚡',
    description: 'Modern ES6+ with async/await and functional programming',
  },
  {
    name: 'SQL',
    category: 'Languages',
    level: 88,
    icon: '💾',
    description: 'Query optimization and database design',
  },

  // Backend
  {
    name: 'Spring Boot',
    category: 'Backend',
    level: 95,
    icon: '🍃',
    description: 'Enterprise application development with microservices',
  },
  {
    name: 'Spring Security',
    category: 'Backend',
    level: 90,
    icon: '🔐',
    description: 'Authentication and authorization',
  },
  {
    name: 'Hibernate/JPA',
    category: 'Backend',
    level: 88,
    icon: '🗄️',
    description: 'ORM and database mapping',
  },
  {
    name: 'RESTful APIs',
    category: 'Backend',
    level: 93,
    icon: '🔌',
    description: 'API design and implementation',
  },
  {
    name: 'Microservices',
    category: 'Backend',
    level: 85,
    icon: '🏗️',
    description: 'Distributed systems architecture',
  },

  // Frontend
  {
    name: 'React 19',
    category: 'Frontend',
    level: 92,
    icon: '⚛️',
    description: 'Modern React with hooks and functional components',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    level: 90,
    icon: '🎨',
    description: 'Utility-first CSS framework',
  },
  {
    name: 'HTML/CSS',
    category: 'Frontend',
    level: 92,
    icon: '🌐',
    description: 'Semantic markup and responsive design',
  },
  {
    name: 'Framer Motion',
    category: 'Frontend',
    level: 88,
    icon: '🎬',
    description: 'Advanced animations and interactions',
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    level: 85,
    icon: '▲',
    description: 'React framework with SSR and static generation',
  },

  // Database
  {
    name: 'PostgreSQL',
    category: 'Database',
    level: 90,
    icon: '🐘',
    description: 'Advanced SQL database with JSONB support',
  },
  {
    name: 'MySQL',
    category: 'Database',
    level: 88,
    icon: '🐬',
    description: 'Relational database management',
  },
  {
    name: 'MongoDB',
    category: 'Database',
    level: 85,
    icon: '🍃',
    description: 'NoSQL document database',
  },
  {
    name: 'Redis',
    category: 'Database',
    level: 82,
    icon: '⚡',
    description: 'Caching and real-time data',
  },

  // Tools
  {
    name: 'Git/GitHub',
    category: 'Tools',
    level: 92,
    icon: '🐙',
    description: 'Version control and collaboration',
  },
  {
    name: 'Docker',
    category: 'Tools',
    level: 88,
    icon: '🐳',
    description: 'Containerization and deployment',
  },
  {
    name: 'Kubernetes',
    category: 'Tools',
    level: 80,
    icon: '☸️',
    description: 'Container orchestration',
  },
  {
    name: 'Jenkins',
    category: 'Tools',
    level: 85,
    icon: '🔧',
    description: 'CI/CD pipeline automation',
  },
  {
    name: 'Maven/Gradle',
    category: 'Tools',
    level: 90,
    icon: '📦',
    description: 'Build automation',
  },

  // Core Concepts
  {
    name: 'OOP',
    category: 'Core Concepts',
    level: 95,
    icon: '🔷',
    description: 'Encapsulation, inheritance, polymorphism',
  },
  {
    name: 'Design Patterns',
    category: 'Core Concepts',
    level: 92,
    icon: '🎯',
    description: 'Singleton, Factory, Observer, Strategy',
  },
  {
    name: 'System Design',
    category: 'Core Concepts',
    level: 88,
    icon: '🏛️',
    description: 'Scalability, load balancing, caching',
  },
  {
    name: 'Algorithms',
    category: 'Core Concepts',
    level: 90,
    icon: '🧮',
    description: 'Data structures and optimization',
  },
  {
    name: 'Agile',
    category: 'Core Concepts',
    level: 85,
    icon: '🔄',
    description: 'Scrum and Kanban methodologies',
  },
]

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    shortDescription: 'Full-stack e-commerce platform with microservices architecture',
    description:
      'A scalable e-commerce platform built with Spring Boot microservices, React frontend, and PostgreSQL database. Features include product catalog, shopping cart, order management, payment integration, and admin dashboard.',
    image: '/projects/ecommerce.jpg',
    technologies: ['Spring Boot', 'React', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    githubLink: 'https://github.com/yourusername/ecommerce',
    demoLink: 'https://ecommerce-demo.com',
    featured: true,
    category: 'Backend',
    architecture:
      'Microservices architecture with API Gateway, Product Service, Order Service, Payment Service, and User Service. Each service has its own database and communicates via REST APIs.',
    challenges: [
      'Implementing distributed transactions across microservices',
      'Handling high concurrency in inventory management',
      'Optimizing database queries for large product catalogs',
    ],
    futureImprovements: [
      'Implement event-driven architecture with Kafka',
      'Add real-time inventory synchronization',
      'Implement machine learning-based recommendations',
    ],
  },
  {
    id: '2',
    title: 'Task Management Application',
    shortDescription: 'Collaborative task management app with real-time updates',
    description:
      'A collaborative task management application with real-time synchronization, team collaboration features, and comprehensive project tracking.',
    image: '/projects/taskapp.jpg',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    githubLink: 'https://github.com/yourusername/taskapp',
    demoLink: 'https://taskapp-demo.com',
    featured: true,
    category: 'Frontend',
    challenges: [
      'Real-time synchronization across multiple clients',
      'Conflict resolution in collaborative editing',
      'Performance optimization with large datasets',
    ],
  },
  {
    id: '3',
    title: 'Real-time Chat Application',
    shortDescription: 'Real-time messaging platform with WebSocket support',
    description:
      'A real-time chat application with WebSocket communication, message history, user authentication, and group chat support.',
    image: '/projects/chat.jpg',
    technologies: ['Spring Boot', 'WebSocket', 'React', 'MongoDB', 'Socket.io'],
    githubLink: 'https://github.com/yourusername/chat',
    demoLink: 'https://chat-demo.com',
    category: 'Full Stack',
  },
  {
    id: '4',
    title: 'Analytics Dashboard',
    shortDescription: 'Real-time analytics dashboard with data visualization',
    description:
      'An analytics dashboard displaying real-time metrics, charts, and insights with custom report generation capabilities.',
    image: '/projects/analytics.jpg',
    technologies: ['React', 'Chart.js', 'D3.js', 'TypeScript', 'Tailwind CSS'],
    demoLink: 'https://analytics-demo.com',
    category: 'Frontend',
  },
  {
    id: '5',
    title: 'API Documentation Generator',
    shortDescription: 'Automatic API documentation generator for Spring Boot',
    description:
      'Tool for automatically generating interactive API documentation from Spring Boot annotations with OpenAPI support.',
    image: '/projects/apidoc.jpg',
    technologies: ['Spring Boot', 'Swagger', 'React', 'TypeScript'],
    githubLink: 'https://github.com/yourusername/apidoc',
    category: 'Tools',
  },
  {
    id: '6',
    title: 'Social Media Analytics',
    shortDescription: 'Social media performance tracking and analytics tool',
    description:
      'Comprehensive tool for tracking social media performance metrics, engagement analysis, and content scheduling.',
    image: '/projects/social.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Tailwind CSS'],
    category: 'Full Stack',
  },
]

export const experience: Experience[] = [
  {
    id: '1',
    title: 'Senior Full Stack Developer',
    company: 'Tech Company Inc.',
    location: 'San Francisco, CA',
    startDate: '2022-01-01',
    current: true,
    description: 'Leading development of microservices architecture and mentoring junior developers',
    responsibilities: [
      'Design and implement scalable backend services using Spring Boot',
      'Lead frontend development with React and modern tooling',
      'Mentor junior developers and conduct code reviews',
      'Optimize system performance and handle DevOps responsibilities',
    ],
    technologies: ['Spring Boot', 'React', 'Kubernetes', 'PostgreSQL', 'Docker'],
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'StartUp XYZ',
    location: 'Remote',
    startDate: '2020-06-01',
    endDate: '2021-12-31',
    description: 'Developed full-stack features for SaaS platform from scratch',
    responsibilities: [
      'Build RESTful APIs using Spring Boot',
      'Create responsive UIs with React',
      'Implement authentication and authorization',
      'Manage AWS infrastructure and deployments',
    ],
    technologies: ['Spring Boot', 'React', 'AWS', 'MySQL', 'Git'],
  },
  {
    id: '3',
    title: 'Junior Java Developer',
    company: 'Enterprise Solutions',
    location: 'New York, NY',
    startDate: '2018-07-01',
    endDate: '2020-05-31',
    description: 'Developed and maintained enterprise Java applications',
    responsibilities: [
      'Implement features in existing Spring applications',
      'Write unit tests and integration tests',
      'Bug fixes and performance optimization',
      'Participate in Agile ceremonies',
    ],
    technologies: ['Java', 'Spring', 'JUnit', 'Maven', 'Oracle SQL'],
  },
]

export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Science',
    institution: 'University of Technology',
    field: 'Computer Science',
    startDate: '2014-09-01',
    endDate: '2018-05-31',
    description: 'Specialized in software engineering and database systems',
    gpa: '3.8/4.0',
  },
  {
    id: '2',
    degree: 'Postgraduate Diploma',
    institution: 'Online Learning Platform',
    field: 'Advanced Java Programming',
    startDate: '2019-01-01',
    endDate: '2019-06-30',
    description: 'Advanced concepts in Java and enterprise development',
  },
]

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Oracle Certified Associate Java Programmer',
    issuer: 'Oracle',
    issuedDate: '2020-03-15',
    credentialId: 'OCAJP123456',
    credentialUrl: 'https://certmetrics.oracle.com',
    image: '/certifications/oracle.png',
  },
  {
    id: '2',
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    issuedDate: '2021-06-20',
    expiryDate: '2024-06-20',
    credentialUrl: 'https://aws.amazon.com/verification',
    image: '/certifications/aws.png',
  },
  {
    id: '3',
    title: 'Kubernetes Application Developer',
    issuer: 'The Linux Foundation',
    issuedDate: '2021-09-10',
    credentialUrl: 'https://www.cncf.io/',
    image: '/certifications/kubernetes.png',
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'building-scalable-apis-with-spring-boot',
    title: 'Building Scalable APIs with Spring Boot',
    excerpt: 'Learn best practices for building high-performance RESTful APIs using Spring Boot...',
    content: `# Building Scalable APIs with Spring Boot

## Introduction
Spring Boot has become the go-to framework for building enterprise-grade APIs. In this post, we'll explore best practices for creating scalable, maintainable APIs.

## Key Concepts
- Microservices architecture
- API versioning
- Caching strategies
- Load balancing

## Conclusion
Following these practices will help you build robust and scalable APIs.`,
    author: 'Your Name',
    date: '2024-01-15',
    tags: ['Spring Boot', 'API', 'Backend'],
    featured: true,
    readTime: 8,
  },
  {
    id: '2',
    slug: 'modern-react-patterns',
    title: 'Modern React Patterns and Best Practices',
    excerpt: 'Explore the latest React patterns including hooks, context API, and performance optimization...',
    content: `# Modern React Patterns

## React Hooks
- useState
- useEffect
- useContext
- Custom hooks

## Performance Optimization
- Code splitting
- Lazy loading
- Memoization`,
    author: 'Your Name',
    date: '2024-01-10',
    tags: ['React', 'Frontend', 'JavaScript'],
    readTime: 10,
  },
  {
    id: '3',
    slug: 'microservices-architecture-guide',
    title: 'Microservices Architecture: A Practical Guide',
    excerpt: 'Deep dive into microservices architecture, implementation patterns, and challenges...',
    content: `# Microservices Architecture

## Benefits
- Independent deployment
- Technology diversity
- Fault isolation
- Scalability

## Challenges
- Distributed transactions
- Debugging complexity
- Network latency`,
    author: 'Your Name',
    date: '2024-01-05',
    tags: ['Microservices', 'Architecture', 'System Design'],
    readTime: 12,
  },
]

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Projects Completed',
    description: 'Successfully delivered enterprise-grade applications',
    value: 25,
    unit: '+',
    icon: '🚀',
  },
  {
    id: '2',
    title: 'Years of Experience',
    description: 'Professional software development experience',
    value: 6,
    unit: '',
    icon: '⭐',
  },
  {
    id: '3',
    title: 'Team Members Mentored',
    description: 'Guided junior developers and interns',
    value: 15,
    unit: '+',
    icon: '👥',
  },
  {
    id: '4',
    title: 'Open Source Contributions',
    description: 'Contributed to various open-source projects',
    value: 50,
    unit: '+',
    icon: '💻',
  },
]

export const codingProfiles: CodingProfile[] = [
  {
    name: 'LeetCode',
    username: 'yourusername',
    profileUrl: 'https://leetcode.com/yourusername',
    stats: {
      problemsSolved: 300,
      rank: 1500,
    },
  },
  {
    name: 'HackerRank',
    username: 'yourusername',
    profileUrl: 'https://www.hackerrank.com/yourusername',
    stats: {
      rating: 1800,
    },
  },
  {
    name: 'CodeChef',
    username: 'yourusername',
    profileUrl: 'https://www.codechef.com/users/yourusername',
    stats: {
      rating: 1500,
    },
  },
  {
    name: 'GeeksforGeeks',
    username: 'yourusername',
    profileUrl: 'https://auth.geeksforgeeks.org/user/yourusername',
  },
]

export const personalInfo = {
  name: 'Java Full Stack Developer',
  title: 'Full Stack Software Engineer',
  bio: 'Passionate about building scalable backend systems and creating beautiful user experiences. Expertise in Java, Spring Boot, React, and cloud technologies.',
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA, USA',
  availability: 'Available for Full-Time/Contract roles',
  languages: [
    { language: 'English', proficiency: 'Native' },
    { language: 'Spanish', proficiency: 'Intermediate' },
  ],
  resumeUrl: '/resume.pdf',
  socialLinks: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
    email: 'your.email@example.com',
  },
}
