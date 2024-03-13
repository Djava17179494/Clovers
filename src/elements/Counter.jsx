import "./Counter.css";
import React, { useState } from 'react';

let Counter = () => {
    const [count, setCount] = useState(0);
  
    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
    };
    return (
        <label>
            Quantity
            <div className="all-input" >
                <input type="text" className="productCount" value={count} />
                <div className="plus-minus">
                    <p className="plus" onClick={()=> increment()}>+</p>
                    <p className="minus" onClick={()=> decrement()}>-</p>
                </div>
            </div>
        </label>
    )
}

export default Counter;