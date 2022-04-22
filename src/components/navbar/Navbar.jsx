import React,{useState} from "react";
import "./navbar.css";
const Navbar = (props) => {
  const [changeIcon,setChangeIcon] = useState("images/hamburger.png")
  return <>
    <div className="navbar">
    <div className="nav-menu">
      <div className="nav-menu-sec">
      <img src="images/hamburger-black.png" alt="responsive-hamburger" className="responsive-hamburger"/>
        <div className="menu-box" onMouseOver={()=>{setChangeIcon("images/L-arrow.png")}} onMouseOut={()=>setChangeIcon("images/hamburger.png")} >
          <div className="nav-menu-icon">
            <img src={changeIcon} alt="menu-icon" />
          </div>
          <div className="nav-menu-text">MENU</div>
        </div>
      </div>
      <div className="nav-menu-help">
        NEED HELP ?
        <span>XXX-XXXX-XXXXX</span>
      </div>
    </div>
    <div className="nav-logo">
        <img src="images/logo1.jpeg" alt="logo" />
    </div>
    <div className="nav-buttons">
      <div className="nav-btn-cont">
      <div className="nav-search" onClick={() => props.sideSearchView(true)}>
        <img src="images/search.png" alt="search" className="nav-btn-icon" />
      </div>
      <div className="nav-wishlist ">
        <img src="images/wish-list.png" alt="wishlist"  className="nav-btn-icon"/>
        <span>0</span>
      </div>
      <div className="nav-cart ">
        <div className="nav-cart-data">
          $0.99
          <span>CART</span>
        </div>
        <div className="nav-cart-icon-sec">
        <img src="images/cart.png" alt="cart"  className="nav-btn-icon" />
        <span>0</span>
        </div>
      </div>
      </div>
    </div>
    </div>

  </>;
};

export default Navbar;