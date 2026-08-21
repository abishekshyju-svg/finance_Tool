# 🎯 AdSense Setup Checklist

## Step 1: Get Your AdSense Account Ready

### Apply for Google AdSense
- [ ] Go to https://www.google.com/adsense/
- [ ] Sign up with your Google account
- [ ] Submit your website URL (after deployment)
- [ ] Wait for approval (typically 1-2 weeks)

### While Waiting for Approval
- [ ] Deploy your website to production
- [ ] Ensure HTTPS is enabled
- [ ] Add quality content to all pages
- [ ] Test all 35 calculators work perfectly

---

## Step 2: Update Configuration Files

### ✅ File 1: `app/layout.tsx`

**Replace line 21:**
```tsx
// BEFORE (Current placeholder):
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"

// AFTER (Your actual ID):
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456"
```

**Location:** Find your Publisher ID in AdSense → Account → Account Information

---

### ✅ File 2: `lib/adsense-config.ts`

**Replace line 5:**
```typescript
// BEFORE:
publisherId: 'ca-pub-XXXXXXXXXXXXXXXX',

// AFTER:
publisherId: 'ca-pub-1234567890123456',
```

**Replace lines 9-18 (after creating ad units in AdSense):**
```typescript
adSlots: {
  headerBanner: '1234567890',      // From AdSense dashboard
  footerBanner: '2345678901',
  sidebar: '3456789012',
  inArticle: '4567890123',
  mobileBanner: '5678901234',
  calculatorTop: '6789012345',
  calculatorBottom: '7890123456',
  matchedContent: '8901234567',
},
```

---

### ✅ File 3: `components/ads/AdUnit.tsx`

**Replace line 20:**
```typescript
// BEFORE:
const AD_CLIENT = 'ca-pub-XXXXXXXXXXXXXXXX';

// AFTER:
const AD_CLIENT = 'ca-pub-1234567890123456';
```

**Replace lines 23-32:**
```typescript
const AD_SLOTS = {
  'header-banner': '1234567890',
  'sidebar': '2345678901',
  'in-article': '3456789012',
  'footer-banner': '4567890123',
  'mobile-banner': '5678901234',
  'calculator-top': '6789012345',
  'calculator-bottom': '7890123456',
  'matched-content': '8901234567',
};
```

---

## Step 3: Create Ad Units in Google AdSense

### Login to AdSense Dashboard
1. Go to https://adsense.google.com/
2. Navigate to **Ads** → **By site**
3. Click **+ New ad unit**

### Create These 8 Ad Units:

#### 1️⃣ Header Banner
- **Name:** Header Banner
- **Type:** Display ads
- **Size:** Responsive
- **Copy the Ad Slot ID** → Use in `headerBanner` field

#### 2️⃣ Footer Banner
- **Name:** Footer Banner  
- **Type:** Display ads
- **Size:** Responsive
- **Copy the Ad Slot ID** → Use in `footerBanner` field

#### 3️⃣ Sidebar
- **Name:** Sidebar Ad
- **Type:** Display ads
- **Size:** Responsive (will show 300x250, 300x600)
- **Copy the Ad Slot ID** → Use in `sidebar` field

#### 4️⃣ In-Article
- **Name:** In-Article Ad
- **Type:** In-article ads
- **Size:** Responsive
- **Copy the Ad Slot ID** → Use in `inArticle` field

#### 5️⃣ Mobile Banner
- **Name:** Mobile Banner
- **Type:** Display ads
- **Size:** Responsive (optimized for mobile)
- **Copy the Ad Slot ID** → Use in `mobileBanner` field

#### 6️⃣ Calculator Top
- **Name:** Calculator Top Ad
- **Type:** Display ads
- **Size:** Responsive
- **Copy the Ad Slot ID** → Use in `calculatorTop` field

#### 7️⃣ Calculator Bottom
- **Name:** Calculator Bottom Ad
- **Type:** Display ads
- **Size:** Responsive
- **Copy the Ad Slot ID** → Use in `calculatorBottom` field

#### 8️⃣ Matched Content
- **Name:** Related Content
- **Type:** Matched content
- **Size:** Responsive
- **Copy the Ad Slot ID** → Use in `matchedContent` field

---

## Step 4: Test Your Integration

### Development Testing
```bash
# Ads will show as placeholders in development
npm run dev
```

You should see:
```
┌─────────────────────────────┐
│    Ad Placeholder           │
│    calculator-top           │
└─────────────────────────────┘
```

### Production Testing
```bash
# Build and run production version
npm run build
npm start
```

**Test checklist:**
- [ ] Homepage loads without errors
- [ ] Calculator pages show ads correctly
- [ ] Ads are responsive (test mobile/tablet/desktop)
- [ ] No layout shifts when ads load
- [ ] Ads don't overlap content
- [ ] Console has no AdSense errors

### Check Browser Console
Open DevTools → Console, look for:
- ✅ No AdSense errors
- ✅ Ads loading successfully
- ⚠️ If you see errors, check your Publisher ID and Ad Slot IDs

---

## Step 5: Deploy to Production

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd finance-tools-hub
vercel --prod
```

### Or Deploy to Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
cd finance-tools-hub
netlify deploy --prod
```

### After Deployment:
- [ ] Visit your live site
- [ ] Test all calculators work
- [ ] Verify ads appear correctly
- [ ] Check mobile responsiveness
- [ ] Test page load speed

---

## Step 6: Submit for AdSense Review

### Before Submitting:
- [ ] Site is live on custom domain (recommended)
- [ ] All pages have quality content
- [ ] Privacy Policy is published
- [ ] Terms & Conditions are published
- [ ] Contact page is functional
- [ ] No broken links
- [ ] HTTPS is enabled
- [ ] Site is mobile-friendly

### Submit:
1. Log in to AdSense
2. Go to **Sites**
3. Click **Add site**
4. Enter your domain
5. Copy the AdSense code (already done in layout.tsx)
6. Click **Submit for review**

### Wait for Approval
- Typically takes 1-2 weeks
- You'll receive email notification
- Check AdSense dashboard for status

---

## Step 7: Monitor Performance

### After Approval:

#### Check Ad Performance
1. AdSense → **Reports**
2. Monitor:
   - Page views
   - Ad impressions
   - Click-through rate (CTR)
   - Earnings

#### Optimize Ad Placement
- Analyze which ad units perform best
- Adjust placement based on data
- Test different ad formats
- Monitor user experience metrics

#### Track Key Metrics
- [ ] CTR (aim for 1-3%)
- [ ] Viewability (aim for >70%)
- [ ] Page RPM (revenue per 1000 impressions)
- [ ] Bounce rate (keep low)

---

## Quick Reference: File Locations

```
finance-tools-hub/
├── app/
│   └── layout.tsx                 ← Update Publisher ID here
├── components/
│   └── ads/
│       ├── AdUnit.tsx             ← Update Publisher ID & Ad Slots
│       └── GoogleAdsense.tsx      ← (No changes needed)
├── lib/
│   └── adsense-config.ts          ← Update config here
└── ADSENSE_INTEGRATION_GUIDE.md   ← Detailed guide
```

---

## Need Help?

### AdSense Resources
- [AdSense Help Center](https://support.google.com/adsense)
- [AdSense Policies](https://support.google.com/adsense/answer/48182)
- [Optimization Tips](https://support.google.com/adsense/topic/1250104)

### Common Issues

**Ads not showing?**
- Check Publisher ID is correct
- Verify ad slot IDs match AdSense dashboard
- Ensure site is in production mode
- Check browser ad-blocker is off

**Layout issues?**
- Ads causing shifts? Add fixed heights to containers
- Responsive issues? Test on real devices
- Overlapping content? Check CSS z-index values

**Low earnings?**
- Optimize ad placement
- Increase traffic quality
- Improve content relevance
- Test different ad formats

---

## ✅ Final Checklist

Before going live:
- [ ] All 3 files updated with real Publisher ID
- [ ] All 8 ad units created in AdSense
- [ ] Ad slot IDs added to config files
- [ ] Tested in development (placeholders show)
- [ ] Tested in production (ads load)
- [ ] Deployed to live server
- [ ] HTTPS enabled
- [ ] All calculators working
- [ ] Privacy policy published
- [ ] Site submitted to AdSense
- [ ] Monitoring setup configured

---

**Ready to monetize?** Follow this checklist step-by-step and you'll have AdSense running smoothly! 🚀
