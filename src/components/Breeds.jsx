//import Breed from "./Breed";
import { useSelector } from 'react-redux'
import { get_image, num_Pags, creeCtrlPaginas } from '../js/fns/fnsApp.js'

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
         creeCtrlPaginas(num_Pags)
      }
      let ruta_temp
      return (
         <div>
            {
               (currPag_breeds!==undefined) 
               ?  currPag_breeds.map(
                     (breed,index) => {
                        return (
                           <div key={index}>
                              <br></br>
                              <div style={{display:'none'}}>
                                 {
                                    ruta_temp = get_image(
                                       JSON.stringify(breed.reference_image_id,null,null)
                                    ).replace(`${window.location.href}`, '') 
                                 }
                              </div>
                              <div>
                                 <img
                                    style={{
                                       width:'100%',
                                       objectFit:'contain'
                                    }} 
                                    src={ruta_temp}
                                    alt={breed.name}
                                 />
                              </div>
                              <div>{JSON.stringify(breed.id,null,null)}</div>
                              <div>{JSON.stringify(breed.name,null,null)}</div>
                              <div>{JSON.stringify(breed.weight,null,null)}</div>
                              <div>{JSON.stringify(breed.height,null,null)}</div>
                              <div>{JSON.stringify(breed.life_span,null,null)}</div>
                              <div>{JSON.stringify(breed.temperament,null,null)}</div>
                              <div>{JSON.stringify(breed.id_Temps,null,null)}</div>
                              <div>{JSON.stringify(breed.Temp,null,null)}</div>
                           </div>
                        )
                     }
                  )
               :  <div></div>
            }
         </div>
      );
   }

   
}


export default Breeds;