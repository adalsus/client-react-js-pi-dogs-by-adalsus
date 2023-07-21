import { useState } from "react"
import { temperament_selecMulti } from '../js/fns/fnsApp.js'
import { all_temperaments_server } from '../js/fns/fnsApp.js'
import { all_temps } from '../js/fns/all_temps_fn.js'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { onlyWords } from '../js/fns/fnsApp.js'
import axios from 'axios'
import { URL_API_EXPRESS } from '../js/fns/fnsApp.js'


const FormBreed = () => {
   
   const [tempsEle, settempsEle] = useState('')
   const [sinErrores, setsinErrores] = useState(false)


   const navigate = useNavigate();
   useEffect(() => {
      navigate("/form-breed");
   }, []);

   function useRegex(input) {
      let regex = /\d\s-\s\d/i;
      return regex.test(input);
   }


   function handleSelTem() {
      const js_seltemp = document.getElementsByName('selected_temperament')
      let s_acu_temps = ''
      for (let opc of js_seltemp[0].selectedOptions) {
         s_acu_temps += opc.value + ', '
      }
      settempsEle(s_acu_temps)
   }

   function handleGuardar() {
      let js_dToE = document.getElementsByClassName('divToErrors')
      const js_w_i = document.getElementsByName('w_i')
      js_w_i[0].value = js_w_i[0].value.trim()
      const js_w_m = document.getElementsByName('w_m')
      js_w_m[0].value = js_w_m[0].value.trim()
      const js_h_i = document.getElementsByName('h_i')
      js_h_i[0].value = js_h_i[0].value.trim()
      const js_h_m = document.getElementsByName('h_m')
      js_h_m[0].value = js_h_m[0].value.trim()
      const js_n_I = document.getElementsByName('nameInput')
      js_n_I[0].value = js_n_I[0].value.trim()
      const js_a_V = document.getElementsByName('aniosDeVida')
      js_a_V[0].value = js_a_V[0].value.trim()

      if (js_w_i[0].value.length === 0) {
            js_dToE[0].textContent = 'En el campo IMPERIAL de MASA/WEIGHT, por favor, ingrésele un valor'
      }  else if  (js_w_m[0].value.length === 0) {
            js_dToE[0].textContent = 'En el campo METRIC de MASA/WEIGHT, por favor, ingrésele un valor'
      }  else if  (js_h_i[0].value.length === 0) {
            js_dToE[0].textContent = 'En el campo IMPERIAL de ALTURA/HEIGHT, por favor, ingrésele un valor'
      }  else if  (js_h_m[0].value.length === 0) {
            js_dToE[0].textContent = 'En el campo METRIC de ALTURA/HEIGHT, por favor, ingrésele un valor'
      }  else if  (js_n_I[0].value.length === 0) {
            js_dToE[0].textContent = 'En el campo NAME, por favor, ingrésele un nombre para la raza'
      }  else if  (js_a_V[0].value.length === 0) {
            js_dToE[0].textContent = 'En el campo LIFE_SPAN, por favor, ingrésele los años de vida para el animalito'
      }  else if  (tempsEle.length === 0) {
            js_dToE[0].textContent = 'Para el campo temperament, por favor, escoja al menos un temperamento'
      }  else if  ( useRegex(js_w_i[0].value)===false ) {
            js_dToE[0].innerHTML = `${'Por favor, en el campo IMPERIAL de MASA/WEIGHT, ingrese un valor por'}<br>${'Ej. como 8 - 14'}`
      }  else if  ( useRegex(js_w_m[0].value)===false ) {
            js_dToE[0].innerHTML = `${'Por favor, en el campo METRIC de MASA/WEIGHT, ingrese un valor por'}<br>${'Ej. como 4 - 6'}`
      }  else if  ( useRegex(js_h_i[0].value)===false ) {
            js_dToE[0].innerHTML = `${'Por favor, en el campo IMPERIAL de ALTURA/HEIGHT, ingrese un valor por'}<br>${'Ej. como 10 - 10'}`
      }  else if  ( useRegex(js_h_m[0].value)===false ) {
            js_dToE[0].innerHTML = `${'Por favor, en el campo METRIC de ALTURA/HEIGHT, ingrese un valor por'}<br>${'Ej. como 25 - 25'}`
      }  else if  ( useRegex(js_a_V[0].value)===false ) {
            js_dToE[0].innerHTML = `${'Por favor, en el campo AÑOS_DE_VIDA/LIFE_SPAN, ingrese un valor por'}<br>${'Ej. como 10 - 12 años'}`
      }  else if  ( onlyWords(js_n_I[0].value)===false ) {
            js_dToE[0].innerHTML = `${'Por favor, en el campo NOMBRE/NAME, ingrese solo palabras'}<br>${'y carácter espacio para separar estos sustantivos'}`
      }  else if  ( js_n_I[0].value.length<=3 ) {
            js_dToE[0].innerHTML = 'Por favor, en el campo NOMBRE/NAME, ingrese al menos 3 letras'
      }  else {
         setsinErrores(true)
      }
   }

   function onClickCampo(event) {
      let js_dToE = document.getElementsByClassName('divToErrors')
      js_dToE[0].textContent = ''
   }

   function handleSubmit(e) {
      
      if (sinErrores===true) {
         
         // Formo data
         const userDataTemps = {
            "namesTemps": tempsEle
         }
         
         //POST a temps
         axios.post(`${URL_API_EXPRESS}/temps`, userDataTemps)
         .then((response)=>{
            console.log('Express responde al POST a /temps')
            console.log(response.data)
            let idTemperaments = response.data.idTemps
            


            // Formo Breed'data
            const userDataBreed = {
               "weight": {
                     "imperial": e.target[0].value,
                     "metric": e.target[1].value
                },
               "height": {
                     "imperial": e.target[2].value,
                     "metric": e.target[3].value
               },
               "id": null,
               "name": e.target[5].value,
               "life_span": e.target[6].value,
               "reference_image_id": null,
               "image": null,
               "id_Temps": idTemperaments
            }
            //POST a /dogs
            axios.post(`${URL_API_EXPRESS}/dogs`, userDataBreed)
            .then((response)=>{
               let js_btn_submit = document.getElementsByClassName('btn_submit')
               js_btn_submit.disabled = true
               console.log('Express responde al POST a /dogs')
               console.log(response.data)

               e.target[0].value = ''
               e.target[1].value = ''
        
               e.target[2].value = ''
               e.target[3].value = ''
            
               e.target[5].value = ''
               e.target[6].value = ''
               
               console.log('SELECT')
               console.log(e.target[7])

               /*
               //Mensaje de éxito
               let js_dToE = document.getElementsByClassName('divToErrors')
               js_dToE[0].style.fontWeight = 'bold'
               js_dToE[0].style.color = 'gold'
               js_dToE[0].textContent = 'INFORMACIÓN GUARDADA CON ÉXITO EN LA DATABASE'
               //Fin mensaje de éxito
               js_dToE[0].style.fontWeight = 'normal'
               js_dToE[0].style.color = 'orangered'
               setInterval(()=>{}, 6000);
               js_dToE[0].textContent = ''
               */

               setsinErrores(false)
               
            })
            .catch((error) => {
               if (error.response) {
                  console.log(error.response);
                  console.log("/dogs: server responded");
               } else if (error.request) {
                  console.log("/dogs: network error");
               } else {
                  console.log('/dogs: ', error);
               }
            });
            //Fin POST a /dogs



         })
         .catch((error) => {
            if (error.response) {
               console.log(error.response);
               console.log("/temps: server responded");
            } else if (error.request) {
               console.log("/temps: network error");
            } else {
               console.log('/temps: ', error);
            }
         });
         //Fin POST a /temps

      }


      // Prevent the browser from reloading the page
      e.preventDefault();
   }


   {
      //console.log(all_temps)
      const js_divCtrPag = document.getElementById('divCtrlPaginas')
      if (js_divCtrPag!==null) js_divCtrPag.innerHTML = '';
      const js_divbarraSearch = document.getElementById('divbarraSearch')
      if (js_divbarraSearch!==null) {
         if (js_divbarraSearch.style.display==='block') js_divbarraSearch.style.display = 'none'
      }
      return (
         <form
            className='form_createBreed'
            onSubmit={handleSubmit}
         >
            <h2>Create Breed</h2>
            <div>
                     <div><label>&lt;-- weight --&gt;</label></div>
                     <label>
                        imperial:
                        <input 
                           type='text' 
                           name='w_i' 
                           onClick={onClickCampo}
                           placeholder='Ej.: 8 - 14'
                        />lbs&nbsp;/
                     </label>
                     <label>
                        &nbsp;metric:
                        <input type='text' name='w_m' onClick={onClickCampo} placeholder='Ej.: 4 - 6' />kgs
                     </label>
            </div>
            <div>
                     <div><label>&lt;-- height --&gt;&nbsp;</label></div>
                     <label>
                        imperial:
                        <input 
                           type='text' 
                           name='h_i' 
                           onClick={onClickCampo} 
                           placeholder='Ej.: 10 - 10' 
                        />plg&nbsp;/
                     </label>
                     <label>
                        &nbsp;metric:
                        <input type='text' name='h_m' onClick={onClickCampo} placeholder='Ej.: 25 - 25' />cm
                     </label>
            </div>
            <br />
            <label>
                  id:<input type="text" style={{fontStyle:'italic'}} defaultValue='null' disabled />
            </label>
               
            <label>
                  name:
                  <input type='text' name='nameInput' onClick={onClickCampo} />
                  <div id='ctrl_value_name' ></div>
            </label>
            <div><label>
                  life_span:
                  <input 
                     type='text' 
                     name='aniosDeVida' 
                     onClick={onClickCampo} 
                     placeholder='Ej.: 10 - 12 años' 
                  />
            </label></div>
            <label>
                  temperament:
                  <div 
                     style={{fontStyle:'oblique'}}
                  >
                     {'Para escoger, tenga presionada la tecla Ctrl(control) y '}<br/>
                     {'haga Clic en cada temperament que desee añadir.'}<br/>
                     {'Si no les aparecen re-cárguelos dando clic, arriba, en FORM BREED'}
                  </div>
                  <div>
                     <select 
                        name="selected_temperament"
                        width='100%'
                        onChange={handleSelTem} 
                        onClick={onClickCampo} 
                        multiple
                     >
                        {all_temps.map((item,index) => {
                           return (
                              <option 
                                 key={index}
                                 style={{width:'100%'}} 
                                 value={item}
                              >
                                 {item}
                              </option>
                           );
                        })}
                     </select>
                  </div>
                  <div id='values_temps'>{tempsEle}</div>
            </label>
            <div><label>
                  id_Temps:<input type="text" style={{fontStyle:'italic'}} defaultValue='null' disabled />
            </label></div>
            <label>
                  reference_image_id:<input type="text" style={{fontStyle:'italic'}} defaultValue='null' disabled />
            </label>
            <label>
                  image:<input type="text" style={{fontStyle:'italic'}} defaultValue='null' disabled />
            </label>
            <div style={{color:'orangered',backgroundColor:'black'}} className='divToErrors'></div>
            <div><br /></div>
            <div>
               <button className='btn_submit' type="submit" onClick={handleGuardar}>Guardar en DB</button>
            </div>
            <div><br /></div>
         </form>
      );

   } 
}



export default FormBreed;