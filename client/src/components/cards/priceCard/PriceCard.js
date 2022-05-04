import React from 'react'
import "./pricecard.css"
import {Link} from 'react-router-dom'
const RatedCard = (props) => {
  const isoutOfStock = props.product?.stock;
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
                <div className="card-animated-btn">
                ₹ {props.price}.00
                </div>
            </div>
        </div>
    
    </>
  )
}

export default RatedCard