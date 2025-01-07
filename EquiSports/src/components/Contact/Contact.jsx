import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2

const Contact = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    
    // Show SweetAlert confirmation when feedback is submitted
    Swal.fire({
      icon: 'success',
      title: 'Feedback Submitted!',
      text: 'Thank you for your valuable feedback.',
      confirmButtonText: 'OK',
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-red-600 mb-6">Contact Us</h1>
      
      {/* Contact Info Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Get in Touch</h2>
        <p className="text-lg mb-4">If you have any questions, feel free to reach out to us by email or leave us your feedback below.</p>
        
        <div className="space-y-4">
          {/* Email Section */}
          <div>
            <p className="text-lg font-semibold text-gray-700">Email Us:</p>
            <a href="mailto:contact@rinterio.com" className="text-blue-600 hover:underline">contact@rinterio.com</a>
          </div>

          {/* Phone Section */}
          <div>
            <p className="text-lg font-semibold text-gray-700">Call Us:</p>
            <p className="text-blue-600">+880 123 456 7890</p>
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Your Feedback</h2>
        <p className="text-lg mb-4">We value your feedback. Please let us know how we can improve our services.</p>
        
        <form onSubmit={handleSubmitFeedback}>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Write your feedback here..."
            value={feedback}
            onChange={handleFeedbackChange}
            rows="5"
          />
          <button
            type="submit"
            className="mt-4 bg-red-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-red-700 focus:ring-2 focus:ring-green-500"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
