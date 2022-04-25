import React from 'react'
import "./ratedcard.css"
import StarRating from './StarRate'
const RatedCard = (props) => {
  return (
    <>
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
    </>
  )
}

export default RatedCard