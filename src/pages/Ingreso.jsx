import React from "react"
import ReactDOM from "react-dom/client"
import App from "../App.jsx"


const root = () => {
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
      root();
   }
   return (
      <div>
         <button onClick={pass}>Home Page</button>
      </div>
   );
}

export default Ingreso;