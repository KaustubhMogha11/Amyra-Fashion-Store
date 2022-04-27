import React from 'react'
import "./log-reg.css"
import Footer from '../footer/Footer'
import Insta from '../instagram/Insta'
const Register = () => {
    return (
     
      <>
       <div className="log-reg-sec ">
          <form>
              <div className="form-heading">
              Register
              </div>
              <input type="text" className='form-username' placeholder='name'/>
              <input type="text" className='form-username' placeholder='email address'/>
              <input type="date" className='form-username' placeholder='Date of Birth'/>
              <input type="password" className='form-username' placeholder='enter password'/>
              <input type="password" className='form-username' placeholder='enter password again'/>
              <div className="form-btn"><button>Let me in</button></div>
              <div className="remember-me-cont">
              <div className="remember-me">
                  or Login
              </div>
              <span>Privacy Policy</span>
              </div>
          </form>
      </div>
      <Insta/>
    <Footer/>
  </>
    )
  }
  
  export default Register