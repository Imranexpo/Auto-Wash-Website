import React,{useState} from 'react'
import './Price.css'
import { GiCarWheel } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { ImPower } from "react-icons/im";
import {Card, Col, Container, Row} from "react-bootstrap";
import img from '../../Dashboard Assets/team1.jpg';
import image from '../../Login Assets/auto wash (1).png';
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { TbBrandYoutubeFilled } from "react-icons/tb";



const Price = () => {

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
  {/* price section */}
  <div className='container cardfull'>
   <h1 className='text-center'><Col mt={5} mb={4}>Our Services&Price</Col></h1>
   <Row>
    <Col md={6} mb={4}>
      <Card className='cardsection'>
        <Card.Body>
          <Card.Title>Car Wash Services</Card.Title>
          <ul className='list-group'>
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              Exterior Wash
              <span className='badge bg-primary'>1000 RS</span>
            </li>
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              Interior Wash
              <span className='badge bg-primary'>2000 RS</span>
            </li>
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              Seats Wash
              <span className='badge bg-primary'>1500 RS</span>
            </li>
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              Vacuum Cleaning
              <span className='badge bg-primary'>800 RS</span>
            </li>
          </ul>
        </Card.Body>
      </Card>
    </Col>
    <Col md={6} mb={4}>
      <Card className='cardsection'>
        <Card.Body>
          <Card.Title>Car Maintenance Services</Card.Title>
          <ul className='list-group'>
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              Oil Changing
               <span className='badge bg-primary'>700 Rs</span>
            </li>
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              Brake Reparing
               <span className='badge bg-primary'>650 Rs</span>
            </li>
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              Wet Cleaning
               <span className='badge bg-primary'>550 Rs</span>
            </li>
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              Window Wiping
               <span className='badge bg-primary'>900 Rs</span>
            </li>
          </ul>
        </Card.Body>
      </Card>
    </Col>
   </Row>
  </div>
  {/* end of price section */}
  {/* about section */}
  <section className='about_section layout_padding'>
    <Container>
   <div className='container'>
    <Row className='row'>
      <Col md={6} className='px-0'>
        <div className='img_container'>
          <div className='image-box'>
             <img src={img} alt=''/>
          </div>
        </div>
      </Col>
      <Col md={6} className='px-0'>
        <div className='detail-box'>
          <div className='heading_container'>
            <h2>About Service</h2>
          </div>
          <p>At Auto Wash, we pride ourselves on providing top-quality car cleaning services to keep your vehicle looking pristine. Our expert team uses state-of-the-art equipment and eco-friendly products
             to ensure your car receives the best care possible. Whether you need a quick wash or a comprehensive detailing, a range of services to meet your needs.</p>
        </div>
      </Col>
    </Row>
   </div>
   </Container>
  </section>
  {/* end of about section */}
  {/* footer section */}
  <section className='footer' style={{transform:'translateY(250px)'}}>
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

export default Price
