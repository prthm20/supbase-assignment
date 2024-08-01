import React from 'react';

const data = [
  {
    title: 'Instant APIs',
    description: 'We introspect your database to provide APIs instantly. Stop building repetitive CRUD endpoints and focus on your product.',
    linkText: 'Explore more',
    linkUrl: '#',
  },
  {
    title: 'TypeScript support',
    description: 'Type definitions built directly from your database schema',
    linkText: 'Explore more',
    linkUrl: '#',
  },
  {
    title: 'Install from CDN',
    description: 'Use Supabase in the browser without a build process',
    linkText: 'Explore more',
    linkUrl: '#',
  },
  {
    title: 'Local emulator',
    description: "Develop locally and push to production when you're ready",
    linkText: 'Explore more ',
    linkUrl: '#',
  },
  {
    title: 'Supabase CLI',
    description: 'Manage Supabase projects from your local machine',
    linkText: 'Explore more',
    linkUrl: '#',
  },
];

export default function ApiSection() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Instant APIs that do the hard work for you
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <a href={item.linkUrl} className="text-gray-400 hover:text-gray-700 hover:underline">
                {item.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
