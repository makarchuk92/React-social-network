import React from 'react'
import module from './Login.module.css'
import authorizationForms from './authorizationForms/authorizationForms.jsx'
import { reduxForm } from 'redux-form'

const LoginReduxForm = reduxForm({form: 'login'}) (authorizationForms)

const Login = (props) => {
   const onSubmit = (FormData) => {
      console.log(FormData)
   }
   return ( 
      <div className={module.login}>
         <div><h1>Login in</h1></div>
         <LoginReduxForm onSubmit={onSubmit} />
      </div>
   )
}

export default Login