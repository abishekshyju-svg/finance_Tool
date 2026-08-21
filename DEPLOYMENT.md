# Deployment Guide - FinanceHub

Complete guide for deploying your FinanceHub website to various hosting platforms.

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- ✅ All dependencies are installed (`npm install`)
- ✅ Build succeeds locally (`npm run build`)
- ✅ No TypeScript errors (`npm run lint`)
- ✅ Test all calculator functionalities
- ✅ Verify responsive design on different devices
- ✅ Update contact information and branding
- ✅ Review all legal pages (Terms, Privacy, Disclaimer)
- ✅ Add your actual domain to metadata
- ✅ Configure analytics (if using)
- ✅ Set up error tracking (optional)

## 🚀 Vercel Deployment (Recommended)

Vercel is the easiest option for Next.js applications and offers excellent performance.

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/finance-tools-hub.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Configure Domain**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Variables (Optional)

Add in Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-xxxxxxxxxxxxxx
```

## 🌐 Netlify Deployment

### Method 1: Git Integration

1. **Push to Git** (GitHub, GitLab, Bitbucket)

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
     - Click "Deploy site"

### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

### Netlify Configuration

Create `netlify.toml` in root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## ☁️ AWS Amplify

1. **Push to GitHub**

2. **Connect to Amplify**
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect repository
   - Amplify auto-detects Next.js
   - Review settings and deploy

3. **Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

## 🔷 DigitalOcean App Platform

1. **Push to GitHub**

2. **Create App**
   - Go to DigitalOcean Apps
   - Click "Create App"
   - Connect GitHub repository
   - Choose branch
   - App Platform detects Next.js

3. **Configure**
   - Build command: `npm run build`
   - Run command: `npm start`
   - HTTP port: `3000`
   - Deploy

## 🚂 Railway

1. **Push to GitHub**

2. **Deploy from Railway**
   ```bash
   # Or use Railway CLI
   npm install -g @railway/cli
   railway login
   railway init
   railway up
   ```

3. **Via Dashboard**
   - Go to [railway.app](https://railway.app)
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Railway auto-configures Next.js
   - Deploy

## 🎨 Cloudflare Pages

1. **Build Locally**
   ```bash
   npm run build
   ```

2. **Deploy via Wrangler**
   ```bash
   npm install -g wrangler
   wrangler login
   wrangler pages publish .next
   ```

3. **Or via Dashboard**
   - Go to Cloudflare Pages
   - Connect Git repository
   - Build settings:
     - Build command: `npm run build`
     - Build output: `.next`
     - Node version: `18`

## 🐳 Docker Deployment

### Dockerfile

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: always
```

### Build and Run

```bash
# Build
docker build -t finance-tools-hub .

# Run
docker run -p 3000:3000 finance-tools-hub

# Or with Docker Compose
docker-compose up -d
```

## 📊 Analytics Setup

### Google Analytics 4

1. **Get GA4 Measurement ID**
   - Go to Google Analytics
   - Create property
   - Copy Measurement ID (G-XXXXXXXXXX)

2. **Add to Layout**

Update `app/layout.tsx`:

```typescript
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

3. **Add Environment Variable**
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### Google AdSense

1. **Get AdSense Code**
   - Apply for AdSense
   - Get publisher ID (ca-pub-xxxxxxxxxxxxxx)

2. **Add AdSense Script**

Update `app/layout.tsx`:

```typescript
<Script
  async
  src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
  crossOrigin="anonymous"
  strategy="afterInteractive"
/>
```

3. **Add Environment Variable**
   ```
   NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-xxxxxxxxxxxxxx
   ```

## 🔧 Performance Optimization

### Next.js Configuration

Update `next.config.js`:

```javascript
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [],
  },
  // Enable compression
  compress: true,
  // Optimize fonts
  optimizeFonts: true,
}

module.exports = nextConfig
```

### Image Optimization

If adding images, use Next.js Image component:

```typescript
import Image from 'next/image';

<Image
  src="/calculator-icon.png"
  alt="Calculator"
  width={100}
  height={100}
  priority
/>
```

## 🔒 Security Headers

Add to `next.config.js`:

```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  }
}
```

## 📱 PWA Support (Optional)

Install next-pwa:

```bash
npm install next-pwa
```

Update `next.config.js`:

```javascript
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
})

module.exports = withPWA({
  // your next config
})
```

## 🔍 SEO Checklist

Post-deployment SEO tasks:

- ✅ Submit sitemap to Google Search Console
- ✅ Submit to Bing Webmaster Tools
- ✅ Verify meta tags with social preview tools
- ✅ Test page speed with PageSpeed Insights
- ✅ Check mobile-friendliness
- ✅ Set up Google Analytics
- ✅ Monitor Core Web Vitals
- ✅ Add structured data (JSON-LD)
- ✅ Create robots.txt (if needed)

### Generate Sitemap

Create `app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next';
import { calculators } from '@/data/calculators';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yourdomain.com';
  
  const calculatorUrls = calculators.map((calc) => ({
    url: `${baseUrl}/calculator/${calc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...calculatorUrls,
  ];
}
```

## 🐛 Monitoring & Error Tracking

### Sentry Integration

```bash
npm install @sentry/nextjs
```

```javascript
// sentry.client.config.js
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
});
```

## 🔄 Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

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
      - run: npm run lint
```

## 📈 Post-Deployment

1. **Test Everything**
   - All calculators functional
   - Forms working
   - Links not broken
   - Mobile responsive

2. **Monitor Performance**
   - Check load times
   - Monitor error rates
   - Track user engagement

3. **Iterate**
   - Gather user feedback
   - Add more calculators
   - Improve based on analytics

## 🆘 Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
PORT=3001 npm run dev
```

### Module Not Found

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📞 Support

For deployment issues:
- Check Next.js documentation
- Review platform-specific docs
- Check build logs for errors
- Verify environment variables
- Test locally first

---

**Good luck with your deployment! 🚀**
