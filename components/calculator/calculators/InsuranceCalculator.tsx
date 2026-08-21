'use client';

import { useState } from 'react';
import { Currency } from '@/types/calculator';
import { Shield } from 'lucide-react';

interface InsuranceCalculatorProps {
  currency: Currency;
  calculatorName: string;
}

export default function InsuranceCalculator({ currency, calculatorName }: InsuranceCalculatorProps) {
  const [insuranceType, setInsuranceType] = useState<'life' | 'health'>('life');
  const [age, setAge] = useState('30');
  const [annualIncome, setAnnualIncome] = useState('50000');
  const [dependents, setDependents] = useState('2');
  const [existingDebts, setExistingDebts] = useState('100000');
  const [existingCoverage, setExistingCoverage] = useState('0');
  const [result, setResult] = useState<{
    recommendedCoverage: number;
    coverageGap: number;
    estimatedPremium: number;
  } | null>(null);

  const calculateInsurance = () => {
    const income = parseFloat(annualIncome);
    const ageNum = parseInt(age);
    const deps = parseInt(dependents);
    const debts = parseFloat(existingDebts);
    const existing = parseFloat(existingCoverage);

    if (!income || !ageNum || ageNum <= 0 || income <= 0) {
      alert('Please enter valid values');
      return;
    }

    let recommendedCoverage: number;
    let estimatedPremium: number;

    if (insuranceType === 'life') {
      // Life insurance: 10-15 times annual income + debts
      recommendedCoverage = (income * 12) + debts + (deps * 50000);
      // Rough premium estimate (0.5-1% of sum assured per year)
      estimatedPremium = (recommendedCoverage * 0.007) * (1 + (ageNum - 25) * 0.02);
    } else {
      // Health insurance: Based on age and family size
      recommendedCoverage = 100000 * (1 + deps) * (1 + (ageNum - 30) * 0.02);
      estimatedPremium = recommendedCoverage * 0.03 * (1 + (ageNum - 25) * 0.03);
    }

    const coverageGap = Math.max(0, recommendedCoverage - existing);

    setResult({
      recommendedCoverage: parseFloat(recommendedCoverage.toFixed(2)),
      coverageGap: parseFloat(coverageGap.toFixed(2)),
      estimatedPremium: parseFloat(estimatedPremium.toFixed(2))
    });
  };

  const formatCurrency = (amount: number) => {
    return `${currency.symbol}${amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-soft p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-2 rounded-lg">
          <Shield className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Calculate Insurance Need</h3>
      </div>

      <div className="space-y-4">
        {/* Insurance Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Insurance Type
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setInsuranceType('life')}
              className={`px-4 py-3 rounded-lg font-medium transition-all ${
                insuranceType === 'life'
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Life Insurance
            </button>
            <button
              onClick={() => setInsuranceType('health')}
              className={`px-4 py-3 rounded-lg font-medium transition-all ${
                insuranceType === 'health'
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Health Insurance
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Age
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="input-field"
              placeholder="Your age"
            />
          </div>

          {/* Dependents */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Dependents
            </label>
            <input
              type="number"
              value={dependents}
              onChange={(e) => setDependents(e.target.value)}
              className="input-field"
              placeholder="Number"
            />
          </div>
        </div>

        {/* Annual Income */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Annual Income ({currency.code})
          </label>
          <input
            type="number"
            value={annualIncome}
            onChange={(e) => setAnnualIncome(e.target.value)}
            className="input-field"
            placeholder="Your annual income"
          />
        </div>

        {insuranceType === 'life' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Existing Debts ({currency.code})
            </label>
            <input
              type="number"
              value={existingDebts}
              onChange={(e) => setExistingDebts(e.target.value)}
              className="input-field"
              placeholder="Total loans/debts"
            />
          </div>
        )}

        {/* Existing Coverage */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Existing Coverage ({currency.code})
          </label>
          <input
            type="number"
            value={existingCoverage}
            onChange={(e) => setExistingCoverage(e.target.value)}
            className="input-field"
            placeholder="Current insurance"
          />
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateInsurance}
          className="w-full btn-primary bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
        >
          Calculate Insurance Need
        </button>

        {/* Results */}
        {result && (
          <div className="mt-6 space-y-3 animate-fade-in">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Recommended Coverage</div>
              <div className="text-2xl font-bold text-blue-600">
                {formatCurrency(result.recommendedCoverage)}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                <div className="text-xs text-gray-600 mb-1">Coverage Gap</div>
                <div className="text-lg font-semibold text-orange-700">
                  {formatCurrency(result.coverageGap)}
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="text-xs text-gray-600 mb-1">Est. Premium/Year</div>
                <div className="text-lg font-semibold text-green-700">
                  {formatCurrency(result.estimatedPremium)}
                </div>
              </div>
            </div>

            {/* Analysis */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Insurance Analysis</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Recommended Coverage:</span>
                  <span className="font-medium text-gray-900">{formatCurrency(result.recommendedCoverage)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Existing Coverage:</span>
                  <span className="font-medium text-gray-900">{formatCurrency(parseFloat(existingCoverage))}</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-2">
                  <span className="text-gray-900 font-semibold">Coverage Gap:</span>
                  <span className="font-bold text-orange-600">{formatCurrency(result.coverageGap)}</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                  <span className="text-gray-600">Estimated Annual Premium:</span>
                  <span className="font-medium text-green-600">{formatCurrency(result.estimatedPremium)}</span>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-blue-900 mb-2">💡 Recommendations</h4>
              <ul className="text-xs text-blue-800 space-y-1">
                {insuranceType === 'life' ? (
                  <>
                    <li>• Term insurance is the most cost-effective life coverage</li>
                    <li>• Review coverage every 3-5 years or after major life events</li>
                    <li>• Consider inflation when determining coverage amount</li>
                    <li>• Nominate beneficiaries and keep documents safe</li>
                  </>
                ) : (
                  <>
                    <li>• Choose a plan with adequate hospitalization coverage</li>
                    <li>• Consider family floater plans for cost savings</li>
                    <li>• Check for pre-existing disease coverage</li>
                    <li>• Review and increase coverage as you age</li>
                  </>
                )}
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-xs text-yellow-800">
              <strong>Disclaimer:</strong> This is an estimate only. Actual premiums vary based on health, 
              lifestyle, policy terms, and insurer. Consult an insurance advisor for accurate quotes.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
