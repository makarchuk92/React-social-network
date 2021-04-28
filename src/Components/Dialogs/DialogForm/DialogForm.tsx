import React from "react";
import module from "./DialogForm.module.css";
import { createField, Textarea } from "../../common/FormsControls/FormsControls";
import { required } from "../../../utils/validators";
import { NewMessageFormValuesType } from "../Dialogs";
import { InjectedFormProps, reduxForm } from "redux-form";

type NewMessageTypeKeys = Extract<keyof NewMessageFormValuesType, string> 
type PropsType = {}

const DialogForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType> = (props) => {
  return (
        <form onSubmit={props.handleSubmit} className={module.messageBlock}>
          <div className={module.messageText}>
            {createField<NewMessageTypeKeys>("Enter your message", "newMessageText", [required], Textarea)}
          </div>
          <button>send</button>
        </form>
  );
};

export default reduxForm<NewMessageFormValuesType>({form: "MessageDialogs"})(DialogForm);
