import { useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import doggies from './images/doggies.png'
import './App.css'
import SearchBar from './components/SearchBar.jsx'
//import Cards from './components/Cards.jsx'
//rimport Card from './components/Card.jsx'

// Import the Home page component
import Home from "./pages/Home.jsx";

// Import and apply CSS stylesheet
//import "./styles/styles.js";

function App() {

  return (
    <div 
        className="App" 
        style={{
          padding: '20vw',
          backgroundImage: `url(${doggies})`,
          backgroundSize: '100%'
        }}
        >
      
        
        <h1>Doggies Application</h1>
        <div><img src={reactLogo} className="logo" alt="React logo" /></div>
        <div className="card">

          <div>
            { //<Cards
              //  characters={characters}
            }
            {
            //<Cards
        
            ///>
            }
          </div>

        </div>
        
        <div>
          
          <SearchBar
            onSearch={ characterID => window.alert(characterID) }
          />
          
        </div>
      
        {/*<Home />*/}
    </div>
  );
}



export default App