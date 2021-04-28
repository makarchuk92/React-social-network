import React from "react";
import DialogsContacts from "./DialogsContacts/DialogsContacts";
import DialogsMesagges from "./DialogsMesagges/DialogsMesagges";
import module from "./Dialogs.module.css";
import DialogForm from "./DialogForm/DialogForm";
import { InicialStateType } from '../../redux/dialogsReducer';




//export const DialogReduxForm = reduxForm({form: "MessageDialogs"})(DialogForm)

type PropsType = {
  dialogsPage: InicialStateType
  addMessage: (newMessageText: string) => void
}

export type NewMessageFormValuesType = {
  newMessageText: string 
}


const Dialogs: React.FC<PropsType> = (props) => {
  let state = props.dialogsPage
  let dialogsElements = state.dialogsName.map((dialog) => (
    <DialogsContacts name={dialog.name} id={dialog.id} key={dialog.id} />
  ));
  let messagesElement = state.dialogsMessage.map((messages) => (
    <DialogsMesagges message={messages.message} key={messages.id} />
  ));



  let onAddMessage = (values: NewMessageFormValuesType ) => {
     props.addMessage(values.newMessageText)   
  } 
  


  return (
    <div className={module.dialogs}>
      <div>{dialogsElements}</div>
      <div className={module.messages}>
        {messagesElement}
       <DialogForm onSubmit={onAddMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
