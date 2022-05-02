import React,{useState} from 'react'
import "./homepage.css"
import BodySection from "./bodySection/BodySection"
import TiltCard from './cards/tiltCard/TiltCard'
import MensJacket from './mensJacket/MensJacket'
import ShoesSection from './shoesSection/ShoesSection'
import WomenSection from './woMenSection/WomenSection'
import BestSelling from './bestSelling/BestSelling'
import Insta from './instagram/Insta'
import Footer from './footer/Footer'
const Homepage = () => {
  const [cursorX,setCursorX]=useState()
  const [cursorY,setCursorY]=useState()
  window.addEventListener('mousemove',e=>{
    setCursorX(e.pageX)
    setCursorY(e.pageY)
  })
  return (
    <>
     <div className="cursor" style={{
        left:cursorX + 'px',
        top:cursorY + 'px'
      }}></div>

        <BodySection/>
        <div className="tilt-card-section">
        <TiltCard delay={2} itemCount={4} itemName={"men's jacket"} imgSrc={"/images/category/jacket.jpg"}/>
        <TiltCard delay={8} itemCount={2} itemName={"men's shirt"} imgSrc={"/images/category/shirt.jpg"}/>
        <TiltCard delay={2} itemCount={7} itemName={"shoes"} imgSrc={"/images/category/shoes.jpeg"}/>
        <TiltCard delay={8} itemCount={3} itemName={"clothing"} imgSrc={"/images/category/clothing.jpeg"}/>
        <TiltCard delay={2} itemCount={9} itemName={"women's dress"} imgSrc={"/images/category/women-cloth.jpg"}/>
       
        </div>
        <MensJacket/>
        <ShoesSection/>
        <WomenSection/>
        <BestSelling/>
        <Insta/>
        <Footer/>
    </>
  )
}

export default Homepage