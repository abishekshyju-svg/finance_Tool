import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FinanceHub - Free Online Financial Calculators & Tools",
  description:
    "Access 35+ free financial calculators including EMI, SIP, Loan, Tax, Insurance, and Investment calculators. Make informed financial decisions with our easy-to-use tools.",
  keywords:
    "financial calculator, EMI calculator, SIP calculator, loan calculator, tax calculator, investment calculator, retirement planning, mortgage calculator",
  authors: [{ name: "FinanceHub" }],
  openGraph: {
    title: "FinanceHub - Free Online Financial Calculators",
    description:
      "Access 35+ free financial calculators for loans, investments, taxes, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2963JX1YTE"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2963JX1YTE');
          `}
        </Script>

        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="s5vkSaida1n6ANTrxKcOjMGX2RI_ccVdIuH-w6ugVUM"
        />
      </head>
<meta name="msvalidate.01" content="D9DDBA4E5AD3C92BC84FF6BEC55FD111" />
      <body className={inter.className}>
        <Header />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
