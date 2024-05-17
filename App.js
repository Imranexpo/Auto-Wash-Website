import'./App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Forgot from './Components/Forgotpassword/Forgot';
import Service from './Components/Service/Service';
import Price from './Components/Price/Price';
import Washing from './Components/Washing Points/Washing';
import Contact from './Components/Contact/Contact';
import Booking from './Components/Bookings/Booking';


//Import react router dom
import {createBrowserRouter, RouterProvider}from 'react-router-dom'
import BookingTable from './BookingTable';


//lets create a router
const router = createBrowserRouter([
  {
    path:'/',
    element:<div><Login/></div>
  },
  {
    path:'/register',
    element:<div><Register/></div>
  },
  {
    path:'/Dashboard',
    element:<div><Dashboard/></div>
  },
  {
    path:'/Forgot',
    element:<div><Forgot/></div>
  },
  {
    path:'/Service',
    element:<div><Service/></div>
  },
  {
    path:'/Price',
    element:<div><Price/></div>
  },
  {
    path:'/Washing',
    element:<div><Washing/></div>
  },
  {
    path:'/Contact',
    element:<div><Contact/></div>
  },
  {
    path:'/Booking',
    element:<div><Booking/></div>
  },
  {
    path:'/BookingTable',
    element:<div><BookingTable/></div>
  }


])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
       
    </div>
  )
}

export default App
