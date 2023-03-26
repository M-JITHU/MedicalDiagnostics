import React from 'react'
import './component.scss';
import { FiSearch,FiFacebook,FiTwitter,FiLinkedin } from "react-icons/fi";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.css';
const Login = () => {

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



    axios.post("http://127.0.0.1:8000/api/login/", userdata)
    
    .then((response)=>{
      if(userdata.username){
        // localStorage.setItem("user", userdata.username,userdata.password);
        localStorage.setItem("user", JSON.stringify(userdata));
        console.log(userdata)
        alert("logged successfully")
        navigate('/doctor_profile')
      }
      console.log(response.status,response.data)})
    // .catch((error) => console.log(error));
    .catch(error => {
      if (error.response) {
        // The server responded with a status code outside of the 2xx range
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    });




  }
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
            <label class="form-label" for="form3Example3" >Username</label>
            <input type="text" id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter a your username"  name="username" value={Values.username} onChange={setVal}   />
          </div>

          <div class="form-outline mb-3">
            <label class="form-label" for="form3Example4">Password</label>
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password"  value={Values.password} onChange={setVal} name="password"   />
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
             <button class="btn btn-primary" onClick={handleSubmit} id="lobtn"  type='button'>Login</button>
             {/* <input type="button" className="btn btn-primary" onClick={handleSubmit} value="Login" /> */}
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? </p>
            {/* <a href=""
                class="link-danger">Register</a> */}
          </div>

        </form>
      </div>
    </div>
  </div>
  
</section>
    </>
  )
}

export default Login;