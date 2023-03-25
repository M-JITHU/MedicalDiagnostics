import logo from './logo.svg';

import './App.scss';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Footer from './footer';
import React from 'react';


const  App =()=> {

return (
  
     <>
      {/* <div class="grid-container1">
     <div class="Item1"><Sidebar/></div>
     <div class="Item2"><Navbar/></div>
     <div class="Item3"><Footer /></div>
     </div>  */}
       
     <Navbar/>
     <Footer />
      </>
 
      );
      
  
}

export default App;
