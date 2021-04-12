import { stopSubmit } from "redux-form";
import { authAPI, securityApi } from "../api/api";

const SET_USER_DATA = "auth/SET_USER_DATA"
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS"


// export type inicialStateType = {
//   userId: number | null
//   email: string | null
//   login: string | null 
//   isAuth: boolean
//   isFetching: boolean
//   captchaUrl: string | null
// }

let inicialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean,
  isFetching: false as boolean,
  captchaUrl: null as string | null,
}

export type inicialStateType = typeof inicialState

const authReducer = (state = inicialState, action: ActionType): inicialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS: 
      return {
        ...state,
        ...action.payload
      }   
    default:
      return state;
  }
};

type ActionType =  setAuthUserDataActionType | getCaptchaUrlSuccessActionType

type setAuthUserDataActionPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}

type setAuthUserDataActionType = {
  type: typeof SET_USER_DATA,
  payload: setAuthUserDataActionPayloadType 
}
export const setAuthUserData =
 (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataActionType => 
({ 
  type: SET_USER_DATA, payload: {userId, email, login, isAuth}
})

type getCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  payload: {captchaUrl: string}
}
export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessActionType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: {captchaUrl}
})



export const getAuthUserData = () => {
  return async (dispatch: any) => {
     let response = await authAPI.getNavigations();
      if ( response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
      }
    
  }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => {
  return async (dispatch:any) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
      } else {
        if (response.data.resultCode === 10) {
          dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
        dispatch(stopSubmit("login", {_error: message}))
      }
  }
}

export const getCaptchaUrl = () => {
  return async (dispatch: any) => {
    let response = await securityApi.getCaptchaUrl()
    let captchaUrl = response.data.url 
    dispatch(getCaptchaUrlSuccess(captchaUrl))
      }
  }

export const logout = () => {
  return async (dispatch: any) => {
    let response = await authAPI.logout()
      if ( response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
      }
  }
}

export default authReducer;
