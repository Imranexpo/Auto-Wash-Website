import React,{useState} from 'react'
import './Contact.css'
import { GiCarWheel } from "react-icons/gi";
import { ImPower } from "react-icons/im";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import serimg from "../../Dashboard Assets/service1.jpg"
import image from '../../Login Assets/auto wash (1).png';
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { TbBrandYoutubeFilled } from "react-icons/tb";


const Contact = () => {
  
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
     {/* contact section */}
     <Container>
     <div className='contact'>
        <Row>
          <Col md={12}>
            <div className='titlepage mb-2'>
              <h2>Contact Us</h2>
            </div>
          </Col>
          <Col md={6}>
          <div className='mapimg'>
             <img src={serimg} alt=''/>
          </div>
          </Col>
          <Col md={6}>
             <Form className='main-form'>
                <Row>
                  <Col md={6}>
                    <Form.Label className='label'>Name</Form.Label>
                    <Form.Control type='text' className='contactus' placeholder='Enter Your Name'/>
                  </Col>
                  <Col md={6}>
                    <Form.Label className='label'>Phone No</Form.Label>
                    <Form.Control type='tel' className='contactus' placeholder='Enter your Number'/>
                  </Col>
                  <Col md={12}>
                    <Form.Label className='label'>Email</Form.Label>
                    <Form.Control type='email' className='contactus' placeholder='Enter your Email'/>
                  </Col>
                  <Col md={12}>
                    <Form.Label className='label'>Message</Form.Label>
                    <textarea cols={30} rows={10}></textarea>
                  </Col>
                  <Col md={12}>
                    <Button className='sent-btn'>Send</Button>
                  </Col>
                </Row>
             </Form>
          </Col>
        </Row>
     </div>
     </Container>
     {/* end of contact section */}
      {/* footer section */}
      <section className='footer'>
      <div className='footer-content'>
         <img src={image} alt='img'/>
         <p>"Auto Wash: Where cleanlinessmeets convenience. 
          Thank you for trusting us with your vehicle!"</p>
         <div className='d-flex icons'>
             <span><MdOutlineFacebook/></span>
             <span><FaTwitter/></span>
             <span><PiInstagramLogoFill/></span>
             <span><TbBrandYoutubeFilled/></span>
         </div>
      </div>
      <div className='footer-content'>
          <h4>Screen</h4>
          <li>Home</li>
          <li>Service</li>
          <li>Price</li>
          <li>Washing Points</li>
          <li>Contact</li>
      </div>
      <div className='footer-content'>
          <h4>Washing points</h4>
          <li>Chennai</li>
          <li>Coimbatore</li>
          <li>Cuddalore</li>
          <li>Pondicherry</li>
      </div>
      <div className='footer-content'>
          <h4>Main Services</h4>
          <li>Exterior Wash</li>
          <li>Interior Wash</li>
          <li>Seats Washing</li>
          <li>Oil Changing</li>
      </div>
      <div className='footer-content'>
          <h4>Help</h4>
          <li>Privacy</li>
          <li>Condition</li>
          <li>Blog</li>
          <li>FAQs</li>
      </div>
     </section>
     {/* end of footer section */}
    </div>
  )
}

export default Contact
