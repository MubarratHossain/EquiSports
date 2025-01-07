import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Title */}
      <h1 className="text-4xl font-semibold text-center text-red-600 mb-6">About EquiSports</h1>

      {/* Marquee Animation */}
      <div className="mb-6">
        <marquee className="text-green-600 text-xl font-semibold">Welcome to EquiSports – Your Ultimate Destination for Sports Equipment and News!</marquee>
      </div>

      {/* Section 1: Introduction */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-3xl font-semibold text-green-600 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
          At EquiSports, we are dedicated to bringing you the finest sports equipment and apparel, designed to help you perform at your best. Whether you're a seasoned athlete or just starting, our range of products caters to all levels of expertise and passion for sports.
        </p>
      </div>

      {/* Section 2: Who We Are */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-3xl font-semibold text-green-600 mb-4">Who We Are</h2>
        <p className="text-lg text-gray-700">
          Founded by a group of passionate sports enthusiasts, EquiSports has quickly become a leading name in the world of sports equipment. Our team consists of athletes, designers, and experts who share a common goal: to make sports accessible and enjoyable for everyone.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          With years of experience in the industry, we strive to provide innovative solutions and products that meet the diverse needs of sports enthusiasts. From top-of-the-line tennis rackets to football gear, we are your trusted partner for all things sports.
        </p>
      </div>

      {/* Section 3: Our Services */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-3xl font-semibold text-green-600 mb-4">Our Services</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>High-quality sports equipment and apparel</li>
          <li>Expert advice on product selection</li>
          <li>Fast shipping and delivery</li>
          <li>Exclusive discounts for members</li>
          <li>Sports news, tips, and updates</li>
        </ul>
      </div>

      {/* Section 4: Our Values */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-3xl font-semibold text-green-600 mb-4">Our Values</h2>
        <p className="text-lg text-gray-700 mb-4">
          At EquiSports, we are guided by values that shape our business and help us deliver the best experience to our customers:
        </p>
        <ul className="list-inside list-circle text-lg text-gray-700">
          <li><strong>Integrity:</strong> We uphold honesty and transparency in all our dealings.</li>
          <li><strong>Innovation:</strong> We constantly explore new technologies and trends to stay ahead of the game.</li>
          <li><strong>Customer-centric:</strong> Our customers are at the heart of everything we do.</li>
          <li><strong>Passion:</strong> We are passionate about sports and bringing the best to our community.</li>
        </ul>
      </div>

      {/* Section 5: Contact Info */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-3xl font-semibold text-green-600 mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-4">
          Have any questions or feedback? We’d love to hear from you! Reach out to us through any of the following:
        </p>
        <p className="text-lg text-gray-700">
          <strong>Email:</strong> <a href="mailto:support@equosports.com" className="text-blue-600">support@equosports.com</a>
        </p>
        <p className="text-lg text-gray-700">
          <strong>Phone:</strong> <span className="text-blue-600">+123 456 7890</span>
        </p>
      </div>

      {/* Section 6: Social Media */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-3xl font-semibold text-green-600 mb-4">Follow Us</h2>
        <div className="flex space-x-6">
          <a href="https://facebook.com/EquiSports" className="text-blue-600 text-xl">Facebook</a>
          <a href="https://twitter.com/EquiSports" className="text-blue-400 text-xl">Twitter</a>
          <a href="https://instagram.com/EquiSports" className="text-pink-600 text-xl">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
