'use client';

import { Calculator, Currency } from '@/types/calculator';
import { Calculator as CalcIcon, AlertCircle } from 'lucide-react';

interface GenericCalculatorProps {
  calculator: Calculator;
  currency: Currency;
}

export default function GenericCalculator({ calculator, currency }: GenericCalculatorProps) {
  return (
    <div className="bg-white rounded-xl shadow-soft p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-gradient-to-br from-gray-500 to-gray-600 p-2 rounded-lg">
          <CalcIcon className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Calculator Widget</h3>
      </div>

      <div className="space-y-4">
        {/* Info Message */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-blue-900 mb-1">
              Calculator Coming Soon
            </h4>
            <p className="text-sm text-blue-800">
              The interactive calculator for {calculator.name} is currently under development. 
              Please refer to the detailed information, formulas, and examples provided on this page 
              to perform manual calculations.
            </p>
          </div>
        </div>

        {/* Placeholder for future implementation */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 text-center border-2 border-dashed border-gray-300">
          <CalcIcon className="h-12 w-12 text-gray-400 mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-gray-700 mb-2">
            Interactive Calculator
          </h4>
          <p className="text-sm text-gray-600">
            This calculator will include input fields, real-time calculations, 
            and detailed result breakdowns specific to {calculator.name.toLowerCase()}.
          </p>
        </div>

        {/* Key Features */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Available Information</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
              <span>Comprehensive introduction and overview</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
              <span>Step-by-step usage instructions</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
              <span>Mathematical formulas and explanations</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
              <span>Practical calculation examples</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
              <span>Benefits and use cases</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
              <span>Frequently asked questions</span>
            </li>
          </ul>
        </div>

        {/* Currency Info */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-600 mb-1">Selected Currency</div>
              <div className="text-lg font-semibold text-gray-900">
                {currency.symbol} {currency.code}
              </div>
              <div className="text-xs text-gray-500">{currency.name}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-600 mb-1">Country</div>
              <div className="text-sm font-medium text-gray-900">{currency.country}</div>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="text-center text-sm text-gray-500 pt-4">
          <p>
            Use the formula and examples below to perform calculations manually, 
            or check back soon for the interactive calculator widget.
          </p>
        </div>
      </div>
    </div>
  );
}
