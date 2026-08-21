import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { calculators } from '@/data/calculators';
import CalculatorNav from '@/components/CalculatorNav';
import CalculatorPageTemplate from '@/components/calculator/CalculatorPageTemplate';
import { getCalculatorContent } from '@/data/calculatorContent';

interface CalculatorPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return calculators.map((calculator) => ({
    slug: calculator.slug,
  }));
}

export async function generateMetadata({ params }: CalculatorPageProps): Promise<Metadata> {
  const calculator = calculators.find(c => c.slug === params.slug);
  
  if (!calculator) {
    return {
      title: 'Calculator Not Found',
    };
  }

  return {
    title: `${calculator.name} - Free Online Calculator | FinanceHub`,
    description: calculator.description,
    keywords: `${calculator.name}, ${calculator.category} calculator, financial calculator, ${calculator.slug}`,
    openGraph: {
      title: calculator.name,
      description: calculator.description,
      type: 'website',
    },
  };
}

export default function CalculatorPage({ params }: CalculatorPageProps) {
  const calculator = calculators.find(c => c.slug === params.slug);
  
  if (!calculator) {
    notFound();
  }

  const content = getCalculatorContent(calculator.slug);

  return (
    <>
      <CalculatorNav />
      <CalculatorPageTemplate calculator={calculator} content={content} />
    </>
  );
}
