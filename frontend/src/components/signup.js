import React from "react";
import "./component.scss";
// import { FiSearch,FiFacebook,FiTwitter,FiLinkedin } from "react-icons/fi";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import {FaUserCircle,FaUser} from "react-icons/fa"
import {MdEmail,MdDriveFileRenameOutline} from "react-icons/md"
import {RiLockPasswordFill} from "react-icons/ri"

const Signup =()=>{
  
  const [Values, setdata] = useState({
    username: "",
    password: "",
  })
  const navigate = useNavigate();

  const setVal = (event) => {
    // const {name,value} = e.target;
    const name = event.target.name;
    const value = event.target.value;
    // event.preventDefault();

    // setdata({...data,[name]:value})
    setdata((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();


    const userdata = {
      username:Values.username,
      password:Values.password
    }

    console.log(userdata);
    console.log("user data defined")
  }


    return (

<section class="vh-100 ">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="mb-4" >
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-2">
                  <i class="fa-lg me-3 mb-4 fa-fw"><MdDriveFileRenameOutline size={20}/></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control" />
                      <label class="form-label" for="form3Example1c">FirstName</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-2">
                  <i class="fa-lg me-3 mb-4 fa-fw"><MdDriveFileRenameOutline size={20}/></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control" />
                      <label class="form-label" for="form3Example1c">LastName</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-2">
                    <i class="fa-lg me-3 mb-4 fa-fw"><FaUser size={20}/></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control" />
                      <label class="form-label" for="form3Example1c">UserName</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-2">
                  <i class="fa-lg me-3 mb-4 fa-fw"><MdEmail size={20}/></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" class="form-control" />
                      <label class="form-label" for="form3Example3c">Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-2">
                  <i class="fa-lg me-3 mb-4 fa-fw"><RiLockPasswordFill size={20}/></i>           
                                   <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" class="form-control" />
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-2">
                  <i class="fa-lg me-3 mb-4 fa-fw"><RiLockPasswordFill size={20}/></i>       
                                <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" class="form-control" />
                      <label class="form-label" for="form3Example4cd">Repeat password </label>
                    </div>
                  </div>

                  {/* <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div> */}

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn nav-op">Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
);
}
export default Signup;