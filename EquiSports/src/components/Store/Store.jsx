import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Store = () => {
  const [equipment, setEquipment] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        const response = await fetch('http://localhost:5000/add_equipments');
        const data = await response.json();
        if (response.ok) {
          setEquipment(data);
        } else {
          setError('Failed to fetch equipment data');
        }
      } catch (err) {
        setError(`Error fetching data: ${err.message}`);
      }
    };

    fetchEquipment();
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/equipment-details/${id}`);
  };

 
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Equipment List</h2>

      {error && (
        <div className="alert bg-red-200 p-4 mb-6 text-center">
          {error}
        </div>
      )}

      {!error && equipment.length === 0 && (
        <div className="text-center text-gray-600">Loading...</div>
      )}

      {equipment.length > 0 && (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Image</th>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Category</th>
                <th className="border border-gray-300 p-2">Price</th>
                <th className="border border-gray-300 p-2">Stock</th>
                <th className="border border-gray-300 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {equipment.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-2 text-center">
                    <img
                      src={item.image}
                      alt={item.itemName}
                      className="w-16 h-16 object-cover mx-auto"
                    />
                  </td>
                  <td className="border border-gray-300 p-2 text-center">{item.itemName}</td>
                  <td className="border border-gray-300 p-2 text-center">{item.categoryName}</td>
                  <td className="border border-gray-300 p-2 text-center">{item.price} BDT</td>
                  <td className="border border-gray-300 p-2 text-center">{item.stockStatus}</td>
                  <td className="border border-gray-300 p-2 text-center">
                    <button
                      onClick={() => handleViewDetails(item._id)}
                      className="px-3 py-1 bg-gradient-to-r from-red-500 to-red-700 text-white rounded "
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Store;
