import React from "react";
import d from "./DialogsMesagges.module.css";

const DialogsMesagges = (props) => {
  return (
    <div className={d.messagesItem}>
        <h1>{props.message}</h1>
    </div>
  );
};

export default DialogsMesagges;
