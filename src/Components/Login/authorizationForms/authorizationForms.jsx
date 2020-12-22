import React from 'react'
import { Field } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators'
import { Input } from '../../common/FormsControls/FormsControls'
import module from './authorizationForms.module.css'

const maxLength12 = maxLengthCreator(10)
const maxLength8 = maxLengthCreator(8)


const authorizationForms = (props) => {
   return ( 
         <form onSubmit={props.handleSubmit} className={module.Login_offer} >
            <Field component={Input} validate={[required, maxLength12]}
             typeFild={"input"} placeholder={"Login"} name={"Login"} required className={module.login_input} />
            <Field component={Input} validate={[required, maxLength8]}
             typeFild={"input"} placeholder={"Pasword"} name={"Pasword"} required className={module.login_input} />
         <div className={module.checkbox} >
            <Field component={"input"} 
             type={"Checkbox"} name={"Checkbox"} className={module.login_input }/> 
            <span>remember me</span>
         </div>
            <button type="submit">Sign in</button>
         </form>  
     
   )
}

export default authorizationForms