import React from "react";
import PostLike from "./PostLike/PostLike";
import PostAvatar from "./PostAvatar/PostAvatar";
import PostBtn from "./PostBtn/PostBtn";
import module from "./Post.module.css";


type PropsType = {
  text: string,
  LikeUp: number
}
const Post: React.FC<PropsType> = (props) => {
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
