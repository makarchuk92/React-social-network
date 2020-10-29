import React from 'react';
import Post from './Post/Post.jsx';
import module from './Posts.module.css'

const Posts = (props) => {


   let postsElements = 
   props.state.postData.map ( (post) => <Post text={post.text} LikeUp={post.LikeUp}/>)

   return (
      <div className={module.Item}> 
         {postsElements}
      </div>
   )
 }

 export default Posts;