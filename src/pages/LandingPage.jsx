//import React from "react"
import './LandingPage.css'
import dogs from '../images/dogs.gif'
import app from '../app.jsx'
import ltac from '../images/logo_that-api-company_175.png'
import le from '../images/logo_elephantsql_175.png'
import lgce from '../images/logo_google-compute-engine_175.png'
import lgf from '../images/logo_glitch-fastly_175.png'



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
               <br />
               <div id='tit_thanks_to'>Agradecimientos a:</div>
               <div id='thanks_to'>
                  <a 
                     href='https://thatapicompany.com/'
                     target="_blank" rel="noopener noreferrer"
                  ><img src={ltac} width='86%'/></a>
                  <a 
                     href='https://www.elephantsql.com/'
                     target="_blank" rel="noopener noreferrer"
                  ><img src={le} width='86%'/></a>
                  <a 
                     href='https://cloud.google.com/compute/docs/gpus/gpu-regions-zones?hl=es-419'
                     target="_blank" rel="noopener noreferrer"
                  ><img src={lgce} width='86%'/></a>
                  <a 
                     href='https://glitch.com/'
                     target="_blank" rel="noopener noreferrer"
                  ><img src={lgf} width='86%'/></a>
               </div>
            </div>
         </div>
      );

}



export default LandingPage