import React from 'react';

const TestimonialCard = ({ name, role, image, testimonial }) => {
  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg shadow-md flex flex-col items-center">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full mb-4 object-cover"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-400">{role}</p>
      <p className="mt-3 text-center">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;