import React, { useState } from 'react';
import './Products.css'; 
import HandCream from "../../assets/handCream.webp";
import HerbalTea from "../../assets/HerbalTea.webp";
import Strawberry from "../../assets/strawberry.webp";

const Products = ({ products }) => {
  const [counts, setCounts] = useState(Array(products.length).fill(0));

  const incrementCount = (index) => {
    setCounts(prevCounts => {
      const newCounts = [...prevCounts];
      newCounts[index]++;
      return newCounts;
    });
  };

  const decrementCount = (index) => {
    setCounts(prevCounts => {
      const newCounts = [...prevCounts];
      if (newCounts[index] > 0) {
        newCounts[index]--;
      }
      return newCounts;
    });
  };

  const product = [
    { id: 1, image: {HandCream}, name: 'Hand Cream', price: 2.99 },
    { id: 2, image: {HerbalTea}, name: 'Product 2', price: 3.99 },
    { id: 3, image: {Strawberry}, name: 'Product 3', firstprice: "4̶.̶9̶9̶", price: 4.49},
  ];

  return (
    <div className="product-list">
      {product.map((product, index) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt='' className="product-image" />
          <div className="product-details">
            <h2 className="product-title">{product.name}</h2>
            <p className="product-price">${product.firstprice} ${product.price}</p>
            <div className="counter">
              <button className="counter-button" onClick={() => decrementCount(index)}>-</button>
              <span className="counter-value">{counts[index]}</span>
              <button className="counter-button" onClick={() => incrementCount(index)}>+</button>
            </div>
            <button className="product-button">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
