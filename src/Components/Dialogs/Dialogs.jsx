import React from "react";
import DialogsContacts from "./DialogsContacts/DialogsContacts";
import DialogsMesagges from "./DialogsMesagges/DialogsMesagges";
import d from "./Dialogs.module.css";

const Dialogs = (props) => {
  let dialogsData = [
    { id: "Andrey", name: "- Andrey -" },
    { id: "Sergey", name: "- Sergey -" },
    { id: "Sasha", name: "- Sasha -" },
    { id: "Aleks", name: "- Aleks -" },
    { id: "Anastasia", name: "- Anastasia -" },
  ];
  let dialogsElements = dialogsData.map (dialogs => <DialogsContacts name={dialogs.name} id={dialogs.id} />)


  let dialogsMessage = [
    { id: "Andrey", message: "Hello, i am Andrey" },
    { id: "Sergey", message: "Hello, i am Sergey" },
    { id: "Sasha", message: "Hello, i am Sasha" },
    { id: "Aleks", message: "Hello, i am Aleks" },
    { id: "Anastasia", message: "Hello, i am Anastasia" },
  ];
  let messagesElement = dialogsMessage.map (messages => <DialogsMesagges message={messages.message} />)

  return (
    <div className={d.dialogs}>
      <div>
        {dialogsElements}
      </div>
      <div className={d.messages}>
        {messagesElement}
      </div>
    </div>
  );
};

export default Dialogs;
