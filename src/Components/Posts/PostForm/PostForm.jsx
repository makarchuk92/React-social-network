import React from 'react';
import { Field } from 'redux-form';
import module from './PostForm.module.css'




const PostForm = (props) => {
   return (
         <form onSubmit={props.handleSubmit} className={module.offer}>
            <Field component={"textarea"} name={"newPostText"} />
            <button className={module.btn}>add</button>
         </form> 
   )
 }


 
 export default PostForm;