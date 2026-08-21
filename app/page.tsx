import Link from 'next/link';
import { Calculator as CalcIcon, TrendingUp, Shield, Zap, Globe } from 'lucide-react';
import CalculatorNav from '@/components/CalculatorNav';
import CalculatorGrid from '@/components/CalculatorGrid';
import { calculators, categories } from '@/data/calculators';

export default function Home() {
  const featuredCalculators = calculators.filter(calc => calc.featured);

  return (
    <>
      <CalculatorNav />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Zap className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium">35+ Free Financial Calculators</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              Smart Financial Planning
              <span className="block mt-2 text-primary-100">Made Simple</span>
            </h1>
            
            <p className="text-xl text-primary-50 mb-8 leading-relaxed">
              Access professional-grade financial calculators for loans, investments, taxes, and more.
              Make informed decisions with our easy-to-use tools designed for users worldwide.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="#calculators" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Explore Calculators
              </Link>
              <Link href="#featured" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">
                Popular Tools
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <Globe className="h-8 w-8 mb-3 mx-auto text-yellow-300" />
                <h3 className="font-semibold mb-2">Global Currency Support</h3>
                <p className="text-sm text-primary-100">Support for 20+ major world currencies</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <CalcIcon className="h-8 w-8 mb-3 mx-auto text-green-300" />
                <h3 className="font-semibold mb-2">100% Free Forever</h3>
                <p className="text-sm text-primary-100">No hidden fees or subscriptions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <Shield className="h-8 w-8 mb-3 mx-auto text-blue-300" />
                <h3 className="font-semibold mb-2">Privacy Focused</h3>
                <p className="text-sm text-primary-100">Your data stays on your device</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section id="featured" className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Most Popular Calculators
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get started with our most used financial planning tools
            </p>
          </div>
          <CalculatorGrid calculators={featuredCalculators} />
        </div>
      </section>

      {/* All Calculators by Category */}
      <section id="calculators" className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Financial Calculators
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our complete collection of financial planning tools
            </p>
          </div>

          <div className="space-y-16">
            {categories.map((category) => {
              const categoryCalcs = calculators.filter(c => c.category === category.id);
              return (
                <div key={category.id} id={category.id}>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                  <CalculatorGrid calculators={categoryCalcs} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose FinanceHub?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-xl transition-all duration-300">
              <div className="bg-primary-100 rounded-lg p-3 w-fit mb-4">
                <TrendingUp className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accurate Results</h3>
              <p className="text-gray-600 text-sm">
                Industry-standard formulas ensure precise calculations every time
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-xl transition-all duration-300">
              <div className="bg-accent-100 rounded-lg p-3 w-fit mb-4">
                <CalcIcon className="h-6 w-6 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600 text-sm">
                Intuitive interface with clear instructions and examples
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-xl transition-all duration-300">
              <div className="bg-green-100 rounded-lg p-3 w-fit mb-4">
                <Globe className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600 text-sm">
                Multi-currency support for users around the world
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-xl transition-all duration-300">
              <div className="bg-yellow-100 rounded-lg p-3 w-fit mb-4">
                <Shield className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-gray-600 text-sm">
                All calculations done locally - your data never leaves your device
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Start using our free calculators today and make smarter financial decisions
          </p>
          <Link href="#calculators" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Get Started Now
          </Link>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Comprehensive Financial Planning Tools for Everyone
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              FinanceHub provides a complete suite of free online financial calculators designed to help individuals 
              and families make informed financial decisions. Whether you&apos;re planning to buy a home, invest in mutual funds, 
              calculate your taxes, or plan for retirement, our calculators provide accurate results with detailed explanations.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Loan Calculators</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our loan calculators help you understand the true cost of borrowing. Calculate EMI (Equated Monthly Installments), 
              total interest payable, and create amortization schedules for home loans, car loans, personal loans, and more. 
              With support for various interest rate types and prepayment options, you can explore different repayment scenarios.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Investment Calculators</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Plan your investment strategy with our comprehensive investment calculators. Calculate returns on SIP (Systematic 
              Investment Plans), fixed deposits, recurring deposits, and mutual funds. Our compound interest calculator helps you 
              understand the power of compounding, while the ROI calculator evaluates investment performance across different assets.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tax Calculators</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Stay on top of your tax obligations with our tax calculators. Calculate income tax, GST, VAT, and sales tax with ease. 
              Our calculators are updated with current tax rates and support multiple tax regimes where applicable, helping you 
              optimize your tax planning.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Global Currency Support</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Unlike region-specific calculators, FinanceHub supports 20+ major world currencies including USD, EUR, GBP, INR, 
              AED, SGD, CAD, AUD, and JPY. This makes our tools valuable for users worldwide, whether you&apos;re in the United States, 
              United Kingdom, Europe, Asia, Australia, or anywhere else.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Use Financial Calculators?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Financial calculators save time and eliminate manual calculation errors. They help you compare different scenarios, 
              understand complex financial products, and make data-driven decisions. Whether you&apos;re a first-time homebuyer, 
              seasoned investor, small business owner, or planning for retirement, our calculators provide the insights you need.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
