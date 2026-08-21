import { Metadata } from 'next';
import { AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Disclaimer - FinanceHub',
  description: 'Important disclaimer about using FinanceHub financial calculators and the limitations of our service.',
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-soft p-8 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-yellow-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Disclaimer</h1>
          </div>
          <p className="text-gray-600">
            Important information about using FinanceHub calculators
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-yellow-900 mb-3">⚠️ Please Read Carefully</h2>
          <p className="text-yellow-800 leading-relaxed">
            The information and calculators provided on FinanceHub are for educational and informational 
            purposes only. They should not be considered as professional financial, legal, or tax advice.
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12 prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">General Information</h2>
            <p className="text-gray-700 leading-relaxed">
              FinanceHub provides free online financial calculators to help users estimate various financial 
              scenarios including loans, investments, taxes, insurance, and retirement planning. While we strive 
              for accuracy, these calculators are simplified tools and may not account for all variables in 
              real-world situations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Not Financial Advice</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The results and information provided by our calculators:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Are estimates and approximations only</li>
              <li>Should not be considered as professional financial advice</li>
              <li>Do not constitute recommendations to buy, sell, or hold any financial products</li>
              <li>Are not a substitute for consultation with qualified financial advisors</li>
              <li>May not reflect current market conditions or specific lender terms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Accuracy and Reliability</h2>
            <p className="text-gray-700 leading-relaxed">
              While we use industry-standard formulas and make every effort to ensure accuracy, we cannot 
              guarantee that all calculations are completely accurate or up-to-date. Factors such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>Changes in tax laws and regulations</li>
              <li>Varying interest rates and fees</li>
              <li>Individual lender policies and terms</li>
              <li>Market fluctuations and economic conditions</li>
              <li>Regional or country-specific regulations</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              ...may affect actual results. Always verify calculations with your financial institution or advisor.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibility</h2>
            <p className="text-gray-700 leading-relaxed">
              Users are solely responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>Verifying all calculations and results</li>
              <li>Making their own financial decisions</li>
              <li>Consulting with qualified professionals before making important financial commitments</li>
              <li>Understanding the terms and conditions of any financial products or services</li>
              <li>Ensuring the applicability of calculations to their specific situation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Regional Variations</h2>
            <p className="text-gray-700 leading-relaxed">
              Some calculators may be region-specific (e.g., GST, EPF, PPF) and based on regulations of 
              particular countries. These calculators may not be applicable in all jurisdictions. Users should:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>Check if the calculator is relevant to their country or region</li>
              <li>Verify current local regulations and rates</li>
              <li>Consult local financial institutions or tax authorities</li>
              <li>Consider country-specific tax treaties and exemptions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Investment Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              Investment calculators (SIP, mutual funds, stocks, etc.) show projected returns based on assumed 
              rates of return. Past performance does not guarantee future results. All investments carry risk, 
              including the potential loss of principal. Expected returns are hypothetical and:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>Are not guaranteed</li>
              <li>May be higher or lower than actual results</li>
              <li>Do not account for taxes, fees, or inflation</li>
              <li>Assume constant rates of return which is unrealistic</li>
              <li>Should not be the sole basis for investment decisions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tax Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              Tax calculators provide estimates based on general tax brackets and rates. Actual tax liability 
              may differ due to deductions, exemptions, credits, and individual circumstances. Tax laws change 
              frequently. Always consult a qualified tax professional or accountant for accurate tax advice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Loan and Credit Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              Loan calculators show estimated EMI and interest based on input values. Actual loan terms depend on:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>Your credit score and history</li>
              <li>Lender-specific policies and rates</li>
              <li>Processing fees, insurance, and other charges</li>
              <li>Down payment and collateral requirements</li>
              <li>Current market interest rates</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We do not offer loans or credit products. Contact financial institutions directly for actual offers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              FinanceHub and its operators shall not be held liable for any losses, damages, or adverse 
              consequences resulting from the use of our calculators or reliance on the information provided. 
              This includes, but is not limited to, financial losses, missed opportunities, or incorrect 
              financial planning decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes and Updates</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify, update, or discontinue any calculator or information without notice. 
              We also reserve the right to update this disclaimer at any time. Continued use of the website 
              constitutes acceptance of any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Consultation</h2>
            <p className="text-gray-700 leading-relaxed">
              For personalized financial advice, we strongly recommend consulting with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>Certified financial planners (CFP)</li>
              <li>Chartered accountants (CA)</li>
              <li>Tax advisors</li>
              <li>Investment advisors</li>
              <li>Insurance agents</li>
              <li>Legal professionals for contracts and agreements</li>
            </ul>
          </section>

          <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mt-8">
            <p className="text-sm text-primary-900 leading-relaxed">
              <strong>By using FinanceHub, you acknowledge that you have read, understood, and agree to this disclaimer.</strong>
              <br /><br />
              If you do not agree with any part of this disclaimer, please discontinue use of our services immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
