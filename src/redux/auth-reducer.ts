import { stopSubmit } from "redux-form";
import { authAPI, ResultCodesEnum, ResultCodesForCaptchaEnum, securityApi } from "../api/api";
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './redux-store';

const SET_USER_DATA = "auth/SET_USER_DATA"
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS"



let inicialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean,
  isFetching: false as boolean,
  captchaUrl: null as string | null,
}

export type inicialStateType = typeof inicialState

const authReducer = (state = inicialState, action: ActionsTypes): inicialStateType => {
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

type ActionsTypes =  setAuthUserDataActionType | getCaptchaUrlSuccessActionType

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


type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getAuthUserData = (): ThunkType => {
  return async (dispatch) => {
     let data = await authAPI.getNavigations();
      if ( data.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
      }
    
  }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => {
  return async (dispatch:any) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)
      if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
      } else {
        if (data.resultCode === ResultCodesForCaptchaEnum.CaptchaIsRequired) {
          dispatch(getCaptchaUrl())
        }
        let message = data.messages.length > 0 ? data.messages[0] : "Some Error"
        dispatch(stopSubmit("login", {_error: message}))
      }
  }
}

export const getCaptchaUrl = (): ThunkType => {
  return async (dispatch, getState) => {
    let data = await securityApi.getCaptchaUrl()
    let captchaUrl = data.url 
    dispatch(getCaptchaUrlSuccess(captchaUrl))
      }
  }

export const logout = ():ThunkType => {
  return async (dispatch, getState) => {
    let data = await authAPI.logout()
      if ( data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
      }
  }
}

export default authReducer;
