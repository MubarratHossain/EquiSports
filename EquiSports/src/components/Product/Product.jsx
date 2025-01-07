import React, { useState, useEffect } from 'react';
import { FaStar, FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const navigate = useNavigate();

    const handleCategoryChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedCategories([selectedValue]);

        if (selectedValue === 'all') {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(
                products.filter(product => product.categoryName === selectedValue)
            );
        }
    };

    // Fetch categories using `categoryName`
    useEffect(() => {
        setTimeout(() => {
            fetch('https://equi-sports-server-side-eight.vercel.app/add_equipments')
                .then(response => response.json())
                .then(data => {
                    setProducts(data);
                    setFilteredProducts(data);
                    const uniqueCategories = ['all', ...new Set(data.map(product => product.categoryName))];
                    setCategories(uniqueCategories);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    setLoading(false);
                });
        }, 1000);
    }, []);

    const handleViewDetails = (id) => {
        navigate(`/equipment-details/${id}`);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-red-600">Our Products</h2>

            {loading ? (
                <div className="flex justify-center items-center">
                    <span className="loading loading-spinner text-error"></span>
                </div>
            ) : (
                <div className="flex flex-wrap">
                    {/* Filter Section */}
                    <div className="w-full sm:w-1/4 p-4 rounded-lg shadow-md mb-6 sm:mb-0">
                        <div>
                            <label className="block text-xl font-bold text-red-600 mb-2">Select Category</label>
                            <select
                                className={`form-select w-full font-semibold border-2 rounded-md ${selectedCategories[0] === 'all' ? 'border-red-600 text-red-600' : 'border-red-600 text-red-600'}`}
                                onChange={handleCategoryChange}
                                value={selectedCategories[0] || 'all'}
                            >
                                {categories.map((category, index) => (
                                    <option key={index} value={category} className="text-red-600">
                                        {category === 'all' ? 'All Categories' : category}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Products Section */}
                    <div className="w-full sm:w-3/4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pl-4">
                        {filteredProducts.map(product => (
                            <div
                                key={product._id}
                                className="bg-white border border-gray-200 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200 ease-in-out"
                            >
                                <img
                                    src={product.image}
                                    alt={product.itemName}
                                    className="w-full h-32 object-cover mb-3 rounded-md"
                                />
                                <h3 className="text-[10px] md:text-xs lg:text-xs font-bold text-gray-800">{product.itemName}</h3>
                                <div className="block justify-between items-center my-2">
                                    <span className="text-lg font-bold text-gray-900">${product.price}</span>
                                    <div className="flex items-center text-red-600">
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <FaStar
                                                key={index}
                                                className={`mr-1 ${index < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleViewDetails(product._id)} // Use `product._id` instead of `item._id`
                                    className="mt-3 w-full bg-red-600 text-white text-xs md:text-[15px] lg:text-[15px] py-1 md:py-2 lg:py-2 rounded-md hover:bg-red-700 transition duration-200 flex items-center justify-center"
                                >
                                    <FaEye className="mr-2" />
                                    View Details
                                </button>

                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Product;
