import React,{useState} from 'react'
import "./pricecard.css"
import {Link,useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import { addToCart } from '../../../redux/actions/cartActions';

const RatedCard = (props) => {
  const isoutOfStock = props.product?.stock;

  const navigate= useNavigate();
  const dispatch = useDispatch();
  const { id} = props
 

  const [quantity, setQuantity] = useState(1);


  const addItemToCart = () => {
    dispatch(addToCart(props.id, quantity));
    navigate('/cart');
}
  return (
    <>
    
        <div className="price-card-cont">
        <div id="price-card-img">
            <img src={props.imgSrcTwo} alt="card" id='cardHoverImg' />
                <img src={props.imgSrcOne} alt="card" />
                {!isoutOfStock ? (
                        <div className="outOfStockLabel">Out of stock</div>
                    ) : null}
                
            </div>
            <div className="rated-card-content">
                <div className="card-content-type">{props.type}</div>
                <div className="card-content-name-like">
                <Link to={`/product/${props.id}`} className="card-content-name-like">
                <div className="card-content-name">{props.name}</div>
                    <div className="card-like"> <img src="images/like.png" alt="like" /></div>
                  </Link>
                </div>
                <div className="card-animated-btn" onClick={() => addItemToCart()}>
                ₹ {props.price}.00
                </div>
            </div>
        </div>
    
    </>
  )
}

export default RatedCard