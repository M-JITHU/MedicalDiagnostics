// import logo from './logo.svg';
import './App.scss';
import React,{Component} from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import Home from './components/home';
import About from './components/contact';
import Contact from './components/about';
import App from './App';
import Login from './components/login';
import Signup from './components/signup';
import logo from './logo.png';


function navbar() {
  return (
    <Router>
    <nav className='nav-head2'>
            <ul>
              <li><img src={logo} width='200px'></img></li>
             
            </ul>
            <div className='nav-end'>
          <div class="nav-section nav-des-section">
          {/* <div class="nav-des-sub">DEPARTMENT OF UNDERGRADUATE COURSES</div>
          <div class="nav-des-sub"></div>  */}
          <div class="op-end">
            <button type="button" class="nav-op btn me-4 justify-content-md-end"><Link to="login">Login</Link></button>
            <button type="button" class="nav-op btn"><Link to="register">Sign-Up</Link></button>
          </div>
      </div>
       </div>
        
    </nav>
    <header class="nav-head">
      <ul>
      <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="about">Doctors</Link>
              </li>
              <li>
                <Link to="contact">Patients</Link>
              </li>
        <li> <Link to="contact">Services</Link></li>
        <li> <Link to="contact">About us</Link></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

    </header>
    {/* <About/> */}
  
     <Routes>
           <Route exact path='/' element={< Home />}></Route>
           <Route exact path='about' element={< About />}></Route>
           <Route exact path='contact' element={< Contact />}></Route>
           <Route exact path='login' element={<Login/>}></Route>
           <Route exact path='register' element={<Signup/>}></Route>
    </Routes>
 </Router>
  );
}

export default navbar;
