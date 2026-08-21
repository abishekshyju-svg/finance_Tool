import { Metadata } from 'next';
import { Cookie } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cookie Policy - FinanceHub',
  description: 'Learn about how FinanceHub uses cookies and how you can control them.',
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12">
      <div className="container-custom max-w-4xl">
        <div className="bg-white rounded-2xl shadow-soft p-8 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <Cookie className="h-6 w-6 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Cookie Policy</h1>
          </div>
          <p className="text-gray-600">Last Updated: January 2024</p>
        </div>

        <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12 prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies are small text files that are stored on your device when you visit a website. They help 
              websites remember your preferences and improve your browsing experience. Cookies do not contain 
              personal information and cannot access data on your device.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              FinanceHub uses cookies for the following purposes:
            </p>

            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Essential Cookies (Required)</h3>
                <p className="text-sm text-blue-800 mb-2">
                  These cookies are necessary for the website to function properly:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm text-blue-800">
                  <li>Session management</li>
                  <li>Security features</li>
                  <li>Load balancing</li>
                  <li>Basic website functionality</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Preference Cookies (Optional)</h3>
                <p className="text-sm text-green-800 mb-2">
                  These cookies remember your choices and preferences:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm text-green-800">
                  <li>Selected currency preference</li>
                  <li>Language settings</li>
                  <li>Theme preferences</li>
                  <li>Calculator defaults</li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Analytics Cookies (Optional)</h3>
                <p className="text-sm text-purple-800 mb-2">
                  These cookies help us understand how visitors use our website:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm text-purple-800">
                  <li>Page views and navigation paths</li>
                  <li>Time spent on pages</li>
                  <li>Calculator usage statistics</li>
                  <li>Error tracking and debugging</li>
                </ul>
                <p className="text-sm text-purple-800 mt-2">
                  Note: All analytics data is anonymous and aggregated.
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Advertising Cookies (Optional)</h3>
                <p className="text-sm text-yellow-800 mb-2">
                  These cookies may be used to display relevant advertisements:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm text-yellow-800">
                  <li>Display contextual ads</li>
                  <li>Measure ad effectiveness</li>
                  <li>Limit ad frequency</li>
                </ul>
                <p className="text-sm text-yellow-800 mt-2">
                  Note: We do not sell your data to advertisers.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may use third-party services that set their own cookies:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Google Analytics:</strong> Tracks anonymous usage statistics</li>
              <li><strong>Google AdSense:</strong> Displays contextual advertisements</li>
              <li><strong>Content Delivery Networks:</strong> Improves website loading speed</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              These third parties have their own privacy policies. We recommend reviewing their policies 
              to understand how they use cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have several options for managing cookies:
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Browser Settings</h3>
              <p className="text-gray-700 mb-3">
                Most browsers allow you to control cookies through their settings:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookie Management Tools</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Clear all cookies from your browser</li>
                <li>Block all third-party cookies</li>
                <li>Use private/incognito browsing mode</li>
                <li>Install browser extensions for cookie management</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Impact of Disabling Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you disable cookies, some features may not work properly:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Currency preference will not be saved</li>
              <li>You may need to re-enter calculator preferences</li>
              <li>Some interactive features may be limited</li>
              <li>Website performance may be affected</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Note:</strong> Even with cookies disabled, our calculators will still work as all 
              calculations are performed locally in your browser.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Duration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use both session and persistent cookies:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Remain for a set period (typically 30-365 days)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to Cookie Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this cookie policy from time to time to reflect changes in our practices or 
              legal requirements. The updated policy will be posted on this page with a revised date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about our use of cookies, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 mb-1">Email: privacy@financehub.com</p>
              <p className="text-gray-700">Phone: +1 (555) 123-4567</p>
            </div>
          </section>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <p className="text-sm text-blue-900 leading-relaxed">
              <strong>By continuing to use FinanceHub, you consent to our use of cookies as described in this policy.</strong>
              <br /><br />
              You can withdraw consent at any time by adjusting your browser settings or contacting us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
