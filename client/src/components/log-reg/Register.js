import React,{useState,useEffect} from 'react'
import "./log-reg.css"
import Footer from '../footer/Footer'
import Insta from '../instagram/Insta'
import {Link} from 'react-router-dom'
import { authenticateSignup, authenticateLogin } from '../../service/api';


const Register = (setAccount) => {
    
const accountInitialValues = {
  login: {
      view: 'login',
      heading: 'Login',
      subHeading: 'Get access to your Orders, Wishlist and Recommendations'
  },
  signup: {
      view: 'signup',
      heading: "Looks like you're new here",
      subHeading: 'Signup to get started'
  }
}


const signupInitialValues = {
  name: '',
  
 
  email: '',
  password: '',
 
};

const [ account, toggleAccount ] = useState(accountInitialValues.login);
  const [ signup, setSignup ] = useState(signupInitialValues);
  const [ error, showError] = useState(false);
  const onInputChange = (e) => {
      setSignup({ ...signup, [e.target.name]: e.target.value });
      
  }
   const signupUser = async() => {
      let response = await authenticateSignup(signup);
      if(!response) return;
    
      setAccount(signup.name);
      
      
  }
  
  const toggleSignup = () => {
      toggleAccount(accountInitialValues.signup);
  }

  return (
     


      <>
       <div className="log-reg-sec ">
          <form>
              <div className="form-heading">
              Register
              </div>
              <input type="text" className='form-username' placeholder='name' onChange={(e) => onInputChange(e)}/>
              <input type="text" className='form-username' placeholder='email address' onChange={(e) => onInputChange(e)}/>
              <input type="date" className='form-username' placeholder='Date of Birth' onChange={(e) => onInputChange(e)}/>
              <input type="password" className='form-username' placeholder='enter password' onChange={(e) => onInputChange(e)}/>
              <input type="password" className='form-username' placeholder='enter password again' onChange={(e) => onInputChange(e)}/>
              <div className="form-btn"><button onClick={() => signupUser()}>Let me in</button></div>
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