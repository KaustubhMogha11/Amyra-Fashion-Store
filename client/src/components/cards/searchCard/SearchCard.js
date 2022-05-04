import React from 'react'
import './SearchCard.css'
import {Link} from 'react-router-dom'
const SearchCard = (props) => {
  return (
    <>
    <Link to={`/product/${props.id}`} className='searchLink'>
        <div className="search-card-cont">
            <div className="search-card-img-sec">
                <img src={props.imgSrc} alt="profile" />
            </div>
            <div className="search-card-title-sec">
                <span>
                {props.title}
                </span>
                ₹ {props.price}
            </div>
        </div>
      </Link>
    </>
  )
}

export default SearchCard 
