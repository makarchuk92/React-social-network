import React from "react";
import module from "./DialogForm.module.css";
import { createField, Textarea } from "../../common/FormsControls/FormsControls";
import { required } from "../../../utils/validators";



const DialogForm = (props) => {
  return (
        <form onSubmit={props.handleSubmit} className={module.messageBlock}>
          <div className={module.messageText}>
            {createField("Enter your message", "newMessageText", [required], Textarea)}
          </div>
          <button >send</button>
        </form>
  );
};

export default DialogForm;
