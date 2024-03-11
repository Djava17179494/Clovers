import React from "react";
import './Products.css';

const Product = () => {
    return (
      <div className="card">
        <img
          className="card-image"
          src=""
          alt=""
        />
        <div className="card-content">
          <h2 className="card-title">Hand Cream</h2>
          <p className="card-price">$10.99</p>
          <button className="card-button">Add to Cart</button>
        </div>
      </div>
    );
  };
  
  export default Product;