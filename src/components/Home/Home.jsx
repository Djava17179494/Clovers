import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Truck from "../../assets/icons.truck.png";
import Basket1 from "../../assets/icons48.png";
import Iphone from "../../assets/icons.iphone.png";
import Woman from "../../assets/iconsold.png";
let Home = () => {
  return (
    <>
      <Header />
      <div className="delivery-local">
        <div className="flex-text">
          <div>
            <img src={Truck} alt="" className="photo-basket" />
          </div>
          <div className="left-text">
            <p className="text-weight">Free Delivery</p>
            <p>To Your Door</p>
          </div>
        </div>
        <div className="empty1"></div>
        <div className="flex-text">
          <div>
            <img src={Basket1} alt="" className="photo-basket" />
          </div>
          <div className="left-text">
            <p className="text-weight">Local Pickup</p>
            <p>
              Check out <a Locations />
            </p>
          </div>
        </div>
        <div className="empty1"></div>
        <div className="flex-text">
          <div>
            <img src={Woman} alt="" className="photo-basket" />
          </div>
          <div className="left-text">
            <p className="text-weight">Avialable for You</p>
            <p>
              <a>Online Support</a> 24/7
            </p>
          </div>
        </div>
        <div className="empty1"></div>
        <div className="flex-text">
          <div>
            <img src={Iphone} alt="" className="photo-basket" />
          </div>
          <div className="left-text">
            <p className="text-weight">Order on the Go</p>
            <p>
              <a>Download</a> Our App
            </p>
          </div>
        </div>
        <div className="empty1 empty2"></div>
      </div>
      <div className="background-part">
        <div className="background-photo1 relative">
          <div className="great-deals">
            <p className="clock-italy">It’s Wine O'Clock!</p>
            <h4 className="taste">Great Deals on</h4>
            <p></p>
            <h1 className="selected">Selected Wines</h1>
            <p className="paragraph">
              I'm a paragraph. Click here to add your own text and edit me. Let
              your users get to know you.
            </p>
          </div>
          <div className="limited">
            <p>Limited Supply</p>
          </div>
        </div>
        <div className="background-photo2">
          <div className="deal-cleaning">
            <p className="deal">Deal of the Week</p>
            <h1 className="percent">
              <span>40%</span>{" "}
              <span style={{ fontSize: 30, fontWeight: 600 }}>off</span>
            </h1>
            <p className="clean">Cleaning Supplies</p>
          </div>
        </div>
      </div>
      <div className="background-part">
        <div className="background-photo3">
          <div className="great-deals">
            <p className="clock-italy">Taste of Italy</p>
            <h4 className="taste">Great Deals on Your</h4>
            <p></p>
            <h1 className="selected">Favorite Paste</h1>
          </div>
        </div>
        <div className="background-photo4">
          <div className="deal-cleaning">
            <p className="deal">Deal of the Week</p>
            <h1 className="percent">
              <span>30%</span>{" "}
              <span style={{ fontSize: 30, fontWeight: 600 }}>off</span>
            </h1>
            <p className="clean">Cereal Brands</p>
          </div>
          <div className="limited superdeal">
            <p>Super Deal</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
