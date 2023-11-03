// import React from 'react'

import { useEffect, useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch the list of products when the component mounts
        const fetchData = async () => {
          try {
            const response = await fetch('https://remote-app-api-c4a491abd7bc.herokuapp.com/api/products');
            if (response.ok) {
              const data = await response.json();
              setProducts(data);
            } else {
              console.error('Failed to fetch products');
            }
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchData(); // Call the fetchData function
    
        // No cleanup function is necessary in this case
    
      }, []);


  return (
    <>

    <div className="items-container">
      {products.map((product) => (
        <div className="item" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h2 className="item-name">{product.name}</h2>
          <p className="item-price">${product.price}</p>
        </div>
      ))}
    </div>
    
    </>

  )
}

export default Products;