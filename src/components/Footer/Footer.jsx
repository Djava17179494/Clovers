import React from "react";
import  "./Footer.css"
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import twitter from "../../assets/twitter.png"
import youtube from "../../assets/youtube.png"
import mastercard from "../../assets/mastercard.png"
import american from "../../assets/American.png"
import brand from "../../assets/brand.png"
import jcb from "../../assets/JCB.png"
import discover from "../../assets/Discover.png"
import visa from "../../assets/Visa (1).png"
import paypal from "../../assets/PayPal.png"
import diners from "../../assets/Diners.png"


let Footer=()=>{
    return(
        <div className="footer-main">
         <div className="flex-footer">
           <div className="footer-menu need-help">
              <h2 className="info-bottom">Clovers</h2>
              <h4>Need Help?</h4>
              <p className="visit">Visit our Customer Support </p>
              <p>for assistance or call us at</p>
              <p className="nomer">123-456-7890</p>
              <div className="icon-facebook">
                 <img src={facebook} alt="" />
                 <img src={instagram} alt=""/>
                <img src={twitter} alt=""/>
                <img src={youtube} alt=""/>   
              </div>
           </div> 
           <div className="deals-menu">
            <h4 className="info-bottom">Menu</h4>
            <ul className="list-caregories">
               <li>Deals</li>
               <li>Food</li>
               <li>Beverages</li>
               <li>Household</li>
               <li>Personal Care</li>
               <li>Most Popular</li>
               <li>My Orders</li>

            </ul>
           </div>
           <div className="footer-menu"> 
            <h4 className="info-bottom">Caregories</h4>
              <ul className="list-caregories">
               <li>Vegetables</li>
               <li>Bakery</li>
               <li>Wine</li>
               <li>Dairy & Eggs</li>
               <li>Meat & Poultry</li>
               <li>Soft Drinks</li>
               <li>Cleaning Supplies</li>
               <li>Cereal & Snacks</li>
              </ul>
           </div>
           <div className="footer-menu"> 
             <h4 className="info-bottom">Info</h4>
             <ul className="list-caregories">
                <li>FAQ</li>
                <li>About Us</li>
                <li>Customer Support</li>
                <li>Locations </li>
             </ul>
           </div>
           <div className="footer-menu">
             <h4 className="info-bottom">My Choice</h4>
             <ul className="list-caregories">
                <li>Favorites</li>
                <li>My Orders</li>
             </ul>
           </div>
           </div>
           <div className="empty"></div>
           <div className="link-returns">
            <p>Shipping & Returns</p>
            <p>Terms & Conditions</p>
            <p>Terms & Conditions</p>
           </div>
           <p className="accept">We accept the following payment methods</p>
           <div className="photo-card">
             <img src={mastercard} alt=""/>
             <img src={american} alt="" />
             <img src={brand} alt="" />
             <img src={jcb} alt="" />
             <img src={discover} alt=""/>
             <img src={visa} alt=""/>
             <img src={paypal} alt=""/>
             <img src={diners} alt=""/>
           </div>


           
        </div>
    )
}
export default Footer