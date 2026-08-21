'use client';

import { useState } from 'react';
import { Currency } from '@/types/calculator';
import { TrendingUp } from 'lucide-react';

interface InflationCalculatorProps {
  currency: Currency;
  calculatorName: string;
}

export default function InflationCalculator({ currency, calculatorName }: InflationCalculatorProps) {
  const [calculationType, setCalculationType] = useState<'future' | 'past'>('future');
  const [amount, setAmount] = useState('1000');
  const [years, setYears] = useState('10');
  const [inflationRate, setInflationRate] = useState('3');
  const [result, setResult] = useState<{
    startAmount: number;
    endAmount: number;
    totalInflation: number;
    purchasingPowerLoss: number;
    averageAnnualInflation: number;
  } | null>(null);

  const calculateInflation = () => {
    const amt = parseFloat(amount);
    const yrs = parseFloat(years);
    const rate = parseFloat(inflationRate);

    if (!amt || !yrs || !rate || amt <= 0 || yrs <= 0 || rate < 0) {
      alert('Please enter valid values');
      return;
    }

    let startAmount: number;
    let endAmount: number;

    if (calculationType === 'future') {
      // Calculate future value with inflation
      startAmount = amt;
      endAmount = amt * Math.pow(1 + rate / 100, yrs);
    } else {
      // Calculate past value (what amount was worth in the past)
      endAmount = amt;
      startAmount = amt / Math.pow(1 + rate / 100, yrs);
    }

    const totalInflation = ((endAmount - startAmount) / startAmount) * 100;
    const purchasingPowerLoss = ((startAmount - endAmount) / endAmount) * 100;

    setResult({
      startAmount: parseFloat(startAmount.toFixed(2)),
      endAmount: parseFloat(endAmount.toFixed(2)),
      totalInflation: parseFloat(totalInflation.toFixed(2)),
      purchasingPowerLoss: parseFloat(Math.abs(purchasingPowerLoss).toFixed(2)),
      averageAnnualInflation: rate
    });
  };

  const formatCurrency = (amount: number) => {
    return `${currency.symbol}${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-soft p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-2 rounded-lg">
          <TrendingUp className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Inflation Calculator</h3>
      </div>

      <div className="space-y-4">
        {/* Calculation Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Calculation Type
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setCalculationType('future');
                setResult(null);
              }}
              className={`px-4 py-3 rounded-lg font-medium transition-all ${
                calculationType === 'future'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Future Value
            </button>
            <button
              onClick={() => {
                setCalculationType('past');
                setResult(null);
              }}
              className={`px-4 py-3 rounded-lg font-medium transition-all ${
                calculationType === 'past'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Past Value
            </button>
          </div>
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {calculationType === 'future' ? 'Current Amount' : 'Future Amount'} ({currency.code})
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input-field"
            placeholder="Enter amount"
          />
        </div>

        {/* Years */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Years
          </label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="input-field"
            placeholder="Enter years"
          />
        </div>

        {/* Inflation Rate */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Average Annual Inflation Rate (%)
          </label>
          <input
            type="number"
            step="0.1"
            value={inflationRate}
            onChange={(e) => setInflationRate(e.target.value)}
            className="input-field"
            placeholder="e.g., 3"
          />
          <p className="text-xs text-gray-500 mt-1">
            Historical average: 2-4% in developed countries
          </p>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateInflation}
          className="w-full btn-primary bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
        >
          Calculate Impact
        </button>

        {/* Results */}
        {result && (
          <div className="mt-6 space-y-3 animate-fade-in">
            {calculationType === 'future' ? (
              <>
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Future Value ({years} years)</div>
                  <div className="text-2xl font-bold text-amber-600">
                    {formatCurrency(result.endAmount)}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    from {formatCurrency(result.startAmount)} today
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <div className="text-xs text-gray-600 mb-1">Total Inflation</div>
                    <div className="text-lg font-semibold text-red-700">
                      {result.totalInflation.toFixed(1)}%
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <div className="text-xs text-gray-600 mb-1">Power Loss</div>
                    <div className="text-lg font-semibold text-blue-700">
                      {result.purchasingPowerLoss.toFixed(1)}%
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">What This Means</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    To buy goods worth <strong>{formatCurrency(result.startAmount)}</strong> today, 
                    you will need <strong>{formatCurrency(result.endAmount)}</strong> in {years} years, 
                    assuming an average inflation rate of {inflationRate}% per year.
                  </p>
                  <div className="bg-gray-50 rounded p-3 text-xs text-gray-700">
                    Your purchasing power will decrease by approximately{' '}
                    <strong className="text-red-600">{result.purchasingPowerLoss.toFixed(1)}%</strong>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Equivalent Past Value ({years} years ago)</div>
                  <div className="text-2xl font-bold text-amber-600">
                    {formatCurrency(result.startAmount)}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    equals {formatCurrency(result.endAmount)} today
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">What This Means</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    What costs <strong>{formatCurrency(result.endAmount)}</strong> today 
                    would have cost only <strong>{formatCurrency(result.startAmount)}</strong> about {years} years ago, 
                    assuming an average inflation rate of {inflationRate}% per year.
                  </p>
                  <div className="bg-gray-50 rounded p-3 text-xs text-gray-700">
                    Prices have increased by approximately{' '}
                    <strong className="text-red-600">{result.totalInflation.toFixed(1)}%</strong>
                  </div>
                </div>
              </>
            )}

            {/* Year-by-Year Breakdown */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                {calculationType === 'future' ? 'Price Growth Over Time' : 'Historical Price Comparison'}
              </h4>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {Array.from({ length: Math.min(parseInt(years) + 1, 11) }, (_, i) => {
                  const year = i;
                  const value = calculationType === 'future'
                    ? result.startAmount * Math.pow(1 + parseFloat(inflationRate) / 100, year)
                    : result.endAmount / Math.pow(1 + parseFloat(inflationRate) / 100, parseInt(years) - year);
                  
                  return (
                    <div key={i} className="flex justify-between text-xs bg-white rounded p-2">
                      <span className="text-gray-600">
                        {calculationType === 'future' ? `Year ${year}` : `${parseInt(years) - year} years ago`}
                      </span>
                      <span className="font-medium text-gray-900">
                        {formatCurrency(value)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-blue-900 mb-2">💡 Protecting Against Inflation</h4>
              <ul className="text-xs text-blue-800 space-y-1">
                <li>• Invest in assets that typically outpace inflation (stocks, real estate)</li>
                <li>• Consider inflation-indexed bonds (TIPS, I-Bonds)</li>
                <li>• Avoid keeping large amounts in low-interest savings</li>
                <li>• Review and adjust your financial plan for inflation</li>
                <li>• Negotiate salary increases that match or exceed inflation</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
