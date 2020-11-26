import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../redux/postsReducer'
import Posts from './Posts'



const PostsContainer = (props) => { 
   let state = props.store.getState()
   let addPost = () => {
      props.store.dispatch(addPostActionCreator())    
   }

   let onPostChange = (postText) => {
      props.store.dispatch(updateNewPostTextActionCreator(postText));
   }

   return <Posts updateNewPostText={onPostChange} addPost={addPost} postData={state.posts.postData} 
    newPostText={state.posts.newPostText} state={state.posts}
   /> 
 }

 export default PostsContainer;