import React,{useState} from "react";
import "./tiltcard.css";
import Tilt from "react-vanilla-tilt";
const TiltCard = (props) => {
  const [animate,setAnimate]=useState("border-show")
  return (
    <>
      <Tilt className="tilt-move" options={{ scale: 2,perspective: 1000, max:35,speed:600,easing:"cubic-bezier(.03,.98,.52,.99)",glare:false  }}>
        <div className="tilt-card-con">
          <img src="images/category/shoes.jpeg" alt="category" />
          <div className="card-overlay"></div>
          <div className="card-text-overlay" onMouseOver={()=>setAnimate("none")} onMouseOut={()=>setAnimate("border-show")} style={{animation: `${animate} 3s infinite ${props.delay}s`}}>
            <span>4 ITMES</span>
            Men's shirt
          </div>
        </div>
      </Tilt>
    </>
  );
};

export default TiltCard;