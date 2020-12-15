import React from 'react'
import Preloader from '../../../images/preloader/Preloader'
import module from './Profile.module.css'




const Profile = (props) => {
   if (! props.profile) {
      return <Preloader />
   }

   return (
      <div className={module.accaunt}>
         <div className={module.accaunt__item} >
            <img src={props.profile.photos.large} alt='foto' />
            <h1>{props.profile.fullName}</h1>
         </div>
         <div className={module.contacts}>
            <div className={module.contacts_info} >
               <h2>Contacts:</h2>
               <ul className={module.list} >
                  <li className={module.list_contacts} >
                     <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                        {props.profile.contacts.facebook}
                     </a> 
                  </li>
                  <li className={module.list_contacts} >
                     <a href="http://vk.com"  target="_blank" rel="noopener noreferrer">
                        {props.profile.contacts.vk}
                     </a> 
                  </li>
                  <li className={module.list_contacts} >
                     <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        {props.profile.contacts.twitter}
                     </a> 
                  </li>
                  <li className={module.list_contacts} >
                     <a href="https://instagra.com" target="_blank" rel="noopener noreferrer">
                        {props.profile.contacts.instagram}
                     </a> 
                  </li>
                  <li className={module.list_contacts} >
                     <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        {props.profile.contacts.github}
                     </a> 
                  </li>
               </ul>
            </div>
            <div className={module.info_text} >
               <h2>About me:</h2>
               <p>{props.profile.aboutMe}</p>
            </div>
         </div>
      </div>
   )
}

export default Profile