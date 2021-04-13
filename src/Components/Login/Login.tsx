import React from 'react'
import module from './Login.module.css'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import AuthorizationForms from './authorizationForms/AuthorizationForms'
import { AppStateType } from '../../redux/redux-store';

const LoginReduxForm = reduxForm<LoginFormType, LoginOwnPropsType>({form: 'login'}) (AuthorizationForms)

type MapStatePropsType = {
   isAuth: boolean
   captchaUrl: string | null
}
type MapDispatchPropsType = {
   login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
export type LoginPropsType = MapStatePropsType & MapDispatchPropsType

export type LoginOwnPropsType = {
   captchaUrl: string | null
}
export type LoginFormType = {
   email: string
   password: string 
   rememberMe: boolean
   captcha: string
}

const Login: React.FC<LoginPropsType> = (props) => {
   const onSubmit = (FormData: LoginFormType) => {
      props.login(FormData.email, FormData.password, FormData.rememberMe, FormData.captcha)
   }

   if(props.isAuth) {
      return <Redirect to={"/Profile"} />
   }
   return ( 
      <div className={module.login}>
         <div><h1>Login in</h1></div>
         <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
      </div>
   )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
   isAuth: state.auth.isAuth,
   captchaUrl: state.auth.captchaUrl
})
export default connect(mapStateToProps, {login}) (Login)