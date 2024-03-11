import "./Counter.css";



let Counter = () => {
return (
               <label>
                    Quantity
                    <div className="all-input" >
                    <input type="number" className="productCount"/>
                    <div className="plus-minus">
                        <p className="plus">+</p>
                        <p className="minus">-</p>
                    </div>
                    </div>
                </label>
)
}

export default Counter;