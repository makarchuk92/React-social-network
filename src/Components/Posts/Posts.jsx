import React from 'react';
import Post from './Post/Post.jsx';
import A from './Posts.module.css'

const Posts = () => {
   return (
      <div className={A.Item}> 
         <Post text='I am Andrei and my profession It' LikeUp='12'/>
         <Post text='I am Sergei and my profession It' LikeUp='8'/>
         <Post text='I am Alexander and my profession It' LikeUp='14'/>
      </div>
   )
 }

 export default Posts;