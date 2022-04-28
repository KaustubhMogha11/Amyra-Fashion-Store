import React from 'react'
import "./ratedcard.css"
import StarRating from './StarRate'
import {Link} from 'react-router-dom'
const RatedCard = (props) => {
  return (
    <>
    <Link to='/product-page' className='rated-card-cont link'>
        <div className="rated-card-cont">
            <div className="rated-card-img">
            <img src={props.imgSrc} alt="card" />
            </div>
            <div className="rated-card-content">
                <StarRating/>
                <div className="card-content-type">Clothing</div>
                <div className="card-content-name-like">
                <div className="card-content-name">{props.name}</div>
                    <div className="card-like"> <img src="images/like.png" alt="like" /></div>
                </div>
                <div className="card-animated-btn">
                ₹ 1000.00
                </div>
            </div>
        </div>
       </Link> 
    </>
  )
}

export default RatedCard