import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState(null);
  const [updatedItem, setUpdatedItem] = useState({
    itemName: '',
    categoryName: '',
    description: '',
    price: '',
    rating: '',
    customization: '',
    processingTime: '',
    stockStatus: '',
  });

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('https://equi-sports-server-side-eight.vercel.app/add_equipments');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error Fetching Items',
          text: error.message,
        });
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`https://equi-sports-server-side-eight.vercel.app/add_equipments/${id}`, {
            method: 'DELETE',
          });
          if (response.ok) {
            setItems(items.filter((item) => item._id !== id));
            Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
          } else {
            Swal.fire('Error!', 'Failed to delete the item.', 'error');
          }
        } catch (error) {
          Swal.fire('Error!', error.message, 'error');
        }
      }
    });
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setUpdatedItem({
      itemName: item.itemName,
      categoryName: item.categoryName,
      description: item.description,
      price: item.price,
      rating: item.rating,
      customization: item.customization,
      processingTime: item.processingTime,
      stockStatus: item.stockStatus,
    });
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdatedItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://equi-sports-server-side-eight.vercel.app/add_equipments/${editingItem._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedItem),
      });
      if (response.ok) {
        setItems(items.map((item) => (item._id === editingItem._id ? { ...item, ...updatedItem } : item)));
        Swal.fire('Updated!', 'Your item has been updated.', 'success');
        setEditingItem(null);
      } else {
        Swal.fire('Error!', 'Failed to update the item.', 'error');
      }
    } catch (error) {
      Swal.fire('Error!', error.message, 'error');
    }
  };

  return (
    <div className="container mx-auto py-6 px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">Manage Products(Admin)</h2>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : items.length === 0 ? (
        <p className="text-center text-gray-500">No items available.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div
              key={item._id}
              className="bg-white border rounded shadow p-4 flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.itemName}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h3 className="text-xs font-semibold mb-2 text-center">{item.itemName}</h3>
              <div className="flex mt-4 space-x-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {editingItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded shadow-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Edit Item</h3>
            <form onSubmit={handleUpdateSubmit}>
              <input
                type="text"
                name="itemName"
                value={updatedItem.itemName}
                onChange={handleUpdateChange}
                placeholder="Item Name"
                className="w-full mb-3 px-3 py-2 border rounded"
              />
              <input
                type="text"
                name="categoryName"
                value={updatedItem.categoryName}
                onChange={handleUpdateChange}
                placeholder="Category Name"
                className="w-full mb-3 px-3 py-2 border rounded"
              />
              <textarea
                name="description"
                value={updatedItem.description}
                onChange={handleUpdateChange}
                placeholder="Description"
                className="w-full mb-3 px-3 py-2 border rounded"
              />
              <input
                type="number"
                name="price"
                value={updatedItem.price}
                onChange={handleUpdateChange}
                placeholder="Price"
                className="w-full mb-3 px-3 py-2 border rounded"
              />
              <input
                type="number"
                name="rating"
                value={updatedItem.rating}
                onChange={handleUpdateChange}
                placeholder="Rating"
                className="w-full mb-3 px-3 py-2 border rounded"
              />
              <input
                type="text"
                name="customization"
                value={updatedItem.customization}
                onChange={handleUpdateChange}
                placeholder="Customization"
                className="w-full mb-3 px-3 py-2 border rounded"
              />
              <input
                type="text"
                name="processingTime"
                value={updatedItem.processingTime}
                onChange={handleUpdateChange}
                placeholder="Processing Time"
                className="w-full mb-3 px-3 py-2 border rounded"
              />
              <input
                type="number"
                name="stockStatus"
                value={updatedItem.stockStatus}
                onChange={handleUpdateChange}
                placeholder="Stock Status"
                className="w-full mb-3 px-3 py-2 border rounded"
              />
              <div className="flex justify-end mt-4 space-x-3">
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateProduct;
