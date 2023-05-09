// import logo from './logo.svg';
import './App.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import {
  IoMdNotificationsOutline,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { FiAlignJustify } from "react-icons/fi";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import logo from '../src/images/logo.png';
import axios from 'axios';
import Signup from './components/Signup';





function Navbar() {
  const [darkmode, setDarkmode] = useState(false);
  const auth = localStorage.getItem('auth');
  const navigate = useNavigate();
  const [isLoggedOut, setIsLoggedOut] = useState(false);



  const signup = ()=>{
    // navigate('register')
  }

  const login = ()=>{
    // navigate('/login')
  }

  const logout = () => {
    console.log(auth);
    const token = auth;
    localStorage.clear();
    alert("Your logout successfully");
    // navigate("/");


  
    // const authToken = localStorage.getItem('auth'); // get authentication token from local storage
    // console.log(authToken)
    // axios.post('http://127.0.0.1:8000/api/logout', null, {
    //   headers: {
    //     'Authorization': `Bearer ${authToken}`, // include authentication token in header
    //     'Content-Type': 'application/json' // set content type to JSON
    //   }
    // })
    // .then(response => {
    //   alert("logout")
    //   setIsLoggedOut(true); // set state to indicate successful logout
    //   // handle successful logout, e.g. redirect the user
    // })
    // .catch(error => {
    //   alert("cannot logout")
    //   console.log(error); // log any errors to console
    //   // handle error response or network error
    // });



    
    // axios.post('http://127.0.0.1:8000/api/logout',null,{
    //   headers: {
    //     'Authorization': 'Bearer ' + token, // include any required authentication token
    //     'Content-Type': 'application/json' // set content type to JSON
    //   }
    // })
    //   .then(response => {
    //     alert("logout successfully")
    //     console.log("logout done")
    //   })
    //   .catch(error => {
    //     // handle error response or network error
    //     alert("cannot logout ")
    //     console.log("logout not done")
    //   });  
}
  
  return (

    <div class="contain">
      <nav className='nav-head2  fixed-top'>
        <ul>
          
          {/* <li className='icon-logo'><img src={logo} width='200px' style={{marginBottom:"100px", marginTop:"0"}} ></img></li> */}
          <div className='icon-logo'>
               <img src={logo} width='200px' style={{marginTop:"0"}} ></img>
            </div>
        
        </ul>
        <div className='nav-end'>
          <div class="nav-section nav-des-section">
            {/* <div class="nav-des-sub">DEPARTMENT OF UNDERGRADUATE COURSES</div>
          <div class="nav-des-sub"></div>  */}
          
            <div class="op-end">

              
              <div class="me-4"><FiSearch class="me-1" />
                <input
                  type="text"
                  placeholder="Search.."
                /></div>
              <div class="me-4"
                onClick={() => {
                  if (darkmode) {
                    document.body.classList.remove("dark");
                    setDarkmode(false);
                  } else {
                    document.body.classList.add("dark");
                    setDarkmode(true);
                  }
                }}
              >
                {darkmode ? (
                  <RiSunFill className="text-light" />
                ) : (
                  <RiMoonFill className=" dark:text-white" />
                )}
              </div>

              {
                auth ? <>


                  <Link to="/"> <button type="button" class="nav-op btn" onClick={logout}>Logout</button></Link>
                </> : <>

                  <Link to="login"><button type="button" class="nav-op btn me-4 justify-content-md-end" onClick={login}>Login</button></Link>
                  <Link to="register"> <button type="button" class="nav-op btn" onClick={signup}>Sign-Up</button></Link>
                </>
              }
            </div>
          </div>
        </div>

      </nav>
      <header class="nav-head">
        <ul>
          {
            auth ? <>
              {/* <li>
                  <Link to="contact">Doctors</Link>
                </li>
                <li>
                  <Link to="about">Patients</Link>
                </li> */}
              <ul>
                <li>
                  <Link to="doctor_profile" >Doctors</Link>
                </li>
                <li>
                  <Link to="patient_form">Patients</Link>
                </li>

                <li>
                  <Link to="search">Search</Link>
                </li>
              </ul>

            </> : <>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li> <Link to="services">Services</Link></li>
              <li> <Link to="contact">About us</Link></li>
            </>
          }
        </ul>

      </header>
      {/* <About/> */}

    </div>

  );
}


export default Navbar;
