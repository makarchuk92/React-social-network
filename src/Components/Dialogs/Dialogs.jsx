import React from "react";
import DialogsContacts from "./DialogsContacts/DialogsContacts";
import DialogsMesagges from "./DialogsMesagges/DialogsMesagges";
import d from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={d.dialogs}>
      <div>
        <DialogsContacts name="- Andrey -" id="Andrey" />
        <DialogsContacts name="- Sergey -" id="Sergey" />
        <DialogsContacts name="- Saha -" id="Saha" />
        <DialogsContacts name="- Aleks -" id="Aleks" />
        <DialogsContacts name="- Julia -" id="Julia" />
      </div>
      <div className={d.messages}>
          <DialogsMesagges message="Hello, i am Andrey" />
          <DialogsMesagges message="Hello, i am Sergey" />
          <DialogsMesagges message="Hello, i am Saha" />
          <DialogsMesagges message="Hello, i am Aleks" />
          <DialogsMesagges message="Hello, i am Julia" />
      </div>
    </div>
  );
};

export default Dialogs;
