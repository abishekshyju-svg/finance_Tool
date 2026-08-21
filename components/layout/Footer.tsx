import Link from 'next/link';
import { Calculator, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { label: 'Home', href: '/' },
      { label: 'All Calculators', href: '/#calculators' },
      { label: 'About Us', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
    ],
    'Popular Tools': [
      { label: 'EMI Calculator', href: '/calculator/emi-calculator' },
      { label: 'SIP Calculator', href: '/calculator/sip-calculator' },
      { label: 'Home Loan Calculator', href: '/calculator/home-loan-calculator' },
      { label: 'Income Tax Calculator', href: '/calculator/income-tax-calculator' },
    ],
    'Legal': [
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Disclaimer', href: '/disclaimer' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-2 rounded-lg">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">FinanceHub</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted source for free financial calculators and planning tools. 
              Make informed financial decisions with our easy-to-use calculators designed for users worldwide.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@financehub.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} FinanceHub. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center">
              Made with ❤️ for financial empowerment worldwide
            </p>
          </div>
        </div>
      </div>

      {/* SEO Content */}
      <div className="bg-gray-950 py-6">
        <div className="container-custom">
          <div className="text-gray-500 text-xs leading-relaxed">
            <p className="mb-2">
              <strong className="text-gray-400">About FinanceHub:</strong> FinanceHub is a comprehensive financial planning platform offering 35+ free online calculators 
              for loans, investments, taxes, insurance, and retirement planning. Our tools support multiple currencies including USD, EUR, GBP, INR, AED, SGD, CAD, AUD, 
              and JPY, making financial planning accessible to users worldwide. Whether you&apos;re calculating EMI for a home loan, planning SIP investments, 
              computing tax liabilities, or planning retirement, FinanceHub provides accurate, easy-to-use tools with detailed explanations and examples.
            </p>
            <p>
              <strong className="text-gray-400">Popular Searches:</strong> EMI calculator, SIP calculator, home loan calculator, personal loan calculator, 
              car loan calculator, mortgage calculator, income tax calculator, GST calculator, compound interest calculator, retirement calculator, 
              FD calculator, PPF calculator, mutual fund calculator, insurance calculator, budget planner, debt payoff calculator, ROI calculator, 
              currency converter, net worth calculator, savings calculator
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
