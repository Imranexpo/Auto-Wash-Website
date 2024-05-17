import React, {useState} from 'react'
import './Dashboard.css'
import { GiCarWheel } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { ImPower } from "react-icons/im";
import { MdOutlineCloudDone } from "react-icons/md";
import { MdLocalCarWash } from "react-icons/md";
import { FaHandsWash } from "react-icons/fa";
import { GiVacuumCleaner } from "react-icons/gi";
import { GiCarSeat } from "react-icons/gi";
import { MdCleaningServices } from "react-icons/md";
import { RiOilFill } from "react-icons/ri";
import { GiCarDoor } from "react-icons/gi";
import { MdDone } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { IoIosPeople } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { Button, Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import image from '../../Dashboard Assets/About us.jpg';
import imageFooter from '../../Login Assets/auto wash (1).png';
import timeImg from '../../Dashboard Assets/time hours.jpg';
import video from '../../Dashboard Assets/carouselbg.mp4';//import video assets
import team1 from '../../Dashboard Assets/team1.jpg'
import team2 from '../../Dashboard Assets/team2.jpg'
import team3 from '../../Dashboard Assets/team3.jpg'
import { FiInstagram } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";
import { TbBrandYoutubeFilled } from "react-icons/tb";



const Dashboard = () => {

  //define team members with in the component
  const Member1 ={name:'John Doe',role:'Exterior Wash Specialist',description:'Our Exterior Wash Specialists are more than just cleaners they re artisans of automotive rejuvenation, meticulously restoring your vehicle s brilliance with every touch'};
  const Member2 ={name:'Jane Smith',role:'Interior Wash Specialist',description:'Crafting Comfort Our Interior Wash Specialists meticulously transform the inside of your vehicle, ensuring a clean, comfortable and inviting environment with expert care.'};
  const Member3 ={name:'Abdul Fahath',role:'Seats Wash Specialist',description:' Revitalize Your Ride, Seat by Seat Our Seats Wash Specialists are experts in restoring the cleanliness of your vehicles seating ensuring each ride feels like new.'};

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
     {/* carousel section */}
     <Carousel>
      <Carousel.Item >
       <div className='video'>
        <video src={video} autoPlay muted loop></video>
       </div>
        <Carousel.Caption className='carousel1'>
          <h2>"Welcome To Auto Wash Were Clean Cars Shine Bright"</h2>
          <p>Where we bring life back to your vehicle with our premium cleaning services.
            From our gentle yet effective wash techniques to our attention to detail in every corner,
            we're committed to delivering a pristine finish that exceeds your expectations. Experience the 
            difference with Auto Wash
          </p>
          <Button className='text-white'><a href='/Booking' style={{color:'white'}}>BOOK NOW</a></Button>
        </Carousel.Caption>
      </Carousel.Item>
  </Carousel>
{/* end of carousel section */}
{/* about us section */}
    <section className='about-us'>
      <Container>
         <Row>
          <Col md={6}>
            <Image src={image} alt='About Us' fluid style={{ width: '500px', height: '600px',borderRadius:'5px' }}/>
          </Col>
          <Col md={6}>
             <div className='about-content'>
               <h2>About Us</h2>
               <p>Welcome to Auto Wash, your premier destination for car cleaning services. 
                Our team of professionals is dedicated to providing top-notch cleaning services to keep your 
                vehicle looking its best.</p>
             </div>
             <div className='about-list'>
              <ul>
                <li><MdOutlineCloudDone className='iconses'/> Exterior Wash</li>
                <li><MdOutlineCloudDone className='iconses'/> Interior Washing</li>
                <li><MdOutlineCloudDone className='iconses'/> Vacuum Cleaning</li>
                <li><MdOutlineCloudDone className='iconses'/> Seats Washing</li>
                <li><MdOutlineCloudDone className='iconses'/> Wet Cleaning</li>
                <li><MdOutlineCloudDone className='iconses'/> Oil Changing</li>
              </ul>
             </div>
             <div className='about-content'>
                <p>With years of Experience in the industry, we understand the importance of attention to detail and customer
                  satisfaction. Whether you need a quick wash or a comprehensive detailing Service, we've got you covered.
                </p>
             </div>
          </Col>
         </Row>
      </Container>
    </section>
    {/* end of about us section */}
    {/* service section */}
    <div className='service'>
     <div className='container'>
       <div className='section-header text-center'>
         <h2>What We Do</h2>
         <p>Premium Washing Service</p>
       </div>
       <Container>
       <Row>
         <div className='carsection'>
          <Col sm={6} md={3}>
           <Card style={{width:'18rem'}} className='cardstart'>
           <MdLocalCarWash className='cardicon'/>
           <Card.Body>
            <Card.Title>Exterior Wash</Card.Title>
            <Card.Text style={{fontSize:'15px',fontWeight:'300',textAlign:'justify',wordSpacing:'normal'}}>An Exterior car wash is like giving your car a refreshing shower. It involves spraying the vehicle with water to remove loose dirt
              and grime, then applying a foamy soap to lift stubborn dirt and grease.</Card.Text>
           </Card.Body>
           </Card>
           </Col>
           <Col sm={6} md={3}>
           <Card style={{width:'18rem'}} className='cardstart'>
           <FaHandsWash className='cardicon'/>
           <Card.Body>
            <Card.Title>Interior Washing</Card.Title>
            <Card.Text style={{fontSize:'15px',fontWeight:'300',textAlign:'justify',wordSpacing:'normal'}}>Interior car washing is like a deep cleaning for the inside of your vechicle. The result is about
            fresh,tidy interior that enchances comfort and maintains the value of yor car Carefully Clean Console.</Card.Text>
           </Card.Body>
           </Card>
           </Col>
           <Col sm={6} md={3}>
           <Card style={{width:'18rem'}} className='cardstart'>
           <GiVacuumCleaner className='cardicon'/>
           <Card.Body>
            <Card.Title>Vacuum Cleaning</Card.Title>
            <Card.Text style={{fontSize:'15px',fontWeight:'300',textAlign:'justify',wordSpacing:'normal'}}>Vacuum cleaning for cars is like giving your interior a thorough dusting. It involves using
            a vacuum cleaner equipped with various attachments to remove dirt,dust,crumbs.</Card.Text>
           </Card.Body>
           </Card>
           </Col>
           <Col sm={6} md={3}>
           <Card style={{width:'18rem'}} className='cardstart'>
           <GiCarSeat className='cardicon'/>
           <Card.Body>
            <Card.Title>Seats Washing</Card.Title>
            <Card.Text style={{fontSize:'15px',fontWeight:'300',textAlign:'justify',wordSpacing:'normal'}}>Washing the seats of a car is akin to giving them a rejuvenating spatreatment. It  involves
            using specialized cleaners and brushes to gently scrub away stains,spills and dirt.</Card.Text>
           </Card.Body>
           </Card>
           </Col>
           <Col sm={6} md={3}>
           <Card style={{width:'18rem'}} className='cardstart'>
           <MdCleaningServices className='cardicon' />
           <Card.Body>
            <Card.Title>Wet Cleaning</Card.Title>
            <Card.Text style={{fontSize:'15px',fontWeight:'300',textAlign:'justify',wordSpacing:'normal'}}>The car wash's wet cleaning service works wonders on your vehicle.With a thorough rinse and expert attention to detail,
             it removes dirt, grime, and stubborn stains,leaving your car shining and refreshed. </Card.Text>
           </Card.Body>
           </Card>
           </Col>
           <Col sm={6} md={3}>
           <Card style={{width:'18rem'}} className='cardstart'>
           <RiOilFill className='cardicon' />
           <Card.Body>
            <Card.Title>Oil Changing</Card.Title>
            <Card.Text style={{fontSize:'15px',fontWeight:'300',textAlign:'justify',wordSpacing:'normal'}}>Oil changing is a fundamental aspect of vehicle maintenance that helps keep your engine running smoothly.
            Regular oil changes ensure that your engine remains properly lubricated,reducing.</Card.Text>
           </Card.Body>
           </Card>
           </Col>
           <Col sm={6} md={3}>
           <Card style={{width:'18rem'}} className='cardstart'>
           <GiCarDoor className='cardicon' />
           <Card.Body>
            <Card.Title>Window Wiping</Card.Title>
            <Card.Text style={{fontSize:'15px',fontWeight:'300',textAlign:'justify',wordSpacing:'normal'}}>Window wiping is a simple yet essential part of car maintenance that ensures clear visibility while driving.
            Using high-quality windshield wipers and a suitable cleaning solution helps remove dirt.</Card.Text>
           </Card.Body>
           </Card>
           </Col>
           <Col sm={6} md={3}>
           <Card style={{width:'18rem'}} className='cardstart'>
           <GiCarWheel className='cardicon'/>
           <Card.Body>
            <Card.Title>Brake Reparing</Card.Title>
            <Card.Text style={{fontSize:'15px',fontWeight:'300',textAlign:'justify',wordSpacing:'normal'}}>Brake repairing is crucial for ensuring your vehicle's safety on the road.it's replacing worn brake pads, repairing brake lines, 
            or addressing issues with the brake system's components.</Card.Text>
           </Card.Body>
           </Card>
           </Col>
           </div>
       </Row>
       </Container>
     </div>
    </div>
    {/* end of service section */}
    {/* timing section */}
    <section className="cartime container">
      <Container>
        <Row>
          <Col md={6}>
            <div className='incar'>
            <h2>Opening AutoWash</h2>
            <p style={{fontSize:'15px',fontWeight:'300'}}>Plan your next car wash to keep your vehicle looking its best!</p>
            <p style={{fontSize:'15px',fontWeight:'300'}}>Remember, regular cleaning helps maintain your car's appearance and value.</p>
            <h3>Opening Hours</h3>
            <ul>
              <li><MdDone className='tmicon' style={{color:'green'}}/>Monday-Friday: 8:00 AM - 6:00 PM</li>
              <li><MdDone className='tmicon'style={{color:'green'}}/>Saturday: 9:00 AM - 5:00 PM</li>
              <li><MdOutlineCancel className='tmicon'style={{color:'red'}}/>Sunday: Closed</li>
            </ul>
            </div>
          </Col>
          <Col md={6}>
            <img src={timeImg} alt="Car Wash" style={{borderRadius:'5px'}} className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
    {/* end of timing section */}
    {/* counter section */}
    <div className='facts'>
         <div className='container'>
           <Row>
            <Col lg={3} md={6}>
              <div className='facts-item'>
              <FaMapMarkerAlt className='ico'/>
              <FaPlus className='ico1'/>
              <div className='facts-text'>
                <h3>10</h3>
                <p>Service Points</p>
              </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className='facts-item'>
              <GrUserWorker className='ico'/>
              <FaPlus className='ico1'/>
              <div className='facts-text'>
                <h3>350</h3>
                <p>Engineers&Workers</p>
              </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className='facts-item'>
              <IoIosPeople className='ico'/>
              <FaPlus className='ico1'/>
              <div className='facts-text'>
                <h3>5000</h3>
                <p>Happy Clients</p>
              </div>
              </div>
            </Col>
            <Col>
              <div className='facts-item'>
              <MdDone className='ico'/>
              <FaPlus className='ico1'/>
              <div className='facts-text'>
                <h3>10,000</h3>
                <p>Projects completed</p>
              </div>
              </div>
            </Col>
           </Row>
         </div>
    </div>

    {/* end of counter section */}
    {/* Team setion */}
    <div className='team'>
      <div className='container'>
        <div className='team-header text-center'>
          <h2>Our Workers</h2>
        </div>
        <Row>
      
          <div className='teamsection'>
            <Card className='text-center cardsection'>
              <Card.Img variant='top' src={team1} alt='team1' style={{border:'3px solid white'}}/>
              <Card.Body>
              <Card.Title className='font-weight-bold' style={{fontSize:'25px'}}>{Member1.name}</Card.Title>
              <Card.Text>{Member1.role}</Card.Text>
              <Card.Text style={{fontSize:'13px',}}>{Member1.description}</Card.Text>
              <ul>
                <li><FaFacebookSquare/></li>
                <li><FaTwitter /></li>
                <li><FiInstagram /></li>
              </ul>
              </Card.Body>
            </Card>
            <Card className='text-center cardsection'>
              <Card.Img variant='top' src={team2} alt='team2' style={{border:'3px solid white'}}/>
              <Card.Body>
              <Card.Title className='font-weight-bold' style={{fontSize:'25px'}}>{Member2.name}</Card.Title>
              <Card.Text>{Member2.role}</Card.Text>
              <Card.Text style={{fontSize:'13px',}}>{Member2.description}</Card.Text>
              <ul>
                <li><FaFacebookSquare/></li>
                <li><FaTwitter/></li>
                <li><FiInstagram /></li>
              </ul>
              </Card.Body>
            </Card>
            <Card className='text-center cardsection'>
              <Card.Img variant='top' src={team3} alt='team3' style={{border:'3px solid white'}}/>
              <Card.Body>
              <Card.Title className='font-weight-bold' style={{fontSize:'25px'}}>{Member3.name}</Card.Title>
              <Card.Text>{Member3.role}</Card.Text>
              <Card.Text style={{fontSize:'13px',}}>{Member3.description}</Card.Text>
              <ul>
                <li><FaFacebookSquare/></li>
                <li><FaTwitter/></li>
                <li><FiInstagram /></li>
              </ul>
              </Card.Body>
            </Card>
            </div>
         
        </Row>
      </div>
    </div> 
    {/* end of team section */}
      {/* footer section */}
      <section className='footer dashfooter'>
      <div className='footer-content'>
         <img src={imageFooter} alt='img'/>
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

export default Dashboard
