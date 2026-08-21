'use client';

import { Currency } from '@/types/calculator';
import { currencies } from '@/data/currencies';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface CurrencySelectorProps {
  selectedCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
}

export default function CurrencySelector({ selectedCurrency, onCurrencyChange }: CurrencySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white border-2 border-gray-200 rounded-lg px-4 py-2.5 hover:border-primary-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-200 min-w-[180px]"
      >
        <div className="flex-1 text-left">
          <div className="text-xs text-gray-500">Currency</div>
          <div className="font-semibold text-gray-900">
            {selectedCurrency.symbol} {selectedCurrency.code}
          </div>
        </div>
        <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-20 max-h-96 overflow-y-auto animate-fade-in">
            <div className="p-2">
              {currencies.map((currency) => (
                <button
                  key={currency.code}
                  onClick={() => {
                    onCurrencyChange(currency);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    selectedCurrency.code === currency.code
                      ? 'bg-primary-50 text-primary-700'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">
                        {currency.symbol} {currency.code}
                      </div>
                      <div className="text-xs text-gray-500">{currency.name}</div>
                    </div>
                    {selectedCurrency.code === currency.code && (
                      <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
