import "./Header.css";
import React, { useState, useEffect } from "react";
import Shopcart from "../../assets/icons8.png";
import Menu from "../../assets/icons50.png";
import Search from "../../assets/icons20.png";

let Header = () => {
  let [text, setText] = useState("Shop on the go, download our app. Details");

  useEffect(() => {
    const timer = setTimeout(() => {
      setText("Get 20% off your first order. Subscribe");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="header">
      <div className="header-main">
        <p>{text}</p>
      </div>
      <div className="header-clovers">
        <div className="clovers-shop">
          <div>
            <p>Clovers</p>
          </div>
          <div>
            <div className="shop-menu">
              <img className="photoshop" src={Shopcart} alt="" />
              <div className="border">0 </div>
              <img className="photomenu" src={Menu} alt="" />
            </div>
          </div>
        </div>

        <div className="search-input">
          <input
            className="search"
            type="text"
            placeholder="Search a product e.g milk"
          />
          <img className="icon-search" src={Search} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Header;
