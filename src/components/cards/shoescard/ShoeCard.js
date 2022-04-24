
import React from 'react'
import "./shoescard.css"
const ShoeCard = (props) => {
  return (
    <>
        <div className="shoe-card-cont">
            <div className="shoe-name">{props.name}</div>
            <div className="shoe-type">{props.type}</div>
            <div className="shoe-img">
                <img src={props.imgSrc} alt="shoe" />
            </div>
            <div className="shoe-price">
                <span>₹{props.oldPrice}.00</span>
                ₹{props.newPrice}.00
            </div>
            <div className="shoe-add-cart-btn">
                add to cart
            </div>

        </div>


    </>
  )
}

export default ShoeCard 