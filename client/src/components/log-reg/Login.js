import React,{useEffect,useState} from 'react'
import "./log-reg.css"
import Footer from '../footer/Footer'
import Insta from '../instagram/Insta'
import {Link,useNavigate} from 'react-router-dom'
import { authenticateSignup, authenticateLogin } from '../../service/api';
import { login } from "../../redux/actions/userActions.js";
import { useSelector, useDispatch } from 'react-redux';
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
     navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
 
  return (
    <>
        <div className="log-reg-sec">
            <form onSubmit={submitHandler}>
                <div className="form-heading">
                Login
                </div>
                <input type="text" className='form-username' placeholder='username or email address' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" className='form-username' placeholder='password'  
              value={password}
              onChange={(e) => setPassword(e.target.value)}  />
                <div className="form-btn"><button type="submit" >LOG IN</button></div>
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