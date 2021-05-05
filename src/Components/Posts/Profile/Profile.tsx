import React, { ChangeEvent, useState } from "react";
import Preloader from "../../common/preloader/Preloader";
import module from "./Profile.module.css";
import userPhoto from "../../../images/user.png";
import ProfileStatusHooks from "./ProfileStatus/ProfileStatusHooks";
import ProfileListContacts from "./profileListContacts/ProfileListContacts";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import { ProfileType, ContactsType } from '../../../Types/types';


type PropsType = {
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
  status: string
  updateStatus: (status: string) => void
  profile: ProfileType | null
  isOwner: boolean
}

const Profile: React.FC<PropsType> = ({savePhoto, saveProfile, status, updateStatus, isOwner, profile}) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData: ProfileType) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div>
      <ProfileStatusHooks
        status={status}
        updateStatus={updateStatus}
      />
      {editMode ? 
        <ProfileDataForm
          initialValues={profile}
          onMainPhotoSelected={onMainPhotoSelected}
          onSubmit={onSubmit}
          profile={profile}
          isOwner={isOwner}
        />
       : 
        <ProfileData
          goToEditMode={() => {
            setEditMode(true) }}
            profile={profile} isOwner={isOwner}
        />
      }
    </div>
  );
};


type ProfileDataPropsType = {
  profile: ProfileType
  isOwner: boolean
  goToEditMode: () => void
}
const ProfileData: React.FC<ProfileDataPropsType> = ({ profile, isOwner, goToEditMode}) => {
  return (
    <div className={module.accaunt}>
      <div className={module.accaunt__item}>
        <h1>{profile.fullName}</h1>
        <img
          className={module.photo_ava}
          src={profile.photos.large || userPhoto}
          alt="foto"
        />
      </div>
      <div className={module.contacts}>
        <div>
          {isOwner && <button onClick={goToEditMode}>Edit</button>}
        </div>
        <div>
          <h2>Contacts:</h2>{" "}
          {Object.keys(profile.contacts).map( key => {
            return (
              <ProfileListContacts
                key={key}
                contactTitle={key}
                contactValue={profile.contacts[key as keyof ContactsType]}
              />
            );
          })}
        </div>
        <div className={module.info_text}>
          <div className={module.text_job}>
            <h3>Looking for a job:</h3>{" "}
            <p>{profile.lookingForAJob ? "yes" : "no"}</p>
          </div>
          <div className={module.text_job}>
            <h3>My skills:</h3>
            <p>{profile.lookingForAJobDescription}</p>
          </div>
          <h2>About me:</h2>
          <p>{profile.aboutMe}</p>
        </div>
      </div>
    </div>
  );
};




export default Profile;
