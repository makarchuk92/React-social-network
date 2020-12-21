import React from "react";
import module from "./DialogForm.module.css";
import { Field } from "redux-form";





const DialogForm = (props) => {
  return (
        <form onSubmit={props.handleSubmit} className={module.messageBlock}>
          <Field component={"textarea"} name={"newMessageText"} placeholder={"Enter your message"} className={module.messageText} />
          <button >send</button>
        </form>
  );
};

export default DialogForm;
