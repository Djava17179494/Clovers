import React from "react";
import "./ProductDetails.css";
import Handcreamfoto from "../../assets/hand-cream-foto.webp";
import Counter from "../../elements/Counter";
let ProductDetails = () => {
    return (
        <div className="all-product-details">
            <img src={Handcreamfoto} alt="" className="foto-of-product"/>
            <div>
                <h2 className="name-of-product">Hand Cream</h2>
                <h2 className="price-of-product">$ 2.99</h2>
                <Counter />
            </div>
        </div>
    );

}
export default ProductDetails;