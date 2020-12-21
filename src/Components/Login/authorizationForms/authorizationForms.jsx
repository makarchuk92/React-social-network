import React from 'react'
import { Field } from 'redux-form'
import module from './authorizationForms.module.css'

const authorizationForms = (props) => {
   return ( 
         <form onSubmit={props.handleSubmit} className={module.Login_offer} >
            <Field component={"input"} type={"text"} placeholder={"Login"} name={"Login"} required className={module.login_input} />
            <Field component={"input"} type={"text"} placeholder={"Pasword"} name={"Pasword"} required className={module.login_input} />
         <div className={module.checkbox} >
            <Field component={"input"} type={"Checkbox"} name={"Checkbox"} className={module.login_input }/> 
            <span>remember me</span>
         </div>
            <button type="submit">Sign in</button>
         </form>  
     
   )
}

export default authorizationForms