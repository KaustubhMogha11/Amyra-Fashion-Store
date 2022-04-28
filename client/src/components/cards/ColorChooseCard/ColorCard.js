import React,{useState} from 'react'
import "./colorcard.css"
import {Link} from 'react-router-dom'
const RatedCard = () => {
    const[colorImg,setColorImg]=useState("images/category/jacket.jpg")
  return (
    <>
      <Link to='/product-page' className='color-card-cont link'>
        <div className="color-card-cont">
            <div className="color-card-img">
                <img src={colorImg} alt="card" />
            </div>
            <div className="rated-card-content">
                <div className="card-content-type">Clothing</div>
                <div className="card-content-name-like color-sec">
                    <div className="color-card-content-name">RIVER ISLAND SKINNY FIT BLAZER IN LIGHT BLUE</div>
                    <div className="card-like"> <img src="images/like.png" alt="like" /></div>
                </div>
                <div className="choose-color ">
                    <span onClick={()=>setColorImg("images/card/shirt-2.jpeg")}></span>
                    <span onClick={()=>setColorImg("images/category/jacket.jpg")}></span>
                </div>
                <div className="card-animated-btn">
                ₹ 1500.00
                </div>
            </div>
        </div>
        </Link>
    </>
  )
}

export default RatedCard 