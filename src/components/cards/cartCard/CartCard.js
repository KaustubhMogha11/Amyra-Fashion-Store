import React from 'react'
import './cartcard.css'
const CartCard = (props) => {
  return (
    <>
      <div className="Cart-card-cont">
        <div className="Cart-card-item">
          <div className="wish-list-img-sec">
          <img src="images/cross.png" className='Cart-cancel' alt="close" />
          <img src="images/card/women-2.jpeg" className='Cart-img'  alt="item" />
          </div>
          <span>{props.itemName}</span>
        </div>
        <div className="Cart-card-price">
        <span>₹ {props.price}</span>
          <input type="text" className='item-quantity' placeholder='1'/>
          <span>₹800.00</span>
        </div>
      </div>
    </>
  )
}

export default CartCard 