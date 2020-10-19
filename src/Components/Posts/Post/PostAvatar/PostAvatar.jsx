import React from "react";
import MP from "./PostAvatar.module.css";

const PostAvatar = () => {
  return (
    <div>
      <img
        className={MP.Avatar}
        src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"
        alt="avatar"
      />
    </div>
  );
};

export default PostAvatar;
