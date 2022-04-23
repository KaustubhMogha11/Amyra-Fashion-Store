import React from 'react'
import "./pricecard.css"
const RatedCard = () => {
  return (
    <>
        <div className="price-card-cont">
            <div className="price-card-img">
                <img src="images/card/shirt-2.jpeg" alt="card" />
            </div>
            <div className="rated-card-content">
                <div className="card-content-type">Clothing</div>
                <div className="card-content-name-like">
                    <div className="card-content-name">SELECTED HOMME OVERCOAT</div>
                    <div className="card-like"> <img src="images/like.png" alt="like" /></div>
                </div>
                <div className="card-animated-btn">
                ₹ 1500.00
                </div>
            </div>
        </div>
    </>
  )
}

export default RatedCard