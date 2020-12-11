import React from 'react';
import Post from './Post/Post.jsx';
import module from './Posts.module.css'
import ProfileContainer from './Profile/ProfileContainer.jsx';



const Posts = (props) => {
   let postsElements = 
   props.state.postData.map ( (post) => <Post text={post.text} LikeUp={post.LikeUp} key={post.id} />)

   let addPostElements = React.createRef()
   
   let onAddPost = () => {
      props.addPost()     
   }

   let onPostChange = () => {
      let postText = addPostElements.current.value;
      props.updateNewPostText(postText);
   }

   return (
      <div className={module.Item}> 
      <div className={module.account}>
       <ProfileContainer />
      </div>
         {postsElements}
         <div className={module.offer}>
            <textarea onChange={onPostChange} ref={addPostElements} value={props.newPostText} />
            <button onClick={onAddPost} type='button' className={module.btn}>add</button>
         </div>
      </div>
   )
 }

 export default Posts;