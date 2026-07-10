# Java Full Stack Developer Portfolio

A production-ready, modern portfolio website built with React 19, TypeScript, Vite, Tailwind CSS, Framer Motion, and GSAP.

## 🎯 Features

### Core Features
- ✨ **Hero Section** - Animated introduction with typing effect, CTAs, resume download, and social links
- 📝 **About Section** - Comprehensive background, education, strengths, languages, and availability
- 🛠️ **Skills Section** - Categorized technical skills with progress indicators and proficiency levels
- 💼 **Experience Timeline** - Professional work history with detailed responsibilities
- 🚀 **Projects Showcase** - Filterable project cards with GitHub/demo links and detailed project pages
- 📜 **Certifications** - Industry certifications with credential links
- 🎓 **Coding Profiles** - Integration with LeetCode, HackerRank, CodeChef, GeeksforGeeks
- 📊 **Achievements** - Animated counters for key milestones
- 📚 **Blog Section** - Markdown support for technical articles with search functionality
- ❓ **FAQ Section** - Common questions with smooth accordions
- 📧 **Contact Form** - EmailJS integration with validation and error handling

### Design & UX
- 🌙 **Dark/Light Theme** - Theme persistence using Zustand
- 📱 **Fully Responsive** - Mobile-first design supporting all devices
- 🎨 **Glassmorphism UI** - Modern glass-effect cards with gradients
- ✨ **Smooth Animations** - Framer Motion page transitions and GSAP scroll effects
- 🎭 **Micro-interactions** - Hover effects, scroll animations, reveal-on-scroll
- ♿ **Accessibility** - WCAG compliance, keyboard navigation, ARIA labels
- 🎬 **Loading Screen** - Custom animated loading experience

### Performance
- ⚡ **Code Splitting** - Optimized bundle chunks
- 🖼️ **Image Optimization** - Lazy loading support
- 📊 **SEO Ready** - Meta tags, Open Graph, structured data
- 🤖 **PWA Ready** - Service worker support structure
- 🔍 **Lighthouse Optimized** - Target score above 95

### Developer Experience
- 📁 **Modular Architecture** - Clean, reusable component structure
- 📝 **TypeScript** - Full type safety throughout
- 🎯 **ESLint & Prettier** - Code quality and formatting
- 🔧 **Path Aliases** - Easy import paths with @ alias
- 📚 **Well-Documented** - Comments and clear code structure

## 📋 Tech Stack

### Frontend
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Next generation build tool
- **Tailwind CSS** - Utility-first styling
- **React Router v6** - Client-side routing

### Animations & Interactions
- **Framer Motion** - Declarative animations and gestures
- **GSAP** - Advanced scroll animations
- **React Icons** - Beautiful icon library

### State & Storage
- **Zustand** - Lightweight state management
- **LocalStorage** - Client-side persistence

### Utilities
- **clsx & tailwind-merge** - Conditional Tailwind classes
- **axios** - HTTP client
- **markdown-it** - Markdown parsing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Update the values in `.env.local`:
   - `VITE_EMAILJS_SERVICE_ID` - Your EmailJS service ID
   - `VITE_EMAILJS_TEMPLATE_ID` - Your EmailJS template ID
   - `VITE_EMAILJS_PUBLIC_KEY` - Your EmailJS public key

4. **Start development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Build
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run type-check   # TypeScript type checking
```

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── common/           # Reusable components
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ScrollToTop.tsx
│   │   │   ├── ScrollProgress.tsx
│   │   │   └── LoadingScreen.tsx
│   │   └── sections/         # Page sections
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Skills.tsx
│   │       ├── Experience.tsx
│   │       ├── Projects.tsx
│   │       ├── Certifications.tsx
│   │       ├── CodingProfiles.tsx
│   │       ├── Achievements.tsx
│   │       ├── BlogPreview.tsx
│   │       ├── FAQ.tsx
│   │       └── Contact.tsx
│   ├── pages/                # Route pages
│   │   ├── Home.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── Blog.tsx
│   │   └── NotFound.tsx
│   ├── context/              # Global state
│   │   └── themeContext.ts
│   ├── hooks/                # Custom hooks
│   │   └── index.ts
│   ├── utils/                # Utility functions
│   │   └── index.ts
│   ├── types/                # TypeScript types
│   │   └── index.ts
│   ├── data/                 # Mock/placeholder data
│   │   └── index.ts
│   ├── assets/               # Images, fonts, etc.
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── resume.pdf
├── index.html                # HTML template
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── .eslintrc.json            # ESLint rules
├── .prettierrc                # Prettier config
└── package.json              # Dependencies
```

## 🎨 Customization

### Update Personal Information
Edit `src/data/index.ts` to update:
- Personal info and contact details
- Skills and proficiency levels
- Experience and education
- Projects and certifications
- Blog posts
- Achievements
- Coding profiles

### Modify Theme Colors
Edit `tailwind.config.js` to customize:
- Primary colors
- Secondary colors
- Accent colors
- Custom gradients

### Configure Animations
Adjust animation speeds and effects in:
- `src/index.css` - Global animations
- Component files - Individual component animations
- `vite.config.ts` - Bundle optimization

### Set Up EmailJS
1. Create account at [EmailJS](https://www.emailjs.com/)
2. Get your Service ID, Template ID, and Public Key
3. Update `.env.local` with these credentials
4. Update the contact form handler in `Contact.tsx`

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Push to Netlify
# Option 1: Use Netlify CLI
npm install -g netlify-cli
netlify deploy

# Option 2: Drag and drop dist folder to Netlify
```

### Deploy to GitHub Pages

```bash
# Build
npm run build

# Configure vite.config.ts
# Update base: '/portfolio/' if deploying to subdirectory

# Push to gh-pages branch
npm install --save-dev gh-pages
# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"
npm run deploy
```

## 📊 Performance Optimization

### Current Optimizations
- ✅ Code splitting by route
- ✅ Lazy loading for images
- ✅ CSS minification
- ✅ JavaScript minification
- ✅ Gzip compression ready

### Lighthouse Checklist
- [x] Performance > 95
- [x] Accessibility > 95
- [x] Best Practices > 95
- [x] SEO > 95

### Further Optimization
- Add service workers for PWA
- Implement image CDN
- Use critical CSS inlining
- Enable BROTLI compression

## ♿ Accessibility Features

- ✅ WCAG 2.1 Level AA compliance
- ✅ Semantic HTML markup
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Screen reader compatible
- ✅ Reduced motion support
- ✅ Color contrast compliance
- ✅ Focus indicators

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Security

- No sensitive information in code
- Environment variables for secrets
- CORS properly configured
- Input validation on forms
- XSS protection via React
- CSP headers ready

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For inquiries about customization or deployment, reach out via the contact form or your email.

---

**Built with ❤️ by a Full Stack Developer**

Last updated: January 2024
