import React from 'react';
import { reduxForm } from 'redux-form';
import Post from './Post/Post.jsx';
import PostForm from './PostForm/PostForm.jsx';
import module from './Posts.module.css'
import ProfileContainer from './Profile/ProfileContainer.jsx';


   const PostReduxForm = reduxForm({form: "ProfilePostForm"})(PostForm)

   const Posts = (props) => {
   let postsElements = 
   props.state.postData.map ( (post) => <Post text={post.text} LikeUp={post.LikeUp} key={post.id} />)

   let onAddPost = (values) => {
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

 export default Posts;