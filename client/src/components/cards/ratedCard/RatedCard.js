import React from 'react'
import "./ratedcard.css"
import StarRating from './StarRate'
import {Link} from 'react-router-dom'
const RatedCard = (props) => {
  const isoutOfStock = props.stock
  return (
    <>
    <Link to='/product-page' className='rated-card-cont link'>
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
                <div className="card-content-name">{props.name}</div>
                    <div className="card-like"> <img src="images/like.png" alt="like" /></div>
                </div>
                <div className="card-animated-btn">
               {props.price}
                </div>
            </div>
        </div>
       </Link> 
    </>
  )
}

export default RatedCard