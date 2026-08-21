'use client';

import { useState } from 'react';
import { Currency } from '@/types/calculator';
import { Calendar } from 'lucide-react';

interface BudgetPlannerCalculatorProps {
  currency: Currency;
  calculatorName: string;
}

interface BudgetItem {
  category: string;
  amount: number;
  percentage?: number;
}

export default function BudgetPlannerCalculator({ currency, calculatorName }: BudgetPlannerCalculatorProps) {
  const [monthlyIncome, setMonthlyIncome] = useState('5000');
  
  // Expenses
  const [housing, setHousing] = useState('1500');
  const [food, setFood] = useState('500');
  const [transportation, setTransportation] = useState('300');
  const [utilities, setUtilities] = useState('200');
  const [healthcare, setHealthcare] = useState('150');
  const [entertainment, setEntertainment] = useState('200');
  const [other, setOther] = useState('150');
  
  const [result, setResult] = useState<{
    totalIncome: number;
    totalExpenses: number;
    savings: number;
    savingsRate: number;
    expenses: BudgetItem[];
    status: 'surplus' | 'deficit' | 'balanced';
  } | null>(null);

  const calculateBudget = () => {
    const income = parseFloat(monthlyIncome);
    const housingAmt = parseFloat(housing) || 0;
    const foodAmt = parseFloat(food) || 0;
    const transportAmt = parseFloat(transportation) || 0;
    const utilsAmt = parseFloat(utilities) || 0;
    const healthAmt = parseFloat(healthcare) || 0;
    const entertainAmt = parseFloat(entertainment) || 0;
    const otherAmt = parseFloat(other) || 0;

    if (!income || income <= 0) {
      alert('Please enter valid monthly income');
      return;
    }

    const totalExpenses = housingAmt + foodAmt + transportAmt + utilsAmt + healthAmt + entertainAmt + otherAmt;
    const savings = income - totalExpenses;
    const savingsRate = (savings / income) * 100;

    const expenses: BudgetItem[] = [
      { category: 'Housing', amount: housingAmt, percentage: (housingAmt / income) * 100 },
      { category: 'Food', amount: foodAmt, percentage: (foodAmt / income) * 100 },
      { category: 'Transportation', amount: transportAmt, percentage: (transportAmt / income) * 100 },
      { category: 'Utilities', amount: utilsAmt, percentage: (utilsAmt / income) * 100 },
      { category: 'Healthcare', amount: healthAmt, percentage: (healthAmt / income) * 100 },
      { category: 'Entertainment', amount: entertainAmt, percentage: (entertainAmt / income) * 100 },
      { category: 'Other', amount: otherAmt, percentage: (otherAmt / income) * 100 },
    ].filter(item => item.amount > 0);

    let status: 'surplus' | 'deficit' | 'balanced' = 'balanced';
    if (savings > 0) status = 'surplus';
    else if (savings < 0) status = 'deficit';

    setResult({
      totalIncome: income,
      totalExpenses: parseFloat(totalExpenses.toFixed(2)),
      savings: parseFloat(savings.toFixed(2)),
      savingsRate: parseFloat(savingsRate.toFixed(2)),
      expenses,
      status
    });
  };

  const formatCurrency = (amount: number) => {
    return `${currency.symbol}${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-soft p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-gradient-to-br from-pink-500 to-rose-500 p-2 rounded-lg">
          <Calendar className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Plan Your Budget</h3>
      </div>

      <div className="space-y-4">
        {/* Monthly Income */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Income ({currency.code})
          </label>
          <input
            type="number"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(e.target.value)}
            className="input-field"
            placeholder="Total monthly income"
          />
        </div>

        <div className="border-t pt-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Monthly Expenses</h4>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Housing */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Housing/Rent
              </label>
              <input
                type="number"
                value={housing}
                onChange={(e) => setHousing(e.target.value)}
                className="input-field"
                placeholder="0"
              />
            </div>

            {/* Food */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Food & Groceries
              </label>
              <input
                type="number"
                value={food}
                onChange={(e) => setFood(e.target.value)}
                className="input-field"
                placeholder="0"
              />
            </div>

            {/* Transportation */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Transportation
              </label>
              <input
                type="number"
                value={transportation}
                onChange={(e) => setTransportation(e.target.value)}
                className="input-field"
                placeholder="0"
              />
            </div>

            {/* Utilities */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Utilities
              </label>
              <input
                type="number"
                value={utilities}
                onChange={(e) => setUtilities(e.target.value)}
                className="input-field"
                placeholder="0"
              />
            </div>

            {/* Healthcare */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Healthcare
              </label>
              <input
                type="number"
                value={healthcare}
                onChange={(e) => setHealthcare(e.target.value)}
                className="input-field"
                placeholder="0"
              />
            </div>

            {/* Entertainment */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Entertainment
              </label>
              <input
                type="number"
                value={entertainment}
                onChange={(e) => setEntertainment(e.target.value)}
                className="input-field"
                placeholder="0"
              />
            </div>

            {/* Other */}
            <div className="col-span-2">
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Other Expenses
              </label>
              <input
                type="number"
                value={other}
                onChange={(e) => setOther(e.target.value)}
                className="input-field"
                placeholder="0"
              />
            </div>
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateBudget}
          className="w-full btn-primary bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700"
        >
          Analyze Budget
        </button>

        {/* Results */}
        {result && (
          <div className="mt-6 space-y-3 animate-fade-in">
            <div className={`rounded-lg p-4 border-2 ${
              result.status === 'surplus' 
                ? 'bg-green-50 border-green-200' 
                : result.status === 'deficit'
                ? 'bg-red-50 border-red-200'
                : 'bg-yellow-50 border-yellow-200'
            }`}>
              <div className="text-sm text-gray-600 mb-1">Monthly Savings</div>
              <div className={`text-2xl font-bold ${
                result.status === 'surplus' ? 'text-green-600' : 
                result.status === 'deficit' ? 'text-red-600' : 'text-yellow-600'
              }`}>
                {formatCurrency(result.savings)}
              </div>
              <div className="text-xs text-gray-600 mt-1">
                {result.savingsRate.toFixed(1)}% of income
              </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="text-xs text-gray-600 mb-1">Total Income</div>
                <div className="text-lg font-semibold text-blue-700">
                  {formatCurrency(result.totalIncome)}
                </div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                <div className="text-xs text-gray-600 mb-1">Total Expenses</div>
                <div className="text-lg font-semibold text-orange-700">
                  {formatCurrency(result.totalExpenses)}
                </div>
              </div>
            </div>

            {/* Expense Breakdown */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Expense Breakdown</h4>
              <div className="space-y-3">
                {result.expenses.map((expense, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{expense.category}</span>
                      <span className="font-medium text-gray-900">
                        {formatCurrency(expense.amount)} ({expense.percentage?.toFixed(1)}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-pink-500 to-rose-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${expense.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-blue-900 mb-2">💡 Budget Tips</h4>
              <ul className="text-xs text-blue-800 space-y-1">
                {result.savingsRate >= 20 ? (
                  <>
                    <li>• Excellent! You&apos;re saving {result.savingsRate.toFixed(0)}% of your income</li>
                    <li>• Consider investing your savings for long-term growth</li>
                    <li>• Build an emergency fund of 6-12 months expenses</li>
                  </>
                ) : result.savingsRate >= 10 ? (
                  <>
                    <li>• Good start! Try to increase savings to 20% of income</li>
                    <li>• Look for areas to reduce discretionary spending</li>
                    <li>• Set up automatic savings transfers</li>
                  </>
                ) : result.savingsRate > 0 ? (
                  <>
                    <li>• Your savings rate is low. Aim for at least 10-20%</li>
                    <li>• Review all expenses and identify what you can cut</li>
                    <li>• Consider ways to increase your income</li>
                  </>
                ) : (
                  <>
                    <li>• ⚠️ You&apos;re spending more than you earn!</li>
                    <li>• Immediately review and reduce non-essential expenses</li>
                    <li>• Create a debt payoff plan if using credit</li>
                    <li>• Consider additional income sources</li>
                  </>
                )}
              </ul>
            </div>

            {/* 50/30/20 Rule Comparison */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">50/30/20 Budget Rule</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">Needs (50%):</span>
                  <span className="font-medium">{formatCurrency(result.totalIncome * 0.5)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Wants (30%):</span>
                  <span className="font-medium">{formatCurrency(result.totalIncome * 0.3)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Savings (20%):</span>
                  <span className="font-medium">{formatCurrency(result.totalIncome * 0.2)}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
