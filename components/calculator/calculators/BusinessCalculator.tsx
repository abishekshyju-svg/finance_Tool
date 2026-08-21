'use client';

import { useState } from 'react';
import { Currency } from '@/types/calculator';
import { TrendingUp } from 'lucide-react';

interface BusinessCalculatorProps {
  currency: Currency;
  calculatorName: string;
}

export default function BusinessCalculator({ currency, calculatorName }: BusinessCalculatorProps) {
  const [calculatorType, setCalculatorType] = useState<'margin' | 'breakeven' | 'discount'>('margin');
  
  // Profit Margin
  const [costPrice, setCostPrice] = useState('100');
  const [sellingPrice, setSellingPrice] = useState('150');
  
  // Break-even
  const [fixedCosts, setFixedCosts] = useState('10000');
  const [variableCostPerUnit, setVariableCostPerUnit] = useState('20');
  const [pricePerUnit, setPricePerUnit] = useState('50');
  
  // Discount
  const [originalPrice, setOriginalPrice] = useState('100');
  const [discountPercent, setDiscountPercent] = useState('20');

  const [result, setResult] = useState<any>(null);

  const calculateBusiness = () => {
    if (calculatorType === 'margin') {
      const cost = parseFloat(costPrice);
      const selling = parseFloat(sellingPrice);

      if (!cost || !selling || cost <= 0 || selling <= 0) {
        alert('Please enter valid values');
        return;
      }

      const profit = selling - cost;
      const profitMargin = (profit / selling) * 100;
      const markup = (profit / cost) * 100;

      setResult({
        type: 'margin',
        profit: parseFloat(profit.toFixed(2)),
        profitMargin: parseFloat(profitMargin.toFixed(2)),
        markup: parseFloat(markup.toFixed(2))
      });
    } else if (calculatorType === 'breakeven') {
      const fixed = parseFloat(fixedCosts);
      const variable = parseFloat(variableCostPerUnit);
      const price = parseFloat(pricePerUnit);

      if (!fixed || !variable || !price || price <= variable) {
        alert('Please enter valid values. Price must be greater than variable cost.');
        return;
      }

      const breakEvenUnits = fixed / (price - variable);
      const breakEvenRevenue = breakEvenUnits * price;

      setResult({
        type: 'breakeven',
        units: Math.ceil(breakEvenUnits),
        revenue: parseFloat(breakEvenRevenue.toFixed(2)),
        contributionMargin: price - variable
      });
    } else {
      const original = parseFloat(originalPrice);
      const discount = parseFloat(discountPercent);

      if (!original || !discount || original <= 0 || discount < 0 || discount > 100) {
        alert('Please enter valid values');
        return;
      }

      const discountAmount = (original * discount) / 100;
      const finalPrice = original - discountAmount;
      const savings = discountAmount;

      setResult({
        type: 'discount',
        discountAmount: parseFloat(discountAmount.toFixed(2)),
        finalPrice: parseFloat(finalPrice.toFixed(2)),
        savings: parseFloat(savings.toFixed(2))
      });
    }
  };

  const formatCurrency = (amount: number) => {
    return `${currency.symbol}${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-soft p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-2 rounded-lg">
          <TrendingUp className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Business Calculator</h3>
      </div>

      <div className="space-y-4">
        {/* Calculator Type Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Calculator Type
          </label>
          <select
            value={calculatorType}
            onChange={(e) => {
              setCalculatorType(e.target.value as any);
              setResult(null);
            }}
            className="input-field"
          >
            <option value="margin">Profit Margin</option>
            <option value="breakeven">Break-even Analysis</option>
            <option value="discount">Discount Calculator</option>
          </select>
        </div>

        {/* Profit Margin Fields */}
        {calculatorType === 'margin' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cost Price ({currency.code})
              </label>
              <input
                type="number"
                value={costPrice}
                onChange={(e) => setCostPrice(e.target.value)}
                className="input-field"
                placeholder="Cost to produce/buy"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Selling Price ({currency.code})
              </label>
              <input
                type="number"
                value={sellingPrice}
                onChange={(e) => setSellingPrice(e.target.value)}
                className="input-field"
                placeholder="Price to customer"
              />
            </div>
          </>
        )}

        {/* Break-even Fields */}
        {calculatorType === 'breakeven' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fixed Costs ({currency.code})
              </label>
              <input
                type="number"
                value={fixedCosts}
                onChange={(e) => setFixedCosts(e.target.value)}
                className="input-field"
                placeholder="Rent, salaries, etc."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Variable Cost per Unit ({currency.code})
              </label>
              <input
                type="number"
                value={variableCostPerUnit}
                onChange={(e) => setVariableCostPerUnit(e.target.value)}
                className="input-field"
                placeholder="Materials, labor, etc."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price per Unit ({currency.code})
              </label>
              <input
                type="number"
                value={pricePerUnit}
                onChange={(e) => setPricePerUnit(e.target.value)}
                className="input-field"
                placeholder="Selling price"
              />
            </div>
          </>
        )}

        {/* Discount Fields */}
        {calculatorType === 'discount' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Original Price ({currency.code})
              </label>
              <input
                type="number"
                value={originalPrice}
                onChange={(e) => setOriginalPrice(e.target.value)}
                className="input-field"
                placeholder="Original price"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Discount (%)
              </label>
              <input
                type="number"
                value={discountPercent}
                onChange={(e) => setDiscountPercent(e.target.value)}
                className="input-field"
                placeholder="Discount percentage"
              />
            </div>
          </>
        )}

        {/* Calculate Button */}
        <button
          onClick={calculateBusiness}
          className="w-full btn-primary bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
        >
          Calculate
        </button>

        {/* Results */}
        {result && result.type === 'margin' && (
          <div className="mt-6 space-y-3 animate-fade-in">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Profit Margin</div>
              <div className="text-2xl font-bold text-emerald-600">
                {result.profitMargin}%
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="text-xs text-gray-600 mb-1">Profit</div>
                <div className="text-lg font-semibold text-green-700">
                  {formatCurrency(result.profit)}
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="text-xs text-gray-600 mb-1">Markup</div>
                <div className="text-lg font-semibold text-blue-700">
                  {result.markup}%
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4 text-sm">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Cost Price:</span>
                  <span className="font-medium">{formatCurrency(parseFloat(costPrice))}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Selling Price:</span>
                  <span className="font-medium">{formatCurrency(parseFloat(sellingPrice))}</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="font-semibold">Profit:</span>
                  <span className="font-bold text-green-600">{formatCurrency(result.profit)}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {result && result.type === 'breakeven' && (
          <div className="mt-6 space-y-3 animate-fade-in">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Break-even Point</div>
              <div className="text-2xl font-bold text-emerald-600">
                {result.units} units
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="text-xs text-gray-600 mb-1">Revenue Needed</div>
                <div className="text-lg font-semibold text-blue-700">
                  {formatCurrency(result.revenue)}
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <div className="text-xs text-gray-600 mb-1">Contribution/Unit</div>
                <div className="text-lg font-semibold text-purple-700">
                  {formatCurrency(result.contributionMargin)}
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4 text-sm">
              <p className="text-gray-700">
                You need to sell <strong>{result.units} units</strong> to cover all costs and break even.
                Any sales beyond this will generate profit.
              </p>
            </div>
          </div>
        )}

        {result && result.type === 'discount' && (
          <div className="mt-6 space-y-3 animate-fade-in">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Final Price</div>
              <div className="text-2xl font-bold text-emerald-600">
                {formatCurrency(result.finalPrice)}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <div className="text-xs text-gray-600 mb-1">Discount Amount</div>
                <div className="text-lg font-semibold text-red-700">
                  {formatCurrency(result.discountAmount)}
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="text-xs text-gray-600 mb-1">You Save</div>
                <div className="text-lg font-semibold text-green-700">
                  {formatCurrency(result.savings)}
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4 text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Original Price:</span>
                <span className="font-medium line-through">{formatCurrency(parseFloat(originalPrice))}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Discount ({discountPercent}%):</span>
                <span className="font-medium text-red-600">-{formatCurrency(result.discountAmount)}</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-semibold">Final Price:</span>
                <span className="font-bold text-green-600">{formatCurrency(result.finalPrice)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
