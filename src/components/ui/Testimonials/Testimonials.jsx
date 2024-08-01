// components/TestimonialsSection.js

import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard';

const testimonialsData = [
  {
    name: 'Alice Johnson',
    role: 'CEO, TechCorp',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    testimonial: 'This service is fantastic! Highly recommended.',
  },
  {
    name: 'Bob Smith',
    role: 'CTO, Innovate Inc.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    testimonial: 'Amazing experience, the team was very professional.',
  },
  {
    name: 'Charlie Brown',
    role: 'Product Manager, Creatives',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    testimonial: 'Great results and awesome support!',
  },
  {
    name: 'Diana Prince',
    role: 'Designer, Artsy',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    testimonial: 'Beautiful designs and easy collaboration.',
  },
  {
    name: 'Eve Torres',
    role: 'Developer, CodeLab',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    testimonial: 'Code quality is top-notch. Will work with them again!',
  },
  {
    name: 'Frank Castle',
    role: 'Engineer, BuildIt',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    testimonial: 'Efficient and reliable. Exceeded expectations.',
  },
  // Add more testimonials as needed
];

const TestimonialsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const limit = 3; // Number of testimonials to show initially

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  const testimonialsToShow = showAll
    ? testimonialsData
    : testimonialsData.slice(0, limit);

  return (
    <div className="py-10 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonialsToShow.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            role={testimonial.role}
            image={testimonial.image}
            testimonial={testimonial.testimonial}
          />
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={handleToggleShowAll}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-500 transition duration-300"
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSection;
