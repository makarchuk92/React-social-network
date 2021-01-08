import React from 'react'
import module from './Login.module.css'
import AuthorizationForms from './authorizationForms/AuthorizationForms.jsx'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'

const LoginReduxForm = reduxForm({form: 'login'}) (AuthorizationForms)

const Login = (props) => {
   const onSubmit = (FormData) => {
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

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   captchaUrl: state.auth.captchaUrl
})
export default connect(mapStateToProps, {login}) (Login)