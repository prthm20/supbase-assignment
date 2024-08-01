'use client';
import React from 'react';
import Plan1 from '@/components/ui/Plans/Plan1';
import Plan2 from '@/components/ui/Plans/Plan2';
import Plan3 from '@/components/ui/Plans/Plan3';
import Plan4 from '@/components/ui/Plans/Plan4';
import Link from 'next/link';
import Billingfundamentals from '@/components/ui/Billingfundamentals/Billingfundamentals';
import Compareplans from '@/components/ui/Compareplans/Compareplans';
import QuoteSection from '@/components/ui/QuoteSection/QuoteSection';
import FeaturedQuestions from '@/components/ui/FeaturedQuestions/FeaturedQuestions';
import Footer from '@/components/ui/Footer/Footer';
import Navbar from '@/components/ui/Navbar/Navbar';
import ThemeToggle from '@/components/ui/Themetoggle/Themetoggle';

function Page() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-100 dark:bg-gray-900 min-h-screen p-8 transition-colors duration-300">
        <div className="flex justify-between items-center mb-8">
          <ThemeToggle />
        </div>
        <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mb-8 transition-colors duration-300">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">
            Neon Pricing
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 text-center">
            Start free, launch with predictable costs, and scale efficiently.
          </p>
        </section>
        <section className="flex flex-wrap justify-center gap-6 mb-8 px-4">
          <div className="flex-1 max-w-xs">
            <Plan1 />
          </div>
          <div className="flex-1 max-w-xs">
            <Plan2 />
          </div>
          <div className="flex-1 max-w-xs">
            <Plan3 />
          </div>
          <div className="flex-1 max-w-xs">
            <Plan4 />
          </div>
        </section>
        <section className="flex flex-col items-center justify-center text-center py-8 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-inner mb-8 transition-colors duration-300">
          <p className="text-lg text-gray-800 dark:text-gray-100 mb-4">
            Not sure which plan is right for you?
          </p>
          <Link href="#">
      
              Explore the detailed plan comparison.
            
          </Link>
        </section>
        <section className="px-4 mb-8">
          <Billingfundamentals />
        </section>
        <section className="px-4 mb-8">
          <Compareplans />
        </section>
        <section className="px-4 mb-8">
          <QuoteSection />
        </section>
        <section className="px-4 mb-8">
          <FeaturedQuestions />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Page;
