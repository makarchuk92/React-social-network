import React from "react";
import module from "./DialogsMesagges.module.css";

const DialogsMesagges = (props) => {
  return (
    <div className={module.messagesItem}>
       <h1>{props.message}</h1>
    </div>
  );
};

export default DialogsMesagges;
