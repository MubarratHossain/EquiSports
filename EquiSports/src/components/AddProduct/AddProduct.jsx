import React, { useEffect, useState } from 'react';
import { AuthContext } from '../../providers/Authprovider';
import { useContext } from 'react';
import Swal from 'sweetalert2';

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const [productData, setProductData] = useState({
    image: '',
    itemName: '',
    categoryName: '',
    description: '',
    price: '',
    rating: '',
    customization: '',
    processingTime: '',
    stockStatus: '',
    userEmail: '',
    userName: '',
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    if (user) {
      setProductData((prevState) => ({
        ...prevState,
        userEmail: user.email || '',
        userName: user.displayName || 'Anonymous User',
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/add_equipments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      const result = await response.json();
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Product Added',
          text: 'Your product was added successfully!',
          confirmButtonColor: '#3085d6',
        });
        setProductData((prevState)=>({
          ...prevState,
          image: '',
          itemName: '',
          categoryName: '',
          description: '',
          price: '',
          rating: '',
          customization: '',
          processingTime: '',
          stockStatus: '',
          
        }));
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Failed to Add Product',
          text: result.message || 'Something went wrong. Please try again.',
          confirmButtonColor: '#d33',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'An Error Occurred',
        text: error.message,
        confirmButtonColor: '#d33',
      });
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Add New Equipment</h2>

      {message && (
        <div className={`alert ${message.includes('success') ? 'bg-green-200' : 'bg-red-200'} p-4 mb-6 text-center`}>
          {message}
        </div>
      )}

      <form className="max-w-3xl mx-auto bg-white p-6 shadow-md rounded" onSubmit={handleSubmit}>

        <div className="mb-4">
          <label htmlFor="image" className="block font-medium mb-2">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={productData.image}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>


        <div className="mb-4">
          <label htmlFor="itemName" className="block font-medium mb-2">Item Name</label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={productData.itemName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>


        <div className="mb-4">
          <label htmlFor="categoryName" className="block font-medium mb-2">Category Name</label>
          <input
            type="text"
            id="categoryName"
            name="categoryName"
            value={productData.categoryName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>


        <div className="mb-4">
          <label htmlFor="description" className="block font-medium mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>


        <div className="mb-4">
          <label htmlFor="price" className="block font-medium mb-2">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>


        <div className="mb-4">
          <label htmlFor="rating" className="block font-medium mb-2">Rating</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={productData.rating}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>


        <div className="mb-4">
          <label htmlFor="customization" className="block font-medium mb-2">Customization</label>
          <input
            type="text"
            id="customization"
            name="customization"
            value={productData.customization}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>


        <div className="mb-4">
          <label htmlFor="processingTime" className="block font-medium mb-2">Processing Time</label>
          <input
            type="text"
            id="processingTime"
            name="processingTime"
            value={productData.processingTime}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>


        <div className="mb-4">
          <label htmlFor="stockStatus" className="block font-medium mb-2">Stock Status</label>
          <input
            type="number"
            id="stockStatus"
            name="stockStatus"
            value={productData.stockStatus}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>


        <div className="mb-4">
          <label htmlFor="userEmail" className="block font-medium mb-2">User Email</label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            value={productData.userEmail}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>


        <div className="mb-4">
          <label htmlFor="userName" className="block font-medium mb-2">User Name</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={productData.userName}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>


        <div className="text-center">
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
