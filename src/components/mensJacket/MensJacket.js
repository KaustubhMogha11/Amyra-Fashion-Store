import React from "react";
import RatedCard from "../cards/ratedCard/RatedCard";
import PriceCard from "../cards/priceCard/PriceCard"
import ColorCard from "../cards/ColorChooseCard/ColorCard"
import "./mensjacket.css"
const MensJacket = () => {
    return <>
    <div className="mensjacket-sec">
    <div className="men-sec-img">
        <img src="images/amarya-img-1.jpg" alt="jacketsec" />
    </div>
    <div className="mens-jacket-sec-card-cont">
        <div className="mens-jacket-sec-cont">
            <div className="mens-jacket-sec-cont-heading">
            MEN'S JACKETS <br />
            <span>AMAYRA'S SHOP CHOICE</span>
            </div>
            <div className="mens-jacket-cont">
            <RatedCard/>
            <PriceCard/>
            <ColorCard/>
            </div>
        </div>
    </div>
    </div>
    </>;
};

export default MensJacket;