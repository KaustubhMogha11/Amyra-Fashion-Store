import React from 'react'
import './wishlistcard.css'
const WishListCard = (props) => {
  return (
    <>
      <div className="wishlist-card-cont">
        <div className="wishlist-card-item">
          <div className="wish-list-img-sec">
          <img src="images/cross.png" className='wishlist-cancel' alt="close" />
          <img src="images/card/women-2.jpeg" className='wishlist-img'  alt="item" />
          </div>
          <span>{props.itemName}</span>
        </div>
        <div className="wishlist-card-price">
        <span>₹ {props.price}</span>
          <span>{props.stock}</span>
          <span>Add to cart</span>
        </div>
      </div>
    </>
  )
}

export default WishListCard