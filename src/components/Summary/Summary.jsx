import React, { useState } from "react";
import "./Summary.css";
import HandCream from "../../assets/hand-cream-foto.webp"
import CounterForSummary from "../../elements/CounterForSummary";
import Description from '../../assets/description.svg';
import Promo from "../../assets/promo.svg";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

let Summary = () => {
    let [showInput, setShowInput] = useState(false);
    let enterCode = () => {
        setShowInput(!showInput);
    }
    let [showNote, setShowNote] = useState(false);
    let noteInput = () => {
        setShowNote(!showNote);
    }
    return (
        <div className="all-summary-page">
            <div className="summary-list-div">
                <p className="punkti">Deals</p>
                <p className="punkti">Food</p>
                <p className="punkti">Beverages</p>
                <p className="punkti">Household</p>
                <p className="punkti">Personal Care</p>
                <p className="punkti">Most Popular</p>
                <p className="punkti">My Orders</p>
            </div>
            <div className="my-card-and-order-summary">
                <div className="desctop-display-flex-row">
                    <div className="summary-my-card">
                        <h2 className="my-card-h2">My card</h2>
                        <div className="summary-my-card-item">
                            <img src={HandCream} className="summary-my-card-foto" alt="" />
                            <div className="summary-my-card-name-price-counter-total">
                                <div className="summary-my-card-name-and-price">
                                    <p className="summary-my-card-name">Hand Cream</p>
                                    <p className="summary-my-card-price">$2.99</p>
                                </div>
                                <div className="summary-my-card-counter-and-total">
                                    <CounterForSummary />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="promo-code" >
                        <div className="promo-code-top" onClick={enterCode}>
                            <img src={Promo} alt="" style={{ opacity: 0.8 }} className="promo-foto" />
                            <p className="enter-promocode">Enter a promo code</p>
                        </div>
                        <div className="promo-code-input-part" style={{ display: showInput ? "flex" : "none" }}>
                            <input type="text" placeholder="Enter a promo code" className="promo-code-input" />
                            <div className="promo-input-button">Apply</div>
                        </div>
                    </div>
                    <div className="add-a-note-all">
                        <div className="add-a-note-top" onClick={noteInput}>
                            <img src={Description} alt="" style={{ opacity: 0.8 }} />
                            <p className="add-a-note">Add a note</p>
                        </div>
                        <div className="add-a-note-input-part" style={{ display: showNote ? "flex" : "none" }}>
                            <input type="text" placeholder="Instructions? Special requests? Add them here." className="add-a-note-input" />
                        </div>
                    </div>
                </div>
                <div className="summary-order-summary">
                    <h2 className="order-summary-h2">Order summary</h2>
                    <div className="subtotal-and-final-price-estimate">
                        <div className="subtotal-and-final-price">
                            <p className="subtotal-p">Subtotal</p>
                            <p className="price-p">$2.99</p>
                        </div>
                        <p className="estimate-p">Estimate Delivery</p>
                    </div>
                    <div className="total-sum-button">
                        <div className="total-sum">
                            <p className="total-h2">Total</p>
                            <p className="totalPrice-p">$2.99</p>
                        </div>
                        <button className="checkout-button">Checkout</button>
                        <div className="secure-checkout-with-logo">
                            <LockOutlinedIcon />
                            <p className="secure-checkout-p">Secure Checkout</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Summary;
