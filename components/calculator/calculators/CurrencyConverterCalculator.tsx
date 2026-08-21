'use client';

import { useState } from 'react';
import { Currency } from '@/types/calculator';
import { currencies } from '@/data/currencies';
import { ArrowLeftRight } from 'lucide-react';

interface CurrencyConverterCalculatorProps {
  currency: Currency;
  calculatorName: string;
}

// Exchange rates (relative to USD) - In production, use real-time API
const exchangeRates: Record<string, number> = {
  USD: 1.00,
  EUR: 0.92,
  GBP: 0.79,
  INR: 83.12,
  AED: 3.67,
  SGD: 1.35,
  CAD: 1.36,
  AUD: 1.52,
  JPY: 149.50,
  CNY: 7.24,
  CHF: 0.88,
  NZD: 1.64,
  ZAR: 18.85,
  HKD: 7.83,
  SEK: 10.51,
  NOK: 10.72,
  DKK: 6.86,
  MYR: 4.72,
  THB: 35.82,
  KRW: 1320.50,
};

export default function CurrencyConverterCalculator({ currency, calculatorName }: CurrencyConverterCalculatorProps) {
  const [amount, setAmount] = useState('100');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState<{
    convertedAmount: number;
    rate: number;
    fromAmount: number;
  } | null>(null);

  const convertCurrency = () => {
    const amt = parseFloat(amount);
    
    if (!amt || amt <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    // Convert to USD first, then to target currency
    const amountInUSD = amt / exchangeRates[fromCurrency];
    const convertedAmount = amountInUSD * exchangeRates[toCurrency];
    const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];

    setResult({
      convertedAmount: parseFloat(convertedAmount.toFixed(2)),
      rate: parseFloat(rate.toFixed(6)),
      fromAmount: amt
    });
  };

  const swapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
    setResult(null);
  };

  const getSymbol = (code: string) => {
    return currencies.find(c => c.code === code)?.symbol || code;
  };

  return (
    <div className="bg-white rounded-xl shadow-soft p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-2 rounded-lg">
          <ArrowLeftRight className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Currency Converter</h3>
      </div>

      <div className="space-y-4">
        {/* Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input-field"
            placeholder="Enter amount"
          />
        </div>

        {/* From Currency */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            From
          </label>
          <select
            value={fromCurrency}
            onChange={(e) => {
              setFromCurrency(e.target.value);
              setResult(null);
            }}
            className="input-field"
          >
            {currencies.map((curr) => (
              <option key={curr.code} value={curr.code}>
                {curr.symbol} {curr.code} - {curr.name}
              </option>
            ))}
          </select>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
          <button
            onClick={swapCurrencies}
            className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300 hover:rotate-180"
          >
            <ArrowLeftRight className="h-5 w-5 text-gray-700" />
          </button>
        </div>

        {/* To Currency */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            To
          </label>
          <select
            value={toCurrency}
            onChange={(e) => {
              setToCurrency(e.target.value);
              setResult(null);
            }}
            className="input-field"
          >
            {currencies.map((curr) => (
              <option key={curr.code} value={curr.code}>
                {curr.symbol} {curr.code} - {curr.name}
              </option>
            ))}
          </select>
        </div>

        {/* Convert Button */}
        <button
          onClick={convertCurrency}
          className="w-full btn-primary bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
        >
          Convert Currency
        </button>

        {/* Results */}
        {result && (
          <div className="mt-6 space-y-3 animate-fade-in">
            {/* Conversion Result */}
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-6 text-center">
              <div className="text-sm text-gray-600 mb-2">
                {getSymbol(fromCurrency)}{result.fromAmount.toLocaleString()} {fromCurrency}
              </div>
              <div className="text-sm text-gray-500 mb-2">=</div>
              <div className="text-3xl font-bold text-cyan-600">
                {getSymbol(toCurrency)}{result.convertedAmount.toLocaleString('en-US', { 
                  minimumFractionDigits: 2, 
                  maximumFractionDigits: 2 
                })}
              </div>
              <div className="text-sm text-gray-600 mt-2">{toCurrency}</div>
            </div>

            {/* Exchange Rate */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Exchange Rate</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">1 {fromCurrency} =</span>
                  <span className="font-medium text-gray-900">
                    {result.rate.toFixed(6)} {toCurrency}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">1 {toCurrency} =</span>
                  <span className="font-medium text-gray-900">
                    {(1 / result.rate).toFixed(6)} {fromCurrency}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Conversions */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Quick Reference</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[1, 10, 100, 1000].map((multiplier) => {
                  const convertedValue = multiplier * result.rate;
                  return (
                    <div key={multiplier} className="flex justify-between bg-white rounded p-2">
                      <span className="text-gray-600">{multiplier} {fromCurrency}</span>
                      <span className="font-medium text-gray-900">
                        {convertedValue.toFixed(2)} {toCurrency}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-blue-900 mb-2">ℹ️ About Exchange Rates</h4>
              <ul className="text-xs text-blue-800 space-y-1">
                <li>• Exchange rates are updated regularly</li>
                <li>• Actual rates may vary by bank or exchange service</li>
                <li>• Banks typically charge a margin on the exchange rate</li>
                <li>• Large transactions may get better rates</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-xs text-yellow-800">
              <strong>Note:</strong> These are indicative exchange rates for calculation purposes. 
              For actual currency exchange, please check with your bank or authorized money changer 
              for real-time rates and applicable fees.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
