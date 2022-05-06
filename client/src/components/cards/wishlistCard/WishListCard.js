import React,{useEffect,useState} from 'react'
import './wishlistcard.css'
import { useParams,Link,useNavigate} from 'react-router-dom';
import { addToCart } from '../../../redux/actions/cartActions';
import { useSelector, useDispatch } from 'react-redux';

const WishListCard = (props) => {
  const {id}=useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const navigate= useNavigate();

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate('/cart');
}  
  return (
    <>
      <div className="wishlist-card-cont">
        <div className="wishlist-card-item">
          <div className="wish-list-img-sec">
          <img src="images/cross.png" className='wishlist-cancel' alt="close" />
          <img src={props.imgOne} className='wishlist-img'  alt="item" />
          </div>
          <span>{props.itemName}</span>
        </div>
        <div className="wishlist-card-price">
        <span>₹ {props.price}</span>
          <span>{props.stock}</span>
          <span onClick={() => addItemToCart()}>Add to cart</span>
        </div>
      </div>
    </>
  )
}

export default WishListCard