import React from "react";
import DialogsContacts from "./DialogsContacts/DialogsContacts";
import DialogsMesagges from "./DialogsMesagges/DialogsMesagges";
import module from "./Dialogs.module.css";
import {addMessageActionCreator, updateNewMessageNextActionCreator} from '../../redux/dialogsReducer'


const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsName.map((dialog) => (
    <DialogsContacts name={dialog.name} id={dialog.id} />
  ));
  let messagesElement = props.state.dialogsMessage.map((messages) => (
    <DialogsMesagges message={messages.message} />
  ));

  let addMessageElements = React.createRef()

  let addMessage = () => {
    props.dispatch(addMessageActionCreator())    
  } 

  let onMessageChange = () => {
    let newText = addMessageElements.current.value
    props.dispatch(updateNewMessageNextActionCreator(newText))
  }

  return (
    <div className={module.dialogs}>
      <div>{dialogsElements}</div>
      <div className={module.messages}>
        {messagesElement}
        <div className={module.messageBlock}>
          <textarea onChange={onMessageChange} ref={addMessageElements} className={module.messageText}
          value={props.newMessageText} placeholder="Enter your message" />
          <button onClick={addMessage}  type='button'>send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
