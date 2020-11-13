import React from "react";
import PostLike from "./PostLike/PostLike.jsx";
import PostAvatar from "./PostAvatar/PostAvatar.jsx";
import PostBtn from "./PostBtn/PostBtn.jsx";
import module from "./Post.module.css";


const Post = (props) => {
  return (
    <div className={module.Offer}>
      {props.text}
      <div>
        <PostAvatar />
        <PostBtn />
        <PostLike /> {props.LikeUp}
      </div>
    </div>
    
  );
};

export default Post;
