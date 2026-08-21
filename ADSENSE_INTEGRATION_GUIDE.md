# Google AdSense & Astra Ads Integration Guide

## 🎯 Quick Setup Steps

### 1. Get Your AdSense Publisher ID

1. Go to [Google AdSense](https://www.google.com/adsense/)
2. Sign up or log in to your account
3. Navigate to **Account** → **Account Information**
4. Copy your **Publisher ID** (format: `ca-pub-XXXXXXXXXXXXXXXX`)

### 2. Update Configuration Files

#### A. Update `app/layout.tsx`
Replace `ca-pub-XXXXXXXXXXXXXXXX` with your actual publisher ID:

```tsx
<Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ACTUAL_ID"
  crossOrigin="anonymous"
  strategy="afterInteractive"
/>
```

#### B. Update `lib/adsense-config.ts`
Replace the placeholder values:

```typescript
export const ADSENSE_CONFIG = {
  publisherId: 'ca-pub-YOUR_ACTUAL_ID', // Your real ID
  enabled: true, // Enable ads in production
  adSlots: {
    headerBanner: '1234567890',    // Create these in AdSense
    footerBanner: '2345678901',
    sidebar: '3456789012',
    inArticle: '4567890123',
    mobileBanner: '5678901234',
    calculatorTop: '6789012345',
    calculatorBottom: '7890123456',
    matchedContent: '8901234567',
  },
};
```

#### C. Update `components/ads/AdUnit.tsx`
Replace the AD_CLIENT and AD_SLOTS with your values:

```typescript
const AD_CLIENT = 'ca-pub-YOUR_ACTUAL_ID';

const AD_SLOTS = {
  'header-banner': '1234567890',
  'sidebar': '2345678901',
  // ... etc
};
```

### 3. Create Ad Units in Google AdSense

1. Log in to Google AdSense
2. Go to **Ads** → **By site** → **+ New ad unit**
3. Choose ad type:
   - **Display ads** (most common for calculators)
   - **In-feed ads** (for content sections)
   - **In-article ads** (for long-form content)
   - **Matched content** (related content recommendations)

4. Create these ad units:
   - `header-banner` - Horizontal banner (728x90 or responsive)
   - `sidebar` - Square/vertical (300x250 or 300x600)
   - `in-article` - Responsive in-content
   - `footer-banner` - Horizontal banner
   - `mobile-banner` - Mobile banner (320x50)
   - `calculator-top` - Above calculator widget
   - `calculator-bottom` - Below calculator results
   - `matched-content` - Related calculators

5. Copy each ad slot ID and update your config files

### 4. Add Ads to Your Pages

#### Homepage Example (`app/page.tsx`):

```tsx
import AdUnit from '@/components/ads/AdUnit';

export default function HomePage() {
  return (
    <>
      {/* Top banner ad */}
      <AdUnit type="header-banner" className="my-6" />
      
      {/* Your content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2">
          <CalculatorGrid />
          
          {/* In-content ad */}
          <AdUnit type="in-article" className="my-8" />
        </div>
        
        {/* Sidebar with ads */}
        <aside>
          <AdUnit type="sidebar" className="sticky top-24" />
        </aside>
      </div>
      
      {/* Footer ad */}
      <AdUnit type="footer-banner" className="my-6" />
    </>
  );
}
```

#### Calculator Page Example:

```tsx
import AdUnit from '@/components/ads/AdUnit';

export default function CalculatorPage() {
  return (
    <div className="container-custom py-8">
      {/* Ad before calculator */}
      <AdUnit type="calculator-top" className="mb-6" />
      
      {/* Calculator widget */}
      <CalculatorWidget />
      
      {/* Ad after calculator results */}
      <AdUnit type="calculator-bottom" className="my-6" />
      
      {/* SEO content */}
      <div className="prose max-w-none">
        <h2>How to Use This Calculator</h2>
        {/* ... content ... */}
        
        {/* In-article ad */}
        <AdUnit type="in-article" className="my-8" />
      </div>
      
      {/* Related calculators ad */}
      <AdUnit type="matched-content" className="mt-8" />
    </div>
  );
}
```

## 🎨 Astra Ads Integration (Optional)

If you're using Astra theme with custom ad positions:

### Update `lib/adsense-config.ts`:

```typescript
export const ASTRA_ADS_CONFIG = {
  enabled: true,
  positions: {
    header: {
      enabled: true,
      code: '<script>/* Your Astra header ad code */</script>',
    },
    sidebar: {
      enabled: true,
      code: '<div>/* Your Astra sidebar ad */</div>',
    },
  },
};
```

### Create Astra Ad Component:

```tsx
// components/ads/AstraAd.tsx
'use client';

import { useEffect } from 'react';
import { ASTRA_ADS_CONFIG } from '@/lib/adsense-config';

interface AstraAdProps {
  position: 'header' | 'sidebar' | 'footer' | 'content';
}

export default function AstraAd({ position }: AstraAdProps) {
  const adConfig = ASTRA_ADS_CONFIG.positions[position];
  
  if (!ASTRA_ADS_CONFIG.enabled || !adConfig.enabled) {
    return null;
  }
  
  return (
    <div 
      className="astra-ad"
      dangerouslySetInnerHTML={{ __html: adConfig.code }}
    />
  );
}
```

## 📊 AdSense Best Practices

### 1. **Ad Placement Strategy**

**High-performing positions:**
- ✅ Above the fold (header area)
- ✅ Within content (in-article)
- ✅ End of calculator results
- ✅ Sidebar (sticky positioning)
- ✅ Between calculator sections

**Avoid:**
- ❌ Too many ads on one page (max 3-4)
- ❌ Ads that look like site navigation
- ❌ Ads that interfere with calculator functionality

### 2. **Responsive Ad Design**

All AdUnit components are responsive by default. They adapt to:
- Desktop (728x90, 300x250, 300x600)
- Tablet (468x60, 300x250)
- Mobile (320x50, 320x100, 300x250)

### 3. **Ad Density Guidelines**

For AdSense approval and optimal user experience:
- Maximum 3 ads per page initially
- Keep content-to-ad ratio at least 60:40
- Ensure 50%+ of viewport is content on load
- Don't place ads too close together (min 250px apart)

### 4. **Mobile Optimization**

```tsx
// Show different ad types on mobile
<div className="block lg:hidden">
  <AdUnit type="mobile-banner" />
</div>

<div className="hidden lg:block">
  <AdUnit type="header-banner" />
</div>
```

### 5. **Performance Tips**

- ✅ Use `strategy="afterInteractive"` for ad script loading
- ✅ Lazy load ads below the fold
- ✅ Implement proper error boundaries
- ✅ Monitor Core Web Vitals

## 🚀 Testing Your Ads

### Development Mode
Ads show as placeholders in development:
```
┌─────────────────────┐
│  Ad Placeholder     │
│  header-banner      │
└─────────────────────┘
```

### Production Testing

1. **Build for production:**
```bash
npm run build
npm start
```

2. **Test checklist:**
   - [ ] Ads appear correctly on all pages
   - [ ] Responsive behavior works (test mobile/tablet/desktop)
   - [ ] No layout shifts when ads load
   - [ ] Ads don't overlap content
   - [ ] Page performance is acceptable

3. **Use AdSense Test Mode:**
   - Add `?google_console=1` to URL
   - Check browser console for ad errors

## 📈 AdSense Approval Requirements

### Content Requirements ✅
- [x] 35+ unique calculators with original content
- [x] Comprehensive descriptions and guides
- [x] Privacy Policy, Terms, Disclaimer pages
- [x] About Us and Contact pages
- [x] High-quality, valuable tools

### Technical Requirements ✅
- [x] Clean, professional design
- [x] Mobile responsive
- [x] Fast loading times
- [x] HTTPS enabled (required for deployment)
- [x] Easy navigation

### Before Applying:
1. Deploy to production domain
2. Add 10-20+ quality blog posts (optional but helps)
3. Ensure all calculators work perfectly
4. Test on all devices
5. Check for any broken links
6. Verify all pages have unique meta descriptions

## 🔧 Troubleshooting

### Ads Not Showing

**Check:**
1. Publisher ID is correct in all files
2. Ad slots created in AdSense dashboard
3. Site is in production mode (`NODE_ENV=production`)
4. AdSense account is approved
5. Browser ad-blocker is disabled

**Console errors:**
```bash
# Open browser dev tools → Console
# Look for AdSense errors
```

### Layout Issues

If ads cause layout shifts:

```tsx
// Add fixed container height
<div className="min-h-[250px]">
  <AdUnit type="sidebar" />
</div>
```

### Slow Loading

Lazy load ads below the fold:

```tsx
'use client';

import dynamic from 'next/dynamic';

const AdUnit = dynamic(() => import('@/components/ads/AdUnit'), {
  loading: () => <div className="h-[250px] bg-gray-100 animate-pulse" />,
  ssr: false,
});
```

## 📞 Support Resources

- [Google AdSense Help Center](https://support.google.com/adsense)
- [AdSense Policies](https://support.google.com/adsense/answer/48182)
- [Ad Review Center](https://www.google.com/adsense/new/u/0/pub-XXXXXXXXXXXXXXXX/adreview)
- [Performance Reports](https://www.google.com/adsense/new/u/0/pub-XXXXXXXXXXXXXXXX/reporting)

## 🎯 Next Steps

1. [ ] Get AdSense approval
2. [ ] Replace placeholder IDs with real ones
3. [ ] Create ad units in AdSense dashboard
4. [ ] Update all config files
5. [ ] Test in production
6. [ ] Monitor performance and earnings
7. [ ] Optimize ad placements based on data

---

**Need Help?** Check the [SEO_ADSENSE_GUIDE.md](./SEO_ADSENSE_GUIDE.md) for more details on getting AdSense approval.
