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

  let dialogsMessage = [
    { id: "Andrey", message: "Hello, i am Andrey" },
    { id: "Sergey", message: "Hello, i am Sergey" },
    { id: "Sasha", message: "Hello, i am Sasha" },
    { id: "Aleks", message: "Hello, i am Aleks" },
    { id: "Anastasia", message: "Hello, i am Anastasia" },
  ];

  return (
    <div className={d.dialogs}>
      <div>
        <DialogsContacts name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogsContacts name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogsContacts name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogsContacts name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogsContacts name={dialogsData[4].name} id={dialogsData[4].id} />
      </div>
      <div className={d.messages}>
        <DialogsMesagges message={dialogsMessage[0].message} />
        <DialogsMesagges message={dialogsMessage[1].message} />
        <DialogsMesagges message={dialogsMessage[2].message} />
        <DialogsMesagges message={dialogsMessage[3].message} />
        <DialogsMesagges message={dialogsMessage[4].message} />
      </div>
    </div>
  );
};

export default Dialogs;
