import React, { useEffect, useState } from 'react';

const Addcategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error('Error fetching categories:', error));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-6">Sports Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categories.map((category) => (
                    <div
                        key={category._id}
                        className="bg-gray-300 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
                    >
                        <img
                            src={category.imageUrl}
                            alt={category.name}
                            className="w-full h-56 object-cover mb-4 rounded-md"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 text-center">{category.name}</h3>
                        <div className="mt-4 space-y-2">
                            {Object.values(category.options).map((option, index) => (
                                <button
                                    key={index}
                                    className="w-full bg-gradient-to-r from-slate-400 to-red-600 text-black font-bold py-2 rounded-md flex items-center justify-center space-x-2 hover:bg-gradient-to-r hover:from-slate-500 hover:to-red-400 transition duration-200"
                                >
                                    <span>{option}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Addcategory;
