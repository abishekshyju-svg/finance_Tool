'use client';

import { useState } from 'react';
import { Currency } from '@/types/calculator';
import { Receipt } from 'lucide-react';

interface IncomeTaxCalculatorProps {
  currency: Currency;
  calculatorName: string;
}

export default function IncomeTaxCalculator({ currency, calculatorName }: IncomeTaxCalculatorProps) {
  const [annualIncome, setAnnualIncome] = useState('50000');
  const [deductions, setDeductions] = useState('10000');
  const [taxRegime, setTaxRegime] = useState<'old' | 'new'>('new');
  const [result, setResult] = useState<{
    taxableIncome: number;
    totalTax: number;
    netIncome: number;
    effectiveRate: number;
  } | null>(null);

  const calculateTax = () => {
    const income = parseFloat(annualIncome);
    const deduct = taxRegime === 'old' ? parseFloat(deductions) : 0;

    if (!income || income <= 0) {
      alert('Please enter valid income');
      return;
    }

    const taxableIncome = income - deduct;
    let tax = 0;

    // Simplified progressive tax brackets (adjust based on country)
    if (taxableIncome <= 10000) {
      tax = 0;
    } else if (taxableIncome <= 40000) {
      tax = (taxableIncome - 10000) * 0.10;
    } else if (taxableIncome <= 85000) {
      tax = 3000 + (taxableIncome - 40000) * 0.20;
    } else if (taxableIncome <= 160000) {
      tax = 12000 + (taxableIncome - 85000) * 0.30;
    } else {
      tax = 34500 + (taxableIncome - 160000) * 0.35;
    }

    const netIncome = income - tax;
    const effectiveRate = (tax / income) * 100;

    setResult({
      taxableIncome: parseFloat(taxableIncome.toFixed(2)),
      totalTax: parseFloat(tax.toFixed(2)),
      netIncome: parseFloat(netIncome.toFixed(2)),
      effectiveRate: parseFloat(effectiveRate.toFixed(2))
    });
  };

  const formatCurrency = (amount: number) => {
    return `${currency.symbol}${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-soft p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-2 rounded-lg">
          <Receipt className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Calculate Income Tax</h3>
      </div>

      <div className="space-y-4">
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
            placeholder="Enter annual income"
          />
        </div>

        {/* Tax Regime */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tax Regime
          </label>
          <select
            value={taxRegime}
            onChange={(e) => setTaxRegime(e.target.value as 'old' | 'new')}
            className="input-field"
          >
            <option value="new">New Regime (No Deductions)</option>
            <option value="old">Old Regime (With Deductions)</option>
          </select>
        </div>

        {/* Deductions */}
        {taxRegime === 'old' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Total Deductions ({currency.code})
            </label>
            <input
              type="number"
              value={deductions}
              onChange={(e) => setDeductions(e.target.value)}
              className="input-field"
              placeholder="Enter total deductions"
            />
            <p className="text-xs text-gray-500 mt-1">
              Include: 80C, 80D, HRA, etc.
            </p>
          </div>
        )}

        {/* Calculate Button */}
        <button
          onClick={calculateTax}
          className="w-full btn-primary bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
        >
          Calculate Tax
        </button>

        {/* Results */}
        {result && (
          <div className="mt-6 space-y-3 animate-fade-in">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Total Tax Payable</div>
              <div className="text-2xl font-bold text-indigo-600">
                {formatCurrency(result.totalTax)}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="text-xs text-gray-600 mb-1">Net Income</div>
                <div className="text-lg font-semibold text-green-700">
                  {formatCurrency(result.netIncome)}
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="text-xs text-gray-600 mb-1">Effective Rate</div>
                <div className="text-lg font-semibold text-blue-700">
                  {result.effectiveRate}%
                </div>
              </div>
            </div>

            {/* Breakdown */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Tax Breakdown</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Gross Income:</span>
                  <span className="font-medium text-gray-900">{formatCurrency(parseFloat(annualIncome))}</span>
                </div>
                {taxRegime === 'old' && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Less: Deductions:</span>
                    <span className="font-medium text-red-600">-{formatCurrency(parseFloat(deductions))}</span>
                  </div>
                )}
                <div className="flex justify-between border-t border-gray-200 pt-2">
                  <span className="text-gray-600">Taxable Income:</span>
                  <span className="font-medium text-gray-900">{formatCurrency(result.taxableIncome)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax Payable:</span>
                  <span className="font-medium text-red-600">{formatCurrency(result.totalTax)}</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-2">
                  <span className="text-gray-900 font-semibold">Net Income:</span>
                  <span className="font-bold text-green-600">{formatCurrency(result.netIncome)}</span>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-xs text-yellow-800">
              <strong>Note:</strong> This is a simplified calculation. Actual tax may vary based on specific deductions, 
              exemptions, and local tax laws. Consult a tax professional for accurate calculations.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
