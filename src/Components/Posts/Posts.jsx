import React from 'react';
import Post from './Post/Post.jsx';
import A from './Posts.module.css'

const Posts = () => {
   let postData = [
      {id:'Andrey', text:'I am Andrew and my profession It', LikeUp:'12'},
      {id:'Sergei', text:'I am Sergei and my profession It', LikeUp:'11'},
      {id:'Alexander', text:'I am Alexander and my profession It', LikeUp:'13'}
   ]

   let postsElements = postData.map ( post => <Post text={post.text} LikeUp={post.LikeUp}/>)

   return (
      <div className={A.Item}> 
         {postsElements}
      </div>
   )
 }

 export default Posts;