import { getAuthUserData } from "./auth-reducer";
import {InferActionsTypes} from "./redux-store"




let inicialState = {
  inicialized: false
}
export type initialStateType = typeof inicialState
type ActionsType = InferActionsTypes<typeof actions>

const appReducer = (state = inicialState, action: ActionsType): initialStateType => {
  switch (action.type) { 
    case 'APP/INITIALIZED_SUCCESS':
      return {
        ...state,
        inicialized: true
      }   
    default:
      return state;
  }
};


  const actions = {
    initializedSuccess: () => ({type: 'APP/INITIALIZED_SUCCESS'} as const)
  }



  
  export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData())
  Promise.all([promise])
  .then( () => {
  dispatch(actions.initializedSuccess())
  }) 
}


export default appReducer;
