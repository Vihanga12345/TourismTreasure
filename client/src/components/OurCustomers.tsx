import React from 'react';

// Import customer images
import Customer1 from '../assets/Our_Customers/Customer 1.jpg';
import Customer2 from '../assets/Our_Customers/Customer 2.jpg';
import Customer3 from '../assets/Our_Customers/Customer 3.jpg';
import Customer4 from '../assets/Our_Customers/Customer 4.jpg';
import Customer5 from '../assets/Our_Customers/Customer 5.jpg';
import Customer6 from '../assets/Our_Customers/Customer 6.jpg';
import Customer7 from '../assets/Our_Customers/Customer 7.jpg';
import Customer8 from '../assets/Our_Customers/Customer 8.jpg';
import Customer9 from '../assets/Our_Customers/Customer 9.jpg';
import Customer10 from '../assets/Our_Customers/Customer 10.jpg';
import Customer11 from '../assets/Our_Customers/Customer 11.jpg';
import Customer12 from '../assets/Our_Customers/Customer 12.jpg';

// Simple array of customer images
const customerImages = [
  { id: 1, src: Customer1, alt: 'Customer 1' },
  { id: 2, src: Customer2, alt: 'Customer 2' },
  { id: 3, src: Customer3, alt: 'Customer 3' },
  { id: 4, src: Customer4, alt: 'Customer 4' },
  { id: 5, src: Customer5, alt: 'Customer 5' },
  { id: 6, src: Customer6, alt: 'Customer 6' },
  { id: 7, src: Customer7, alt: 'Customer 7' },
  { id: 8, src: Customer8, alt: 'Customer 8' },
  { id: 9, src: Customer9, alt: 'Customer 9' },
  { id: 10, src: Customer10, alt: 'Customer 10' },
  { id: 11, src: Customer11, alt: 'Customer 11' },
  { id: 12, src: Customer12, alt: 'Customer 12' },
];

const OurCustomers = () => {
  return (
    <section id="customers" className="py-20 bg-white text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Happy Customers</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Memories created with our valued customers from around the world exploring the beauty of Sri Lanka
          </p>
        </div>
        
        {/* Simple 4x3 Grid Layout */}
        <div className="grid grid-cols-4 gap-4">
          {customerImages.map((image) => (
            <div key={image.id} className="aspect-square overflow-hidden rounded-lg shadow-md">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCustomers;