import React from "react";
import module from "./DialogForm.module.css";
import { Field } from "redux-form";
import { createField, Textarea } from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../../utils/validators";



const maxLength50 = maxLengthCreator(50)

const DialogForm = (props) => {
  return (
        <form onSubmit={props.handleSubmit} className={module.messageBlock}>
          <div className={module.messageText}>
            {createField("Enter your message", "newMessageText", [required], Textarea)}
          </div>
          {/* <Field component={Textarea} validate={[required, maxLength50]}
           name={"newMessageText"} placeholder={"Enter your message"} className={module.messageText} /> */}
          <button >send</button>
        </form>
  );
};

export default DialogForm;
