import React from 'react'
import Footer from '../footer/Footer'
import Insta from '../instagram/Insta'
import './error.css'
const Error404 = () => {
    return (
        <>
        <div className="error-cont-sec">
            <div className="error-cont-heading">
                404
            </div>
            <div className="error-cont-subheading">
            Sorry but we couldn’t find the page you are looking for.
            </div>
            <img src="https://i.pinimg.com/originals/d5/64/85/d564858da963affd12a57419367cb3d2.gif" alt="doremon" />
        </div>
        <Insta/>
        <Footer/>
        </>
    )
}

export default Error404 