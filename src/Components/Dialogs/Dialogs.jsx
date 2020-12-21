import React from "react";
import DialogsContacts from "./DialogsContacts/DialogsContacts";
import DialogsMesagges from "./DialogsMesagges/DialogsMesagges";
import module from "./Dialogs.module.css";
import DialogForm from "./DialogForm/DialogForm.jsx";
import { reduxForm } from "redux-form";




const DialogReduxForm = reduxForm({form: "MessageDialogs"})(DialogForm)

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsName.map((dialog) => (
    <DialogsContacts name={dialog.name} id={dialog.id} key={dialog.id} />
  ));
  let messagesElement = props.state.dialogsMessage.map((messages) => (
    <DialogsMesagges message={messages.message} key={messages.id} />
  ));



  let onAddMessage = (values) => {
     props.addMessage(values.newMessageText)   
  } 
  


  return (
    <div className={module.dialogs}>
      <div>{dialogsElements}</div>
      <div className={module.messages}>
        {messagesElement}
       <DialogReduxForm onSubmit={onAddMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
