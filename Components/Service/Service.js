import React, {useState, useEffect} from 'react'
import './Service.css'
import { GiCarWheel } from "react-icons/gi";
import { ImPower } from "react-icons/im";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import {Card, Col, Container, Row} from 'react-bootstrap';
import service1 from '../../Dashboard Assets/service1.jpg';
import service2 from '../../Dashboard Assets/service2.jpg';
import Testimonial1 from '../../Dashboard Assets/testimonial1.jpg';
import Testimonial2 from '../../Dashboard Assets/testimonial-2.jpg';
import Testimonial3 from '../../Dashboard Assets/testimonial-3.jpg';
import Testimonial4 from '../../Dashboard Assets/testimonial-4.jpg';
import Testimonial5 from '../../Dashboard Assets/testimonial-5.jpg';
import gall from '../../Dashboard Assets/g-1(2).jpg';
import { FaCalendarAlt } from 'react-icons/fa'; 
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import image from '../../Login Assets/auto wash (1).png';
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { TbBrandYoutubeFilled } from "react-icons/tb";


const Testimonial = ({ name, job, text, image }) => (
  <div className="swiper-slide testimonials-item">
    <div className="info">
      <img src={image} alt="Profile" style={{maxWidth:'80px',borderRadius:'50%',marginRight:'20px',verticalAlign:'middle'}}/>
      <div className="text-box">
        <h3 className="name">{name}</h3>
        <span className="job">{job}</span>
      </div>
    </div>
    <p>{text}</p>
    <div className="rating">
      {/* icons section */}
    </div>
  </div>
);

const Service = () => {
  const[active, setActive] =useState('navBar')
  //function to toggle shownavbar
  const showNavbar =()=>{
    setActive('navBar activeNavbar')
  }

  //function to remove navbar
  const removeNavbar =()=>{
    setActive('navBar')
  }

  useEffect(() => {
    new Swiper('.js-testimonials-slider', {
      grabCursor: true,
      spaceBetween: 30,
      pagination: {
        el: '.js-testimonials-pagination',
        clickable: true
      },
      breakpoints: {
        767: {
          slidesPerView: 2
        }
      }
    });
  }, []);
  

  return (
    <div>
       {/* navbar section */}
     <section className='navBarSection'>
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
     {/* service section */}
     <Container fluid className='service-page d-flex'>
      <Row>
        <Col md={8} className='service-details container'>
          <div style={{textAlign:'center'}}>
          <h2>Our Services</h2>
          <p>We offer a variety of car wash services to meet your needs.</p>
          </div>
          <Row className='service-list'>
            <Col md={4}>
              <Card className='service-card'>
                <Card.Img variant='top' src={service1} alt='service' />
                <Card.Body>
                  <Card.Title>Basic Wash</Card.Title>
                  <Card.Text style={{fontSize:'12px'}}>
                    Get your car looking clean and shiny with our basic wash packages.
                  </Card.Text>
                 <a href='/Booking'><FaCalendarAlt style={{fontSize:'25px',color:'black'}}/></a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className='service-card'>
                <Card.Img variant='top' src={service2} alt='service' style={{ height: '204px' }} />
                <Card.Body>
                  <Card.Title>Premium Wash</Card.Title>
                  <Card.Text style={{fontSize:'12px'}}>
                    Treat your car to our premium wash package, including wax and interior detailing.
                  </Card.Text>
                  <a href='/Booking'><FaCalendarAlt style={{fontSize:'25px',color:'black'}}/></a> 
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className='service-card'>
                <Card.Img variant='top' src={gall} alt='service' style={{ height: '204px' }} />
                <Card.Body>
                  <Card.Title>Deluxe Wash</Card.Title>
                  <Card.Text style={{fontSize:'12px'}}>
                    Indulge your car with our deluxe wash package, featuring advanced cleaning.
                  </Card.Text>
                  <a href='/Booking'><FaCalendarAlt style={{fontSize:'25px',color:'black'}}/></a> 
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
     {/* end of service section */}
     {/* testimonial section */}
     <section className="testimonials">
      <Container>
        <div className="section-header">
          <h2 className="title">What our clients say</h2>
        </div>
        <div className="testimonials-content">
          <div className="swiper testimonials-slider js-testimonials-slider">
            <div className="swiper-wrapper">
              <Testimonial
                name="Mr.priya"
                job="Interior Wash"
                text="Prior to the exterior wash, immerse yourself in the luxury of our interior detailing—a 
                comprehensive treatment that ensures every corner of your vehicle feels brand new."
                image={Testimonial1}
              />
               <Testimonial
                name="M.Mohammed Imran"
                job="Exterior Wash"
                text="Experience the brilliance of our exterior wash — a refreshing makeover for your
                 vehicle that our clients can't get enough of Thank You Auto Wash."
                image={Testimonial2}
               />
               <Testimonial
                name="Ms.Sabahudeen"
                job="Seats Wash"
                text="Before diving into our exterior and interior wash, luxuriate in the rejuvenation
                 of our seat wash—a meticulous treatment that restores comfort and elegance to your ride."
                image={Testimonial3}
               />
               <Testimonial
                name="S.Remya"
                job="Oil Changing"
                text="Before experiencing our exterior and interior wash, prioritize the health of your
                 vehicle with our oil changing service ensuring the road ahead thank you auto wash."
                image={Testimonial4}
              />
               <Testimonial
                name="M.Mohamed Irshath"
                job="break repair"
                text="Efficient and thorough, our oil change was a breeze.Top-notch service for our next
                 oil change - they always go the extra mile to ensure our vehicle's longevity."
                image={Testimonial5}
              />
              {/* Add more testimonials here */}
            </div>
          </div>
          <div className="swiper-pagination js-testimonials-pagination"></div>
        </div>
      </Container>
    </section>
     {/* end of testimonial section */}
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

export default Service
