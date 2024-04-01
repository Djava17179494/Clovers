import React from "react";
import "./ProductDetails.css";
import Handcreamfoto from "../../assets/hand-cream-foto.webp";
import Counter from "../../elements/Counter";
import Accardion from "../Support/Support";
import Heart from "../../assets/heart.svg";

let ProductDetails = () => {
    return (
        <div className="all-product-details">
            <div className="summary-list-div-product-details-page">
                <p className="punkti-product-details-page">Deals</p>
                <p className="punkti-product-details-page">Food</p>
                <p className="punkti-product-details-page">Beverages</p>
                <p className="punkti-product-details-page">Household</p>
                <p className="punkti-product-details-page">Personal Care</p>
                <p className="punkti-product-details-page">Most Popular</p>
                <p className="punkti-product-details-page">My Orders</p>
            </div>
            <div className="foto-and-about-accardion-display-flex">
                <div className="foto-about">
                    <img src={Handcreamfoto} alt="" className="foto-of-product" />
                    <p className="product-description-displaynone-phone">I'm a product description. This is a great place to "sell" your product and grab buyers' attention.
                        Describe your product clearly and concisely.
                        Use unique keywords.
                        Write your own description instead of using manufacturers' copy.
                    </p>
                </div>
                <div className="about-and-accardion">
                    <p className="sku">SKU 0099</p>
                    <h2 className="name-of-product">Hand Cream</h2>
                    <h2 className="price-of-product">$ 2.99</h2>
                    <Counter />
                    <div className="button-and-favorit-product">
                    <button className="add-to-cart-button">Add to Cart</button>
                    <div className="favorite-div">
                    <img src={Heart} alt="" className="foto-heart"/>
                    </div>
                    </div>
                    <p className="product-description">I'm a product description. This is a great place to "sell" your product and grab buyers' attention.
                        Describe your product clearly and concisely.
                        Use unique keywords.
                        Write your own description instead of using manufacturers' copy.</p>
                    <div className="accardion-width">
                        <Accardion />
                    </div>
                </div>

            </div>
        </div>


    );

}
export default ProductDetails;