import React from "react"
import ReactDOM from "react-dom/client"

import './index.css'
import Intro from './pages/Intro.jsx';
import Ingreso from './pages/Ingreso.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Intro />);


function inicie() {
  root.render(<Ingreso />);
}
setInterval(inicie, 2400);
