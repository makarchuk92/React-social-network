import { stopSubmit } from "redux-form";
import { ResultCodesEnum, ResultCodesForCaptchaEnum } from "../api/api";
import { authAPI } from '../api/auth-api';
import { securityApi } from '../api/security-api';
import { BaseThunkType, InferActionsTypes } from "./redux-store";



let inicialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean,
  isFetching: false as boolean,
  captchaUrl: null as string | null,
}
export type inicialStateType = typeof inicialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | ReturnType<typeof stopSubmit>>

const authReducer = (state = inicialState, action: ActionsTypes): inicialStateType => {
  switch (action.type) {
    case 'auth/SET_USER_DATA':
    case 'auth/GET_CAPTCHA_URL_SUCCESS': 
      return {
        ...state,
        ...action.payload
      }   
    default:
      return state;
  }
};

const actions = {
  setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => 
({ 
  type: 'auth/SET_USER_DATA', payload: {userId, email, login, isAuth}
} as const),
  getCaptchaUrlSuccess: (captchaUrl: string) => ({ type: 'auth/GET_CAPTCHA_URL_SUCCESS',  payload: {captchaUrl}
} as const)
}


export const getAuthUserData = (): ThunkType => {
  return async (dispatch) => {
    
     let data = await authAPI.getNavigations();
      if ( data.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = data.data
        dispatch(actions.setAuthUserData(id, email, login, true))
      }
    
  }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => {
  return async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)
      if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
      } else {
        if (data.resultCode ===  ResultCodesForCaptchaEnum.CaptchaIsRequired) {
          dispatch(getCaptchaUrl())
        }
        let message = data.messages.length > 0 ? data.messages[0] : "Some Error"
        dispatch(stopSubmit("login", {_error: message}))
      }
  }
}

export const getCaptchaUrl = (): ThunkType => {
  return async (dispatch) => {
    let data = await securityApi.getCaptchaUrl()
    let captchaUrl = data.url 
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
      }
  }

export const logout = (): ThunkType => {
  return async (dispatch) => {
    let data = await authAPI.logout()
      if ( data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false))
      }
  }
}

export default authReducer;
