import React, {useState} from 'react'
import './Booking.css'
import { GiCarWheel } from "react-icons/gi";
import { ImPower } from 'react-icons/im';
import { AiFillCloseCircle } from 'react-icons/ai';
import { IoMenu } from 'react-icons/io5';
import image from '../../Login Assets/auto wash (1).png';
import { Button, Card, Col, Container, FormControl, FormGroup, FormLabel, FormSelect, InputGroup, Row } from 'react-bootstrap';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import  Axios  from 'axios';
import {Link} from 'react-router-dom'



const Booking = () => {
  //usestate to hold our input
  const[name, setName] =useState('');
  const[phone, setPhone] =useState('');
  const[date, setDate] =useState('');
  const[time, setTime] =useState('');
  const[myPackage, setMyPackage] = useState('');
  const[point, setPoint] =useState('');
  const[message, setMessage] =useState('');

  const[active, setActive] =useState('navBar')
  //function to toggle shownavbar
  const showNavbar =()=>{
    setActive('navBar activeNavbar')
  }

  //function to remove navbar
  const removeNavbar =()=>{
    setActive('navBar')
  }
  //onclick let us get what the bookuser has entered
  const bookUser =()=>{
    //we shall require axios to create an api that connects to the server lets install that
    Axios.post('http://localhost:3000/Booking',{
      //create variable to send to the server through the rout
      FullName: name,
      PhoneNo: phone,
      WashDate: date,
      WashTime: time,
      Package: myPackage,
      WashPoint: point,
      Message: message
    }).then(()=>{
      alert('Your Booking has been submitted')
    })
  }
  //push to the bookingtable


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
            <a href='/'>LOG OUT</a>
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
     {/* admission section */}
     <div className='container admsection'>
       <Container>
        <Row>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title className='text-center'>BOOK YOUR AUTO WASH</Card.Title>
                <form>
                  <FormGroup className='mb-3'>
                   <FormLabel htmlFor='name'>Full Name:</FormLabel>
                   <FormControl type='text' id='name' name='name'placeholder='Enter Full Name'
                   onChange={(event)=>{
                    setName(event.target.value)
                   }}required/>
                  </FormGroup>
                  <FormGroup className='mb-3'>
                   <FormLabel htmlFor='phone'>Mobile No:</FormLabel>
                   <InputGroup>
                    <div className='input-group-prepend'>
                       <InputGroupText>+1</InputGroupText>
                    </div>
                    <FormControl type='tel'name='phone' id='phone' placeholder='Phone No'required
                    onChange={(event)=>{
                      setPhone(event.target.value)
                    }}/>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className='mb-3'>
                    <FormLabel htmlFor='date'>Wash Date:</FormLabel>
                    <FormControl type='date' id='date' name='date' required
                    onChange={(event)=>{
                      setDate(event.target.value)
                    }}/>
                  </FormGroup>
                  <FormGroup className='mb-3'>
                    <FormLabel htmlFor='time'>Wash Time:</FormLabel>
                    <FormControl type='time' id='time' name='time' required
                    onChange={(event)=>[
                      setTime(event.target.value)
                    ]}/>
                  </FormGroup>
                  <FormGroup className='mb-3'>
                    <FormLabel htmlFor='package'>Package Type:</FormLabel>
                    <FormSelect id='package' name='package' required
                    onChange={(event)=>{
                      setMyPackage(event.target.value)
                    }}>
                      <option>Wet Cleaning(550 Rs)</option>
                      <option>Brake Reparing(650 Rs)</option>
                      <option>Oil Changing(700 Rs)</option>
                      <option>Vacuum Cleaning(800 Rs)</option>
                      <option>Window Wiping(900 Rs)</option>
                      <option>Exterior Wash(1000 Rs)</option>
                      <option>Seats Wash(1500 Rs)</option>
                      <option>Interior Wash(2000 Rs)</option>
                    </FormSelect>
                  </FormGroup>
                  <FormGroup className='mb-3'>
                    <FormLabel htmlFor='point'>Wash point</FormLabel>
                    <FormSelect id='point' name='point' required
                    onChange={(event)=>{
                      setPoint(event.target.value)
                    }}>
                      <option>AUTO WASH(Address: 123 Main Street, Silicon Valley, CA 94025,Chennai.)</option>
                      <option>AUTO WASH(Address: 456 Elm Avenue, Portland, OR 97201,Coimbatore.)</option>
                      <option>AUTO WASH(Address: 789 Oak Lane, Dallas, TX 75201,Cuddalore.)</option>
                      <option>AUTO WASH(Address: 101 Maple Street, New York, NY 10001,Pondicherry.)</option>
                    </FormSelect>
                  </FormGroup>
                  <FormGroup className='mb-3'>
                    <FormLabel htmlFor='message'>Message(About Wash):</FormLabel>
                    <textarea className='form-control' id='message' name='message'
                    onChange={(event)=>{
                      setMessage(event.target.value)
                    }}></textarea>
                  </FormGroup>
                  <Button type='submit' className='subbtn' onClick={bookUser}>Submit</Button>
                  <Link to='/BookingTable' className='btn viewbtn'>View Booking</Link>
                </form>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
          <div className='headersection mt-4'>
             <img src={image} alt='logo'/>
          </div>
          <div className='mt-4' style={{textAlign:'justify'}}>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The booking section of Auto Wash website facilitates customers in scheduling appointments for car wash services, 
              ensuring convenient and efficient allocation of time slots for both clients and service providers.  Additionally, 
              the booking section may include features such as real-time availability updates, confirmation emails, and reminders 
              to ensure a smooth and efficient scheduling process.</p>
          </div>
          </Col>
        </Row>
       </Container>
     </div>
     {/* end of admission section */}
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

export default Booking;
