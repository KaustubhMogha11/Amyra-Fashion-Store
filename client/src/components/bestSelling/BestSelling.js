import React from "react";
import "./bestselling.css";
import ColorCard from "../cards/ColorChooseCard/ColorCard"
import PriceCard from "../cards/priceCard/PriceCard"
const BestSelling = () => {
  return (
    <>
      <div className="best-selling-sec">
        <div className="bestselling-title">BEST SELLING PRODUCTS</div>
        <div className="scrolling-cont">
        <div className="best-selling-card-cont">
        <ColorCard />
          <PriceCard
            imgSrc={"images/card/women-1.jpeg"}
            name={"MISSGUIDED RIBBED WRAP FRONT SLEEVELESS CROP TOP"}
          />

          <PriceCard
            imgSrc={"images/card/women-3.jpeg"}
            name={"LAVISH ALICE DEEP BANDEAU ASYMMETRIC HEM MIDI DRESS"}
          />
          <PriceCard
            imgSrc={"images/card/shirt-2.jpeg"}
            name={"SELECTED HOME OVERCOAT"}
          />
          <ColorCard />
        </div>
        </div>

      </div>
    </>
  );
};

export default BestSelling;