import React from 'react'
import module from './Login.module.css'
import { reduxForm } from 'redux-form'
import { connect, useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import AuthorizationForms from './authorizationForms/AuthorizationForms'
import { AppStateType } from '../../redux/redux-store';
import { LoginFormType } from './authorizationForms/AuthorizationForms';


export type LoginOwnPropsType = {
   captchaUrl: string | null
}
const LoginReduxForm = reduxForm<LoginFormType, LoginOwnPropsType>({form: 'login'}) (AuthorizationForms)


export const LoginPage: React.FC = (props) => {
   const isAuth = useSelector( (state: AppStateType) => state.auth.isAuth )
   const captchaUrl = useSelector( (state: AppStateType) => state.auth.captchaUrl )
   const dispatch = useDispatch()
   const onSubmit = (FormData: LoginFormType) => {
      dispatch(login(FormData.email, FormData.password, FormData.rememberMe, FormData.captcha))
   }

   if(isAuth) {
      return <Redirect to={"/Profile"} />
   }
   return ( 
      <div className={module.login}>
         <div><h1>Login in</h1></div>
         <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
      </div>
   )
}
