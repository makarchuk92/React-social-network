import React from "react";
import module from "./DialogForm.module.css";
import { Field } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../../utils/validators";



const maxLength15 = maxLengthCreator(15)

const DialogForm = (props) => {
  return (
        <form onSubmit={props.handleSubmit} className={module.messageBlock}>
          <Field component={Textarea} validate={[required, maxLength15]}
           name={"newMessageText"} placeholder={"Enter your message"} className={module.messageText} />
          <button >send</button>
        </form>
  );
};

export default DialogForm;
