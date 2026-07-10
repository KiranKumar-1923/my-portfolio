## Development Setup Guide

This portfolio is built with React 19, TypeScript, Vite, Tailwind CSS, Framer Motion, and GSAP.

### Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment**
   - Copy `.env.example` to `.env.local`
   - Update with your actual values:
     - EmailJS credentials for contact form
     - API endpoints
     - Social media links

3. **Start Development**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   npm run preview
   ```

### Key Customization Points

#### Personal Information
- Edit `src/data/index.ts` to update all personal data
- Update social links, contact info, skills, projects, etc.

#### Styling
- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.js`
- Component styles use Tailwind CSS classes

#### Animations
- Global animations defined in `src/index.css`
- Component animations use Framer Motion and GSAP
- Customize animation speeds in component files

#### Contact Form
- Update EmailJS credentials in `.env.local`
- Configure EmailJS service at https://www.emailjs.com/
- Test form before deployment

### Code Quality

- **Linting**: `npm run lint` and `npm run lint:fix`
- **Formatting**: `npm run format`
- **Type Checking**: `npm run type-check`

### Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Route pages
├── context/            # Global state (Zustand)
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript definitions
├── data/               # Mock data & constants
└── assets/             # Images, icons, etc.
```

### Performance Tips

1. Use the built-in lazy loading components
2. Keep images optimized and compressed
3. Monitor bundle size with Vite
4. Test with Lighthouse regularly
5. Use code splitting for large components

### Deployment

Recommended platforms:
- **Vercel** (best for Next.js, but works with React)
- **Netlify** (excellent for static sites)
- **GitHub Pages** (free option)

All support:
- Automatic deployments from git
- Preview deployments
- Custom domain setup
- SSL/TLS certificates

### Troubleshooting

**Port already in use**: `npm run dev -- --port 5174`

**Build errors**: Clear cache with `rm -rf node_modules dist && npm install`

**Styling issues**: Ensure Tailwind CSS is properly configured in `tailwind.config.js`

**Theme not persisting**: Check browser's localStorage support

### Support Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev/guide/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Important Notes

- This is a template - customize all content with your actual information
- Replace placeholder images with your own
- Update social media links
- Configure EmailJS for the contact form
- Test all features before production deployment
- Monitor performance with Lighthouse
- Keep dependencies updated

---

For detailed information, see [README.md](../README.md)
