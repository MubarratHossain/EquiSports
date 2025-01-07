import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyItems = () => {
  const [myItems, setMyItems] = useState([]);

  // Fetch items from /my-items API
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('https://equi-sports-server-side-eight.vercel.app/my-items');
      setMyItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  // Handle Buy Button click (only show SweetAlert)
  const handleBuy = (item) => {
    // Trigger SweetAlert success notification
    Swal.fire({
      icon: 'success',
      title: 'Buy Successful!',
      text: `You bought one ${item.equipmentItem.name}.`,
      confirmButtonText: 'OK',
    });
  };

  // Handle Delete Button click (remove item from backend and locally)
  const handleDelete = async (itemId) => {
    try {
      // Send DELETE request to backend
      await axios.delete(`https://equi-sports-server-side-eight.vercel.app/my-items/${itemId}`);
      // Remove the item locally after successful deletion
      setMyItems((prevItems) => prevItems.filter(item => item._id !== itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">My Items</h1>
      <table className="w-full table-auto border-collapse text-sm">
        <thead>
          <tr>
            <th className="border px-2 py-1 text-left">Image</th>
            <th className="border px-2 py-1 text-left">Price</th>
            <th className="border px-2 py-1 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {myItems.map(item => (
            <tr key={item._id}>
              <td className="border px-2 py-1">
                <img
                  className="w-12 h-12 object-cover rounded-md"
                  src={item.equipmentItem.image}
                  alt={item.equipmentItem.name}
                />
              </td>
              <td className="border px-2 py-1 text-sm">{item.equipmentItem.price} BDT</td>
              <td className="border px-2 py-1">
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleBuy(item)}
                    className="bg-green-500 text-white px-3 py-1 rounded-md shadow-md hover:bg-green-600 transition text-xs"
                    disabled={item.equipmentItem.stockStatus === 0}
                  >
                    {item.equipmentItem.stockStatus === 0 ? 'Out of Stock' : 'Buy'}
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md shadow-md hover:bg-red-600 transition text-xs"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyItems;
