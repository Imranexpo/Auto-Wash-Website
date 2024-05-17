import React,{useState} from 'react';
import './Washing.css';
import { GiCarWheel } from "react-icons/gi";
import { ImPower } from "react-icons/im";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";

const Washing = () => {

  const[active, setActive] =useState('navBar')
  //function to toggle shownavbar
  const showNavbar =()=>{
    setActive('navBar activeNavbar')
  }

  //function to remove navbar
  const removeNavbar =()=>{
    setActive('navBar')
  }

  return (
    <div>
       {/* navbar section */}
     <section className='navBarSection navsec'>
     <header className='header flex'>
      <div className='logoDiv'>
        <span className='logo flex'>
        <h1><GiCarWheel className='icon1' />AUTO<ImPower className='icon2'/>WASH</h1>
        </span>
      </div>

      <div className={active} >
        <ul className='navLists flex'>
           <li className='navItem'>
            <a href='/Dashboard' className='navLink'>Home</a>
           </li>
           <li className='navItem'>
            <a href='/Service' className='navLink'>Service</a>
           </li>
           <li className='navItem'>
            <a href='/Price' className='navLink'>Price</a>
           </li>
           <li className='navItem'>
            <a href='/Washing' className='navLink'>Washing Point</a>
           </li>
           <li className='navItem'>
            <a href='/Contact' className='navLink'>Contact</a>
           </li>

           <button className='btn1'>
            <a href='/Booking'>BOOK NOW</a>
           </button>
        </ul>
         
         <div onClick={removeNavbar} className='closeNavbar'>
         <AiFillCloseCircle  className='icon1'/>
         </div>

         
      </div>

      <div onClick={showNavbar} className='toggleNavbar'>
         <IoMenu className='icon1' />
         </div>

     </header>
     </section>
     {/* end of navbar section */}
     
    </div>
  )
}

export default Washing;
