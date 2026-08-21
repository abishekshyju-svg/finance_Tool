'use client';

import { useState } from 'react';
import { Currency } from '@/types/calculator';
import { TrendingUp } from 'lucide-react';

interface SIPCalculatorProps {
  currency: Currency;
  calculatorName: string;
}

export default function SIPCalculator({ currency, calculatorName }: SIPCalculatorProps) {
  const [monthlyInvestment, setMonthlyInvestment] = useState('5000');
  const [expectedReturn, setExpectedReturn] = useState('12');
  const [timePeriod, setTimePeriod] = useState('10');
  const [result, setResult] = useState<{
    investedAmount: number;
    estimatedReturns: number;
    totalValue: number;
  } | null>(null);

  const calculateSIP = () => {
    const monthly = parseFloat(monthlyInvestment);
    const rateOfReturn = parseFloat(expectedReturn);
    const years = parseFloat(timePeriod);

    if (!monthly || !rateOfReturn || !years || monthly <= 0 || rateOfReturn <= 0 || years <= 0) {
      alert('Please enter valid positive numbers');
      return;
    }

    const months = years * 12;
    const monthlyRate = rateOfReturn / 12 / 100;

    // FV = P × ({[1 + i]^n – 1} / i) × (1 + i)
    const futureValue = monthly * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    
    const investedAmount = monthly * months;
    const estimatedReturns = futureValue - investedAmount;

    setResult({
      investedAmount: parseFloat(investedAmount.toFixed(2)),
      estimatedReturns: parseFloat(estimatedReturns.toFixed(2)),
      totalValue: parseFloat(futureValue.toFixed(2))
    });
  };

  const formatCurrency = (amount: number) => {
    return `${currency.symbol}${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-soft p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-2 rounded-lg">
          <TrendingUp className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Calculate SIP Returns</h3>
      </div>

      <div className="space-y-4">
        {/* Monthly Investment */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Investment ({currency.code})
          </label>
          <input
            type="number"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(e.target.value)}
            className="input-field"
            placeholder="Enter monthly amount"
          />
        </div>

        {/* Expected Return Rate */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Expected Annual Return (%)
          </label>
          <input
            type="number"
            step="0.1"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(e.target.value)}
            className="input-field"
            placeholder="Expected return rate"
          />
          <p className="text-xs text-gray-500 mt-1">
            Typical range: 10-15% for equity funds, 6-8% for debt funds
          </p>
        </div>

        {/* Time Period */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Investment Period (Years)
          </label>
          <input
            type="number"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
            className="input-field"
            placeholder="Enter years"
          />
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateSIP}
          className="w-full btn-primary bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
        >
          Calculate Returns
        </button>

        {/* Results */}
        {result && (
          <div className="mt-6 space-y-3 animate-fade-in">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Maturity Value</div>
              <div className="text-2xl font-bold text-green-600">
                {formatCurrency(result.totalValue)}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="text-xs text-gray-600 mb-1">Invested Amount</div>
                <div className="text-lg font-semibold text-blue-700">
                  {formatCurrency(result.investedAmount)}
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="text-xs text-gray-600 mb-1">Wealth Gained</div>
                <div className="text-lg font-semibold text-green-700">
                  {formatCurrency(result.estimatedReturns)}
                </div>
              </div>
            </div>

            {/* Visual Breakdown */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Investment Breakdown</h4>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-gray-600 mb-2">
                  <span>Principal</span>
                  <span>Returns</span>
                </div>
                <div className="h-6 bg-gray-200 rounded-full overflow-hidden flex">
                  <div 
                    className="bg-blue-500 flex items-center justify-center text-xs text-white font-medium"
                    style={{ width: `${(result.investedAmount / result.totalValue) * 100}%` }}
                  >
                    {((result.investedAmount / result.totalValue) * 100).toFixed(0)}%
                  </div>
                  <div 
                    className="bg-green-500 flex items-center justify-center text-xs text-white font-medium"
                    style={{ width: `${(result.estimatedReturns / result.totalValue) * 100}%` }}
                  >
                    {((result.estimatedReturns / result.totalValue) * 100).toFixed(0)}%
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly Investment:</span>
                  <span className="font-medium text-gray-900">{formatCurrency(parseFloat(monthlyInvestment))}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Investment Period:</span>
                  <span className="font-medium text-gray-900">{timePeriod} years ({parseFloat(timePeriod) * 12} months)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Expected Return:</span>
                  <span className="font-medium text-gray-900">{expectedReturn}% per annum</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
