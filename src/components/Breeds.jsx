//import Breed from "./Breed";
import { useSelector } from 'react-redux'
import { get_image, num_Pags, creeCtrlPaginas } from '../js/fns/fnsApp.js'
import { Link } from "react-router-dom"
import { Div_Dogs, Card_Dog } from '../styles/styles.js';

const Breeds = (props) => {
   
   let data_breed
   let _currPag_breeds = useSelector(state => {
                           data_breed = state.dogBreeds[props.numero]
                           //console.log('data_breed',JSON.stringify(data_breed))
                           return data_breed
                        })
     

   {
      let currPag_breeds = _currPag_breeds
      if (currPag_breeds!==undefined) {
         //console.log('Número de Páginas -> ',num_Pags)
         const js_divCtrPag = document.getElementById('divCtrlPaginas')
         js_divCtrPag.innerHTML = '';
         const js_divbarraSearch = document.getElementById('divbarraSearch')
         if (js_divbarraSearch.style.display==='none') js_divbarraSearch.style.display = 'block'
         creeCtrlPaginas(num_Pags)
      }
      let ruta_temp
      return (
         <Div_Dogs>
            {
               (currPag_breeds!==undefined) 
               ?  currPag_breeds.map(
                     (breed,index) => {
                        return (
                           <Card_Dog key={index} id={`card_dog_${index}`}>
                              <br></br>
                              <div style={{display:'none'}}>
                                 {
                                    ruta_temp = get_image(
                                       JSON.stringify(breed.reference_image_id,null,null)
                                    ).replace(`${window.location.href}`, '') 
                                 }
                              </div>
                              <div>
                                 <Link to={`/detail-breed/${JSON.stringify(breed.id,null,null)}`}>
                                    <img
                                       style={{
                                          width:'100%',
                                          height: '444px',
                                          objectFit:'scale-down'
                                       }} 
                                       src={ruta_temp}
                                       alt={breed.name}
                                    />
                                 </Link>
                              </div>
                              <div>{JSON.stringify(breed.id,null,null)}</div>
                              <div>
                                 <Link to={`/detail-breed/${JSON.stringify(breed.id,null,null)}`}>
                                    {JSON.stringify(breed.name,null,null)}
                                 </Link>
                              </div>
                              <div>{JSON.stringify(breed.weight,null,null)}</div>
                              <div>{JSON.stringify(breed.height,null,null)}</div>
                              <div>{JSON.stringify(breed.life_span,null,null)}</div>
                              <div>{JSON.stringify(breed.temperament,null,null)}</div>
                              <div>{JSON.stringify(breed.id_Temps,null,null)}</div>
                              <div>{JSON.stringify(breed.Temp,null,null)}</div>
                           </Card_Dog>
                        )
                     }
                  )
               :  <>
                     <div style={{width:'99.5%'}}>
                        <h2   style={{
                                 marginTop:'33.3%',
                                 marginBottom:'100%'
                              }}
                        >
                           Cargando imágenes...; en caso de que no, Refresh o Actualizar &#10227;
                        </h2>
                     </div>
                     <div style={{width:'99.5%'}}>
                        <img margin='auto' width='100%' src='https://media.giphy.com/media/gt84hJMLdC2If1rZox/giphy.gif'/>
                     </div>
                  </>
            }
         </Div_Dogs>
      );
   }

   
}


export default Breeds;