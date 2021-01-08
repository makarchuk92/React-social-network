import React from "react";

import module from "./profileListContacts.module.css"

const ProfileListContacts = ({contactTitle, contactValue}) => {
  return (
    <div className={module.contacts_info}>
      <div className={module.list_contacts}>
        <h2>{contactTitle}:</h2> <p>{contactValue}</p>
      </div>
    </div>
  )
    // <div className={module.contacts_info}>
    //   <h2>Contacts:</h2>
    //   <ul className={module.list}>
    //     <li className={module.list_contacts}>
    //       <a href="http://facebook.com"
    //         target="_blank"
    //         rel="noopener noreferrer" >
    //         {props.profile.contacts.facebook}
    //       </a>
    //     </li> 
    //     <li className={module.list_contacts}>
    //       <a href="http://vk.com" target="_blank" rel="noopener noreferrer">
    //         {props.profile.contacts.vk}
    //       </a>
    //     </li>
    //     <li className={module.list_contacts}>
    //       <a href="https://twitter.com"
    //         target="_blank"
    //         rel="noopener noreferrer" >
    //         {props.profile.contacts.twitter}
    //       </a>
    //     </li>
    //     <li className={module.list_contacts}>
    //       <a href="https://instagra.com"
    //         target="_blank"
    //         rel="noopener noreferrer" >
    //         {props.profile.contacts.instagram}
    //       </a>
    //     </li>
    //     <li className={module.list_contacts}>
    //       <a href="https://github.com"
    //         target="_blank"
    //         rel="noopener noreferrer" >
    //         {props.profile.contacts.github}
    //       </a>
    //     </li> 
    //   </ul>
    // </div>
 
};

export default ProfileListContacts;
