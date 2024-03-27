import React from "react";
import  "./PagesLog.css";
import LogIn from "../../assets/login.png"
import Heart from "../../assets/icons8-heart-64.png";
import Locat from "../../assets/icons8-location-48.png";

let PagesLog = ()=>{
    return(
    <div>
        <div>
            <div className="pagesblock">
                <div className="loginblock">
                    <p>LogIn</p>
                    <img src={LogIn} alt=""/>
                </div>
            </div>
            <div className="heart-locat">
                <img  className="photoshop " src={Heart} alt="" />
                <img  className="photoshop " src={Locat} alt="" />
            </div>
        </div>
        <div>
            <div>
                <p>About Us</p>
                <p>Customer Support</p>
            </div>
            <p>Deals</p>
            <div>Food</div>
            <div className="food">
                <ul>
                 <li>Vegetables</li>   
                 <li>Fruit</li>  
                 <li>Meat $ poultry</li>  
                 
                 <li>Fish $ Seafood</li>  
                 <li>Dairy $ Eggs</li>  
                 <li>Bakery</li>  
                 <li>Pastes $ Grains</li> 
                 <li>Cereals $ Snacks</li>  
                </ul>
            </div>
            <div>Beverages</div>
            <div className="beverages">
                <ul>
                 <li>Tea</li>   
                 <li>Coffee</li>  
                 <li>Soft Drinks</li>   
                 <li>Fish $ Seafood</li>  
                 <li>Bear</li>  
                 <li>Bakery</li>  
                 <li>Wine</li> 
                </ul>
            </div>
            <div>Household</div>
            <div className="household">
                <ul>
                 <li>Home $ Kitchen</li>   
                 <li>Cleaning Supplies</li>   
                </ul>
            </div>
            <div>Personal Care</div>
            <div className="personal">
                <ul>
                 <li>Personal Hygiene</li>   
                 <li>Babies</li>   
                </ul>
            </div>
           <div>Most Popular</div>
           <div>My Orders</div>

            
        </div>
    </div>
    )
}
export default PagesLog