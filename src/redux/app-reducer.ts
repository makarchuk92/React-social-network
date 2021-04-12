import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getAuthUserData } from "./auth-reducer";
import { AppStateType } from "./redux-store";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

export type initialStateType = {
  inicialized: boolean
}
let inicialState: initialStateType = {
  inicialized: false
}


const appReducer = (state = inicialState, action: initializedSuccessActionType): initialStateType => {
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


  type initializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS
}

  export const initializedSuccess = (): initializedSuccessActionType => ({ 
  type: INITIALIZED_SUCCESS})


  type DispatchType = Dispatch<initializedSuccessActionType>
  type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, initializedSuccessActionType>
  
  export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData())
  Promise.all([promise])
  .then( () => {
  dispatch(initializedSuccess())
  }) 
}


export default appReducer;
