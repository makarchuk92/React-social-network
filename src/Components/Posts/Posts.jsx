import React from 'react';
import Post from './Post/Post.jsx';
import module from './Posts.module.css'

const Posts = (props) => {

   let postsElements = 
   props.state.postData.map ( (post) => <Post text={post.text} LikeUp={post.LikeUp} />)

   let addPostElements = React.createRef()
   
   let addPost = () => {
      props.addPost()  
   
   }

   let onPostChange = () => {
      let postText = addPostElements.current.value
      props.updateNewPostText(postText);
   }

   return (
      <div className={module.Item}> 
         {postsElements}
         <div className={module.offer}>
            <textarea onChange={onPostChange} ref={addPostElements} value={props.newPostText} />
            <button onClick={addPost} type='button' className={module.btn}>add</button>
         </div>
      </div>
   )
 }

 export default Posts;