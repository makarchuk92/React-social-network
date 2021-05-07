import React from "react";
import { NavLink } from "react-router-dom";
import module from "./DialogsContacts.module.css";

type PropsType = {
  name: string
  id: number
}

const DialogsContacts: React.FC<PropsType> = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={module.contacts}>
      <div className={module.contactsItem}>
        <NavLink to={path} activeClassName={module.activeLink}>
          {props.name}
        </NavLink>
      </div>
    </div>
  );
};

export default DialogsContacts;
