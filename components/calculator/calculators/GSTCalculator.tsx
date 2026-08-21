'use client';

import { useState } from 'react';
import { Currency } from '@/types/calculator';
import { FileText } from 'lucide-react';

interface GSTCalculatorProps {
  currency: Currency;
  calculatorName: string;
}

export default function GSTCalculator({ currency, calculatorName }: GSTCalculatorProps) {
  const [calculationType, setCalculationType] = useState<'add' | 'remove'>('add');
  const [amount, setAmount] = useState('1000');
  const [gstRate, setGstRate] = useState('18');
  const [result, setResult] = useState<{
    baseAmount: number;
    gstAmount: number;
    totalAmount: number;
  } | null>(null);

  const calculateGST = () => {
    const value = parseFloat(amount);
    const rate = parseFloat(gstRate);

    if (!value || !rate || value <= 0 || rate < 0) {
      alert('Please enter valid values');
      return;
    }

    let baseAmount: number;
    let gstAmount: number;
    let totalAmount: number;

    if (calculationType === 'add') {
      // Add GST to base price
      baseAmount = value;
      gstAmount = (value * rate) / 100;
      totalAmount = value + gstAmount;
    } else {
      // Remove GST from total price
      totalAmount = value;
      baseAmount = value / (1 + rate / 100);
      gstAmount = value - baseAmount;
    }

    setResult({
      baseAmount: parseFloat(baseAmount.toFixed(2)),
      gstAmount: parseFloat(gstAmount.toFixed(2)),
      totalAmount: parseFloat(totalAmount.toFixed(2))
    });
  };

  const formatCurrency = (amount: number) => {
    return `${currency.symbol}${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-soft p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-gradient-to-br from-teal-500 to-cyan-500 p-2 rounded-lg">
          <FileText className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Calculate GST</h3>
      </div>

      <div className="space-y-4">
        {/* Calculation Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Calculation Type
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setCalculationType('add')}
              className={`px-4 py-3 rounded-lg font-medium transition-all ${
                calculationType === 'add'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Add GST
            </button>
            <button
              onClick={() => setCalculationType('remove')}
              className={`px-4 py-3 rounded-lg font-medium transition-all ${
                calculationType === 'remove'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Remove GST
            </button>
          </div>
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {calculationType === 'add' ? 'Base Amount' : 'Total Amount'} ({currency.code})
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input-field"
            placeholder={calculationType === 'add' ? 'Enter base amount' : 'Enter total amount'}
          />
        </div>

        {/* GST Rate */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            GST Rate (%)
          </label>
          <select
            value={gstRate}
            onChange={(e) => setGstRate(e.target.value)}
            className="input-field"
          >
            <option value="0">0% (Exempted)</option>
            <option value="5">5%</option>
            <option value="12">12%</option>
            <option value="18">18%</option>
            <option value="28">28%</option>
            <option value="custom">Custom Rate</option>
          </select>
          {gstRate === 'custom' && (
            <input
              type="number"
              step="0.1"
              placeholder="Enter custom rate"
              onChange={(e) => setGstRate(e.target.value)}
              className="input-field mt-2"
            />
          )}
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateGST}
          className="w-full btn-primary bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
        >
          Calculate GST
        </button>

        {/* Results */}
        {result && (
          <div className="mt-6 space-y-3 animate-fade-in">
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">
                {calculationType === 'add' ? 'Total Amount (with GST)' : 'Base Amount (without GST)'}
              </div>
              <div className="text-2xl font-bold text-teal-600">
                {calculationType === 'add' ? formatCurrency(result.totalAmount) : formatCurrency(result.baseAmount)}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="text-xs text-gray-600 mb-1">Base</div>
                <div className="text-sm font-semibold text-blue-700">
                  {formatCurrency(result.baseAmount)}
                </div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                <div className="text-xs text-gray-600 mb-1">GST</div>
                <div className="text-sm font-semibold text-orange-700">
                  {formatCurrency(result.gstAmount)}
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="text-xs text-gray-600 mb-1">Total</div>
                <div className="text-sm font-semibold text-green-700">
                  {formatCurrency(result.totalAmount)}
                </div>
              </div>
            </div>

            {/* Breakdown */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">GST Breakdown</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Base Amount:</span>
                  <span className="font-medium text-gray-900">{formatCurrency(result.baseAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">GST @ {gstRate}%:</span>
                  <span className="font-medium text-orange-600">+{formatCurrency(result.gstAmount)}</span>
                </div>
                <div className="border-t border-gray-200 pt-2 flex justify-between">
                  <span className="text-gray-900 font-semibold">Total Amount:</span>
                  <span className="font-bold text-gray-900">{formatCurrency(result.totalAmount)}</span>
                </div>
              </div>
            </div>

            {/* CGST/SGST Breakdown */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Tax Split (for India)</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">CGST ({parseFloat(gstRate) / 2}%):</span>
                  <span className="font-medium text-gray-900">{formatCurrency(result.gstAmount / 2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">SGST ({parseFloat(gstRate) / 2}%):</span>
                  <span className="font-medium text-gray-900">{formatCurrency(result.gstAmount / 2)}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
