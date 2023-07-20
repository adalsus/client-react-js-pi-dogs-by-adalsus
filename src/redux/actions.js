import axios from 'axios'
import {URL_API_EXPRESS} from '../js/fns/fnsApp.js'

const GET_DOG_BREEDS = 'GET_DOG_BREEDS'
const GET_DETAIL_BREED = 'GET_DETAIL_BREED'



function getDogBreeds(name) {
      return async function(dispatch) {
         
         (name!=='')
         ?  await 
            axios(`${URL_API_EXPRESS}/dogs?name=${name}`)
            .then(async data => {
               //console.log('data-> ', data)
               dispatch({
                  type: GET_DOG_BREEDS,
                  payload: await data.data
               })
            })
            .catch((error) => {
               if (error.response) {
                  console.log(error.response);
                  console.log("actions x name: server responded");
               } else if (error.request) {
                  console.log("actions x name: network error");
               } else {
                  console.log('actions x name: ', error);
               }
            })
      
         :  await
            axios(`${URL_API_EXPRESS}/dogs`)
            .then(async data => {
               dispatch({
                  type: GET_DOG_BREEDS,
                  payload: await data.data
               })
            })
            .catch((error) => {
               if (error.response) {
                  console.log(error.response);
                  console.log("actions: server responded");
               } else if (error.request) {
                  console.log("actions: network error");
               } else {
                  console.log('actions: ', error);
               }
            })
         
      }
}


export {
   GET_DOG_BREEDS,
   GET_DETAIL_BREED,
   getDogBreeds
}