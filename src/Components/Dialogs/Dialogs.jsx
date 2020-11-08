import React from "react";
import DialogsContacts from "./DialogsContacts/DialogsContacts";
import DialogsMesagges from "./DialogsMesagges/DialogsMesagges";
import module from "./Dialogs.module.css";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsName.map((dialog) => (
    <DialogsContacts name={dialog.name} id={dialog.id} />
  ));
  let messagesElement = props.state.dialogsMessage.map((messages) => (
    <DialogsMesagges message={messages.message} addMessage={props.addMessage}/>
  ));

  let addMessageElements = React.createRef()

  let addMessage = () => {
    let messageText = addMessageElements.current.value
    props.addMessage(messageText)
    
    addMessageElements.current.value = '';
  } 

  return (
    <div className={module.dialogs}>
      <div>{dialogsElements}</div>
      <div className={module.messages}>
        {messagesElement}
        <div className={module.messageBlock}>
          <textarea ref={addMessageElements} className={module.messageText}></textarea>
          <button onClick={addMessage}  type='button'>send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
