# Deployment Guide

This guide covers deploying the Java Full Stack Developer Portfolio to various platforms.

## Pre-Deployment Checklist

- [ ] Update `src/data/index.ts` with your actual information
- [ ] Configure EmailJS credentials in `.env.local`
- [ ] Test all features locally with `npm run dev`
- [ ] Run `npm run build` and verify no errors
- [ ] Check `npm run lint` for code quality issues
- [ ] Test responsive design on mobile devices
- [ ] Verify all links and social media URLs are correct
- [ ] Run Lighthouse audit and aim for 95+ scores

## Environment Variables

Create `.env.local` with:

```env
VITE_API_URL=https://api.yourdomain.com
VITE_APP_NAME="Your Name - Full Stack Developer"
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Vercel Deployment (Recommended)

### Method 1: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts
# - Link to existing project or create new
# - Set build command: npm run build
# - Set output directory: dist
```

### Method 2: GitHub Integration

1. Push code to GitHub repository
2. Go to [Vercel Dashboard](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Add environment variables from `.env.local`
7. Click "Deploy"

### Vercel Configuration File (vercel.json)

Create `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

## Netlify Deployment

### Method 1: Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### Method 2: GitHub Integration

1. Go to [Netlify](https://www.netlify.com)
2. Click "New site from Git"
3. Connect your GitHub account
4. Select repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18
6. Add environment variables
7. Click "Deploy site"

### Netlify Configuration (netlify.toml)

Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## GitHub Pages Deployment

### Method 1: Manual Deployment

```bash
# Build the project
npm run build

# Create gh-pages branch if not exists
git branch gh-pages

# Deploy using gh-pages package
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

npm run deploy
```

### Method 2: GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## AWS S3 + CloudFront

### Setup

1. Create S3 bucket with static website hosting enabled
2. Configure bucket policy for public access
3. Create CloudFront distribution pointing to S3 bucket
4. Upload `dist` folder to S3

### Deployment Script

Create `deploy-aws.sh`:

```bash
#!/bin/bash
npm run build
aws s3 sync dist/ s3://your-bucket-name --delete
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

## Docker Deployment

### Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf

```nginx
server {
    listen 80;
    location / {
        root /usr/share/nginx/html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Deploy

```bash
# Build image
docker build -t portfolio:latest .

# Run container
docker run -p 80:80 portfolio:latest

# Or push to Docker Hub
docker tag portfolio:latest yourusername/portfolio:latest
docker push yourusername/portfolio:latest
```

## Custom Domain Setup

### With Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as shown
4. Wait for verification (usually instant)

### With Netlify
1. Site settings → Domain management
2. Add custom domain
3. Update DNS records to Netlify nameservers

### With GitHub Pages
1. Go to repository Settings → Pages
2. Custom domain field
3. Add domain name
4. Update DNS records (A, AAAA, or CNAME)

## SSL/TLS Certificate

All recommended platforms provide free SSL certificates:
- Vercel: Automatic
- Netlify: Automatic
- GitHub Pages: Automatic
- AWS: Use AWS Certificate Manager (free)

## Email Configuration

### EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create service (e.g., Gmail, Outlook)
3. Create email template with variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`
4. Get credentials:
   - Service ID
   - Template ID
   - Public Key

5. Update `.env.local`:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

## SEO Optimization

### Pre-Deployment

1. Update `index.html` meta tags
2. Add proper Open Graph tags
3. Create `/public/sitemap.xml`
4. Create `/public/robots.txt`
5. Add structured data JSON-LD

### Post-Deployment

1. Submit sitemap to:
   - Google Search Console
   - Bing Webmaster Tools
   - Yandex Webmaster

2. Add analytics:
   - Google Analytics
   - Microsoft Clarity
   - Vercel Analytics

## Performance Monitoring

### Tools

- [Vercel Analytics](https://vercel.com/analytics)
- [Web Vitals](https://web.dev/vitals/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [PageSpeed Insights](https://pagespeed.web.dev/)

### Target Metrics

- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1
- Lighthouse Score: > 95

## Troubleshooting

### Build Fails on Vercel/Netlify

```bash
# Clear cache and rebuild
npm ci
npm run build
```

### Styling Issues After Deploy

- Check CSS is properly bundled
- Verify Tailwind config is included
- Clear browser cache

### Contact Form Not Working

- Verify EmailJS credentials in `.env.local`
- Check EmailJS template format
- Test with browser console
- Check CORS settings if using custom API

### Images Not Loading

- Verify image paths are correct
- Use absolute paths from `/public`
- Compress images for better performance

## Monitoring & Maintenance

### Weekly

- Monitor analytics and user feedback
- Check error logs
- Review performance metrics

### Monthly

- Update dependencies: `npm update`
- Run security audit: `npm audit`
- Test all features
- Review and update content

### Quarterly

- Update blog posts
- Refresh projects section
- Update skills based on recent work
- Performance optimization pass

## Rollback Procedure

### Vercel
- Go to Deployments
- Select previous deployment
- Click "Redeploy"

### Netlify
- Deployments tab
- Select previous deployment
- "Publish deploy"

### GitHub Pages
- Revert commit to main branch
- Wait for workflow to complete

## Support & Resources

- [Vite Documentation](https://vitejs.dev/)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/)

---

For additional questions or issues, please refer to the main README.md or create an issue on GitHub.
