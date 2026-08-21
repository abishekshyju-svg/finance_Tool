import { Metadata } from 'next';
import { Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - FinanceHub',
  description: 'Learn how FinanceHub protects your privacy. We do not collect or store your financial data.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12">
      <div className="container-custom max-w-4xl">
        <div className="bg-white rounded-2xl shadow-soft p-8 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-gray-600">Last Updated: January 2024</p>
        </div>

        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-3">🔒 Your Privacy Matters</h2>
          <p className="text-green-800 leading-relaxed">
            FinanceHub is committed to protecting your privacy. All calculations are performed locally 
            in your browser. We do not collect, store, or transmit any of your financial data.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12 prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Do NOT Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you use our financial calculators, we do NOT collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Loan amounts, income, or any financial figures you enter</li>
              <li>Investment plans or portfolio information</li>
              <li>Tax details or income information</li>
              <li>Bank account or credit card information</li>
              <li>Social security numbers or government IDs</li>
              <li>Any personally identifiable financial data</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              All calculations happen entirely within your web browser. Your data never leaves your device.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We May Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect limited, non-personal information to improve our service:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Analytics Data:</strong> Page views, calculator usage statistics, browser type, device type</li>
              <li><strong>Cookies:</strong> Essential cookies for website functionality</li>
              <li><strong>IP Address:</strong> For security and fraud prevention</li>
              <li><strong>Technical Data:</strong> Browser version, screen resolution, operating system</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              This data is anonymous and cannot be used to identify you personally.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Any anonymous data we collect is used solely to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Improve calculator functionality and user experience</li>
              <li>Understand which calculators are most popular</li>
              <li>Fix bugs and technical issues</li>
              <li>Optimize website performance</li>
              <li>Prevent abuse and ensure security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              We use minimal cookies for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site (optional)</li>
              <li><strong>Preference Cookies:</strong> Remember your currency selection and settings</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              You can control cookies through your browser settings. Disabling cookies may affect website functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed">
              We may use third-party services such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li><strong>Google Analytics:</strong> For website analytics (anonymized)</li>
              <li><strong>Content Delivery Networks (CDN):</strong> For faster page loading</li>
              <li><strong>Advertising Networks:</strong> May display contextual ads</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              These services have their own privacy policies. We do not share any personal or financial 
              data with these services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We take security seriously:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>All calculator operations are performed locally in your browser</li>
              <li>We use HTTPS encryption for secure communication</li>
              <li>No financial data is transmitted to our servers</li>
              <li>We implement industry-standard security practices</li>
              <li>Regular security audits and updates</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children&apos;s Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our service is not directed to children under 13. We do not knowingly collect information 
              from children. If you believe a child has provided information to us, please contact us 
              immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Use our calculators without providing personal information</li>
              <li>Disable cookies in your browser</li>
              <li>Request information about data we may hold (limited to anonymous analytics)</li>
              <li>Opt-out of analytics tracking</li>
              <li>Contact us with privacy concerns</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this privacy policy from time to time. Changes will be posted on this page 
              with an updated date. Continued use of the website constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about this privacy policy, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 mb-1">Email: privacy@financehub.com</p>
              <p className="text-gray-700">Phone: +1 (555) 123-4567</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
