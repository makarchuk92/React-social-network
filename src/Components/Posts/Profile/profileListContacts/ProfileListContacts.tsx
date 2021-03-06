import React from "react";

import module from "./profileListContacts.module.css"


type ContactsPropstype = {
  contactTitle: string
  contactValue: string
}
const ProfileListContacts: React.FC<ContactsPropstype> = ({contactTitle, contactValue}) => {
  return (
    <div className={module.contacts_info}>
      <div className={module.list_contacts}>
        <h2>{contactTitle}:</h2> <p>{contactValue}</p>
      </div>
    </div>
  )
};

export default ProfileListContacts;
