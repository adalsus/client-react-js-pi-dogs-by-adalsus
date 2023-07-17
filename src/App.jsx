import { useState } from "react";
import doggies from './images/doggies.png'
import './App.css'
import SearchBar from './components/SearchBar.jsx'


import { Routes, Route } from 'react-router-dom';
import Breeds from './components/Breeds.jsx'
import Nav from './components/Nav.jsx'
import DetailBreed from "./components/DetailBreed";
import FormBreed from "./components/FormBreed";
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getDogBreeds } from './redux/actions.js'



function App() {

  
  const [breedsArr, setBreedsArr] = useState({
    breeds_array: []
  })
  const cleanBreedsArr = () => {
    setBreedsArr({breeds_array: []})
  }
  const updateBreedsArr = (value) => {
    Object.assign(breedsArr.breeds_array, { breeds_array:value });
  }
  

  const [pagina, setPagina] = useState({
    barra: '',
    numero: 0,
  })


  const dispatch = useDispatch()
  useLayoutEffect(() => {
    //Cada que cambie el state efectúa estas instrucciones
    getDogBreeds(pagina.barra)(dispatch)
  },[pagina]);
  

  let onDigita_App = event => {
    Object.assign(pagina,{numero:0})
    Object.assign(pagina,{barra:event.target.value})
    setPagina({...pagina})
  }
  const blank_barra = () => {
    Object.assign(pagina,{numero:0})
    Object.assign(pagina,{barra:''})
    setPagina({...pagina})
  }
  
  const on_btn_click = (event) => {
    //console.log(typeof(event.target.innerText - 1))
    Object.assign(pagina,{numero:(event.target.innerText - 1)})
    setPagina({...pagina})
  }

  
  //{
  

    return (
      <div  className="App" 
          style={{
            backgroundImage: `url(${doggies})`,
            backgroundSize: '100%',
            maxWidth: '100%',
          }}
      >
        <div id='divCtrlPaginas' onClick={on_btn_click}></div>
        <div id='dogs_app'>Doggies Application</div>
        <div id='div_espaciador'></div>
        <div id='bm'>
          <div id='bm-nav' className='bm-item'><Nav onClick={blank_barra}/></div>
        </div>


        <Routes>

          <Route  path = '/'
                element =   {<Breeds
                                numero={pagina.numero}
                                cleanBreedsArr={cleanBreedsArr}
                                updateBreedsArr={updateBreedsArr}
                                breeds_array={breedsArr.breeds_array}
                            />}
        />
          <Route  path = '/detail-breed'
                element =   {<DetailBreed
    
                            />}
          />
          <Route  path = '/form-breed'
                element =   {<FormBreed
    
                            />}
          />

        </Routes>

    

        <div>
      
          <SearchBar
            suValor={pagina.barra}
            onChange={onDigita_App}
            onSearch={characterID => window.alert(characterID)}
          />
      
        </div>
  
      </div>
    );
  

  //}


}



export default App