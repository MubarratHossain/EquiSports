import React, { useState, useEffect } from 'react';
import { FaStar, FaEye } from 'react-icons/fa';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        
        setTimeout(() => {
            fetch('http://localhost:5000/products')
                .then(response => response.json())
                .then(data => {
                    setProducts(data);
                    setLoading(false); 
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    setLoading(false); 
                });
        }, 1000); 
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>
            
            
            {loading ? (
                <div className="flex justify-center items-center">
                    <span className="loading loading-spinner text-error"></span>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map(product => (
                        <div key={product._id} className="bg-gray-300 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                            <img 
                                src={product.img} 
                                alt={product.name} 
                                className="w-full h-56 object-cover mb-4 rounded-md"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-lg font-bold text-gray-900">${product.price}</span>
                                <div className="flex items-center text-yellow-500">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <FaStar key={index} className={`mr-1 ${index < product.ratings ? 'text-yellow-500' : 'text-gray-300'}`} />
                                    ))}
                                </div>
                            </div>
                            <button className="mt-4 w-full bg-gradient-to-r from-red-500 to-red-700 text-white hover:from-red-600 hover:to-red-800 shadow-lg py-2 rounded-md transition duration-200 flex items-center justify-center">
                                <FaEye className="mr-2" /> 
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Product;
