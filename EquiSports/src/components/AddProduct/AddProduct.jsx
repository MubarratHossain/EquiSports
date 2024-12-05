import React from 'react';

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        img: '',
        ratings: '',
        description: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch('http://localhost:5000/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(product),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data);
            alert('Product added successfully!');
          })
          .catch((error) => {
            console.error('Error:', error);
            alert('Failed to add product.');
          });
      };
    
      return (
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Add a New Product</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
                className="border rounded w-full px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Price</label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                className="border rounded w-full px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Image URL</label>
              <input
                type="url"
                name="img"
                value={product.img}
                onChange={handleChange}
                className="border rounded w-full px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Ratings</label>
              <input
                type="number"
                step="0.1"
                name="ratings"
                value={product.ratings}
                onChange={handleChange}
                className="border rounded w-full px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Description</label>
              <textarea
                name="description"
                value={product.description}
                onChange={handleChange}
                className="border rounded w-full px-3 py-2"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Product
            </button>
          </form>
        </div>
      );
    };


export default AddProduct;