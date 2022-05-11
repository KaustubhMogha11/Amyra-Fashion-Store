import React,{useState,useEffect} from 'react'
import "./log-reg.css"
import Footer from '../footer/Footer'
import Insta from '../instagram/Insta'
import {Link,useNavigate} from 'react-router-dom'

import { register} from "../../redux/actions/userActions.js";
import { useSelector, useDispatch } from 'react-redux';

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
 
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const navigate= useNavigate();
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const {userInfo}= userRegister;


  useEffect(() => {
    if (userInfo) {
      console.log(userInfo)
      navigate('/');
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setMessage("Passwords do not match");
    } else dispatch(register(name, email, password));
  };


  return (
     


      <>
       <div className="log-reg-sec ">
          <form onSubmit={submitHandler}>
              <div className="form-heading">
              Register
              </div>
              <input type="name" className='form-username' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
              <input type="email" className='form-username' placeholder='email address' value={email} onChange={(e) => setEmail(e.target.value)} />
              {/* <input type="date" className='form-username' placeholder='Date of Birth' onChange={(e) => onInputChange(e)}/> */}
              <input type="password" className='form-username' placeholder='enter password' value={password}  onChange={(e) => setPassword(e.target.value)} />
              <input type="password" className='form-username' placeholder='enter password again' value={confirmpassword}  onChange={(e) => setConfirmPassword(e.target.value)}/>
              <div className="form-btn"><button type="submit">Let me in</button></div>
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