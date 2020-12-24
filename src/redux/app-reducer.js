import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";
import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";


let inicialState = {
  inicialized: false
}


const appReducer = (state = inicialState, action) => {
  switch (action.type) { 
    case INITIALIZED_SUCCESS: 
      return {
        ...state,
        inicialized: true
      }   
    default:
      return state;
  }
};


export const initializedSuccess = () => ({ 
  type: INITIALIZED_SUCCESS })

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData())
  Promise.all([promise])
  .then( () => {
  dispatch(initializedSuccess())
  }) 
}


export default appReducer;
