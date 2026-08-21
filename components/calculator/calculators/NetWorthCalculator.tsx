'use client';

import { useState } from 'react';
import { Currency } from '@/types/calculator';
import { Wallet } from 'lucide-react';

interface NetWorthCalculatorProps {
  currency: Currency;
  calculatorName: string;
}

export default function NetWorthCalculator({ currency, calculatorName }: NetWorthCalculatorProps) {
  // Assets
  const [cash, setCash] = useState('10000');
  const [investments, setInvestments] = useState('50000');
  const [realEstate, setRealEstate] = useState('200000');
  const [vehicles, setVehicles] = useState('15000');
  const [otherAssets, setOtherAssets] = useState('5000');

  // Liabilities
  const [mortgage, setMortgage] = useState('150000');
  const [carLoans, setCarLoans] = useState('10000');
  const [studentLoans, setStudentLoans] = useState('20000');
  const [creditCards, setCreditCards] = useState('3000');
  const [otherDebts, setOtherDebts] = useState('2000');

  const [result, setResult] = useState<{
    totalAssets: number;
    totalLiabilities: number;
    netWorth: number;
    assetBreakdown: { label: string; amount: number; percentage: number }[];
    liabilityBreakdown: { label: string; amount: number; percentage: number }[];
    status: 'positive' | 'negative';
  } | null>(null);

  const calculateNetWorth = () => {
    // Parse assets
    const cashAmt = parseFloat(cash) || 0;
    const investAmt = parseFloat(investments) || 0;
    const realEstateAmt = parseFloat(realEstate) || 0;
    const vehiclesAmt = parseFloat(vehicles) || 0;
    const otherAssetsAmt = parseFloat(otherAssets) || 0;

    // Parse liabilities
    const mortgageAmt = parseFloat(mortgage) || 0;
    const carLoansAmt = parseFloat(carLoans) || 0;
    const studentLoansAmt = parseFloat(studentLoans) || 0;
    const creditCardsAmt = parseFloat(creditCards) || 0;
    const otherDebtsAmt = parseFloat(otherDebts) || 0;

    const totalAssets = cashAmt + investAmt + realEstateAmt + vehiclesAmt + otherAssetsAmt;
    const totalLiabilities = mortgageAmt + carLoansAmt + studentLoansAmt + creditCardsAmt + otherDebtsAmt;
    const netWorth = totalAssets - totalLiabilities;

    const assetBreakdown = [
      { label: 'Cash & Savings', amount: cashAmt, percentage: (cashAmt / totalAssets) * 100 },
      { label: 'Investments', amount: investAmt, percentage: (investAmt / totalAssets) * 100 },
      { label: 'Real Estate', amount: realEstateAmt, percentage: (realEstateAmt / totalAssets) * 100 },
      { label: 'Vehicles', amount: vehiclesAmt, percentage: (vehiclesAmt / totalAssets) * 100 },
      { label: 'Other Assets', amount: otherAssetsAmt, percentage: (otherAssetsAmt / totalAssets) * 100 },
    ].filter(item => item.amount > 0);

    const liabilityBreakdown = [
      { label: 'Mortgage', amount: mortgageAmt, percentage: (mortgageAmt / totalLiabilities) * 100 },
      { label: 'Car Loans', amount: carLoansAmt, percentage: (carLoansAmt / totalLiabilities) * 100 },
      { label: 'Student Loans', amount: studentLoansAmt, percentage: (studentLoansAmt / totalLiabilities) * 100 },
      { label: 'Credit Cards', amount: creditCardsAmt, percentage: (creditCardsAmt / totalLiabilities) * 100 },
      { label: 'Other Debts', amount: otherDebtsAmt, percentage: (otherDebtsAmt / totalLiabilities) * 100 },
    ].filter(item => item.amount > 0);

    setResult({
      totalAssets: parseFloat(totalAssets.toFixed(2)),
      totalLiabilities: parseFloat(totalLiabilities.toFixed(2)),
      netWorth: parseFloat(netWorth.toFixed(2)),
      assetBreakdown,
      liabilityBreakdown,
      status: netWorth >= 0 ? 'positive' : 'negative'
    });
  };

  const formatCurrency = (amount: number) => {
    return `${currency.symbol}${amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-soft p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-gradient-to-br from-violet-500 to-purple-500 p-2 rounded-lg">
          <Wallet className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Calculate Net Worth</h3>
      </div>

      <div className="space-y-4">
        {/* Assets Section */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-green-900 mb-3">Assets (What You Own)</h4>
          
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Cash & Savings
              </label>
              <input
                type="number"
                value={cash}
                onChange={(e) => setCash(e.target.value)}
                className="input-field"
                placeholder="0"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Investments (Stocks, Bonds, Mutual Funds)
              </label>
              <input
                type="number"
                value={investments}
                onChange={(e) => setInvestments(e.target.value)}
                className="input-field"
                placeholder="0"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Real Estate (Current Market Value)
              </label>
              <input
                type="number"
                value={realEstate}
                onChange={(e) => setRealEstate(e.target.value)}
                className="input-field"
                placeholder="0"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Vehicles (Current Value)
              </label>
              <input
                type="number"
                value={vehicles}
                onChange={(e) => setVehicles(e.target.value)}
                className="input-field"
                placeholder="0"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Other Assets (Jewelry, Art, etc.)
              </label>
              <input
                type="number"
                value={otherAssets}
                onChange={(e) => setOtherAssets(e.target.value)}
                className="input-field"
                placeholder="0"
              />
            </div>
          </div>
        </div>

        {/* Liabilities Section */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-red-900 mb-3">Liabilities (What You Owe)</h4>
          
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Mortgage (Outstanding Balance)
              </label>
              <input
                type="number"
                value={mortgage}
                onChange={(e) => setMortgage(e.target.value)}
                className="input-field"
                placeholder="0"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Car Loans
              </label>
              <input
                type="number"
                value={carLoans}
                onChange={(e) => setCarLoans(e.target.value)}
                className="input-field"
                placeholder="0"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Student Loans
              </label>
              <input
                type="number"
                value={studentLoans}
                onChange={(e) => setStudentLoans(e.target.value)}
                className="input-field"
                placeholder="0"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Credit Card Debt
              </label>
              <input
                type="number"
                value={creditCards}
                onChange={(e) => setCreditCards(e.target.value)}
                className="input-field"
                placeholder="0"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Other Debts
              </label>
              <input
                type="number"
                value={otherDebts}
                onChange={(e) => setOtherDebts(e.target.value)}
                className="input-field"
                placeholder="0"
              />
            </div>
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateNetWorth}
          className="w-full btn-primary bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
        >
          Calculate Net Worth
        </button>

        {/* Results */}
        {result && (
          <div className="mt-6 space-y-3 animate-fade-in">
            {/* Net Worth Display */}
            <div className={`rounded-lg p-6 border-2 text-center ${
              result.status === 'positive'
                ? 'bg-green-50 border-green-200'
                : 'bg-red-50 border-red-200'
            }`}>
              <div className="text-sm text-gray-600 mb-2">Your Net Worth</div>
              <div className={`text-4xl font-bold ${
                result.status === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {formatCurrency(result.netWorth)}
              </div>
              <div className="text-xs text-gray-600 mt-2">
                {result.status === 'positive' 
                  ? '✓ Positive Net Worth' 
                  : '⚠️ Negative Net Worth - Focus on paying down debts'}
              </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="text-xs text-gray-600 mb-1">Total Assets</div>
                <div className="text-lg font-semibold text-green-700">
                  {formatCurrency(result.totalAssets)}
                </div>
              </div>
              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <div className="text-xs text-gray-600 mb-1">Total Liabilities</div>
                <div className="text-lg font-semibold text-red-700">
                  {formatCurrency(result.totalLiabilities)}
                </div>
              </div>
            </div>

            {/* Asset Breakdown */}
            {result.assetBreakdown.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Asset Breakdown</h4>
                <div className="space-y-3">
                  {result.assetBreakdown.map((asset, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700">{asset.label}</span>
                        <span className="font-medium text-gray-900">
                          {formatCurrency(asset.amount)} ({asset.percentage.toFixed(1)}%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                          style={{ width: `${asset.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Liability Breakdown */}
            {result.liabilityBreakdown.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Liability Breakdown</h4>
                <div className="space-y-3">
                  {result.liabilityBreakdown.map((liability, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700">{liability.label}</span>
                        <span className="font-medium text-gray-900">
                          {formatCurrency(liability.amount)} ({liability.percentage.toFixed(1)}%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-red-500 to-rose-500 h-2 rounded-full"
                          style={{ width: `${liability.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Financial Ratios */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Financial Health Metrics</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Debt-to-Asset Ratio:</span>
                  <span className="font-medium text-gray-900">
                    {result.totalAssets > 0 
                      ? ((result.totalLiabilities / result.totalAssets) * 100).toFixed(1) 
                      : '0'}%
                  </span>
                </div>
                <div className="text-xs text-gray-500">
                  {result.totalAssets > 0 && (result.totalLiabilities / result.totalAssets) < 0.5
                    ? '✓ Good - Keep liabilities under 50% of assets'
                    : '⚠️ Consider reducing debt burden'}
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-blue-900 mb-2">💡 Recommendations</h4>
              <ul className="text-xs text-blue-800 space-y-1">
                {result.status === 'positive' ? (
                  <>
                    <li>• Great! Focus on growing your assets further</li>
                    <li>• Diversify investments across different asset classes</li>
                    <li>• Build emergency fund of 6-12 months expenses</li>
                    <li>• Continue paying down high-interest debts</li>
                    <li>• Review and update net worth quarterly</li>
                  </>
                ) : (
                  <>
                    <li>• Priority: Create a debt reduction plan</li>
                    <li>• Focus on paying off high-interest debts first</li>
                    <li>• Avoid taking on new debt</li>
                    <li>• Consider debt consolidation if applicable</li>
                    <li>• Build savings simultaneously, even if small amounts</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
