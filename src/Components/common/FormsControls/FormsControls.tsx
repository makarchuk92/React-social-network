import React from 'react'
import { Field, WrappedFieldProps } from 'redux-form'
import module from './FormsControls.module.css'
import { FieldValidatorType } from '../../../utils/validators'



const FormControl: React.FC<WrappedFieldProps> = ({input, meta, children, ...props}) => {
   const hasError = meta.touched && meta.error
   return ( 
      <div> 
         <div className={module.formControl + " " + (hasError ? module.formError : " ")}>
          {children}
         </div>
         { hasError && <span className={module.formText}>{meta.error}</span> }
      </div>
   )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
   const {input, meta, ...restProps} = props;
   return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
   //const {input, meta, chield, ...restProps} = props
   const {input, meta, ...restProps} = props
   return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder: string | undefined, name: string, validators: Array<FieldValidatorType>,
    component: React.FC<WrappedFieldProps>, props = {}, text = "") => (
   <div>
      <Field placeholder={placeholder} name={name}
      validators={validators} component={component}
      {...props}
      />
      {text}
   </div>
)