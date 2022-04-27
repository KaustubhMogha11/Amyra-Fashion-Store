import React from 'react'
import "./log-reg.css"
import Footer from '../footer/Footer'
import Insta from '../instagram/Insta'

const Login = () => {
  return (
    <>
        <div className="log-reg-sec">
            <form>
                <div className="form-heading">
                Login
                </div>
                <input type="text" className='form-username' placeholder='username or email address'/>
                <input type="password" className='form-username' placeholder='password'/>
                <div className="form-btn"><button>LOG IN</button></div>
                <div className="remember-me-cont">
                <div className="remember-me">
                    <input type="checkbox"  />
                    remember me
                </div>
                <span>Lost your password?</span>
                </div>
            </form>
        </div>
        <Insta/>
        <Footer/>
    </>
  )
}

export default Login 