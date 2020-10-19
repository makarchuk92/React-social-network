import React from 'react';
import Post from './Post/Post.jsx';
import A from './Posts.module.css'

const Posts = () => {
   let postData = [
      {id:'Andrey', text:'I am Andrew and my profession It', LikeUp:'12'},
      {id:'Sergei', text:'I am Sergei and my profession It', LikeUp:'11'},
      {id:'Alexander', text:'I am Alexander and my profession It', LikeUp:'13'}
   ]
   return (
      <div className={A.Item}> 
         <Post text={postData[0].text} LikeUp={postData[0].LikeUp}/>
         <Post text={postData[1].text} LikeUp={postData[1].LikeUp}/>
         <Post text={postData[2].text} LikeUp={postData[2].LikeUp}/>
      </div>
   )
 }

 export default Posts;