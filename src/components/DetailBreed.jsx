import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux'
import obj_image from '../images/dogs.gif'

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
      let url_img
      if (currPag_breeds!==undefined) {
         const js_divCtrPag = document.getElementById('divCtrlPaginas')
         js_divCtrPag.innerHTML = ''
         //console.log('detail_id -> ', detail_id)
         //console.log('currPag_breeds')
         //console.log(currPag_breeds)
         //const arrcurrPag_breeds = JSON.stringify(currPag_breeds)
         const [ breedOfid ] = currPag_breeds.filter( elem => elem.id === detail_id-0);
         //console.log('breedOfid')
         //console.log(breedOfid)
         if(breedOfid.image!==null && breedOfid.image.url!==undefined) {
            url_img = (breedOfid.image.url!==undefined) ? breedOfid.image.url : breedOfid.image
         } else {
            url_img = obj_image
         }
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
            Temp: JSON.stringify(breedOfid.Temp)
         }
      }
      let ruta_temp
      return (
         <div>
            <div style={{fontSize: '250%', fontWeight:'bold'}}>DetailBreed</div>
            <div> 
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

                  <div>
                     <img
                        style={{
                           width:'100%'
                        }} 
                        src={url_img}
                        alt={camposBreed.name}
                     />
                  </div>
                  <h2>{camposBreed.name}</h2>
            </div>
         </div>
      );
   
   }
}


export default DetailBreed;