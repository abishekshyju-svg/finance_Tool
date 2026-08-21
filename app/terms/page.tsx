import { Metadata } from 'next';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions - FinanceHub',
  description: 'Read the terms and conditions for using FinanceHub financial calculators and tools.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-soft p-8 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-primary-100 p-3 rounded-lg">
              <FileText className="h-6 w-6 text-primary-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Terms & Conditions</h1>
          </div>
          <p className="text-gray-600">
            Last Updated: January 2024
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12 prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using FinanceHub (&quot;the Website&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you accept and agree to be 
              bound by the terms and provisions of this agreement. If you do not agree to these terms, 
              please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Calculators</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our financial calculators are provided as educational and informational tools. When using 
              our calculators, you agree that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>All calculations are estimates and should not be considered as professional financial advice</li>
              <li>Results may vary based on individual circumstances and market conditions</li>
              <li>You are responsible for verifying all calculations with qualified professionals</li>
              <li>We are not liable for any financial decisions made based on calculator results</li>
              <li>Calculators are provided &quot;as is&quot; without warranties of any kind</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content on FinanceHub, including but not limited to text, graphics, logos, calculator 
              algorithms, and software, is the property of FinanceHub and protected by intellectual property laws. 
              You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Conduct</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When using our Website, you agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Use the service for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the service or servers</li>
              <li>Scrape, copy, or replicate our calculators without permission</li>
              <li>Submit false, misleading, or malicious information</li>
              <li>Use automated systems to access the service excessively</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Privacy and Data</h2>
            <p className="text-gray-700 leading-relaxed">
              We respect your privacy. All calculations are performed locally in your browser, and we do not 
              store, collect, or transmit your financial data. For more information, please read our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Disclaimer of Warranties</h2>
            <p className="text-gray-700 leading-relaxed">
              FinanceHub is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We make no warranties, expressed 
              or implied, regarding the accuracy, reliability, or availability of the service. We do not guarantee 
              that the service will be uninterrupted, timely, secure, or error-free.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              To the maximum extent permitted by law, FinanceHub shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred 
              directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from 
              your use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Website may contain links to third-party websites or services that are not owned or controlled 
              by FinanceHub. We have no control over and assume no responsibility for the content, privacy policies, 
              or practices of any third-party sites or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Modifications to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
              posting to the Website. Your continued use of the service after changes constitutes acceptance of 
              the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of the jurisdiction in 
              which FinanceHub operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms & Conditions, please contact us at:
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mt-4">
              <p className="text-gray-700 mb-1">Email: support@financehub.com</p>
              <p className="text-gray-700">Phone: +1 (555) 123-4567</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
