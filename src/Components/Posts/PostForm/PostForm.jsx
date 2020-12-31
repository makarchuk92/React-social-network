import React from 'react';
import { Field } from 'redux-form';
import { required } from '../../../utils/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import module from './PostForm.module.css'




const PostForm = (props) => {
   return (
         <form onSubmit={props.handleSubmit} className={module.offer}>
            
            <Field component={Textarea} name={"newPostText"} placeholder={"Post message"}
            validate={[required]} className={module.offer_textarea} />
            <button className={module.btn}>add</button>
            
           
         </form> 
   )
 }


 
 export default PostForm;