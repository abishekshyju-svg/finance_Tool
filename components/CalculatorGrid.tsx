import Link from 'next/link';
import { Calculator } from '@/types/calculator';
import * as Icons from 'lucide-react';

interface CalculatorGridProps {
  calculators: Calculator[];
}

export default function CalculatorGrid({ calculators }: CalculatorGridProps) {
  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as any;
    return IconComponent || Icons.Calculator;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {calculators.map((calculator) => {
        const Icon = getIcon(calculator.icon);
        return (
          <Link
            key={calculator.id}
            href={`/calculator/${calculator.slug}`}
            className="calculator-card group"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-lg group-hover:shadow-glow transition-all duration-300 shrink-0">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                  {calculator.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {calculator.description}
                </p>
                {calculator.isRegionSpecific && (
                  <div className="mt-2">
                    <span className="inline-block text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                      {calculator.region}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
