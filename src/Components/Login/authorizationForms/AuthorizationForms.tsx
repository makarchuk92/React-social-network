import React from 'react'
import { Field, InjectedFormProps } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators'
import { createField, Input } from '../../common/FormsControls/FormsControls'
import {  LoginOwnPropsType } from '../Login';
import module from './authorizationForms.module.css'


const maxLength15 = maxLengthCreator(15)

const AuthorizationForms: React.FC<InjectedFormProps<LoginFormType, LoginOwnPropsType> & LoginOwnPropsType> = (props) => {
   return ( 
         <form onSubmit={props.handleSubmit} className={module.Login_offer} >
            <div className={module.login_input}>
               {createField<LoginFormTypeKeys>("Email", "email", [required, maxLength15], Input)}
            </div>
            <div className={module.login_input}>
               {createField<LoginFormTypeKeys>("Password", "password", [required], Input, {type: "password"}) }
            </div>
            {props.captchaUrl && <img src={props.captchaUrl}  alt='captcha'/>}
            {props.captchaUrl && createField<LoginFormTypeKeys>("Symbols from image", "captcha", [required], Input, maxLength15)}
         <div className={module.checkbox} >
            <Field component={"input"} 
             type={"Checkbox"} name={"rememberMe"} className={module.login_input }/> 
            <span>remember me</span> 
         </div>
         { props.error && <div className={module.error_Text}>
            <p>{props.error}</p>
         </div>  }
            <button type="submit">Sign in</button>
         </form>  
     
   )
}

export type LoginFormType = {
   email: string
   password: string 
   rememberMe: boolean
   captcha: string
}
type LoginFormTypeKeys = Extract<keyof LoginFormType, string> 

export default AuthorizationForms