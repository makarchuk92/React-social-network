import React from 'react'
import { Field } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators'
import { createField, Input } from '../../common/FormsControls/FormsControls'
import module from './authorizationForms.module.css'


const maxLength15 = maxLengthCreator(15)


const AuthorizationForms = (props) => {
   return ( 
         <form onSubmit={props.handleSubmit} className={module.Login_offer} >
            <div className={module.login_input}>
               {createField("Email", "email", [required], Input)}
            </div>
            <div className={module.login_input}>
               {createField("Password", "password", [required], Input, {type: "password"}, maxLength15)}
            </div>
            {props.captchaUrl && <img src={props.captchaUrl}  alt='captcha'/>}
            {props.captchaUrl && createField("Symbols from image", "captcha", [required], Input, maxLength15)}
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

export default AuthorizationForms