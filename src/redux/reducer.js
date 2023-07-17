import { GET_DOG_BREEDS } from './actions.js'
import { agrNarr } from '../js/fns/fnsApp.js'

const initialState = {
   dogBreeds: [],
   detailBreed: {}
};



const reducer = (state = initialState, action) => {
   switch(action.type) {
      case GET_DOG_BREEDS:
         state.dogBreeds.splice(0,state.dogBreeds.length)
         let agrupe =  agrNarr([...action.payload],8)
         Object.assign( state.dogBreeds, [ ...agrupe ] )
         return { ...state }
      default:
         return { ...state };
   }
};


export default reducer;
