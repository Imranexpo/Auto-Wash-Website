import React, {useState} from 'react';
import './Register.css';
import '../../App.css';
import {Link} from 'react-router-dom';
import Axios from 'axios';

// Import our login assets
import video from '../../Login Assets/carwash.mp4';
import logo from '../../Login Assets/auto wash (1).png'

//import icons
import { FaUserShield } from "react-icons/fa";
import { AiOutlineSwapRight } from "react-icons/ai";
import { BsFillShieldLockFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";

const Register = () => {
  //usestate to hold our inputs
  const[email, setEmail] =useState('');
  const[username, setUserName] =useState('');
  const[password, setPassword] =useState('');

  //onclick let us get what the user has entered
  const createUser =()=>{
    //we shall require Axios to create an API that connects to the server -lets install that
    Axios.post('http://localhost:3000/register', {
      //create variable to send to the server through the route
      Email: email,
      UserName: username,
      Password: password
    }).then(()=>{
        alert('user has been successfully registered')
    })
  }

  return (
    <div className='registerPage flex'>
      <div className='container flex'>

         <div className='videoDiv'>
          <video src={video} autoPlay muted loop></video>

          <div className='textDiv'>
            <h2 className='title'>Log in for personalized services just for you</h2>
            <p>Welcome to our autowash website</p>
          </div>

          <div className='footerDiv flex'>
             <span className='text'>have an account?</span>
             <Link to={'/'}>
             <button className='btn'>Login</button>
             </Link>
          </div>
        </div> 

        <div className='formDiv flex'>
          <div className='headerDiv'>
             <img src={logo} alt='logo car'/>
             <h3>Let Us Know You!</h3>
          </div>

          <form action='' className='form grid'>
            <div className='inputDiv'>
              <label htmlFor='email'>Email</label>
              <div className='input flex'>
              <MdMarkEmailRead className='icon'/>
              <input type='email' id='email' placeholder='Enter Email' onChange={(event)=>{
                setEmail(event.target.value)
              }}/>
              </div>
            </div>

            <div className='inputDiv'>
              <label htmlFor='username'>Username</label>
              <div className='input flex'>
              <FaUserShield className='icon'/>
              <input type='text' id='username' placeholder='Enter Username' onChange={(event)=>{
                setUserName(event.target.value)
              }}/>
              </div>
            </div>

            <div className='inputDiv'>
              <label htmlFor='password'>Password</label>
              <div className='input flex'>
              <BsFillShieldLockFill className='icon'/>
              <input type='password' id='password' placeholder='Enter Password' onChange={(event)=>{
                setPassword(event.target.value)
              }}/>
              </div>
            </div>

            <button type='submit' className='btn flex' onClick={createUser}>
              <span>Register</span>
              <AiOutlineSwapRight className='icon'/>
            </button>

            <span className='forgotPassword'>
               Forgot your password? <a href='/Forgot'>Click Here</a>
            </span>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Register;

