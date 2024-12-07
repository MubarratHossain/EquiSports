import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';  

const MyItems = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();  

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/my-items');

        if (!response.ok) {
          setError('Failed to fetch items');
          return;
        }

        const data = await response.json();
        setItems(data);
      } catch (err) {
        setError(`Error fetching items: ${err.message}`);
      }
    };

    fetchItems();
  }, []);

  const handleDelete = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:5000/my-items/${itemId}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        setItems((prevItems) => prevItems.filter(item => item._id !== itemId));  
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Item has been deleted successfully.',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to delete the item.',
        });
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Error deleting item: ${err.message}`,
      });
    }
  };

  const handleUpdate = (itemId) => {
    navigate(`/update/${itemId}`);  
  };

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-4xl font-semibold text-center mb-8 animate-rgbCycle">My Items</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.length === 0 ? (
          <div className="col-span-full text-center text-xl text-gray-500">No items found</div>
        ) : (
          items.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
            >
              <img
                src={item.equipmentItem.image} 
                alt={item.equipmentItem.name}
                className="w-full h-48 object-contain mb-4 rounded-lg"
              />
              <h3 className="text-2xl font-semibold text-red-600">{item.equipmentItem.name}</h3>
              <p className="text-lg text-teal-500 mt-2">{item.equipmentItem.category}</p>

              
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-semibold text-gray-700">${item.equipmentItem.price}</span>
                <span className="text-md text-yellow-500">{item.equipmentItem.rating} ★</span>
              </div>

              <div className="flex justify-between items-center mt-6">
                <button
                  onClick={() => handleUpdate(item._id)}  
                  className="bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 flex items-center"
                >
                  <FaEdit className="mr-2" />
                  Update
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 flex items-center"
                >
                  <FaTrashAlt className="mr-2" />
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyItems;
