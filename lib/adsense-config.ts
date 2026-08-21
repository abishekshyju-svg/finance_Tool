// Google AdSense Configuration
// Replace these values with your actual AdSense credentials

export const ADSENSE_CONFIG = {
  // Your AdSense Publisher ID (from Google AdSense dashboard)
  publisherId: 'ca-pub-XXXXXXXXXXXXXXXX',
  
  // Enable/disable ads globally
  enabled: process.env.NODE_ENV === 'production',
  
  // Ad slot IDs - Create these in your AdSense account for each placement
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
};

// Astra Ads Configuration (if using Astra theme ads)
export const ASTRA_ADS_CONFIG = {
  enabled: false, // Set to true when you have Astra ads setup
  
  // Astra ad positions
  positions: {
    header: {
      enabled: false,
      code: '', // Your Astra header ad code
    },
    sidebar: {
      enabled: false,
      code: '', // Your Astra sidebar ad code
    },
    footer: {
      enabled: false,
      code: '', // Your Astra footer ad code
    },
    content: {
      enabled: false,
      code: '', // Your Astra in-content ad code
    },
  },
};
