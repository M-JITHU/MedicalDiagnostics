import React from "react";
import './component.scss';
import state from '../staute.jpg';
// import 'bootstrap/dist/css/bootstrap.css';
const home =()=>
{
    return(
      <div>
      {/* <div class="car">
 <div id="myCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    
    <div class="carousel-inner rounded-3 shadow-4-strong">
      <div class="carousel-item active">
         <img  class="bd-placeholder-img" width="100%" height="100%" src={state}/>
       
         <div class="container">
          <div class="carousel-caption text-start text-primary">
            <h1>LUNG CANCER DETECTION</h1>
            <p>welcome to kle Technological University</p>
            <p><a id="card" class="btn" href="#">Login</a></p>
          </div>
        </div>
      </div>

      <div class="carousel-item">
         <img  class="bd-placeholder-img" width="100%" height="80%" src="../assets/statue5.jpg"/>
       
         <div class="container">
          <div class="carousel-caption text-danger">
            <h1>Coordinator</h1>
            <p>upload details of the students</p>
            <p><a id="card" class="btn" href="#">Login</a></p>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <img  class="bd-placeholder-img" width="100%" height="60%" src="../assets/statue6.jpg"/>
       
        <div class="container">
          <div class="carousel-caption text-end text-danger">
            <h1>One more for good measure.</h1>
            <p>creating knowledge with values</p>
            <p><a id="card" class="btn" href="#">sign up</a></p>
          </div>
        </div>
      </div>
    </div>
    
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div> */}

 <br/>
  
<div class="container1">
    <div class="row1">
      <div class="dugc-mem">
        <a href="/lab" role="button" class="nav-op btn  btn-block text-center">
          <span><i class="fa fa-users"></i></span>
          <br/>Make apointment</a>
      </div>
      <div class="dugc-mem">
        <a href="/upload" role="button" class="nav-op btn  btn-block text-center">
          <span><i class="fa fa-user"></i></span>
          <br/>Consult Doctor</a>
      </div>
      <div class="dugc-mem">
        <a href="/friends" role="button" class="nav-op btn  btn-block text-center">
       <span><i class="fa fa-user"></i></span>
       <br/>view Patient</a>
      </div>
    </div>
  </div>
  </div>
    
    );

}

export default home;