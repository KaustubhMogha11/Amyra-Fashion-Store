import React from 'react'
import "./homepage.css"
import BodySection from "./bodySection/BodySection"
import TiltCard from './cards/tiltCard/TiltCard'
const Homepage = () => {
  return (
    <>
        <BodySection/>
        <div className="tilt-card-section">
        <TiltCard delay={2}/>
        <TiltCard delay={8}/>
        <TiltCard delay={2}/>
        <TiltCard delay={8}/>
        <TiltCard delay={2}/>
        </div>
    </>
  )
}
// anime={"early-blur"} 
export default Homepage