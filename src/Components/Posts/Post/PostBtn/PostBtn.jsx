import React from 'react';
import module from './PostBtn.module.css'


const PostBtn = (props) => {

  let moreDetalis = () => {
    alert ('Hello, my friend')
  }

   return (
      <div>
        <button onClick={ moreDetalis }  type="button" className={module.btn}>
          more detalis
        </button>
      </div>    
   )
 }

 export default PostBtn;