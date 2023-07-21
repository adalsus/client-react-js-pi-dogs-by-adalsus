import axios from 'axios';
import { all_images_fn, all_images } from '../../images/all_images_fn.js'
import obj_img from '../../images/to_dog_sin.png'
import { all_temps_fn, all_temps } from './all_temps_fn.js'

import { URL_MI_API_EXPRESS_LOCAL, URL_MI_API_EXPRESS_CLOUD } from "../ids/idsApp.js";
import { siOno_LOCAL_API_EXPRESS } from '../../confpara.js'



const I_will_work_with_LOCAL_API_EXPRESS = siOno_LOCAL_API_EXPRESS;



const URL_API_EXPRESS = (I_will_work_with_LOCAL_API_EXPRESS === 'SI')
   ? URL_MI_API_EXPRESS_LOCAL
   : URL_MI_API_EXPRESS_CLOUD



const save_images_server = async() => {
   await axios(`${URL_API_EXPRESS}/dogs`)
   .then(arr_data => {
         for (let obj of arr_data.data) {
            if (obj.image!==undefined && obj.image!==null) {
               let obj_img = {
                  'id': obj.id,
                  'name': obj.name,
                  'image': obj.image
               }
               all_images_fn(obj_img)
            }
         }
         //console.log(all_images)
         return all_images
   })
   .catch((error) => {
      if (error.response) {
         console.log(error.response);
         console.log("images: server responded");
      } else if (error.request) {
         console.log("images: network error");
      } else {
         console.log('images: ', error);
      }
   });
}

var num_Pags

const agrNarr = (coll,N) => {
   let paginado = 0
   let countElem = 0
   let arrPaginado = []
   let agru_obj = []
   if (coll.length!==0) {
      num_Pags = -1
      for (let obj of coll) {
         ++countElem
         ++paginado
         if (paginado>=1 && paginado<=N) {
            agru_obj.push(obj)
         }
         if (paginado===N || countElem===coll.length) {
            arrPaginado.push(agru_obj)
            ++num_Pags
            paginado = 0
            agru_obj = []
         }
      }
   } else { num_Pags = -1 }
   return arrPaginado
}

const get_image = (id_img) => {
   //console.log(all_images)
   let view_img = obj_img
   //console.log('id_img',id_img,' ',typeof(id_img))
   if (id_img!==undefined) {
      for (let img of all_images) {
         let s_img = `"${img.image.id}"`
         //console.log('s_img',s_img,' ',typeof(s_img))
         if (id_img===s_img) {
            view_img = `${img.image.url}`
            break
         }
      }
   }
   return view_img
}

const creeCtrlPaginas = N_p => {
   const js_divCtrPag = document.getElementById('divCtrlPaginas')
   js_divCtrPag.innerHTML = '';
   for (let i=0; i<=N_p; i++) {
      const i_button = document.createElement('button')
      i_button.textContent = `${i+1}`
      js_divCtrPag.appendChild(i_button)
   }
}

const all_temperaments_server = async() => {
   await axios(`${URL_API_EXPRESS}/temperaments`)
   .then(arr_data => {
         for (let obj of arr_data.data) {
            all_temps_fn(obj.nameT)
         }
         //console.log(all_temps)
         return all_temps      
   })
   .catch((error) => {
      if (error.response) {
         console.log(error.response);
         console.log("all_temps: server responded");
      } else if (error.request) {
         console.log("all_temps: network error");
      } else {
         console.log('all_temps: ', error);
      }
   });
}
const temperament_selecMulti = () => {
   let js_selected_temperament = document.getElementsByName('selected_temperament')
   if (js_selected_temperament!==null) {
      let arrTemps = all_temperaments_server()
      //console.log(arrTemps.length)
      if (arrTemps.length!==undefined) {
         js_selected_temperament = [...arrTemps]
         let options = ''
         /*arr.map((op,i)=>{
            const op_option = document.createElement('option')
            js_selected_temperament.append(`${op}`,op_option);
            //options += `<option value="${op}" width="33%">${op}</option>\n`
         })*/
         //console.log(js_selected_temperament)
         return js_selected_temperament
      }
   }
}


function useRegex(input) {
   let regex = /[A-Za-zÁÉÍÓÚÑÜáéíóíñü\s]+/i;
   return regex.test(input);
}
const onlyWords = word => {
   let correcto = true
   for (let caracter of word) {
      //console.log(caracter)
      if (useRegex(caracter)===false) {
         correcto = false
         break
      }
   }
   return correcto
}



export {
   URL_API_EXPRESS,
   save_images_server,
   agrNarr,
   get_image,
   num_Pags,
   creeCtrlPaginas,
   temperament_selecMulti,
   all_temperaments_server,
   onlyWords
}