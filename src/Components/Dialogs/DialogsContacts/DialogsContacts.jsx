import React from "react";
import { NavLink } from "react-router-dom";
import module from "./DialogsContacts.module.css";

const DialogsContacts = (props) => {
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
