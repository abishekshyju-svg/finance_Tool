'use client';

import { Calculator, Currency } from '@/types/calculator';
import EMICalculator from './calculators/EMICalculator';
import SIPCalculator from './calculators/SIPCalculator';
import HomeLoanCalculator from './calculators/HomeLoanCalculator';
import CompoundInterestCalculator from './calculators/CompoundInterestCalculator';
import SimpleInterestCalculator from './calculators/SimpleInterestCalculator';
import IncomeTaxCalculator from './calculators/IncomeTaxCalculator';
import GSTCalculator from './calculators/GSTCalculator';
import RetirementCalculator from './calculators/RetirementCalculator';
import InsuranceCalculator from './calculators/InsuranceCalculator';
import BusinessCalculator from './calculators/BusinessCalculator';
import BudgetPlannerCalculator from './calculators/BudgetPlannerCalculator';
import CurrencyConverterCalculator from './calculators/CurrencyConverterCalculator';
import InflationCalculator from './calculators/InflationCalculator';
import NetWorthCalculator from './calculators/NetWorthCalculator';
import GenericCalculator from './calculators/GenericCalculator';

interface CalculatorWidgetProps {
  calculator: Calculator;
  currency: Currency;
}

export default function CalculatorWidget({ calculator, currency }: CalculatorWidgetProps) {
  // Route to specific calculator component based on slug
  switch (calculator.slug) {
    case 'emi-calculator':
    case 'personal-loan-calculator':
    case 'car-loan-calculator':
    case 'bike-loan-calculator':
    case 'education-loan-calculator':
    case 'debt-payoff-calculator':
      return <EMICalculator currency={currency} calculatorName={calculator.name} />;
    
    case 'sip-calculator':
    case 'mutual-fund-calculator':
    case 'savings-calculator':
      return <SIPCalculator currency={currency} calculatorName={calculator.name} />;
    
    case 'home-loan-calculator':
    case 'mortgage-calculator':
      return <HomeLoanCalculator currency={currency} calculatorName={calculator.name} />;
    
    case 'compound-interest-calculator':
    case 'fd-calculator':
    case 'rd-calculator':
    case 'ppf-calculator':
    case 'roi-calculator':
      return <CompoundInterestCalculator currency={currency} calculatorName={calculator.name} />;
    
    case 'simple-interest-calculator':
      return <SimpleInterestCalculator currency={currency} calculatorName={calculator.name} />;
    
    case 'income-tax-calculator':
      return <IncomeTaxCalculator currency={currency} calculatorName={calculator.name} />;
    
    case 'gst-calculator':
    case 'vat-calculator':
    case 'sales-tax-calculator':
      return <GSTCalculator currency={currency} calculatorName={calculator.name} />;
    
    case 'retirement-calculator':
    case 'pension-calculator':
    case 'epf-calculator':
      return <RetirementCalculator currency={currency} calculatorName={calculator.name} />;
    
    case 'life-insurance-calculator':
    case 'health-insurance-calculator':
    case 'travel-insurance-calculator':
    case 'insurance-calculator':
      return <InsuranceCalculator currency={currency} calculatorName={calculator.name} />;
    
    case 'profit-margin-calculator':
    case 'break-even-calculator':
    case 'discount-calculator':
      return <BusinessCalculator currency={currency} calculatorName={calculator.name} />;
    
    case 'budget-planner':
      return <BudgetPlannerCalculator currency={currency} calculatorName={calculator.name} />;
    
    case 'currency-converter':
      return <CurrencyConverterCalculator currency={currency} calculatorName={calculator.name} />;
    
    case 'inflation-calculator':
      return <InflationCalculator currency={currency} calculatorName={calculator.name} />;
    
    case 'net-worth-calculator':
      return <NetWorthCalculator currency={currency} calculatorName={calculator.name} />;
    
    default:
      return <GenericCalculator calculator={calculator} currency={currency} />;
  }
}
