import React from 'react'
import ShoeCard from '../cards/shoescard/ShoeCard'
import "./shoesection.css"
const ShoesSection = () => {
  return (
    <>
        <div className="shoe-section-cont">
            <ShoeCard type={"996 Running Training"} name={"NEW BALANCE"} imgSrc={"images/card/shoe-1.jpg"} newPrice={"1000"} oldPrice={"1500"} />
            <ShoeCard type={"Old Skool Ultramarine"} name={"vans"} imgSrc={"images/card/shoe-2.jpg"} newPrice={"800"} oldPrice={"1000"} />
            <ShoeCard type={"Originals Superstar"} name={"adidas"} imgSrc={"images/card/shoe-3.jpg"} newPrice={"8000"} oldPrice={"10000"} />
        </div>

    </>
  )
}

export default ShoesSection 