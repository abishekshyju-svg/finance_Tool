import { Metadata } from 'next';
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - FinanceHub | Get in Touch',
  description: 'Contact FinanceHub for support, feedback, or partnership inquiries. We\'re here to help with your financial calculator needs.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions, feedback, or suggestions? We&apos;d love to hear from you. 
            Get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="input-field"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select className="input-field" required>
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="calculator">Calculator Request</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={6}
                    className="input-field"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full md:w-auto flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>

                <p className="text-sm text-gray-500">
                  * Required fields. We typically respond within 24-48 hours.
                </p>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Info Card */}
            <div className="bg-white rounded-xl shadow-soft p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-100 p-2 rounded-lg flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <a href="mailto:abishekshyju@gmail.com" className="text-primary-600 hover:text-primary-700">
                      abishekshyju@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Phone</div>
                    <a href="tel:+15551234567" className="text-gray-700 hover:text-primary-600">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-100 p-2 rounded-lg flex-shrink-0">
                    <MapPin className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Address</div>
                    <p className="text-gray-700">
                      123 Finance Street<br />
                      Suite 100<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                    <Clock className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Business Hours</div>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl shadow-soft p-6 border border-primary-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/#calculators" className="text-primary-600 hover:text-primary-700 flex items-center">
                    → View All Calculators
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-primary-600 hover:text-primary-700 flex items-center">
                    → About FinanceHub
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-primary-600 hover:text-primary-700 flex items-center">
                    → Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/disclaimer" className="text-primary-600 hover:text-primary-700 flex items-center">
                    → Disclaimer
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Need Help?</h3>
              <p className="text-sm text-blue-800">
                Before contacting us, check out our calculator pages. Each tool includes 
                detailed instructions, formulas, examples, and FAQs that might answer your questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
