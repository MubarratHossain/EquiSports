import React from 'react';
import errorImage from './error.png'; 

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <img 
                    src={errorImage} 
                    alt="Error" 
                    className="w-1/2 max-w-sm mx-auto mb-6" 
                />
                <h1 className="text-4xl font-bold text-gray-800">Oops! Something went wrong.</h1>
                <p className="mt-4 text-gray-600">We couldn't find the page you were looking for.</p>
                <a href="/" className="mt-6 inline-block px-6 py-2 text-white bg-[#9538E2] rounded-full shadow-lg hover:bg-[#b451e0] transition duration-300">
                    Go Back Home
                </a>
            </div>
        </div>
    );
};

export default ErrorPage;