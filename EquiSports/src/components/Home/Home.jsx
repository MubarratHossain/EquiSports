import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

import Banner from "../Banner/Banner";
import Product from "../Product/Product";
import UpdateProduct from '../Updateproduct/UpdateProduct';
import AboutUs from '../Aboutus/Aboutus';
import Contact from '../Contact/Contact';

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const images = [
        'https://i.postimg.cc/T25Q95DV/istockphoto-1056257342-612x612.jpg',
        'https://i.postimg.cc/02RgdsbN/sports-sales-rep.webp',
        'https://i.postimg.cc/zGzc0X5q/what-does-an-inside-sales-representative-do.webp',
        'https://i.postimg.cc/c1c7T7J8/istockphoto-521686491-612x612.jpg'
    ];

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Banner />
            <Product />
            <UpdateProduct />

            {isLoading ? (
                <div className="flex justify-center items-center py-20">
                    <span className="loading loading-spinner text-error"></span>
                </div>
            ) : (
                <section className="py-6 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 shadow-lg rounded-lg max-w-[95%] mx-auto">
                    <div className="container mx-auto flex items-center justify-between">
                        <div className="w-1/2 flex justify-center">
                            <div className="w-56 h-56 rounded-full overflow-hidden">
                                <img
                                    src={images[currentImageIndex]}
                                    alt="Sales Pro"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="w-1/2 text-center sm:text-left">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                                Create an elite program with the help of your dedicated Sales Pro
                            </h2>
                            <p className="text-lg text-white mb-6">
                                Our expert sales professionals are here to help you build a tailored, elite program to meet your specific needs.
                            </p>
                            <Link to="/connect"> {/* Use Link for routing */}
                                <button className="bg-green-500 text-black font-bold py-2 px-6 rounded-md hover:bg-green-600 transition duration-300">
                                    Connect Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            <AboutUs />
            <Contact></Contact>

            <section className="brands-section py-8 bg-white mb-4 rounded-lg max-w-[95%] mx-auto">
                <div className="container mx-auto text-center bg-white rounded-lg">
                    <h2 className="text-3xl font-semibold mb-4 animate-rgbCycle">Our Brands</h2>
                    <div className="brand-marquee">
                        <marquee behavior="scroll" direction="left" scrollamount="10">
                            <img src="https://i.postimg.cc/g24tL9Cr/nike-logo-black-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg" alt="Brand 1" className="mx-4 h-12 inline-block" />
                            <img src="https://i.postimg.cc/ryb4fhks/web-192037111.webp" alt="Brand 2" className="mx-4 h-12 inline-block" />
                            <img src="https://i.postimg.cc/nr8DhzT7/Yonex-Logo-wine.png" alt="Brand 3" className="mx-4 h-12 inline-block" />
                            <img src="https://i.postimg.cc/SR5tsc3d/wilson-black5472-logowik-com.webp" alt="Brand 4" className="mx-4 h-12 inline-block" />
                            <img src="https://i.postimg.cc/KYZQm94F/Gray-Nicolls-Secondary-Logo-no-background.png" alt="Brand 5" className="mx-4 h-12 inline-block" />
                        </marquee>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
