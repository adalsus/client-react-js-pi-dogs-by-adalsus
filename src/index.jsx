import React from "react"
import ReactDOM from "react-dom/client"

import './index.css'
import Intro from './pages/Intro.jsx';
import Ingreso from './pages/Ingreso.jsx';


var rootemp = ReactDOM.createRoot(document.getElementById('temp_root'));
rootemp.render(<Intro />);


function inicie() {
  rootemp.render(<Ingreso />);
}
setInterval(inicie, 2400);

