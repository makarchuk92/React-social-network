import React from "react";
import module from "./DialogsMesagges.module.css";

const DialogsMesagges = (props) => {
  return (
    <div className={module.messagesItem}>
      <img
        className={module.messagesItemImg}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png"
        alt="avatar"
      />
      <h1>{props.message}</h1>
    </div>
  );
};

export default DialogsMesagges;
