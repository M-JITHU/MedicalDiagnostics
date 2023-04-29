import logo from './logo.svg';

import './App.scss';
import Navbar from './Navbar';
import Sidebar from './sidebar';
import Footer from './footer';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Patient from './components/Patient';
import Login from './components/Login';
import Signup from './components/Signup';
import Doctor from './components/Doctor';
import Patientdata from './components/Patientdata';


const  App =()=> {

return (
  
     <>
      {/* <div class="grid-container1">
     <div class="Item1"><Sidebar/></div>
     <div class="Item2"><Navbar/></div>
     <div class="Item3"><Footer /></div>
     </div>  */}

     <Router>
     <div class="mb-4"><Navbar/></div>
     <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='about' element={< About />}></Route>
            <Route exact path='patient_form' element={< Patient />}></Route>
            <Route exact path='login' element={<Login />}></Route>
            <Route exact path='register' element={<Signup />}></Route>
            <Route exact path='/doctor_profile' element={<Doctor />}></Route>
            <Route exact path='/patientdata' element={<Patientdata />}></Route>

          </Routes>
     </Router>

      </>
 
      );
      
  
}

export default App;
