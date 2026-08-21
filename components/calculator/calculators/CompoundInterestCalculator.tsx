'use client';

import { useState } from 'react';
import { Currency } from '@/types/calculator';
import { Percent } from 'lucide-react';

interface CompoundInterestCalculatorProps {
  currency: Currency;
  calculatorName: string;
}

export default function CompoundInterestCalculator({ currency, calculatorName }: CompoundInterestCalculatorProps) {
  const [principal, setPrincipal] = useState('10000');
  const [interestRate, setInterestRate] = useState('8');
  const [timePeriod, setTimePeriod] = useState('5');
  const [compoundFrequency, setCompoundFrequency] = useState('12');
  const [result, setResult] = useState<{
    futureValue: number;
    totalInterest: number;
    principal: number;
  } | null>(null);

  const calculateCompoundInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interestRate);
    const t = parseFloat(timePeriod);
    const n = parseFloat(compoundFrequency);

    if (!p || !r || !t || !n || p <= 0 || r <= 0 || t <= 0 || n <= 0) {
      alert('Please enter valid positive numbers');
      return;
    }

    // A = P(1 + r/n)^(nt)
    const futureValue = p * Math.pow((1 + (r / 100) / n), n * t);
    const totalInterest = futureValue - p;

    setResult({
      futureValue: parseFloat(futureValue.toFixed(2)),
      totalInterest: parseFloat(totalInterest.toFixed(2)),
      principal: p
    });
  };

  const formatCurrency = (amount: number) => {
    return `${currency.symbol}${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const getFrequencyLabel = () => {
    switch (compoundFrequency) {
      case '1': return 'Annually';
      case '2': return 'Semi-Annually';
      case '4': return 'Quarterly';
      case '12': return 'Monthly';
      case '365': return 'Daily';
      default: return `${compoundFrequency} times per year`;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-soft p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg">
          <Percent className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Calculate Compound Interest</h3>
      </div>

      <div className="space-y-4">
        {/* Principal Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Principal Amount ({currency.code})
          </label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="input-field"
            placeholder="Enter principal amount"
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

        {/* Time Period */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Time Period (Years)
          </label>
          <input
            type="number"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
            className="input-field"
            placeholder="Enter years"
          />
        </div>

        {/* Compound Frequency */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Compounding Frequency
          </label>
          <select
            value={compoundFrequency}
            onChange={(e) => setCompoundFrequency(e.target.value)}
            className="input-field"
          >
            <option value="1">Annually (1/year)</option>
            <option value="2">Semi-Annually (2/year)</option>
            <option value="4">Quarterly (4/year)</option>
            <option value="12">Monthly (12/year)</option>
            <option value="365">Daily (365/year)</option>
          </select>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateCompoundInterest}
          className="w-full btn-primary bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
        >
          Calculate Returns
        </button>

        {/* Results */}
        {result && (
          <div className="mt-6 space-y-3 animate-fade-in">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Maturity Amount</div>
              <div className="text-2xl font-bold text-purple-600">
                {formatCurrency(result.futureValue)}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="text-xs text-gray-600 mb-1">Principal</div>
                <div className="text-lg font-semibold text-blue-700">
                  {formatCurrency(result.principal)}
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="text-xs text-gray-600 mb-1">Interest Earned</div>
                <div className="text-lg font-semibold text-green-700">
                  {formatCurrency(result.totalInterest)}
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Investment Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Initial Investment:</span>
                  <span className="font-medium text-gray-900">{formatCurrency(result.principal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Interest Rate:</span>
                  <span className="font-medium text-gray-900">{interestRate}% per annum</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium text-gray-900">{timePeriod} years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Compounding:</span>
                  <span className="font-medium text-gray-900">{getFrequencyLabel()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Interest Earned:</span>
                  <span className="font-medium text-green-600">{formatCurrency(result.totalInterest)}</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between">
                  <span className="text-gray-900 font-semibold">Maturity Value:</span>
                  <span className="font-bold text-gray-900">{formatCurrency(result.futureValue)}</span>
                </div>
              </div>
            </div>

            {/* ROI Percentage */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700">Return on Investment (ROI):</span>
                <span className="text-xl font-bold text-green-600">
                  {((result.totalInterest / result.principal) * 100).toFixed(2)}%
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
