import React from "react";
import DialogsContacts from "./DialogsContacts/DialogsContacts";
import DialogsMesagges from "./DialogsMesagges/DialogsMesagges";
import module from "./Dialogs.module.css";

const Dialogs = (props) => {



  let dialogsElements = props.state.dialogsData.map((dialog) => (<DialogsContacts name={dialog.name} id={dialog.id} />))
  let messagesElement = props.state.dialogsMessage.map((messages) => (<DialogsMesagges message={messages.message} />))

  return (
    <div className={module.dialogs}>
      <div>{dialogsElements}</div>
      <div className={module.messages}>{messagesElement}</div>
    </div>
  );
};

export default Dialogs;
