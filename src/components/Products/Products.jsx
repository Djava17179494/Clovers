import React, { useState } from 'react';
import './Products.css';
import HandCream from "../../assets/handCream.webp";
import HerbalTea from "../../assets/HerbalTea.webp";
import Strawberry from "../../assets/strawberry.webp";
import Avocado from "../../assets/avocado.webp";
import Meat from "../../assets/meat.webp";
import Tuna from "../../assets/tuna.webp";

let Products = () => {
  const [count0, setCount0] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);

  const increment = (ind) => {
    if (ind === 0) {
      setCount0(count0 + 1);
    } else if (ind === 1) {
      setCount1(count1 + 1);
    } else if (ind === 2) {
      setCount2(count2 + 1);
    } else if (ind === 3) {
      setCount3(count3 + 1);
    } else if (ind === 4) {
      setCount4(count4 + 1);
    } else {
      setCount5(count5 + 1);
    }

  };

  const decrement = (ind) => {
  
      if (ind === 0 && count0 !== 0) {
        setCount0(count0 - 1);
      } else if (ind === 1 && count1 !== 0) {
        setCount1(count1 - 1);
      } else if (ind === 2 && count2 !== 0) {
        setCount2(count2 - 1);
      } else if (ind === 3 && count3 !== 0) {
        setCount3(count3 - 1);
      } else if (ind === 4 && count4 !== 0) {
        setCount4(count4 - 1);
      } else if (ind === 5 && count5 !== 0) {
        setCount5(count5 - 1);
      }
    

  };

  const product = [
    { id: 1, image: HandCream, name: 'Hand Cream', firstprice: null, price: 2.99 },
    { id: 2, image: HerbalTea, name: 'Herbal Tea 16ct.', firstprice: null, price: 3.99 },
    { id: 3, image: Strawberry, name: 'Strawberries - 1lb', firstprice: 4.99, price: 4.49 },
    { id: 4, image: Avocado, name: 'Hass Avbocados Ready-to-Eat - 1lb', firstprice: 2.99, price: 2.69 },
    { id: 5, image: Meat, name: 'Boneless Chicken Thigs - 1lb', firstprice: 4.49, price: 4.04 },
    { id: 6, image: Tuna, name: 'Tuna Steak Fillet- 1lb', firstprice: 29.99, price: 26.99 },
  ];


  return (
    <div className="product-list">
      {product.map((product, index) => (
        <div key={product.id} className="product-card">
          <div className="best-deal">Best Deal</div>
          <img src={product.image} alt='' className="product-image" />
          <div className="product-details">
            <p className="product-title">{product.name}</p>
            <p className="product-price">{product.firstprice && <span>${product.firstprice}</span>} ${product.price}</p>
            <div className="counter">
              <button className="counter-button" onClick={() => decrement(index)}>-</button>
              <span className="counter-value">{
              index===0 ? count0 : (index===1 ? count1 : (index===2 ? count2 : (index === 3 ? count3 :
              (index ===4 ? count4 : count5))))
              }</span>
              <button className="counter-button" onClick={() => increment(index)}>+</button>
            </div>
            <button className="product-button">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;