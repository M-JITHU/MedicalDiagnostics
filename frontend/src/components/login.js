import React from "react";
import './component.scss';
import { FiSearch,FiFacebook,FiTwitter,FiLinkedin } from "react-icons/fi";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';


const login =()=>
{
  // const [Values, setdata] = useState({
  //   usn: "",
  //   password: "",
  // })
  // const navigate = useNavigate();

  // const successAlert = () => {
  //   // window.alert("Invalid Credentials");
  //   toast.success("User logged in successfully",{
  //     transition:Flip
  //   });
  // }

  // const setVal = (event) => {
  //   // const {name,value} = e.target;
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   // event.preventDefault();

  //   // setdata({...data,[name]:value})
  //   setdata((prev) => {
  //     return { ...prev, [name]: value }
  //   })
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // console.log(Values.usn);
  //   // console.log(Values.password);

  //   let result = await fetch('http://13.232.165.158:4000/login', {
  //     method: "post",
  //     body: JSON.stringify({ usn: Values.usn, password: Values.password }),
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //   });
  //   result = await result.json();
  //   console.log(result)

  //   if (result.usn) {
  //     localStorage.setItem("user", JSON.stringify(result));
  //     // alert("Successfully logged in");
  //     successAlert();
  //     navigate('/');

  //   } else {
  //     toast.error("Bad user credential" ,{
  //       transition: Flip
  //     });
  //     alert("please enter correct details")

  //   }
  // }
    return (
    <>
     <section class="vh-100">
  <div  class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb-0 me-3">Sign in with</p>
            <button type="button" class="btn btn-primary btn-floating mx-1">
              <FiFacebook/>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
            <FiLinkedin/>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
             <FiTwitter/>
            </button>
          </div>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0"></p>
          </div>

       
          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" name="usn"  />
            <label class="form-label" for="form3Example3" >Email address</label>
          </div>

          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password"  name="password"   />
            <label class="form-label" for="form3Example4">Password</label>
          </div>

          <div class="d-flex justify-content-between align-items-center">
          
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text-body">Forgot password?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button class="btn btn-primary " 
             >login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href=""
                class="link-danger">Register</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  
</section>
     </>
    );
}

export default login;