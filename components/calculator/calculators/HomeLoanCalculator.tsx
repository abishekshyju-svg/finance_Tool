'use client';

import { useState } from 'react';
import { Currency } from '@/types/calculator';
import { Home } from 'lucide-react';

interface HomeLoanCalculatorProps {
  currency: Currency;
  calculatorName: string;
}

export default function HomeLoanCalculator({ currency, calculatorName }: HomeLoanCalculatorProps) {
  const [homePrice, setHomePrice] = useState('300000');
  const [downPayment, setDownPayment] = useState('60000');
  const [interestRate, setInterestRate] = useState('6.5');
  const [loanTenure, setLoanTenure] = useState('25');
  const [propertyTax, setPropertyTax] = useState('200');
  const [insurance, setInsurance] = useState('100');
  const [result, setResult] = useState<{
    loanAmount: number;
    monthlyEMI: number;
    monthlyTax: number;
    monthlyInsurance: number;
    totalMonthly: number;
    totalInterest: number;
    totalPayment: number;
  } | null>(null);

  const calculateHomeLoan = () => {
    const price = parseFloat(homePrice);
    const down = parseFloat(downPayment);
    const rate = parseFloat(interestRate);
    const years = parseFloat(loanTenure);
    const tax = parseFloat(propertyTax) || 0;
    const ins = parseFloat(insurance) || 0;

    if (!price || !rate || !years || price <= 0 || rate <= 0 || years <= 0 || down < 0) {
      alert('Please enter valid numbers');
      return;
    }

    if (down >= price) {
      alert('Down payment cannot be greater than or equal to home price');
      return;
    }

    const loanAmount = price - down;
    const months = years * 12;
    const monthlyRate = rate / 12 / 100;

    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                 (Math.pow(1 + monthlyRate, months) - 1);
    
    const totalPayment = emi * months;
    const totalInterest = totalPayment - loanAmount;
    const totalMonthly = emi + tax + ins;

    setResult({
      loanAmount: parseFloat(loanAmount.toFixed(2)),
      monthlyEMI: parseFloat(emi.toFixed(2)),
      monthlyTax: tax,
      monthlyInsurance: ins,
      totalMonthly: parseFloat(totalMonthly.toFixed(2)),
      totalInterest: parseFloat(totalInterest.toFixed(2)),
      totalPayment: parseFloat(totalPayment.toFixed(2))
    });
  };

  const formatCurrency = (amount: number) => {
    return `${currency.symbol}${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const calculateDownPaymentPercent = () => {
    if (homePrice && downPayment) {
      return ((parseFloat(downPayment) / parseFloat(homePrice)) * 100).toFixed(1);
    }
    return '0';
  };

  return (
    <div className="bg-white rounded-xl shadow-soft p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-2 rounded-lg">
          <Home className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Calculate Home Loan</h3>
      </div>

      <div className="space-y-4">
        {/* Home Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Home Price ({currency.code})
          </label>
          <input
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(e.target.value)}
            className="input-field"
            placeholder="Enter home price"
          />
        </div>

        {/* Down Payment */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Down Payment ({currency.code})
            {homePrice && downPayment && (
              <span className="ml-2 text-xs text-primary-600">
                ({calculateDownPaymentPercent()}% of home price)
              </span>
            )}
          </label>
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
            className="input-field"
            placeholder="Enter down payment"
          />
        </div>

        {/* Interest Rate */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Annual Interest Rate (%)
          </label>
          <input
            type="number"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="input-field"
            placeholder="Enter interest rate"
          />
        </div>

        {/* Loan Tenure */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Loan Tenure (Years)
          </label>
          <input
            type="number"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            className="input-field"
            placeholder="Enter years"
          />
        </div>

        {/* Optional: Property Tax */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Property Tax (Optional)
          </label>
          <input
            type="number"
            value={propertyTax}
            onChange={(e) => setPropertyTax(e.target.value)}
            className="input-field"
            placeholder="Enter monthly property tax"
          />
        </div>

        {/* Optional: Insurance */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Insurance (Optional)
          </label>
          <input
            type="number"
            value={insurance}
            onChange={(e) => setInsurance(e.target.value)}
            className="input-field"
            placeholder="Enter monthly insurance"
          />
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateHomeLoan}
          className="w-full btn-primary bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
        >
          Calculate Home Loan
        </button>

        {/* Results */}
        {result && (
          <div className="mt-6 space-y-3 animate-fade-in">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Total Monthly Payment</div>
              <div className="text-2xl font-bold text-blue-600">
                {formatCurrency(result.totalMonthly)}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Including EMI, tax, and insurance
              </div>
            </div>

            {/* Monthly Breakdown */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Monthly Payment Breakdown</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Principal & Interest (EMI):</span>
                  <span className="font-medium text-gray-900">{formatCurrency(result.monthlyEMI)}</span>
                </div>
                {result.monthlyTax > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Property Tax:</span>
                    <span className="font-medium text-gray-900">{formatCurrency(result.monthlyTax)}</span>
                  </div>
                )}
                {result.monthlyInsurance > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Insurance:</span>
                    <span className="font-medium text-gray-900">{formatCurrency(result.monthlyInsurance)}</span>
                  </div>
                )}
                <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between">
                  <span className="text-gray-900 font-semibold">Total Monthly:</span>
                  <span className="font-bold text-gray-900">{formatCurrency(result.totalMonthly)}</span>
                </div>
              </div>
            </div>

            {/* Loan Summary */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-xs text-gray-600 mb-1">Loan Amount</div>
                <div className="text-lg font-semibold text-gray-900">
                  {formatCurrency(result.loanAmount)}
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-xs text-gray-600 mb-1">Total Interest</div>
                <div className="text-lg font-semibold text-red-600">
                  {formatCurrency(result.totalInterest)}
                </div>
              </div>
            </div>

            {/* Total Payment Summary */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Total Payment Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Down Payment:</span>
                  <span className="font-medium text-gray-900">{formatCurrency(parseFloat(downPayment))}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Loan Amount:</span>
                  <span className="font-medium text-gray-900">{formatCurrency(result.loanAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Interest Paid:</span>
                  <span className="font-medium text-red-600">{formatCurrency(result.totalInterest)}</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between">
                  <span className="text-gray-900 font-semibold">Total Cost of Home:</span>
                  <span className="font-bold text-gray-900">
                    {formatCurrency(parseFloat(downPayment) + result.totalPayment)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
