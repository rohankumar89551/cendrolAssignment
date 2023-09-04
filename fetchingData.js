// ProductList.js
import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      {/* Render the list of products */}
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <button>View Details</button>
          {/* Add to Cart button */}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
