'use client';

import { useState } from 'react';
import { Currency } from '@/types/calculator';
import { Calculator, TrendingDown } from 'lucide-react';

interface EMICalculatorProps {
  currency: Currency;
  calculatorName: string;
}

export default function EMICalculator({ currency, calculatorName }: EMICalculatorProps) {
  const [loanAmount, setLoanAmount] = useState('50000');
  const [interestRate, setInterestRate] = useState('8.5');
  const [loanTenure, setLoanTenure] = useState('60');
  const [tenureType, setTenureType] = useState<'months' | 'years'>('months');
  const [result, setResult] = useState<{
    emi: number;
    totalInterest: number;
    totalPayment: number;
  } | null>(null);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    let months = parseInt(loanTenure);

    if (tenureType === 'years') {
      months = months * 12;
    }

    if (!principal || !annualRate || !months || principal <= 0 || annualRate <= 0 || months <= 0) {
      alert('Please enter valid positive numbers');
      return;
    }

    const monthlyRate = annualRate / 12 / 100;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                 (Math.pow(1 + monthlyRate, months) - 1);
    
    const totalPayment = emi * months;
    const totalInterest = totalPayment - principal;

    setResult({
      emi: parseFloat(emi.toFixed(2)),
      totalInterest: parseFloat(totalInterest.toFixed(2)),
      totalPayment: parseFloat(totalPayment.toFixed(2))
    });
  };

  const formatCurrency = (amount: number) => {
    return `${currency.symbol}${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-soft p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-2 rounded-lg">
          <Calculator className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Calculate EMI</h3>
      </div>

      <div className="space-y-4">
        {/* Loan Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Loan Amount ({currency.code})
          </label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="input-field"
            placeholder="Enter loan amount"
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
            Loan Tenure
          </label>
          <div className="flex space-x-2">
            <input
              type="number"
              value={loanTenure}
              onChange={(e) => setLoanTenure(e.target.value)}
              className="input-field flex-1"
              placeholder="Enter tenure"
            />
            <select
              value={tenureType}
              onChange={(e) => setTenureType(e.target.value as 'months' | 'years')}
              className="input-field w-32"
            >
              <option value="months">Months</option>
              <option value="years">Years</option>
            </select>
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateEMI}
          className="w-full btn-primary"
        >
          Calculate EMI
        </button>

        {/* Results */}
        {result && (
          <div className="mt-6 space-y-3 animate-fade-in">
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Monthly EMI</div>
              <div className="text-2xl font-bold text-primary-600">
                {formatCurrency(result.emi)}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-xs text-gray-600 mb-1">Total Interest</div>
                <div className="text-lg font-semibold text-gray-900">
                  {formatCurrency(result.totalInterest)}
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="text-xs text-gray-600 mb-1">Total Payment</div>
                <div className="text-lg font-semibold text-gray-900">
                  {formatCurrency(result.totalPayment)}
                </div>
              </div>
            </div>

            {/* Breakdown */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Payment Breakdown</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Principal Amount:</span>
                  <span className="font-medium text-gray-900">{formatCurrency(parseFloat(loanAmount))}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Interest:</span>
                  <span className="font-medium text-red-600">{formatCurrency(result.totalInterest)}</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between">
                  <span className="text-gray-900 font-semibold">Total Payable:</span>
                  <span className="font-bold text-gray-900">{formatCurrency(result.totalPayment)}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
