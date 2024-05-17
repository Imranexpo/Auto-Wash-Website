import React, {useState} from 'react';
import './Login.css'; 
import '../../App.css';
import {Link, useNavigate} from 'react-router-dom'
import Axios from 'axios';

// Import our login assets
import video from '../../Login Assets/carwash.mp4';
import logo from '../../Login Assets/auto wash (1).png'

//import icons
import { FaUserShield } from "react-icons/fa";
import { AiOutlineSwapRight } from "react-icons/ai";
import { BsFillShieldLockFill } from "react-icons/bs";


const Login = ()=> {
  //usestate to hold our inputs
  const[loginUserName, setLoginUserName] =useState('');
  const[loginPassword, setLoginPassword] =useState('');
  const navigateTo = useNavigate()
  //onclick let us get what the user has entered
  const LoginUser =(e)=>{
      //lets prevent submitting
      e.preventDefault();
    //we shall require Axios to create an API that connects to the server-lets install that
    Axios.post('http://localhost:3000/login',{
      LoginUserName: loginUserName,
      LoginPassword: loginPassword
    }).then((response)=>{
       // i want to catch the response first-we have data successfully from the database and we can catch an error if the credentails are wrong.
       if(response.data.message){
         //if credential don't match
         navigateTo('/')//so we shall navigate to the same login page
         alert('Login credentials do not match!')
       }
       else{
        navigateTo('/dashboard')//if the credentials match  we shall navigate to the dashboard
       }
    })
  }

  return (
    <div className='loginPage flex'>
      <div className='container flex'>

         <div className='videoDiv'>
          <video src={video} autoPlay muted loop></video> 

          <div className='textDiv'>
            <h2 className='title'>Log in for personalized services just for you</h2>
            <p>Welcome to our autowash website</p>
          </div>

          <div className='footerDiv flex'>
             <span className='text'>Don't have an account?</span>
             <Link to={'/register'}>
             <button className='btn'>Sign Up</button>
             </Link>
          </div>
        </div> 

        <div className='formDiv flex'>
          <div className='headerDiv'>
             <img src={logo} alt='logo car'/>
             <h3>Welcome Back!</h3>
          </div>

          <form action='' className='form grid'>
            <div className='inputDiv'>
              <label htmlFor='username'>Username</label>
              <div className='input flex'>
              <FaUserShield className='icon'/>
              <input type='text' id='username' placeholder='Enter Username' onChange={(event)=>{
                setLoginUserName(event.target.value)
              }}/>
              </div>
            </div>

            <div className='inputDiv'>
              <label htmlFor='password'>Password</label>
              <div className='input flex'>
              <BsFillShieldLockFill className='icon'/>
              <input type='password' id='password' placeholder='Enter Password' onChange={(event)=>{
                setLoginPassword(event.target.value)
              }}/>
              </div>
            </div>

            <button type='submit' className='btn flex' onClick={LoginUser}>
              <span>Login</span>
              <AiOutlineSwapRight className='icon'/>
            </button>

            <a href='/dashboard'>dashboard</a>

            <span className='forgotPassword'>
               Forgot your password? <a href='/Forgot'>Click Here</a>
            </span>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;

