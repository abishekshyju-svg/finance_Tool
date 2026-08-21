'use client';

import { Calculator } from '@/types/calculator';
import { CalculatorContent } from '@/types/calculator';
import * as Icons from 'lucide-react';
import { useState } from 'react';
import CurrencySelector from './CurrencySelector';
import { defaultCurrency } from '@/data/currencies';
import CalculatorWidget from './CalculatorWidget';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Calculator as CalcIcon, CheckCircle, HelpCircle, Info } from 'lucide-react';
import AdUnit from '@/components/ads/AdUnit';

interface CalculatorPageTemplateProps {
  calculator: Calculator;
  content: CalculatorContent;
}

export default function CalculatorPageTemplate({ calculator, content }: CalculatorPageTemplateProps) {
  const [selectedCurrency, setSelectedCurrency] = useState(defaultCurrency);

  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as any;
    return IconComponent || Icons.Calculator;
  };

  const Icon = getIcon(calculator.icon);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Calculators
          </Link>
        </div>

        {/* Page Header */}
        <div className="bg-white rounded-2xl shadow-soft p-8 mb-8">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-4 rounded-xl shadow-lg">
                <Icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {calculator.name}
                </h1>
                <p className="text-lg text-gray-600 mb-3">
                  {calculator.description}
                </p>
                {calculator.isRegionSpecific && (
                  <div className="inline-flex items-center space-x-2 bg-yellow-50 border border-yellow-200 text-yellow-800 px-3 py-1 rounded-lg text-sm">
                    <Info className="h-4 w-4" />
                    <span>Region-specific: {calculator.region}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="w-full sm:w-auto">
              <CurrencySelector 
                selectedCurrency={selectedCurrency}
                onCurrencyChange={setSelectedCurrency}
              />
            </div>
          </div>
        </div>

        {/* Top Ad - Above Calculator */}
        <AdUnit type="calculator-top" className="mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Widget - Sticky on desktop */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-6">
              <CalculatorWidget 
                calculator={calculator}
                currency={selectedCurrency}
              />
              
              {/* Sidebar Ad - Desktop Only */}
              <div className="hidden lg:block">
                <AdUnit type="sidebar" />
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <section className="bg-white rounded-xl shadow-soft p-6 md:p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary-100 p-2 rounded-lg">
                  <BookOpen className="h-5 w-5 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">{content.introduction}</p>
            </section>

            {/* How to Use */}
            <section className="bg-white rounded-xl shadow-soft p-6 md:p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-accent-100 p-2 rounded-lg">
                  <CalcIcon className="h-5 w-5 text-accent-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">How to Use This Calculator</h2>
              </div>
              <ol className="space-y-3">
                {content.howToUse.map((step, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-primary-500 to-accent-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Formula */}
            <section className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl shadow-soft p-6 md:p-8 border border-primary-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Calculation Formula</h2>
              <div className="bg-white rounded-lg p-4 mb-4 border-l-4 border-primary-500">
                <code className="text-primary-600 font-mono text-sm md:text-base break-all">
                  {content.formula}
                </code>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <strong>Where:</strong> {content.formulaExplanation}
              </p>
            </section>

            {/* Example Calculation */}
            <section className="bg-white rounded-xl shadow-soft p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Example Calculation</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Input Values:</h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    {content.example.inputs.map((input, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-700">{input.label}:</span>
                        <span className="font-semibold text-gray-900">{input.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Calculation:</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <code className="text-sm text-gray-700 break-all">
                      {content.example.calculation}
                    </code>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Result:</h3>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 font-semibold">{content.example.result}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* In-Content Ad - Middle of page */}
            <AdUnit type="in-article" className="my-8" />

            {/* Benefits */}
            <section className="bg-white rounded-xl shadow-soft p-6 md:p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Benefits</h2>
              </div>
              <ul className="space-y-3">
                {content.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQs */}
            <section className="bg-white rounded-xl shadow-soft p-6 md:p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <HelpCircle className="h-5 w-5 text-yellow-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
              </div>
              <div className="space-y-6">
                {content.faqs.map((faq, index) => (
                  <div key={index} className="border-l-4 border-primary-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Disclaimer */}
            <section className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 md:p-8">
              <div className="flex items-start space-x-3">
                <Info className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-yellow-900 mb-2">Disclaimer</h2>
                  <p className="text-yellow-800 text-sm leading-relaxed">
                    {content.disclaimer}
                  </p>
                </div>
              </div>
            </section>

            {/* Bottom Ad - After content */}
            <AdUnit type="calculator-bottom" className="mt-8" />

            {/* Matched Content Ad - Related Calculators */}
            <AdUnit type="matched-content" className="mt-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
