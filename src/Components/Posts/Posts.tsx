import React from 'react';
import { reduxForm } from 'redux-form';
import Post from './Post/Post.jsx';
import PostForm from './PostForm/PostForm';
import module from './Posts.module.css'
import ProfileContainer from './Profile/ProfileContainer.jsx';
import { AddPostFormType } from './PostForm/PostForm';
import { PostDataType } from '../../Types/types';


type PropsType = {

}
const PostReduxForm = reduxForm<AddPostFormType, PropsType>({ form: "ProfilePostForm" })(PostForm)


export type MapStatePostsPropsType = {
   postData: Array<PostDataType>
}

export type MapDispatchPostsPropsType = {
   addPost: (newPostText: string) => void
}


const Posts: React.FC<MapStatePostsPropsType & MapDispatchPostsPropsType> = props => {

   let postsElements =
      props.postData.map( p => <Post text={p.text} LikeUp={p.LikeUp} key={p.id} />)

   let onAddPost = (values: AddPostFormType) => {
      props.addPost(values.newPostText)
   }

   return (
      <div className={module.Item}>
         <div className={module.account}>
            <ProfileContainer />
         </div>
         {postsElements}
         <PostReduxForm onSubmit={onAddPost} />
      </div>
   )
}


const PostsMemo = React.memo(Posts)

export default PostsMemo;