'use client';

import { useState } from 'react';
import { Currency } from '@/types/calculator';
import { DollarSign } from 'lucide-react';

interface SimpleInterestCalculatorProps {
  currency: Currency;
  calculatorName: string;
}

export default function SimpleInterestCalculator({ currency, calculatorName }: SimpleInterestCalculatorProps) {
  const [principal, setPrincipal] = useState('10000');
  const [interestRate, setInterestRate] = useState('5');
  const [timePeriod, setTimePeriod] = useState('3');
  const [result, setResult] = useState<{
    simpleInterest: number;
    totalAmount: number;
    principal: number;
  } | null>(null);

  const calculateSimpleInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interestRate);
    const t = parseFloat(timePeriod);

    if (!p || !r || !t || p <= 0 || r <= 0 || t <= 0) {
      alert('Please enter valid positive numbers');
      return;
    }

    // SI = (P × R × T) / 100
    const simpleInterest = (p * r * t) / 100;
    const totalAmount = p + simpleInterest;

    setResult({
      simpleInterest: parseFloat(simpleInterest.toFixed(2)),
      totalAmount: parseFloat(totalAmount.toFixed(2)),
      principal: p
    });
  };

  const formatCurrency = (amount: number) => {
    return `${currency.symbol}${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-soft p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-gradient-to-br from-orange-500 to-red-500 p-2 rounded-lg">
          <DollarSign className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Calculate Simple Interest</h3>
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

        {/* Calculate Button */}
        <button
          onClick={calculateSimpleInterest}
          className="w-full btn-primary bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
        >
          Calculate Interest
        </button>

        {/* Results */}
        {result && (
          <div className="mt-6 space-y-3 animate-fade-in">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Total Amount</div>
              <div className="text-2xl font-bold text-orange-600">
                {formatCurrency(result.totalAmount)}
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
                <div className="text-xs text-gray-600 mb-1">Simple Interest</div>
                <div className="text-lg font-semibold text-green-700">
                  {formatCurrency(result.simpleInterest)}
                </div>
              </div>
            </div>

            {/* Calculation Breakdown */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Calculation Breakdown</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Principal (P):</span>
                  <span className="font-medium text-gray-900">{formatCurrency(result.principal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Interest Rate (R):</span>
                  <span className="font-medium text-gray-900">{interestRate}% per annum</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time Period (T):</span>
                  <span className="font-medium text-gray-900">{timePeriod} years</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="bg-gray-50 rounded p-2 mb-2">
                    <code className="text-xs text-gray-700">
                      SI = (P × R × T) / 100
                    </code>
                  </div>
                  <div className="bg-gray-50 rounded p-2">
                    <code className="text-xs text-gray-700">
                      SI = ({principal} × {interestRate} × {timePeriod}) / 100 = {formatCurrency(result.simpleInterest)}
                    </code>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between">
                  <span className="text-gray-900 font-semibold">Total Amount (P + SI):</span>
                  <span className="font-bold text-gray-900">{formatCurrency(result.totalAmount)}</span>
                </div>
              </div>
            </div>

            {/* Interest Per Year */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700">Interest Per Year:</span>
                <span className="text-lg font-bold text-blue-600">
                  {formatCurrency(result.simpleInterest / parseFloat(timePeriod))}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
