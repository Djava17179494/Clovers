import "./CounterForSummary.css";
import React, { useState } from 'react';

const CounterForSummary = () => {
    const [count, setCount] = useState(0);
    const [totalSum, setTotalSum] = useState(0);

    const increment = () => {
        setCount(count + 1);
        setTotalSum((count + 1) * 2.99); // Обновляем итоговую сумму при увеличении счётчика
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
            setTotalSum((count - 1) * 2.99); // Обновляем итоговую сумму при уменьшении счётчика
        }
    };

    const handleChange = (event) => {
        if (event.target.value.length > 0) {
            if (0 <= +event.key && +event.key <= 9) {
                setCount(+event.target.value * 10 + +event.key);
                setTotalSum((+event.target.value * 10 + +event.key) * 2.99);
            } else if (event.keyCode === 8) {
                setCount(+(event.target.value.slice(0, -1)));
                setTotalSum((+(event.target.value.slice(0, -1))) * 2.99);
            }
        }


    }
    return (
        <label className="label">
            <div className="all-input" >
                <div className="plus-minus">
                    <p className="plus" onClick={increment}>+</p>
                    <input type="text" className="productCount"
                        onKeyUp={handleChange}
                        value={count} />
                    <p className="minus" onClick={decrement}>-</p>
                </div>
                <p className="totalSum">${totalSum.toFixed(2)}</p> {/* Отображаем итоговую сумму */}
            </div>

        </label>
    );
};
export default CounterForSummary;

