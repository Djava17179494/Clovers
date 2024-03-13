import React from "react";
import "./ProductDetails.css";
import Handcreamfoto from "../../assets/hand-cream-foto.webp";
import Counter from "../../elements/Counter";

let ProductDetails = () => {
    return (
        <div className="all-product-details">
            <img src={Handcreamfoto} alt="" className="foto-of-product" />
            <div>
                <p className="sku">SKU 0099</p>
                <h2 className="name-of-product">Hand Cream</h2>
                <h2 className="price-of-product">$ 2.99</h2>
                <Counter />
                <button className="add-to-cart-button">Add to Cart</button>
                <p className="product-description">I'm a product description. This is a great place to "sell" your product and grab buyers' attention.
                    Describe your product clearly and concisely.
                    Use unique keywords.
                    Write your own description instead of using manufacturers' copy.</p>
            </div>
        </div>


    );

}
export default ProductDetails;