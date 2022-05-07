import React, { useState } from "react";
import "./cartcard.css";
import "../../cart/cart.css"
import {  removeFromCart } from '../../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';

const CartCard = (props) => {
  const [quantity, setQunatity] = useState(1);
  console.log(props);
  const dispatch = useDispatch();
  console.log(props.totalAmount);
  const removeItemFromCart = (id) => {
    console.log(id);
    dispatch(removeFromCart(id));
}

  return (
    <>
      <div className="Cart-card-cont">
        <div className="Cart-card-item">
          <div className="wish-list-img-sec">
            <img src="images/cross.png" className="Cart-cancel" alt="close" onClick={() => removeItemFromCart(props.id)} />
            
            <img
              src={props.imgOne}
              className="Cart-img"
              alt="item"
            />
          </div>
          <span>{props.itemName}</span>
        </div>
        <div className="Cart-card-price">
          <span>₹ {parseInt(props.price)}</span>
          <input
            type="number"
            onChange={(e) => setQunatity(parseInt(e.target.value)) || props.calAmount(parseInt(props.price) * parseInt(quantity)) ||console.log(quantity)}
            className="item-quantity"
            value={parseInt(quantity)}
          />
          {quantity>-1?<span>₹{parseInt(props.price) * parseInt(quantity)}.00</span>: <div className="negQuantity">Quantity Can't be less than 0</div>}
        </div>
        
      </div>
      
    </>
  );
};

export default CartCard;
