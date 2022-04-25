import React from "react";
import RatedCard from "../cards/ratedCard/RatedCard";
import PriceCard from "../cards/priceCard/PriceCard"
import ColorCard from "../cards/ColorChooseCard/ColorCard"
import "./womensection.css"
const WomenSection = () => {
    return <>
    <div className="mensjacket-sec">
    <div className="mens-jacket-sec-card-cont">
        <div className="mens-jacket-sec-cont">
            <div className="mens-jacket-sec-cont-heading">
            WOMEN'S DRESSES <br />
            <span>AMAYRA'S SHOP CHOICE</span>
            </div>
            <div className="womens-jacket-cont">
            <PriceCard imgSrc={"images/card/women-1.jpeg"} name={"MISSGUIDED RIBBED WRAP FRONT SLEEVELESS CROP TOP"}/>
            <RatedCard imgSrc="images/card/women-2.jpeg" name={"FAME AND PARTNERS TALL VALENCIA MAXI DRESS"}/>
            <PriceCard imgSrc={"images/card/women-3.jpeg"} name={"LAVISH ALICE DEEP BANDEAU ASYMMETRIC HEM MIDI DRESS"}/>
            </div>
        </div>
    </div>
    <div className="men-sec-img">
        <img src="images/amarya-img-2.jpg" alt="jacketsec" />
    </div>

    </div>
    </>;
};
export default WomenSection