import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import Swal from 'sweetalert2'; 
import { FaDollarSign, FaStar, FaShippingFast, FaCogs, FaCartPlus, FaCheckCircle } from 'react-icons/fa';  
import { AuthContext } from '../../providers/Authprovider'; 

const StoreDetails = () => {
  const { id } = useParams(); 
  const [itemDetails, setItemDetails] = useState(null);
  const [error, setError] = useState('');
  const { user } = useContext(AuthContext);  
  

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/add_equipments/${id}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            setError('Item not found');
          } else if (response.status === 500) {
            setError('Server error, please try again later');
          } else {
            setError('Failed to fetch item details');
          }
          return;
        }
  
        const data = await response.json();
        setItemDetails(data);
      } catch (err) {
        setError(`Error fetching item details: ${err.message}`);
      }
    };
  
    fetchItemDetails();
  }, [id]);

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!itemDetails) {
    return <div className="text-center text-lg text-yellow-400">Loading...</div>; 
  }

  
  const handleAddItem = async () => {
    if (!user) {
      
      Swal.fire({
        icon: 'warning',
        title: 'Login Required',
        text: 'You need to log in to add this item to your list.',
        confirmButtonText: 'Go to Login',
      }).then(() => {
        
      });
      return;
    }

    
    const itemData = {
      equipmentItem: {
        name: itemDetails.itemName,
        category: itemDetails.categoryName,
        description: itemDetails.description,
        price: itemDetails.price,
        image: itemDetails.image,
        rating: itemDetails.rating,
        stockStatus: itemDetails.stockStatus,
        customization: itemDetails.customization,
        processingTime: itemDetails.processingTime,
      },
      userId: user.id,  
    };

    try {
      const response = await fetch('http://localhost:5000/my-items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemData),
      });

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Item Added!',
          text: `You have successfully added ${itemDetails.itemName} to your list.`,
          confirmButtonText: 'OK',
        });
      } else {
        throw new Error(result.message || 'Failed to add item');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `Failed to add item: ${error.message}`,
      });
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-4xl font-semibold text-center mb-8 animate-rgbCycle">Product Details</h2> 

      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={itemDetails.image}
            alt={itemDetails.itemName}
            className="w-full h-auto max-h-96 object-contain rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 px-4 md:px-0">
          <h3 className="text-3xl font-bold text-red-600">{itemDetails.itemName}</h3>
          <p className="text-lg font-semibold text-yellow-600 mt-2">{itemDetails.categoryName}</p>
          <p className="text-md text-teal-500 mt-4">{itemDetails.description}</p>

          <div className="mt-6 space-y-4">
            <div className="flex items-center">
              <FaDollarSign className="text-red-600 mr-2" />
              <p className="text-xl font-bold text-red-600 mr-4">Price:</p> 
              <p className="text-xl text-green-600">{itemDetails.price} BDT</p>
            </div>
            <div className="flex items-center">
              <FaStar className="text-yellow-500 mr-2" />
              <p className="text-md font-bold text-red-600 mr-4">Rating:</p> 
              <p className="text-md text-yellow-500">{itemDetails.rating} ★</p>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-teal-500 mr-2" />
              <p className="text-md font-bold text-red-600 mr-4">Stock Status:</p> 
              <p className="text-md text-teal-500">{itemDetails.stockStatus}</p>
            </div>
            <div className="flex items-center">
              <FaCogs className="text-teal-500 mr-2" />
              <p className="text-md font-bold text-red-600 mr-4">Customization:</p> 
              <p className="text-md text-teal-500">{itemDetails.customization}</p>
            </div>
            <div className="flex items-center">
              <FaShippingFast className="text-teal-500 mr-2" />
              <p className="text-md font-bold text-red-600 mr-4">Processing Time:</p> 
              <p className="text-md text-teal-500">{itemDetails.processingTime}</p>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={handleAddItem}
              className="w-full md:w-auto bg-red-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
            >
              <FaCartPlus className="inline mr-2" /> Add Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreDetails;
