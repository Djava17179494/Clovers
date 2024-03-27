import "./Header.css";
import React, { useState, useEffect } from "react";
import Shopcart from "../../assets/icons8.png";
import Menu from "../../assets/icons50.png";
import Search from "../../assets/icons20.png";
import Login from "../../assets/login.png";
import Locat from "../../assets/icons8-location-48.png";
import Heart from "../../assets/icons8-heart-64.png";
import Cream from "../../assets/Hand Cream.jpg";
import Tea from "../../assets/Herbal Tea.jpg";
import Straw from "../../assets/Strawberries.jpg";
import Avocados from "../../assets/Avocados.jpg";


let Header = () => {
  let [text, setText] = useState("Shop on the go, download our app. Details");
  let [isSearchShow, setIsSearchShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setText("Get 20% off your first order. Subscribe");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  let inputFocused = () => {
    setIsSearchShow(true)
  }
  let inputBlur = () =>{
    setIsSearchShow(false)
  }
  return (
    <div className="header">
      <div className="about-login">
      <div className="about-customer">
        <p>About US</p>
        <p className="support">Customer Support</p>
      </div>
      <div className="header-main">
        <p>{text}</p>
      </div>
      <div className="photo-login">
        <div className="photo-header"><img src={Login} alt="" /></div>
        <div>Log in</div>
      </div> 
      </div>
      <div className="header-clovers">
        <div className="clovers-shop">
          <div>
            <p>Clovers</p>
          </div>
          <div className="search-input desctop " style={ isSearchShow ?
           {borderBottomLeftRadius: 0, borderBottomRightRadius:0} : 
           {borderBottomLeftRadius: 20, borderBottomRightRadius: 20} 
           } >
          <input onFocus={inputFocused} onBlur={inputBlur}
            className="search"
            type="text"
            placeholder="Search a product e.g milk"
          />
          <button className="button-main" >
          <img className="icon-search" src={Search} alt="" />
         </button>
           </div>
          <div>
            <div className="shop-menu">
              <div className="heart-location">
                <img className="photoshop location" src={Locat} alt=""/>
                <img className="photoshop" src={Heart} alt=""/>
              </div>
              <img className="photoshop" src={Shopcart} alt="" />
              <div className="border">0 </div>
              <img className="photomenu" src={Menu} alt="" />
            </div>
          </div>
        </div>

        <div className="search-input mobile" style={ isSearchShow ?
           {borderBottomLeftRadius: 0, borderBottomRightRadius:0} : 
           {borderBottomLeftRadius: 20, borderBottomRightRadius: 20} 
           } >
          <input onFocus={inputFocused} onBlur={inputBlur}
            className="search"
            type="text"
            placeholder="Search a product e.g milk"
          />
          <button className="button-main" >
          <img className="icon-search" src={Search} alt="" />
         </button>
          <div className="products" style={ isSearchShow ? {display:"flex"} : {display:"none"} } >
            <p className="trending">Trending Products</p>
            <div className="photo-product">
              <div  className="imgsearch"><img src={Cream} alt=""/></div>
              <div className="text-product">
                <p className="text1">Hand Cream</p>
                <p className="description">I'm a product description. This is a great place to "sell" your prod...</p>
              </div>
            </div>
            <div className="photo-product">
              <div  className="imgsearch"><img src={Tea} alt=""/></div>
              <div className="text-product">
                <p className="text1">Herbal Tea 16ct</p>
                <p className="description">I'm a product description. This is a great place to "sell" your prod...</p>
              </div>
            </div>
            <div className="photo-product">
              <div className="imgsearch"><img src={Straw} alt=""/></div>
              <div className="text-product">
                <p className="text1">Strawberries - 1lb</p>
                <p className="description">I'm a product description. This is a great place to "sell" your prod...</p>
              </div>
            </div>
            <div className="photo-product">
              <div  className="imgsearch"><img src={Avocados} alt=""/></div>
              <div className="text-product">
                <p className="text1">Hass Avocados, Ready-to-Eat - 1lb</p>
                <p className="description">I'm a product description. This is a great place to "sell" your prod...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
