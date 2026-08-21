# 🚀 How to Add Your Google AdSense ID - Simple Guide

## What is a Publisher ID?

Your Publisher ID looks like this: `ca-pub-1234567890123456`

It's a unique number Google gives you when you sign up for AdSense.

---

## Step 1: Find Your Publisher ID

### If You Have AdSense Already:
1. Go to https://adsense.google.com/
2. Log in with your Google account
3. Click **Account** in the left menu
4. Click **Account information**
5. Look for **Publisher ID** - Copy it!

### If You Don't Have AdSense Yet:
1. Go to https://www.google.com/adsense/
2. Click **Get Started**
3. Sign up with your Google account
4. Enter your website URL (after you deploy)
5. Wait for approval (usually 1-2 weeks)
6. Once approved, get your Publisher ID from Account → Account Information

---

## Step 2: Update Your Code (3 Files to Edit)

### 📝 File 1: `app/layout.tsx`

**Find line 21:** (around line 21)
```tsx
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
```

**Replace with your ID:**
```tsx
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456"
```

---

### 📝 File 2: `lib/adsense-config.ts`

**Find line 5:**
```typescript
publisherId: 'ca-pub-XXXXXXXXXXXXXXXX',
```

**Replace with your ID:**
```typescript
publisherId: 'ca-pub-1234567890123456',
```

---

### 📝 File 3: `components/ads/AdUnit.tsx`

**Find line 20:**
```typescript
const AD_CLIENT = 'ca-pub-XXXXXXXXXXXXXXXX';
```

**Replace with your ID:**
```typescript
const AD_CLIENT = 'ca-pub-1234567890123456';
```

---

## Step 3: Create Ad Slots (Required!)

After getting your Publisher ID, you need to create "ad slots" for each ad position.

### What are Ad Slots?
Ad slots are like parking spaces for your ads. Each position needs its own ID.

### How to Create Them:

1. **Login to AdSense** → https://adsense.google.com/
2. **Go to Ads** → Click "Ads" in left menu
3. **Click "By site"** → Then "+ New ad unit"
4. **Choose "Display ads"** for most positions
5. **Name it** (e.g., "Calculator Top Ad")
6. **Copy the Ad Slot ID** (10-digit number like `1234567890`)

### Create These 8 Ad Units:

| Ad Unit Name          | Type           | Copy ID to...              |
|-----------------------|----------------|----------------------------|
| Header Banner         | Display ads    | `headerBanner` field       |
| Footer Banner         | Display ads    | `footerBanner` field       |
| Sidebar Ad            | Display ads    | `sidebar` field            |
| In-Article Ad         | In-article ads | `inArticle` field          |
| Mobile Banner         | Display ads    | `mobileBanner` field       |
| Calculator Top        | Display ads    | `calculatorTop` field      |
| Calculator Bottom     | Display ads    | `calculatorBottom` field   |
| Related Content       | Matched content| `matchedContent` field     |

---

### 📝 Update `lib/adsense-config.ts` with Ad Slot IDs

**Find lines 9-18:**
```typescript
adSlots: {
  headerBanner: 'XXXXXXXXXX',
  footerBanner: 'XXXXXXXXXX',
  sidebar: 'XXXXXXXXXX',
  inArticle: 'XXXXXXXXXX',
  mobileBanner: 'XXXXXXXXXX',
  calculatorTop: 'XXXXXXXXXX',
  calculatorBottom: 'XXXXXXXXXX',
  matchedContent: 'XXXXXXXXXX',
},
```

**Replace with your actual ad slot IDs:**
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

### 📝 Update `components/ads/AdUnit.tsx` with Ad Slot IDs

**Find lines 23-32:**
```typescript
const AD_SLOTS = {
  'header-banner': 'XXXXXXXXXX',
  'sidebar': 'XXXXXXXXXX',
  'in-article': 'XXXXXXXXXX',
  'footer-banner': 'XXXXXXXXXX',
  'mobile-banner': 'XXXXXXXXXX',
  'calculator-top': 'XXXXXXXXXX',
  'calculator-bottom': 'XXXXXXXXXX',
  'matched-content': 'XXXXXXXXXX',
};
```

**Replace with your actual ad slot IDs:**
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

## Step 4: Test It!

### Development Mode (Placeholders):
```bash
npm run dev
```
You'll see gray boxes that say "Ad Placeholder" - this is correct!

### Production Mode (Real Ads):
```bash
npm run build
npm start
```
Now you should see actual ads (if your site is approved by AdSense).

---

## Quick Summary

**3 Files to Edit:**
1. `app/layout.tsx` - Line 21
2. `lib/adsense-config.ts` - Lines 5, 9-18
3. `components/ads/AdUnit.tsx` - Lines 20, 23-32

**Replace:**
- `ca-pub-XXXXXXXXXXXXXXXX` → Your actual Publisher ID
- `XXXXXXXXXX` → Your actual Ad Slot IDs (from AdSense dashboard)

**Done!** 🎉

---

## Example: Before & After

### ❌ Before (Placeholder):
```typescript
publisherId: 'ca-pub-XXXXXXXXXXXXXXXX',
adSlots: {
  headerBanner: 'XXXXXXXXXX',
}
```

### ✅ After (Your Real IDs):
```typescript
publisherId: 'ca-pub-1234567890123456',
adSlots: {
  headerBanner: '9876543210',
}
```

---

## Need Help?

**Can't find Publisher ID?**
- AdSense → Account → Account information

**Don't have AdSense yet?**
- Apply at https://www.google.com/adsense/
- See `ADSENSE_INTEGRATION_GUIDE.md` for approval tips

**Ads not showing?**
- Make sure you're in production mode (`npm run build && npm start`)
- Check browser console for errors
- Disable ad-blocker for testing
- Wait 24 hours after setup (AdSense needs time to propagate)

---

## That's It!

Once you update these IDs, your ads will automatically appear on:
- ✅ All 35 calculator pages
- ✅ Homepage
- ✅ Mobile and desktop
- ✅ Optimized for maximum revenue

**Ready to make money?** Update those IDs and deploy! 🚀💰
