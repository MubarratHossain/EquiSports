import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';

const experts = [
  {
    name: "John Doe",
    age: 34,
    rating: 4.8,
    achievements: "Olympic Medalist, 10+ years in professional tennis.",
  },
  {
    name: "Jane Smith",
    age: 29,
    rating: 4.9,
    achievements: "World Champion in badminton, Sports equipment designer.",
  },
  {
    name: "Sam Turner",
    age: 40,
    rating: 4.7,
    achievements: "Professional football coach, former player.",
  },
  {
    name: "Emily Brown",
    age: 33,
    rating: 4.6,
    achievements: "Multiple tennis Grand Slam wins, Sports analyst.",
  },
  {
    name: "Michael Johnson",
    age: 45,
    rating: 4.9,
    achievements: "Former Olympic gold medalist in athletics, equipment consultant.",
  },
  {
    name: "Chris Lee",
    age: 38,
    rating: 4.8,
    achievements: "Ex-professional basketball player, sports equipment entrepreneur.",
  },
  {
    name: "Olivia Green",
    age: 32,
    rating: 4.7,
    achievements: "Professional swimmer, sponsored athlete.",
  },
  {
    name: "David Wilson",
    age: 37,
    rating: 4.6,
    achievements: "World record holder in cycling, sports product advisor.",
  },
  {
    name: "Sophia Adams",
    age: 28,
    rating: 4.8,
    achievements: "Gold medalist in wrestling, sports product reviewer.",
  },
  {
    name: "Liam Harris",
    age: 42,
    rating: 4.9,
    achievements: "Former world champion in rugby, sports equipment innovator.",
  },
];

const Connect = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-semibold text-center text-red-600 mb-6">Meet Our Experts</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experts.map((expert, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              <FaRegUserCircle className="text-6xl text-gray-600" />
            </div>
            <h2 className="text-xl font-semibold text-center text-green-600 mb-2">{expert.name}</h2>
            <p className="text-center text-gray-700 mb-2">Age: {expert.age}</p>
            <p className="text-center text-gray-700 mb-4">Rating: {expert.rating} / 5</p>
            <p className="text-center text-gray-700 text-sm">{expert.achievements}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connect;
