import React from 'react';
import { required } from '../../../utils/validators';
import { createField, Textarea } from '../../common/FormsControls/FormsControls';
import module from './PostForm.module.css'




const PostForm = (props) => {
   return (
         <form onSubmit={props.handleSubmit} className={module.offer}>
            <div className={module.offer_textarea}>
               {createField("Post message", "newPostText", [required], Textarea ) }
            </div>
            {/* <Field component={Textarea} name={"newPostText"} placeholder={"Post message"}
            validate={[required]} className={module.offer_textarea} /> */}
            <button className={module.btn}>add</button> 
         </form> 
   )
 }


 
 export default PostForm;