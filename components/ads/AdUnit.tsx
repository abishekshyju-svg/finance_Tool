'use client';

import GoogleAdsense from './GoogleAdsense';

// Ad unit types for different placements
export type AdUnitType = 
  | 'header-banner'      // Top banner (728x90 or responsive)
  | 'sidebar'            // Sidebar ad (300x250 or 300x600)
  | 'in-article'         // In-content ad (responsive)
  | 'footer-banner'      // Footer banner (728x90 or responsive)
  | 'mobile-banner'      // Mobile banner (320x50 or 320x100)
  | 'calculator-top'     // Above calculator
  | 'calculator-bottom'  // Below calculator results
  | 'matched-content';   // Related content ads

interface AdUnitProps {
  type: AdUnitType;
  className?: string;
}

// IMPORTANT: Replace these with your actual AdSense credentials
const AD_CLIENT = 'ca-pub-XXXXXXXXXXXXXXXX'; // Replace with your AdSense publisher ID

// Ad slot IDs - You need to create these in your AdSense account
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

export default function AdUnit({ type, className = '' }: AdUnitProps) {
  // Don't show ads in development
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center ${className}`}>
        <p className="text-gray-600 text-sm font-medium">Ad Placeholder</p>
        <p className="text-gray-500 text-xs mt-1">{type}</p>
      </div>
    );
  }

  const adSlot = AD_SLOTS[type];

  // Responsive styles based on ad type
  const getAdStyles = (): React.CSSProperties => {
    switch (type) {
      case 'header-banner':
      case 'footer-banner':
        return { display: 'block', minHeight: '90px' };
      case 'sidebar':
        return { display: 'block', minHeight: '250px', minWidth: '300px' };
      case 'mobile-banner':
        return { display: 'block', minHeight: '50px' };
      case 'in-article':
      case 'calculator-top':
      case 'calculator-bottom':
        return { display: 'block', minHeight: '250px' };
      case 'matched-content':
        return { display: 'block', minHeight: '300px' };
      default:
        return { display: 'block' };
    }
  };

  return (
    <div className={`ad-container ${className}`}>
      <GoogleAdsense
        adClient={AD_CLIENT}
        adSlot={adSlot}
        adFormat="auto"
        fullWidthResponsive={true}
        style={getAdStyles()}
      />
    </div>
  );
}
