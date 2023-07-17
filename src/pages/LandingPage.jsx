import React from "react"
import ReactDOM from "react-dom/client"
import App from "../App.jsx"
import './LandingPage.css'
import dogs from '../images/dogs.gif'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import store from '../redux/store.js'
import { save_images_server } from '../js/fns/fnsApp.js'



const app = () => {
   const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(
      <Provider store={store}>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </Provider>
  );
}
const LandingPage = () => {
   function pass(e) {
      const div_temp_root = document.getElementById("temp_root");
      div_temp_root.remove();
      save_images_server();
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