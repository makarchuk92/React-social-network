import React from 'react'
import Preloader from '../../common/preloader/Preloader'
import module from './Profile.module.css'
import userPhoto from '../../../images/user.png'
import ProfileStatusHooks from './ProfileStatus/ProfileStatusHooks'
import ProfileListContacts from './profileListContacts/ProfileListContacts'
import { savePhoto } from '../../../redux/postsReducer'



const Profile = (props) => {
   if (! props.profile) {
      return <Preloader />
   }

   const onMainPhotoSelected = (e) => {
      if(e.target.files.length) {
         props.savePhoto(e.target.files[0])
      }
   }

   return (
      <div>
         <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus}/>
         <div className={module.accaunt}>
            <div className={module.accaunt__item} >
               <h1>{props.profile.fullName}</h1>
               <img src={props.profile.photos.large || userPhoto } alt='foto' />
               {props.isOwner && <input type="file" onChange={onMainPhotoSelected} />}
            </div>
            <div className={module.status} >
            
            </div>
            <div className={module.contacts}>
               <ProfileListContacts {...props} /> 
               <div className={module.info_text} >
                  <h2>About me:</h2>
                  <p>{props.profile.aboutMe}</p>
               </div>
            </div>
         </div>
      </div>
   )  
}

export default Profile