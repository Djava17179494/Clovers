import React from "react";
import "./Home.css"
import Vegetables from "../../assets/vegetables.webp"
import AppStore from "../../assets/Appstore.webp"
import GooglePay from "../../assets/GooglePlay.webp"
import Phone from "../../assets/pngwing.com.png"
import PhoneImg from "../../assets/phoneimg.webp"

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
    return (
        <div className="aydan">
            <div className="first-block">
                <h1>Most Popular Categories</h1>
                <div className="categories-box">
                    {categories.map((item, index) => (
                        <div key={index} className="boxes">
                            <div><img alt="" src={item.image} /></div>
                            <div>{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="second-block">
                <p>Save Time & Money</p>
                <h1>Shop With Us on the Go</h1>
                <p>Your weekly shopping routine, at your door in just a click</p>
                <div className="buttonss">
                    <div className="img1"><img src={AppStore} alt="" /></div>
                    <div className="img2"><img src={GooglePay} alt="" /></div>
                </div>

            </div>
            <div className="phoneImg">
                <div className="parentImg1">
                    <div><img src={Phone} alt="" /></div>
                    <div className="imagePosition" ><img src={PhoneImg} alt="" /></div>
                    </div>
            </div>
            <div className="third-block"></div>
        </div>
    )
}
export default Home;