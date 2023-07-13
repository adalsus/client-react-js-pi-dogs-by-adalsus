import React from "react"
import ReactDOM from "react-dom/client"
import App from "../App.jsx"
import './Ingreso.css'
import dogs from '../images/dogs.gif'



const app = () => {
   const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(
      <React.StrictMode>
         <App />
      </React.StrictMode>
  );
}
const Ingreso = () => {
   function pass(e) {
      const div_temp_root = document.getElementById("temp_root");
      div_temp_root.remove();
      app();
   }
   return (
      <div className='cIngreso'>
         <div id='h_cIngreso'>
            <div id='tit_Dogs'>Dogs</div>
            <div><img src={dogs} id="img_dogs" alt="Dogs" /></div>
            <div><button onClick={pass} id='btn_HomePage'>Home Page</button></div>
         </div>
      </div>
   );
}



export default Ingreso;