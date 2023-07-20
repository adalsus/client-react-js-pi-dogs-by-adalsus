//import React from "react"
import './LandingPage.css'
import dogs from '../images/dogs.gif'
import app from '../app.jsx'



const LandingPage = () => {
      
      function pass(e) {
         const div_temp_root = document.getElementById("temp_root");
         div_temp_root.remove();
         app();
      }
      
      return (
         <div className='cLandingPage'>
            <div id='h_cLandingPage'>
               <div id='tit_Dogs'>Dogs</div>
               <div><img src={dogs} id="img_dogs" alt="Dogs" /></div>
               <div><button onClick={pass} id='btn_HomePage'>Home Page</button></div>
            </div>
         </div>
      );

}



export default LandingPage