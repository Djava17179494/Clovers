import React, { useState } from 'react';

let Counter = ({index}) => {
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

    return (
        <div className="counter">
            <button className="counter-button" onClick={() => decrement(index)}>-</button>
            <span className="counter-value">{
                index === 0 ? count0 : (index === 1 ? count1 : (index === 2 ? count2 : (index === 3 ? count3 :
                    (index === 4 ? count4 : count5))))
            }</span>
            <button className="counter-button" onClick={() => increment(index)}>+</button>
        </div>
    )
}

export default Counter; 