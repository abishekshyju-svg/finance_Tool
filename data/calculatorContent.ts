import { CalculatorContent } from '@/types/calculator';

const calculatorContentMap: Record<string, CalculatorContent> = {
  'emi-calculator': {
    introduction: 'An EMI (Equated Monthly Installment) Calculator helps you calculate the monthly payment amount for any loan. Whether it\'s a home loan, car loan, or personal loan, this calculator provides instant results showing your monthly EMI, total interest payable, and total payment amount. EMI is a fixed payment amount made by a borrower to a lender at a specified date each calendar month.',
    howToUse: [
      'Enter the total loan amount you wish to borrow',
      'Input the annual interest rate offered by the lender',
      'Select the loan tenure in months or years',
      'Choose your preferred currency from the dropdown',
      'Click Calculate to see your monthly EMI and payment breakdown'
    ],
    formula: 'EMI = [P x R x (1+R)^N] / [(1+R)^N-1]',
    formulaExplanation: 'Where P = Principal loan amount, R = Monthly interest rate (Annual Rate/12/100), N = Number of monthly installments',
    example: {
      inputs: [
        { label: 'Loan Amount', value: '$50,000' },
        { label: 'Interest Rate', value: '8.5% per annum' },
        { label: 'Loan Tenure', value: '5 years (60 months)' }
      ],
      calculation: 'EMI = [50,000 x 0.00708 x (1+0.00708)^60] / [(1+0.00708)^60-1]',
      result: 'Monthly EMI = $1,023.26 | Total Interest = $11,395.60 | Total Payment = $61,395.60'
    },
    benefits: [
      'Plan your monthly budget effectively by knowing exact EMI amounts',
      'Compare different loan offers by adjusting interest rates and tenure',
      'Understand the impact of prepayment on your loan',
      'Save time with instant calculations instead of manual computation',
      'Make informed borrowing decisions with complete cost transparency'
    ],
    faqs: [
      {
        question: 'What is EMI?',
        answer: 'EMI stands for Equated Monthly Installment. It is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs are used to pay off both interest and principal each month, so that over a specified number of years, the loan is paid off in full.'
      },
      {
        question: 'How is EMI calculated?',
        answer: 'EMI is calculated using the mathematical formula: EMI = [P x R x (1+R)^N] / [(1+R)^N-1], where P is the principal loan amount, R is the monthly interest rate, and N is the number of monthly installments.'
      },
      {
        question: 'Does EMI include both principal and interest?',
        answer: 'Yes, each EMI payment consists of two components: principal repayment and interest payment. In the initial months, the interest component is higher, but as you continue paying, the principal component increases and interest component decreases.'
      },
      {
        question: 'Can I prepay my loan to reduce EMI?',
        answer: 'Yes, most loans allow prepayment. You can either reduce your EMI amount while keeping the tenure same, or reduce the tenure while keeping EMI same. Prepayment helps you save on total interest paid.'
      }
    ],
    disclaimer: 'The EMI calculations provided are for informational purposes only and should not be considered as financial advice. Actual EMI amounts may vary based on lender policies, processing fees, and other charges. Please consult with your financial institution for exact figures.'
  },

  'sip-calculator': {
    introduction: 'A SIP (Systematic Investment Plan) Calculator helps you estimate the returns on your mutual fund investments. SIP is a disciplined investment approach where you invest a fixed amount regularly in mutual funds. This calculator shows you how your small, regular investments can grow into a substantial corpus over time through the power of compounding.',
    howToUse: [
      'Enter the monthly SIP amount you plan to invest',
      'Input the expected annual rate of return (typically 10-15% for equity funds)',
      'Select the investment period in years',
      'Choose your currency preference',
      'View the estimated maturity amount and wealth gained'
    ],
    formula: 'FV = P × ({[1 + i]^n – 1} / i) × (1 + i)',
    formulaExplanation: 'Where FV = Future Value, P = Monthly investment amount, i = Monthly rate of return (Annual rate/12/100), n = Number of monthly payments',
    example: {
      inputs: [
        { label: 'Monthly Investment', value: '$500' },
        { label: 'Expected Return', value: '12% per annum' },
        { label: 'Investment Period', value: '10 years (120 months)' }
      ],
      calculation: 'FV = 500 × ({[1 + 0.01]^120 – 1} / 0.01) × (1 + 0.01)',
      result: 'Invested Amount = $60,000 | Estimated Returns = $55,482 | Maturity Value = $115,482'
    },
    benefits: [
      'Start investing with small amounts - no need for large capital',
      'Benefit from rupee cost averaging to reduce market timing risk',
      'Visualize long-term wealth creation through compounding',
      'Plan for financial goals like retirement, education, or home purchase',
      'Understand the impact of staying invested for longer periods'
    ],
    faqs: [
      {
        question: 'What is SIP?',
        answer: 'SIP (Systematic Investment Plan) is a method of investing in mutual funds where you invest a fixed amount at regular intervals (monthly, quarterly, etc.) instead of investing a lump sum. It promotes disciplined investing and helps average out market volatility.'
      },
      {
        question: 'What is a good SIP return rate?',
        answer: 'Historical data shows that equity mutual funds have delivered 12-15% annual returns over the long term (10+ years). However, past performance doesn\'t guarantee future returns. Debt funds typically offer 6-8% returns with lower risk.'
      },
      {
        question: 'Can I change my SIP amount?',
        answer: 'Yes, most mutual fund companies allow you to increase or decrease your SIP amount. You can also start additional SIPs in the same fund or pause/stop existing SIPs as per your financial situation.'
      },
      {
        question: 'When should I start a SIP?',
        answer: 'The best time to start a SIP is now! SIP works on the principle of rupee cost averaging, so market timing is not crucial. The longer you stay invested, the better your returns due to compounding.'
      }
    ],
    disclaimer: 'SIP returns are subject to market risks and past performance is not indicative of future results. The calculations assume a constant rate of return which may not reflect actual market conditions. Please read the scheme documents carefully before investing.'
  },

  'home-loan-calculator': {
    introduction: 'A Home Loan Calculator (also known as Mortgage Calculator) helps you determine the monthly payment for your home purchase. It calculates your EMI based on the loan amount, interest rate, and loan tenure. This tool is essential for anyone planning to buy a house through bank financing, as it helps you understand the true cost of homeownership.',
    howToUse: [
      'Enter the total home loan amount you need',
      'Input the annual interest rate offered by your lender',
      'Select the loan repayment period (typically 15-30 years)',
      'Optionally include property tax and insurance costs',
      'View your monthly payment and total cost breakdown'
    ],
    formula: 'Monthly Payment = [P x R x (1+R)^N] / [(1+R)^N-1]',
    formulaExplanation: 'Where P = Principal amount, R = Monthly interest rate, N = Total number of monthly payments. Additional costs like property tax and insurance are added to get total monthly payment.',
    example: {
      inputs: [
        { label: 'Loan Amount', value: '$300,000' },
        { label: 'Interest Rate', value: '6.5% per annum' },
        { label: 'Loan Period', value: '25 years (300 months)' }
      ],
      calculation: 'Monthly EMI = [300,000 x 0.00542 x (1+0.00542)^300] / [(1+0.00542)^300-1]',
      result: 'Monthly Payment = $2,021.79 | Total Interest = $306,537 | Total Payment = $606,537'
    },
    benefits: [
      'Understand your monthly financial commitment before buying',
      'Compare offers from different lenders effectively',
      'Plan your down payment to reduce EMI burden',
      'Calculate how prepayment can save interest costs',
      'Make informed decisions about loan tenure and affordability'
    ],
    faqs: [
      {
        question: 'What is a good down payment for a home loan?',
        answer: 'Generally, a 20% down payment is recommended to avoid private mortgage insurance (PMI) and get better interest rates. However, many lenders offer loans with as little as 3-5% down payment, though this results in higher monthly payments and overall costs.'
      },
      {
        question: 'Should I choose a longer or shorter loan tenure?',
        answer: 'Shorter tenure means higher EMI but lower total interest paid. Longer tenure means lower EMI but significantly higher interest over the loan period. Choose based on your monthly budget and financial goals.'
      },
      {
        question: 'What is included in the monthly mortgage payment?',
        answer: 'A typical mortgage payment includes Principal, Interest, property Taxes, and Insurance (PITI). Some lenders may also include HOA fees if applicable. Our calculator can help you estimate all these components.'
      },
      {
        question: 'Can I refinance my home loan later?',
        answer: 'Yes, refinancing allows you to replace your current loan with a new one, potentially at a lower interest rate. This can reduce your monthly payment or allow you to pay off the loan faster. However, consider refinancing costs when making this decision.'
      }
    ],
    disclaimer: 'This calculator provides estimates only. Actual loan terms, monthly payments, and costs may vary based on lender requirements, credit score, property value, and market conditions. Additional costs like closing costs, origination fees, and insurance should be considered. Consult with a mortgage professional for accurate quotes.'
  },

  // Add a default/generic content for calculators without specific content
  'default': {
    introduction: 'This financial calculator helps you make informed decisions about your finances. Use this tool to calculate and plan your financial goals effectively.',
    howToUse: [
      'Enter the required values in the input fields',
      'Select your preferred currency',
      'Review the calculated results',
      'Adjust parameters to explore different scenarios'
    ],
    formula: 'Calculation formula varies based on the specific calculator type',
    formulaExplanation: 'Detailed formula explanation is provided based on standard financial calculation methods.',
    example: {
      inputs: [
        { label: 'Input Value', value: 'Sample value' }
      ],
      calculation: 'Sample calculation process',
      result: 'Sample result output'
    },
    benefits: [
      'Quick and accurate financial calculations',
      'Save time on manual computations',
      'Compare different financial scenarios',
      'Make data-driven financial decisions',
      'Free to use with no registration required'
    ],
    faqs: [
      {
        question: 'Is this calculator accurate?',
        answer: 'Yes, our calculator uses industry-standard formulas to provide accurate results. However, actual values may vary based on specific terms and conditions of your financial institution.'
      },
      {
        question: 'Is my data secure?',
        answer: 'Absolutely! All calculations are performed locally in your browser. We do not store, collect, or transmit any of your financial information.'
      },
      {
        question: 'Can I use this calculator on mobile?',
        answer: 'Yes, our calculator is fully responsive and works seamlessly on all devices including smartphones, tablets, and desktop computers.'
      }
    ],
    disclaimer: 'The calculations provided are for informational and educational purposes only. They should not be considered as financial, legal, or tax advice. Actual results may vary. Please consult with a qualified financial advisor for personalized guidance.'
  }
};

export function getCalculatorContent(slug: string): CalculatorContent {
  return calculatorContentMap[slug] || calculatorContentMap['default'];
}

// Export specific content for commonly used calculators
export { calculatorContentMap };
