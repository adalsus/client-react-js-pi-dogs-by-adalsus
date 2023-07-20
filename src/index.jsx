import React from "react"
import ReactDOM from "react-dom/client"

import './index.css'
import Intro from './pages/Intro.jsx';
import LandingPage from './pages/LandingPage.jsx';


var rootemp = ReactDOM.createRoot(document.getElementById('temp_root'));
rootemp.render(<Intro />);


function inicie() {
  rootemp.render(<LandingPage />);
}
const tiempo = /**0**/2400/**/
setInterval(inicie, tiempo);

