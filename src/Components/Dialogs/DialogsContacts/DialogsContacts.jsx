import React from "react";
import { NavLink } from "react-router-dom";
import d from "./DialogsContacts.module.css";

const DialogsContacts = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={d.contacts}>
      <div className={d.contactsItem}>
        <NavLink to={path} activeClassName={d.activeLink}>
          {props.name}
        </NavLink>
      </div>
    </div>
  );
};

export default DialogsContacts;
