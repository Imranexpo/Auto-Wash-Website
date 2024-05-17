import React,{useState, useEffect} from 'react'
import { ImPower } from 'react-icons/im';
import { GiCarWheel } from "react-icons/gi";
import { AiFillCloseCircle } from 'react-icons/ai';
import { IoMenu } from 'react-icons/io5';
import { Table } from 'react-bootstrap';
import { MdDelete } from "react-icons/md";
import axios from 'axios';


const BookingTable = ({booking}) => {
    const[bookings, setBookings] =useState([]);
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
      // Fetch data from the server when component mounts
      axios.get('http://localhost:3000/booking')
          .then(response => {
              // Update state with fetched data
              setBookings(response.data);
          })
          .catch(error => {
              console.error('Error fetching bookings:', error);
          });
  }, []); // Empty dependency array ensures the effect runs only once, like componentDidMount
   
  // Function to delete a booking
const deleteBooking = (bookingId) => {
  axios.delete(`http://localhost:3000/booking/${bookingId}`)
      .then(response => {
          console.log(response.data.message); // Log success message
          // Optionally, update the state or UI to reflect the deletion
      })
      .catch(error => {
          console.error('Error deleting booking:', error);
      });
};

const handleDelete = (bookingId) => {
  if (!bookingId) {
    console.error('Booking ID is undefined');
    return;
  }

  deleteBooking(bookingId); // Call deleteBooking function with booking ID
};



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
     {/* Table section */}
     <div className='tablesection'>
     <h1 className='text-center'>Booking Table</h1>
     <Table bordered hover responsive>
        <thead>
           <tr style={{fontSize:'15px',fontWeight:'700'}}>
            <th>Full Name</th>
            <th>Phone No</th>
            <th>Wash Date</th>
            <th>Wash Time</th>
            <th>Package</th>
            <th>Wash Point</th>
            <th>Message</th>
            <th>Delete</th>
           </tr>
        </thead>
        <tbody>
        {bookings.map(booking => (
                        <tr key={booking.id} style={{fontSize:'10px',fontWeight:'normal'}} className='headsection'>
                            <td>{booking.FullName}</td>
                            <td>{booking.PhoneNo}</td>
                            <td>{booking.WashDate}</td>
                            <td>{booking.WashTime}</td>
                            <td>{booking.Package}</td>
                            <td>{booking.WashPoint}</td>
                            <td>{booking.Message}</td>
                            <td>
                            <MdDelete onClick={() => handleDelete(booking.id)} style={{fontSize:'18px',marginLeft:'20px',cursor:'pointer'}}/>
                            </td>
                        </tr>
                    ))}
        </tbody>
     </Table>
    </div>
     {/* end of table section */}
    </div>
  )
}

export default BookingTable;
