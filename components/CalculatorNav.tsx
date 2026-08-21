'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { calculators, categories } from '@/data/calculators';

export default function CalculatorNav() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const filteredCalculators = calculators.filter(calc =>
    calc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <nav className="bg-gradient-to-r from-primary-600 to-primary-700 shadow-lg sticky top-16 z-40">
        <div className="container-custom">
          <div className="flex items-center justify-between py-3">
            {/* Categories Dropdown */}
            <div className="relative z-50">
              <button
                onClick={() => setActiveCategory(activeCategory ? null : 'all')}
                className="flex items-center space-x-2 text-white hover:text-primary-100 transition-colors px-4 py-2 rounded-lg hover:bg-white/10"
              >
                <span className="font-medium">All Calculators</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${activeCategory ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {activeCategory && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 animate-fade-in z-50">
                  {categories.map((category) => {
                    const categoryCalcs = calculators.filter(c => c.category === category.id);
                    return (
                      <div key={category.id}>
                        <Link
                          href={`/#${category.id}`}
                          className="block px-4 py-2 text-gray-800 hover:bg-primary-50 hover:text-primary-600 font-medium"
                          onClick={() => setActiveCategory(null)}
                        >
                          {category.name}
                          <span className="text-xs text-gray-500 ml-2">({categoryCalcs.length})</span>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Search */}
            <div className="flex items-center relative z-50">
              {showSearch ? (
                <div className="relative animate-fade-in">
                  <input
                    type="text"
                    placeholder="Search calculators..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50"
                    autoFocus
                  />
                  {searchQuery && (
                    <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-xl max-h-96 overflow-y-auto z-50 border border-gray-200">
                      {filteredCalculators.length > 0 ? (
                        <div className="py-2">
                          {filteredCalculators.map((calc) => (
                            <Link
                              key={calc.id}
                              href={`/calculator/${calc.slug}`}
                              className="block px-4 py-2 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                              onClick={() => {
                                setSearchQuery('');
                                setShowSearch(false);
                              }}
                            >
                              <div className="font-medium text-gray-800">{calc.name}</div>
                              <div className="text-xs text-gray-500">{calc.description}</div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="px-4 py-8 text-center text-gray-500">
                          No calculators found
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setShowSearch(true)}
                  className="flex items-center space-x-2 text-white hover:text-primary-100 transition-colors px-4 py-2 rounded-lg hover:bg-white/10"
                >
                  <Search className="h-5 w-5" />
                  <span className="hidden sm:inline">Search</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Click outside to close */}
      {(activeCategory || showSearch) && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => {
            setActiveCategory(null);
            if (!searchQuery) setShowSearch(false);
          }}
        />
      )}
    </>
  );
}
