import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Store = () => {
  const [equipment, setEquipment] = useState([]);
  const [filteredEquipment, setFilteredEquipment] = useState([]);
  const [error, setError] = useState('');
  const [isAscending, setIsAscending] = useState(true);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        const response = await fetch('https://equi-sports-server-side-eight.vercel.app/add_equipments');
        const data = await response.json();
        if (response.ok) {
          setTimeout(() => {
            setEquipment(data);
            setFilteredEquipment(data); 
            setLoading(false);
          }, 1000);
        } else {
          setError('Failed to fetch equipment data');
          setLoading(false);
        }
      } catch (err) {
        setError(`Error fetching data: ${err.message}`);
        setLoading(false);
      }
    };

    fetchEquipment();
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/equipment-details/${id}`);
  };

  const handleSortByPrice = () => {
    const sortedEquipment = [...filteredEquipment].sort((a, b) =>
      isAscending ? a.price - b.price : b.price - a.price
    );
    setFilteredEquipment(sortedEquipment);
    setIsAscending(!isAscending);
  };

  const handleFilterByCategory = (category) => {
    if (category === '') {
      setFilteredEquipment(equipment); // Reset to all items if no category is selected
    } else {
      const filtered = equipment.filter(item => item.categoryName.toLowerCase().includes(category.toLowerCase()));
      setFilteredEquipment(filtered);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Equipment Store</h2>

      {error && (
        <div className="alert bg-red-200 p-4 mb-6 text-center">{error}</div>
      )}

      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-spinner text-error"></span>
        </div>
      ) : (
        <>
          {filteredEquipment.length === 0 && (
            <div className="text-center text-gray-600">No equipment found</div>
          )}

          {filteredEquipment.length > 0 && (
            <>
              <div className="text-right flex justify-center items-center gap-4 mb-4 max-w-[90%] mx-auto">
                {/* Sort by Price Button */}
                <button
                  onClick={handleSortByPrice}
                  className=" p-2 md:px-4 md:py-2 lg:px-4 lg:py-4  bg-gradient-to-r from-red-500 to-red-700 text-white text-xs md:text-[16px] lg:text-[18px] rounded"
                >
                  Sort by Price ({isAscending ? 'Ascending' : 'Descending'})
                </button>

                {/* Dropdown for Filtering */}
                <select
                  className=" py-2 md:px-4 md:py-2 lg:px-4 lg:py-4 text-[15px] rounded-lg border border-gray-300 md:text-[16px] lg:text-[18px]  text-gray-700 bg-white shadow-sm"
                  onChange={(e) => handleFilterByCategory(e.target.value)}
                >
                  <option value="">Filter by Category</option>
                  <option value="">All Items</option>
                  <option value="Football(Soccer)">Football</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Cricket">Cricket</option>
                  <option value="Badminton">Badminton</option>
                  <option value="Baseball">Baseball</option>
                  <option value="Volleyball">Volleyball</option>
                </select>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-[90%] mx-auto">
                {filteredEquipment.map((item) => (
                  <div
                    key={item._id}
                    className="border border-gray-300 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
                  >
                    <img
                      src={item.image}
                      alt={item.itemName}
                      className="w-full h-32 md:h-40 lg:h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 truncate">
                        {item.itemName}
                      </h3>
                      <p className="text-sm text-gray-600">{item.price} BDT</p>
                      <div className="mt-3">
                        <button
                          onClick={() => handleViewDetails(item._id)}
                          className="p-2 md:px-4 md:py-2 lg:px-4 lg:py-2 bg-gradient-to-r from-red-500 to-red-700 text-white rounded w-full text-sm"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Store;
