import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/Authprovider";


const UpdateProduct = () => {
  const { itemId } = useParams();
  const [itemData, setItemData] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); 

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/my-items/${itemId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch item details");
        }
        const data = await response.json();
        setItemData(data);
      } catch (err) {
        setError(`Error fetching item: ${err.message}`);
      }
    };

    fetchItemDetails();
  }, [itemId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/my-items/${itemId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(itemData),
      });

      if (!response.ok) {
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: "Item has been updated successfully.",
        });
        navigate("/myItems");
      } else {
        const responseData = await response.json();
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: responseData.message || "Failed to update the item.",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Error updating item: ${err.message}`,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setItemData((prevData) => ({
      ...prevData,
      equipmentItem: {
        ...(prevData.equipmentItem || {}),
        [name]: value,
      },
    }));
  };

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!itemData) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Update Item</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="userName" className="block text-gray-700 font-bold">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            value={user?.displayName || "Anonymous"}
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            readOnly
          />
        </div>

        <div className="mb-4">
          <label htmlFor="userEmail" className="block text-gray-700 font-bold">
            User Email
          </label>
          <input
            type="email"
            id="userEmail"
            value={user?.email || "No Email Provided"}
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            readOnly
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={itemData.equipmentItem.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 font-bold">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={itemData.equipmentItem.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={itemData.equipmentItem.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={itemData.equipmentItem.price}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="stockStatus" className="block text-gray-700 font-bold">
            Stock Status
          </label>
          <input
            type="number"
            id="stockStatus"
            name="stockStatus"
            value={itemData.equipmentItem.stockStatus}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold">
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            value={itemData.equipmentItem.image}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 w-full">
          Update Item
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
