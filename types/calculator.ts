export interface Calculator {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: CalculatorCategory;
  icon: string;
  isRegionSpecific?: boolean;
  region?: string;
  featured?: boolean;
}

export type CalculatorCategory = 
  | 'loan'
  | 'investment'
  | 'tax'
  | 'insurance'
  | 'retirement'
  | 'business'
  | 'general'
  | 'regional';

export interface Currency {
  code: string;
  name: string;
  symbol: string;
  country: string;
}

export interface CalculatorContent {
  introduction: string;
  howToUse: string[];
  formula: string;
  formulaExplanation: string;
  example: {
    inputs: { label: string; value: string }[];
    calculation: string;
    result: string;
  };
  benefits: string[];
  faqs: { question: string; answer: string }[];
  disclaimer: string;
}
