import { Metadata } from 'next';
import { Calculator, Globe, Shield, Users, Target, Heart } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - FinanceHub | Free Financial Calculators',
  description: 'Learn about FinanceHub, our mission to provide free, accurate financial calculators to users worldwide. Discover our values and commitment to financial empowerment.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About FinanceHub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering individuals worldwide to make informed financial decisions through 
            free, accessible, and accurate calculation tools.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-primary-100 p-3 rounded-lg">
              <Target className="h-6 w-6 text-primary-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At FinanceHub, we believe that everyone deserves access to professional-grade financial 
            planning tools, regardless of their location or financial status. Our mission is to democratize 
            financial literacy by providing free, easy-to-use calculators that help people understand 
            loans, investments, taxes, insurance, and more.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We&apos;re committed to maintaining the highest standards of accuracy while ensuring our tools 
            remain accessible to users from all backgrounds and countries. Financial planning shouldn&apos;t 
            be complicated or expensive – we&apos;re here to simplify it.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-xl transition-all duration-300">
            <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
              <Calculator className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Accuracy First</h3>
            <p className="text-gray-700">
              We use industry-standard formulas and rigorous testing to ensure every calculation 
              is precise and reliable.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-xl transition-all duration-300">
            <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
              <Globe className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Global Accessibility</h3>
            <p className="text-gray-700">
              Supporting 20+ currencies and designed for users worldwide, breaking down 
              geographical barriers to financial planning.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-xl transition-all duration-300">
            <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
              <Shield className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Privacy Protected</h3>
            <p className="text-gray-700">
              All calculations happen locally in your browser. We never store, collect, 
              or share your financial data.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-xl transition-all duration-300">
            <div className="bg-yellow-100 p-3 rounded-lg w-fit mb-4">
              <Users className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">User-Centric</h3>
            <p className="text-gray-700">
              Designed with simplicity in mind, our tools are intuitive enough for beginners 
              yet powerful for financial professionals.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-xl transition-all duration-300">
            <div className="bg-red-100 p-3 rounded-lg w-fit mb-4">
              <Heart className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Always Free</h3>
            <p className="text-gray-700">
              No hidden fees, no subscriptions, no premium tiers. Quality financial tools 
              should be accessible to everyone.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-xl transition-all duration-300">
            <div className="bg-indigo-100 p-3 rounded-lg w-fit mb-4">
              <Calculator className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive</h3>
            <p className="text-gray-700">
              From simple interest to complex mortgages, we provide 35+ calculators 
              covering all aspects of personal finance.
            </p>
          </div>
        </div>

        {/* What We Offer */}
        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl shadow-soft p-8 md:p-12 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Loan Calculators</h3>
              <p className="text-gray-700 mb-2">
                Calculate EMI, total interest, and repayment schedules for home loans, car loans, 
                personal loans, and more. Compare different scenarios to find the best loan option.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Investment Tools</h3>
              <p className="text-gray-700 mb-2">
                Plan your investments with SIP, mutual fund, FD, and compound interest calculators. 
                Visualize wealth creation through systematic investing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tax Calculators</h3>
              <p className="text-gray-700 mb-2">
                Estimate income tax, GST, VAT, and sales tax. Stay compliant and optimize 
                your tax planning with accurate calculations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Retirement Planning</h3>
              <p className="text-gray-700 mb-2">
                Plan for a secure retirement with pension, EPF, and retirement calculators. 
                Understand how much you need to save for your golden years.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl shadow-soft p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Financial Planning Journey Today
          </h2>
          <p className="text-xl text-primary-50 mb-6 max-w-2xl mx-auto">
            Join thousands of users who trust FinanceHub for their financial calculations and planning needs.
          </p>
          <Link href="/" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-block">
            Explore Our Calculators
          </Link>
        </div>
      </div>
    </div>
  );
}
