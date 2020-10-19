import React from 'react';
import MP from './PostLike.module.css'


const PostLike = (props) => {
   return (
      <div className={MP.Offer__Like}>
        {/* <a href='#L'>Like</a> {props.LikeUp}   */}
        <button>Like</button> {props.LikeUp}  
      </div>    
   )
 }

 export default PostLike;