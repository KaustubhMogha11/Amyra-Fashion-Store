import React,{useEffect,useState} from 'react'
import "./log-reg.css"
import Footer from '../footer/Footer'
import Insta from '../instagram/Insta'
import {Link} from 'react-router-dom'
import { authenticateSignup, authenticateLogin } from '../../service/api';


const Login = ({ open, setOpen, setAccount }) => {

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
const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};

  const [ login, setLogin ] = useState(loginInitialValues);
  // const [ signup, setSignup ] = useState(signupInitialValues);
  const [ error, showError] = useState(false);
  const [ account, toggleAccount ] = useState(accountInitialValues.login);

  useEffect(() => {
      showError(false);
  }, [login])

  const onValueChange = (e) => {
      setLogin({ ...login, [e.target.name]: e.target.value });
  }

  // const onInputChange = (e) => {
  //     setSignup({ ...signup, [e.target.name]: e.target.value });
      
  // }

  const loginUser = async() => {
      let response = await authenticateLogin(login);
      if(!response) 
          showError(true);
      else {
          showError(false);
          handleClose();
          setAccount(login.username);
      }
  }

  // const signupUser = async() => {
  //     let response = await authenticateSignup(signup);
  //     if(!response) return;
  //     handleClose();
  //     setAccount(signup.username);
      
      
  // }
  
  // const toggleSignup = () => {
  //     toggleAccount(accountInitialValues.signup);
  // }

  const handleClose = () => {
      setOpen(false);
      toggleAccount(accountInitialValues.login);
  }

  return (
    <>
        <div className="log-reg-sec">
            <form>
                <div className="form-heading">
                Login
                </div>
                <input type="text" className='form-username' placeholder='username or email address' onChange={(e) => onValueChange(e)}/>
                <input type="password" className='form-username' placeholder='password'  onChange={(e) => onValueChange(e)} />
                <div className="form-btn"><button  onChange={(e) => onValueChange(e)}>LOG IN</button></div>
                <div className="remember-me-cont">
                <div className="remember-me">
                    <input type="checkbox"  />
                    remember me
                </div>
                <span> <Link to='/forget-password' className='link'> Lost your password?</Link></span>
                </div>
            </form>
        </div>
        <Insta/>
        <Footer/>
    </>
  )
}

export default Login 