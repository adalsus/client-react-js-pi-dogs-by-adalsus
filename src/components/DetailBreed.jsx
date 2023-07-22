import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux'
import { get_image } from '../js/fns/fnsApp.js'

const DetailBreed = (props) => {

   const { detail_id } = useParams({})
   let data_breed
   let _currPag_breeds =   useSelector(state => {
                              data_breed = state.dogBreeds[props.numero]
                              //console.log('data_breed',JSON.stringify(data_breed))
                              return data_breed
                           })

   
   {
      let currPag_breeds = _currPag_breeds
      let camposBreed
      let ruta_temp
      if (currPag_breeds!==undefined) {
         const js_divCtrPag = document.getElementById('divCtrlPaginas')
         js_divCtrPag.innerHTML = ''
         const js_divbarraSearch = document.getElementById('divbarraSearch')
         if (js_divbarraSearch.style.display==='block') js_divbarraSearch.style.display = 'none'
         //console.log('detail_id -> ', detail_id)
         //console.log('currPag_breeds')
         //console.log(currPag_breeds)
         //const arrcurrPag_breeds = JSON.stringify(currPag_breeds)
         const [ breedOfid ] = currPag_breeds.filter( elem => elem.id === detail_id-0);
         /*console.log('breedOfid')
         console.log(breedOfid)
         if( breedOfid.hasOwnProperty('image') ) {
            console.log(breedOfid)
            url_img = (breedOfid.image!==null) ? breedOfid.image.url : obj_image
         } else {
            url_img = obj_image
         }*/
         if (breedOfid!==undefined) {
            camposBreed = {
               id: breedOfid.id,
               name: breedOfid.name,
               bred_for: breedOfid.bred_for,
               life_span: breedOfid.life_span,
               height_imperial: breedOfid.height.imperial,
               height_metric: breedOfid.height.metric,
               weight_imperial: breedOfid.weight.imperial,
               weight_metric: breedOfid.weight.metric,
               temperament: breedOfid.temperament,
               id_Temps: breedOfid.id_Temps,
               Temp: JSON.stringify(breedOfid.Temp,null,null),
               reference_image_id: JSON.stringify(breedOfid.reference_image_id,null,null)
            }
         }
      }

      return (
         <div>
            <div style={{fontSize: '250%', fontWeight:'bold'}}>DetailBreed</div>
            {
               (currPag_breeds!==undefined && camposBreed!==undefined) 
               ?  <div> 
                     <h2>{camposBreed.name}</h2>
                     <div>{camposBreed.id}</div>
                     <div>Bred for:&nbsp;&nbsp;&nbsp;{camposBreed.bred_for}</div>
                     <div>Life span:&nbsp;&nbsp;&nbsp;{camposBreed.life_span}</div>
                     <div>Weight imperial:&nbsp;&nbsp;&nbsp;{camposBreed.weight_imperial}&nbsp;lbs</div>
                     <div>Weight metric:&nbsp;&nbsp;&nbsp;{camposBreed.weight_metric}&nbsp;kgs</div>
                     <div>Height imperial:&nbsp;&nbsp;&nbsp;{camposBreed.height_imperial}&nbsp;plg</div>
                     <div>Height metric:&nbsp;&nbsp;&nbsp;{camposBreed.height_metric}&nbsp;cm</div>
                     <div>Temperament:&nbsp;&nbsp;&nbsp;{camposBreed.temperament}</div>
                     <div>{camposBreed.id_Temps}</div>
                     <div>{camposBreed.Temp}</div>
                     <br />
                     <div style={{display:'none'}}>
                        {
                           ruta_temp = get_image(
                              camposBreed.reference_image_id
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
                           alt={camposBreed.name}
                        />
                     </div>
                     <h2>{camposBreed.name}</h2>
                  </div>
               :  <div></div>
            }
         </div>
      );
   
   }
}


export default DetailBreed;