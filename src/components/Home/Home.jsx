import React from "react";
import "./Home.css"
import Vegetables from "../../assets/vegetables.webp"
import AppStore from "../../assets/Appstore.webp"
import GooglePay from "../../assets/GooglePlay.webp"
import Phone from "../../assets/Shahar_d.webp"
import PhoneImg from "../../assets/phoneimg.webp"
import { useState } from "react";

let Home = () => {
    let categories = [
        { image: Vegetables, name: "Vegetables" },
        { image: Vegetables, name: "Vegetables" },
        { image: Vegetables, name: "Vegetables" },
        { image: Vegetables, name: "Vegetables" },
        { image: Vegetables, name: "Vegetables" },
        { image: Vegetables, name: "Vegetables" },
        { image: Vegetables, name: "Vegetables" },
        { image: Vegetables, name: "Vegetables" }
    ]
    const [backgroundColor, setBackgroundColor] = useState('white');
    const [borderColor, setBorder] = useState('white');
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        if (!focused) {
            setBackgroundColor('black');
            setFocused(true);
            setBorder("red")
        }
    }
        return (
            <div className="aydan">
                <div className="first-block">
                    <div className="most-popular"><h1>Most Popular Categories</h1></div>
                    <div className="categories-box">
                        {categories.map((item, index) => (
                            <div key={index} className="boxes">
                                <div className="boxes-images">
                                    <img alt="" src={item.image} />
                                    <div className="circle-image"></div>
                                </div>
                                <div className="item-name">{item.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="second-block">
                    <div className="order2"><p>Save Time & Money</p>
                        <h1>Shop With Us on the Go</h1>
                        <p>Your weekly shopping routine, at your door in just a click</p>
                        <div className="buttonss">
                            <div className="img1"><img src={AppStore} alt="" /></div>
                            <div className="img2"><img src={GooglePay} alt="" /></div>
                        </div>
                    </div>
                    <div className="position-image">
                        <div className="phoneImg">
                            <img src={Phone} alt="" className="image-position" width={250} />
                            <img src={PhoneImg} alt="" className="image-absolute" width={167} />
                        </div>
                    </div>
                </div>

                <div className="third-block">
                    <div className="subscribeAndSave">
                        <p>Subscribe & Save</p>
                        <div className="text-display-flex">
                            <h1>20%</h1>
                            <p>off</p>
                        </div>
                        <h4>Your Next Order</h4>
                        <p><span>Enter your email here *</span></p>
                        <input
                            type="email"
                            name=""
                            id=""
                            onFocus={handleFocus}
                            onBlur={() => setFocused(false)} // Сброс флага при потере фокуса
                            style={{ backgroundColor, borderColor}}
                            className="input-email"
                        />

                    </div>
                </div>
            </div>
        )
    }
    export default Home;



