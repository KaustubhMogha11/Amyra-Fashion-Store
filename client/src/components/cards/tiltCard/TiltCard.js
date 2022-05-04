import React,{useState} from "react";
import "./tiltcard.css";
import Tilt from "react-vanilla-tilt";
import {Link} from 'react-router-dom'
const TiltCard = (props) => {
  const [animate,setAnimate]=useState("border-show")
  return (
    <>
      <Link to='/shop'>
      <Tilt className="tilt-move" options={{ scale: 2,perspective: 1000, max:35,speed:600,easing:"cubic-bezier(.03,.98,.52,.99)",glare:false  }}>
        <div className="tilt-card-con">
        <img src={props.imgSrc} alt="category" />
          <div className="card-overlay"></div>
          <div className="card-text-overlay" onMouseOver={()=>setAnimate("none")} onMouseOut={()=>setAnimate("border-show")} style={{animation: `${animate} 3s infinite ${props.delay}s`}}>
          <span>{props.itemCount} ITMES</span>
            {props.itemName}
          </div>
        </div>
      </Tilt>
    </Link>
    </>
  );
};

export default TiltCard;