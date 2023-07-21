import React from "react"
import ReactDOM from "react-dom/client"

import './index.css'
import { mseg_PORTADA } from './confpara.js'
import Intro from './pages/Intro.jsx';
import LandingPage from './pages/LandingPage.jsx';


var rootemp = ReactDOM.createRoot(document.getElementById('temp_root'));
rootemp.render(<Intro />);


function inicie() {
  rootemp.render(<LandingPage />);
}
const tiempo = mseg_PORTADA;
setInterval(inicie, tiempo);

