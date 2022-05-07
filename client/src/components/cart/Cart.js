import React, { useState } from "react";
import "../cart/cart.css";
import Insta from "../instagram/Insta";
import Footer from "../footer/Footer";
import CartCard from "../cards/cartCard/CartCard";
// import Filterdata from "../../context/Filterdata";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';
import { useParams } from "react-router-dom";
const Cart = () => {
  const [isAddress, setIsaddress] = useState(false);
  const [finalAddress, setfinalAddress] = useState("india");
  const [address, setAddress] = useState();
  const [totalAmount,setTotalAmount] = useState(0)
  const {id}=useParams();
  const [price,setPrice]=useState(0)
  // console.log(id);
  // let cartData = JSON.parse(localStorage.getItem('cartData'))
  // cartData = Filterdata(cartData)

  const cartDetails = useSelector(state => state.cart);
  const { cartItems } = cartDetails;

  const dispatch = useDispatch();
  
  // useEffect(() => {
  //     // if(cartItems && match.params.id !== cartItems.id)   
  //         // dispatch(addToCart(id));

     
    
  //     console.log(cartItems);
  // }, [dispatch]);

  // const removeItemFromCart = (id) => {
  //     dispatch(removeFromCart(id));
  // }

  useEffect(() => {
  mrp();
}, [cartItems]);

const mrp = () => {
    let price = 0;
    console.log(cartItems);
    cartItems.map(item => {
        price=parseInt(price)+parseInt(item.price)
        // discount += (item.price.mrp - item.price.cost) 
    })
    setPrice(price);
    
}
  const changeAddress = (e) => {
    setAddress(e.target.value);
  };

  return (
    <>
      <div className="cart-container-section">
        <div className="cart-container-heading">Cart</div>
        <div className="cart-container">
          <div className="cart-item-cont">
            <div className="cart-cards-cont">
              {!cartItems? (
                <div className="empty-cart">
                  <img src="https://pa1.narvii.com/7524/15c809fa552c2a2dadd9a7bbb3bced5b7de5ac3ar1-600-600_hq.gif" alt="bin" />
                </div>
              ) : (
                <>
                  {cartItems.map((val, id) => {
                    return (
                      <CartCard
                        key={id}
                        id={val.id}
                        itemName={val.title}
                        price={val.price}
                        imgOne={val.imgOne}
                        // calAmount={()=>setTotalAmount(parseInt(val.price) + parseInt(totalAmount))}
                        // totalAmount={totalAmount}
                        calAmount={(Amount)=>setTotalAmount(parseInt(Amount) + parseInt(totalAmount))}
                      />
                    );
                  })}
                </>
              )}
            </div>
          </div>
          <div className="cart-box-cont">
            <div className="cart-box-sec">
              <div className="cart-subtotal">
                subtotal
                <span>₹{totalAmount+price}.00</span>
              </div>
              <div className="cart-subtotal cart-add">
                shipping
                <div className="cart-address">
                  Shipping to <span>{finalAddress}</span>
                  {isAddress ? (
                    <div>
                      <input
                        type="text"
                        placeholder="Enter Address"
                        onChange={changeAddress}
                      />{" "}
                      <button
                        onClick={() =>
                          setIsaddress(false) || address.length < 1
                            ? setAddress("INDIA")
                            : setfinalAddress(address)
                        }
                      >
                        SUBMIT
                      </button>
                    </div>
                  ) : (
                    <button onClick={() => setIsaddress(true)}>
                      Change address
                    </button>
                  )}
                </div>
              </div>
              <div className="cart-total">
                Total
                <span>₹{totalAmount+price}.00</span>
              </div>
              <button className="check-btn">proceed to checkout</button>
            </div>
          </div>
        </div>
      </div>
      <Insta />
      <Footer />
    </>
  );
};

export default Cart;
