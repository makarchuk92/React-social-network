import React from 'react'
import module from './FormsControls.module.css'

const FormControl = ({input, meta, chield, ...props}) => {
   const hasError = meta.touched && meta.error
   return ( 
      <div> 
         <div className={module.formControl + " " + (hasError ? module.formError : " ")}>
          {props.children}
         </div>
         { hasError && <span className={module.formText}>{meta.error}</span> }
      </div>
   )
}

export const Textarea = (props) => {
   const {input, meta, chield, ...restProps} = props;
   return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
   const {input, meta, chield, ...restProps} = props;
   return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}