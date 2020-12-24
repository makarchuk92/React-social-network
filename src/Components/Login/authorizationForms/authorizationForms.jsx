import React from 'react'
import { Field } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators'
import { Input } from '../../common/FormsControls/FormsControls'
import module from './authorizationForms.module.css'

const maxLength30 = maxLengthCreator(30)
const maxLength15 = maxLengthCreator(15)


const authorizationForms = (props) => {
   return ( 
         <form onSubmit={props.handleSubmit} className={module.Login_offer} >
            <Field component={Input} validate={[required, maxLength30]}
             type={"input"} placeholder={"Email"} name={"email"} required className={module.login_input} />
            <Field component={Input} validate={[required, maxLength15]}
             type={"password"} placeholder={"Password"} name={"password"} required className={module.login_input} />
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

export default authorizationForms