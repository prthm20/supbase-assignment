// app/page.js
'use client'
import React from 'react';
import Navbar from '@/components/ui/Navbar/Navbar';
import Intro from '@/components/ui/intro/Intro';
import Usage from '@/components/ui/Usage/Usage';
import Community from '@/components/ui/Community/Community';
import TestimonialsSection from '@/components/ui/Testimonials/Testimonials';
import { CardHoverEffectDemo } from '@/components/ui/Templatess/Templatess';
import Dynamicsection from '@/components/ui/Dynamicsection/Dynamicsection';
import ThemeToggle from '@/components/ui/Themetoggle/Themetoggle';
import ApiSection from '@/components/ui/Apisection/Apisection';
import Footer from '@/components/ui/Footer/Footer';
function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <Navbar />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex justify-end">
          <ThemeToggle />
        </div>

        <section id="intro" className="py-12">
          <Intro />
        </section>

        <section id="usage" className="py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <Usage />
        </section>

        <section id="community" className="py-12">
          <Community />
        </section>

        <section id="testimonials" className="py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <TestimonialsSection />
        </section>

        <section id="templates" className="py-12">
          <CardHoverEffectDemo />
        </section>

        
          
            <ApiSection />
         
          <section id="dynamic-section" className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <Dynamicsection />
          </section>
        
      </div>
      <div className="bg-gradient-to-r text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-600 mb-4">
            Discover More with Our Advanced Features
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Unlock the potential of our platform by exploring our advanced features and integrations. Join us today and see what you can achieve!
          </p>
          <a
            href=""
            className="inline-block bg-white  hover:bg-purple-100 px-6 py-3 rounded-md shadow-md font-semibold transition-all duration-300 ease-in-out"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
    <div className='pt-56'>

      <Footer></Footer>
    </div>
    </div>
  );
}

export default Home;
