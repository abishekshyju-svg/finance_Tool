'use client';

import { useState } from 'react';
import { Currency } from '@/types/calculator';
import { User } from 'lucide-react';

interface RetirementCalculatorProps {
  currency: Currency;
  calculatorName: string;
}

export default function RetirementCalculator({ currency, calculatorName }: RetirementCalculatorProps) {
  const [currentAge, setCurrentAge] = useState('30');
  const [retirementAge, setRetirementAge] = useState('60');
  const [monthlyExpenses, setMonthlyExpenses] = useState('3000');
  const [currentSavings, setCurrentSavings] = useState('50000');
  const [monthlySavings, setMonthlySavings] = useState('500');
  const [expectedReturn, setExpectedReturn] = useState('8');
  const [inflationRate, setInflationRate] = useState('3');
  const [result, setResult] = useState<{
    yearsToRetirement: number;
    futureMonthlyExpense: number;
    requiredCorpus: number;
    totalSavings: number;
    shortfall: number;
  } | null>(null);

  const calculateRetirement = () => {
    const age = parseInt(currentAge);
    const retAge = parseInt(retirementAge);
    const expenses = parseFloat(monthlyExpenses);
    const savings = parseFloat(currentSavings);
    const monthly = parseFloat(monthlySavings);
    const returnRate = parseFloat(expectedReturn);
    const inflation = parseFloat(inflationRate);

    if (!age || !retAge || !expenses || age >= retAge || returnRate <= 0) {
      alert('Please enter valid values');
      return;
    }

    const yearsToRetirement = retAge - age;
    
    // Future monthly expense considering inflation
    const futureMonthlyExpense = expenses * Math.pow(1 + inflation / 100, yearsToRetirement);
    
    // Required corpus (assuming 25 years post-retirement)
    const requiredCorpus = futureMonthlyExpense * 12 * 25;
    
    // Future value of current savings
    const futureSavings = savings * Math.pow(1 + returnRate / 100, yearsToRetirement);
    
    // Future value of monthly savings (SIP)
    const months = yearsToRetirement * 12;
    const monthlyRate = returnRate / 12 / 100;
    const futureMonthlySavings = monthly * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    
    const totalSavings = futureSavings + futureMonthlySavings;
    const shortfall = requiredCorpus - totalSavings;

    setResult({
      yearsToRetirement,
      futureMonthlyExpense: parseFloat(futureMonthlyExpense.toFixed(2)),
      requiredCorpus: parseFloat(requiredCorpus.toFixed(2)),
      totalSavings: parseFloat(totalSavings.toFixed(2)),
      shortfall: parseFloat(shortfall.toFixed(2))
    });
  };

  const formatCurrency = (amount: number) => {
    return `${currency.symbol}${amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-soft p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-gradient-to-br from-purple-500 to-indigo-500 p-2 rounded-lg">
          <User className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Plan Your Retirement</h3>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Current Age */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Age
            </label>
            <input
              type="number"
              value={currentAge}
              onChange={(e) => setCurrentAge(e.target.value)}
              className="input-field"
              placeholder="Your age"
            />
          </div>

          {/* Retirement Age */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Retirement Age
            </label>
            <input
              type="number"
              value={retirementAge}
              onChange={(e) => setRetirementAge(e.target.value)}
              className="input-field"
              placeholder="Retire at"
            />
          </div>
        </div>

        {/* Monthly Expenses */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Monthly Expenses ({currency.code})
          </label>
          <input
            type="number"
            value={monthlyExpenses}
            onChange={(e) => setMonthlyExpenses(e.target.value)}
            className="input-field"
            placeholder="Monthly expenses"
          />
        </div>

        {/* Current Savings */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Savings ({currency.code})
          </label>
          <input
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(e.target.value)}
            className="input-field"
            placeholder="Total savings"
          />
        </div>

        {/* Monthly Savings */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Savings ({currency.code})
          </label>
          <input
            type="number"
            value={monthlySavings}
            onChange={(e) => setMonthlySavings(e.target.value)}
            className="input-field"
            placeholder="Save per month"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Expected Return */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Return (%)
            </label>
            <input
              type="number"
              step="0.1"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(e.target.value)}
              className="input-field"
              placeholder="8"
            />
          </div>

          {/* Inflation Rate */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Inflation Rate (%)
            </label>
            <input
              type="number"
              step="0.1"
              value={inflationRate}
              onChange={(e) => setInflationRate(e.target.value)}
              className="input-field"
              placeholder="3"
            />
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateRetirement}
          className="w-full btn-primary bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
        >
          Calculate Retirement Plan
        </button>

        {/* Results */}
        {result && (
          <div className="mt-6 space-y-3 animate-fade-in">
            <div className={`rounded-lg p-4 border-2 ${
              result.shortfall > 0 
                ? 'bg-red-50 border-red-200' 
                : 'bg-green-50 border-green-200'
            }`}>
              <div className="text-sm text-gray-600 mb-1">
                {result.shortfall > 0 ? 'Retirement Shortfall' : 'Retirement Surplus'}
              </div>
              <div className={`text-2xl font-bold ${
                result.shortfall > 0 ? 'text-red-600' : 'text-green-600'
              }`}>
                {formatCurrency(Math.abs(result.shortfall))}
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="text-xs text-gray-600 mb-1">Years to Retirement</div>
                <div className="text-lg font-semibold text-blue-700">
                  {result.yearsToRetirement} years
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <div className="text-xs text-gray-600 mb-1">Required Corpus</div>
                <div className="text-lg font-semibold text-purple-700">
                  {formatCurrency(result.requiredCorpus)}
                </div>
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Retirement Analysis</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Monthly Expenses:</span>
                  <span className="font-medium text-gray-900">{formatCurrency(parseFloat(monthlyExpenses))}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Future Monthly Expenses:</span>
                  <span className="font-medium text-gray-900">{formatCurrency(result.futureMonthlyExpense)}</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-2">
                  <span className="text-gray-600">Required Retirement Corpus:</span>
                  <span className="font-medium text-gray-900">{formatCurrency(result.requiredCorpus)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Expected Savings at Retirement:</span>
                  <span className="font-medium text-blue-600">{formatCurrency(result.totalSavings)}</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-2">
                  <span className={`font-semibold ${result.shortfall > 0 ? 'text-red-900' : 'text-green-900'}`}>
                    {result.shortfall > 0 ? 'Shortfall:' : 'Surplus:'}
                  </span>
                  <span className={`font-bold ${result.shortfall > 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {formatCurrency(Math.abs(result.shortfall))}
                  </span>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            {result.shortfall > 0 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-yellow-900 mb-2">💡 Recommendations</h4>
                <ul className="text-xs text-yellow-800 space-y-1">
                  <li>• Increase monthly savings to {formatCurrency(parseFloat(monthlySavings) + result.shortfall / (result.yearsToRetirement * 12))}</li>
                  <li>• Consider investing in higher return instruments (with appropriate risk)</li>
                  <li>• Plan to work {Math.ceil(result.shortfall / (parseFloat(monthlySavings) * 12))} more years</li>
                  <li>• Review and reduce post-retirement expenses</li>
                </ul>
              </div>
            )}

            {result.shortfall <= 0 && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-green-800">
                <p>Your money&apos;s growth over time</p>;
                Keep maintaining your savings plan and review it annually.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
