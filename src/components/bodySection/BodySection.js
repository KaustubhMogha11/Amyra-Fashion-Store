import React from 'react'
import "./bodysec.css"
import {  Link } from "react-router-dom";
const BodySection = () => {
  return (
    <>
        <section className="bodysec-cont">
            <img src="images/home-slider-bg.jpg" alt="background" className='background-img'/>
            <img src="images/home-slider-bg-flower.png" alt="flower" className='flower'/>
            <div className="botique">BOUTIQUE</div>
            <div className="vintage">VINTAGE</div>
            <div className="couture">COUTURE</div>
            <div className="fashion">FASHION</div>
            <div className="elegence">ELEGANCE</div>
            <div className="homemade">HOMEMADE</div>
            <div className="unique">UNIQUE</div>
            <div className="appreal">APPAREL</div>
            <div className="discover">DISCOVER</div>
            <div className="trends">New trends</div>
            <Link to='/shop'>
            <div className="shop-now-btn">
              Shop 
              <span>Now!</span>
            </div>

            </Link>

        </section>
    </>
  )
}

export default BodySection 