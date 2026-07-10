# Development Workflow Guide

## Getting Started

### First Time Setup

```bash
# 1. Install dependencies
npm install

# 2. Create environment file
cp .env.example .env.local

# 3. Update .env.local with your values
# - EmailJS credentials
# - API endpoints
# - Personal information

# 4. Start development server
npm run dev
```

The app will open at `http://localhost:5173`

## Available Commands

### Development

```bash
# Start dev server with hot reload
npm run dev

# Type check without building
npm run type-check
```

### Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Code Quality

```bash
# Lint code
npm run lint

# Fix lint issues automatically
npm run lint:fix

# Format code with Prettier
npm run format

# Run all checks (lint + type-check)
npm run lint && npm run type-check
```

## Project Structure Deep Dive

### Components

**Common Components** (`src/components/common/`)
- `Navigation.tsx` - Top navigation with theme toggle
- `Footer.tsx` - Footer with social links
- `ScrollToTop.tsx` - Scroll to top button
- `ScrollProgress.tsx` - Scroll progress indicator
- `LoadingScreen.tsx` - Initial loading animation

**Section Components** (`src/components/sections/`)
- `Hero.tsx` - Hero section with introduction
- `About.tsx` - Personal background section
- `Skills.tsx` - Categorized skills with progress bars
- `Experience.tsx` - Professional timeline
- `Projects.tsx` - Project showcase with filtering
- `Certifications.tsx` - Certifications display
- `CodingProfiles.tsx` - Competitive programming profiles
- `Achievements.tsx` - Key achievements with counters
- `BlogPreview.tsx` - Recent blog posts preview
- `FAQ.tsx` - Frequently asked questions
- `Contact.tsx` - Contact form with EmailJS

### Pages

- `Home.tsx` - Main page combining all sections
- `ProjectDetail.tsx` - Individual project detail page
- `Blog.tsx` - Blog listing and post detail pages
- `NotFound.tsx` - 404 error page

### Core Files

- `App.tsx` - Main app component with routing
- `main.tsx` - React DOM entry point
- `index.css` - Global styles and animations
- `index.html` - HTML template

### Configuration

- `vite.config.ts` - Build tool configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS theme
- `postcss.config.js` - PostCSS plugins
- `.eslintrc.json` - Linting rules
- `.prettierrc` - Code formatting rules

## Customization Guide

### Update Personal Information

Edit `src/data/index.ts`:

```typescript
export const personalInfo = {
  name: 'Your Name',
  title: 'Full Stack Developer',
  bio: 'Your bio here...',
  email: 'your.email@example.com',
  // ... more info
}

export const skills = [
  // Add your skills
]

export const projects = [
  // Add your projects
]

// ... update all other data
```

### Modify Theme Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        600: '#your-color',
        // ... other shades
      },
      secondary: {
        // ...
      },
    },
  },
}
```

### Add New Sections

1. Create component in `src/components/sections/`
2. Add data to `src/data/index.ts` if needed
3. Import and add to `src/pages/Home.tsx`

Example:

```typescript
// src/components/sections/YourSection.tsx
import React from 'react'
import { motion } from 'framer-motion'

const YourSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="section-container">
        <motion.h2 className="section-title">Your Section</motion.h2>
        {/* Your content */}
      </div>
    </section>
  )
}

export default YourSection
```

### Customize Animations

Global animations in `src/index.css`:

```css
@keyframes your-animation {
  0% { /* start state */ }
  100% { /* end state */ }
}

.animate-your-animation {
  animation: your-animation 3s ease-in-out infinite;
}
```

Component animations with Framer Motion:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## Common Tasks

### Add a New Project

1. Update `src/data/index.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 'unique-id',
    title: 'Project Name',
    description: 'Detailed description...',
    shortDescription: 'Brief description...',
    // ... other fields
  },
  // ... other projects
]
```

2. The project will automatically appear on the Projects page
3. Create a dynamic project detail page (already set up)

### Add a New Blog Post

1. Update `src/data/index.ts`:

```typescript
export const blogPosts: BlogPost[] = [
  {
    id: 'unique-id',
    slug: 'post-title-slug',
    title: 'Post Title',
    excerpt: 'Brief excerpt...',
    content: 'Full markdown content...',
    // ... other fields
  },
]
```

2. Post appears in blog listing
3. Click "Read More" to see full post

### Set Up Contact Form

1. Create EmailJS account at https://www.emailjs.com/
2. Create email template with variables
3. Get Service ID, Template ID, Public Key
4. Add to `.env.local`:

```env
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=public_xxx
```

5. Test the contact form

### Add Social Links

Update `src/data/index.ts`:

```typescript
export const personalInfo = {
  socialLinks: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
    email: 'your.email@example.com',
  },
}
```

## Debugging Tips

### Enable Debug Mode

Add to browser console:

```javascript
// Check component props
console.log(props)

// Monitor state changes
console.log(state)

// Check animations
document.querySelectorAll('[data-debug]').forEach(el => {
  el.style.border = '1px solid red'
})
```

### Common Issues

**Theme not changing:**
- Check localStorage: `localStorage.getItem('theme-storage')`
- Verify Zustand store setup

**Images not showing:**
- Check path starts with `/`
- Verify file exists in `public/`
- Check browser DevTools Network tab

**Animations not playing:**
- Check `prefers-reduced-motion` setting
- Verify Framer Motion is imported
- Check animation names are correct

**Styling not applying:**
- Ensure class names follow Tailwind conventions
- Check Tailwind config includes file paths
- Clear browser cache

## Performance Optimization

### Bundle Analysis

```bash
# Check bundle size
npm run build

# Analyze what's in bundle
npm install -g vite-bundle-visualizer
vite-bundle-visualizer
```

### Optimize Images

```bash
# Install image optimizer
npm install -D imagemin-cli imagemin-mozjpeg imagemin-pngquant

# Optimize
imagemin src/assets/*.{jpg,png} --out-dir=src/assets
```

### Code Splitting

Automatic via React.lazy for routes:

```typescript
const ProjectDetail = React.lazy(() => import('./pages/ProjectDetail'))
```

## Testing

### Run Lint Checks

```bash
npm run lint
npm run lint:fix
```

### Type Checking

```bash
npm run type-check
```

### Build Verification

```bash
npm run build
npm run preview
```

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes and commit
git add .
git commit -m "feat: add your feature"

# Push to remote
git push origin feature/your-feature

# Create pull request
# After review, merge to main
```

## Environment Management

### Local Development
Use `.env.local` (never commit)

### Staging
Use `.env.staging`

### Production
Set environment variables in deployment platform (Vercel, Netlify, etc.)

## Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Router Docs](https://reactrouter.com/)

---

Need help? Check the main README.md or review component comments for more details.
