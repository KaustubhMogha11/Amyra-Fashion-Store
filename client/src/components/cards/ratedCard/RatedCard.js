import React,{useEffect,useState} from 'react'
import "./ratedcard.css"
import StarRating from './StarRate'
import {Link,useNavigate} from 'react-router-dom'
import { addToCart } from '../../../redux/actions/cartActions';
import { useSelector, useDispatch } from 'react-redux';

const RatedCard = (props) => {


  const isoutOfStock = props.stock
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
     
        <div className="rated-card-cont">
        <div id="rated-card-img">
            <img src={props.imgSrcTwo} alt="card" id='cardHoverImg' />
                <img src={props.imgSrcOne} alt="card" />
                {isoutOfStock?<div className="outOfStockLabel">Out of stock</div>:null}
            </div>
            <div className="rated-card-content">
                <StarRating/>
                <div className="card-content-type">{props.type}</div>
                <div className="card-content-name-like">
                
                <Link to={`/product/${props.id}`} style={{textDecoration: 'none'}}> <div className="card-content-name">{props.name}</div></Link>
                    <div className="card-like"> <img src="images/like.png" alt="like" /></div>
                </div>
                <div onClick={() => addItemToCart()} className="card-animated-btn">
               {props.price}
                </div>
                
            </div>
        </div>
     {/* </Link> */}
    </>
  )
}

export default RatedCard