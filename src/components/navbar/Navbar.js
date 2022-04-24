import React, { useState } from "react";
import "./navbar.css";
const Navbar = (props) => {
  const [changeIcon, setChangeIcon] = useState("images/hamburger.png");
  const [isSidebar, setIsSideBar] = useState(false);
  const [isSideSearch, setIsSideSearch] = useState(false);
  return (
    <>

      <div className="navbar">
        {/* side bar */}
      <div className={isSidebar ? "sidebar-active" : "sidebar-section"}>
          <div className="sideBar-cont">
            <div className="sidebar-cancel">
              <img
                src="images/cancel.png"
                alt="cancel"
                onClick={() => setIsSideBar(false)}
              />
            </div>
            <div className="nav-routes-sec">
              <div className="nav-route">
                HOME
                <img src="images/fill-right-arrow.png" alt="arrow" />
              </div>
              <div className="nav-route">
                shop
                <img src="images/fill-right-arrow.png" alt="arrow" />
              </div>
              <div className="nav-route">
                about us
                <img src="images/fill-right-arrow.png" alt="arrow" />
              </div>
              <div className="nav-route">
                Customer Help
                <img src="images/fill-right-arrow.png" alt="arrow" />
              </div>
            </div>
            <hr />
            <div className="nav-main-route-sec">
              <div className="nav-main-route">
                <div className="nav-route-img">
                  <img src="images/wish-list.png" alt="wishlist" />
                </div>
                Wishlist
              </div>
              <div className="nav-main-route">
                <div className="nav-route-img">
                  <img src="images/login.png" alt="wishlist" />
                </div>
                Login/register
              </div>
            </div>
            <hr />
            <div className="nav-social-links">
              <a href="https://www.facebook.com/aryan.king.9484">
                <img src="images/facebook.png" alt="facebook" />
              </a>
              <a href="https://www.instagram.com/the___.inferno/">
                <img src="images/instagram.png" alt="insta" />
              </a>
              <a href="https://www.linkedin.com/in/nishant-kumar-tiwari-253a46196">
                <img src="images/linkedin.png" alt="linkedin" />
              </a>
              <a href="https://github.com/Asuraking1n/">
                <img src="images/github.png" alt="github" />
              </a>
            </div>
          </div>
        </div>

        <div className="nav-menu">

          <div className="nav-menu-sec">
            <img
              src="images/hamburger-black.png"
              alt="responsive-hamburger"
              className="responsive-hamburger"
              onClick={() => setIsSideBar(true)}
            />
            <div
              className="menu-box"
              onClick={() => setIsSideBar(true)}
              onMouseOver={() => {
                setChangeIcon("images/L-arrow.png");
              }}
              onMouseOut={() => setChangeIcon("images/hamburger.png")}
            >
              <div className="nav-menu-icon">
                <img src={changeIcon} alt="menu-icon" />
              </div>
              <div className="nav-menu-text">MENU</div>
            </div>
          </div>
          <div className="nav-menu-help">
            NEED HELP ?<span>788-064-7182</span>
          </div>
        </div>
        <div className="nav-logo">
          <img src="images/logo1.jpeg" alt="logo" />
        </div>
        <div className="nav-buttons">
          <div className="nav-btn-cont">
            <div className="nav-search" onClick={() => setIsSideSearch(true)}>
              <img
                src="images/search.png"
                alt="search"
                className="nav-btn-icon"
              />
            </div>
            <div className="nav-wishlist ">
              <img
                src="images/wish-list.png"
                alt="wishlist"
                className="nav-btn-icon"
              />
              <span>0</span>
            </div>
            <div className="nav-cart ">
              <div className="nav-cart-data">
                $0.99
                <span>CART</span>
              </div>
              <div className="nav-cart-icon-sec">
                <img
                  src="images/cart.png"
                  alt="cart"
                  className="nav-btn-icon"
                />
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* side search */}
      <div className={isSideSearch ? "sideSearch-active" : "sideSearch-sec"}>
        <div className="search-cont">
          <div className="search-title">
            <b>SEARCH</b>
            <img
              src="images/cancel.png"
              alt="cancel"
              onClick={() => setIsSideSearch(false)}
            />
          </div>
          <div className="search-box">
            <input type="text" placeholder="Search for :" />
            <div className="search-icon-img">
              <img src="images/search-light.png" alt="search" />
            </div>
          </div>
          <div className="search-text">
            Find your product with fast search. Enter some keyword such as
            dress, jacket etc.
          </div>
        </div>
      </div>

    </>
  );
};
export default Navbar;