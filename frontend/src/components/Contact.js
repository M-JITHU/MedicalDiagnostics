import React from "react";
import './component.scss';
// import 'bootstrap/dist/css/bootstrap.css';

const about =()=>
{
    return (
      <section class="vh-100 mb-4"  >
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-9">
    
            <h1 class="text-primary mb-4">Cancer Diagnostics</h1>
    
            <div id="car" class="car">
              <div class="card-body text-primary">
    
                <div class="row align-items-center pt-4 pb-3">
                  <div class="col-md-3 ps-5">
    
                    <h6 class="mb-0">Full name</h6>
    
                  </div>
                  <div class="col-md-9 pe-5">
    
                    <input type="text" class="form-control " />
    
                  </div>
                </div>
    
                <hr class="mx-n3"/>
    
                <div class="row align-items-center py-3">
                  <div class="col-md-3 ps-5">
    
                    <h6 class="mb-0">Gender</h6>
    
                  </div>
                  <div class="col-md-9 pe-5 ">
    
                  
                  
                  <select class="select form-control text-primary">
                    <option value="1" disabled>Choose option</option>
                    <option value="2">Male</option>
                    <option value="3">FeMale</option>
                    <option value="4">Other</option>
                  </select>
                  {/* <label class="form-label select-label m-4">Choose option</label> */}
                  

              
    
                  </div>
                </div>
    
                <hr class="mx-n3"/>
    
                <div class="row align-items-center py-3">
                  <div class="col-md-3 ps-5">
    
                    <h6 class="mb-0">Address</h6>
    
                  </div>
                  <div class="col-md-9 pe-5">
    
                    <textarea class="form-control" rows="3" placeholder="Message sent to the employer"></textarea>
    
                  </div>
                </div>
    
                <hr class="mx-n3"/>
    
                <div class="row align-items-center py-3">
                  <div class="col-md-3 ps-5">
    
                    <h6 class="mb-0">Upload CT image</h6>
    
                  </div>
                  <div class="col-md-9 pe-5">
    
                    <input class="form-control form-control-lg" id="formFileLg" type="file" />
                    <div class="small text-muted mt-2 text-primary">upload size should be less than 2mb</div>
    
                  </div>
                </div>
    
                <hr class="mx-n3"/>
    
                <div class="px-5 py-4 end">
                  <button type="submit" class="btn nav-op ">Generate Report</button>
                </div>
    
              </div>
            </div>
    
          </div>
        </div>
      </div>
    </section>
    );
}

export default about;
