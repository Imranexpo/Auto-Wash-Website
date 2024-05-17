import React, { useState } from 'react'
import '../../App.css';
import logo from '../../Login Assets/auto wash (1).png'
import { MdMarkEmailRead } from "react-icons/md";

const Forgot = () => {
    //first declare the variables
    const[email, setEmail] =useState('');
    //create a onsubmit arrow function
    const handleSubmit =(e)=>{
        //login to handle forgot password functionality, such as sending a reset email
        e.preventDefault();
        alert('please wait for Email!',email)
    };
  return (
    <div className='forgot '>
      <div className='container1 flex'>
        <div className='forgotpage'>
            <div className='fullview'>
        <img src={logo} alt='logo car'/>
           <h2>Forgot Password</h2>
           <form onSubmit={handleSubmit}>
                <label>Email <MdMarkEmailRead/>:
                  <div className='input flex'>
                    <input type='email' value={email} placeholder='Enter your Email' onChange={(e)=>setEmail(e.target.value)} required/>
                    </div>
                </label>
                <button type='submit'><a href='/'>Reset Password</a></button>
           </form>
           </div>
        </div>

      </div>
    </div>
  )
}

export default Forgot;
