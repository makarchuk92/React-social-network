import React from 'react';
import { required } from '../../../utils/validators';
import { createField, Textarea, GetStringKeys } from '../../common/FormsControls/FormsControls';
import module from './PostForm.module.css'
import { InjectedFormProps } from 'redux-form';


type PropsType = {

}

export type AddPostFormType = {
   newPostText: string
}

type AddPostFormTypeKeys = GetStringKeys<AddPostFormType>

const PostForm: React.FC<InjectedFormProps<AddPostFormType, PropsType> & PropsType> = (props) => {
   return (
         <form onSubmit={props.handleSubmit} className={module.offer}>
            <div className={module.offer_textarea}>
               {createField<AddPostFormTypeKeys>("Post message", "newPostText", [required], Textarea ) }
            </div>
            <button className={module.btn}>add</button> 
         </form> 
   )
 }


 
 export default PostForm;