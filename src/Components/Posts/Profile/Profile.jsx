import React, { useState } from "react";
import Preloader from "../../common/preloader/Preloader";
import module from "./Profile.module.css";
import userPhoto from "../../../images/user.png";
import ProfileStatusHooks from "./ProfileStatus/ProfileStatusHooks";
import ProfileListContacts from "./profileListContacts/ProfileListContacts";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";

const Profile = (props) => {
  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (FormData) => {
    props.saveProfile(FormData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div>
      <ProfileStatusHooks
        status={props.status}
        updateStatus={props.updateStatus}
      />
      {editMode ? (
        <ProfileDataForm
          initialValues={props.profile}
          onMainPhotoSelected={onMainPhotoSelected}
          onSubmit={onSubmit}
          {...props}
        />
      ) : (
        <ProfileData
          goToEditMode={() => {
            setEditMode(true);
          }}
          {...props}
        />
      )}
    </div>
  );
};

const ProfileData = ({ ...props }) => {
  return (
    <div className={module.accaunt}>
      <div className={module.accaunt__item}>
        <h1>{props.profile.fullName}</h1>
        <img
          className={module.photo_ava}
          src={props.profile.photos.large || userPhoto}
          alt="foto"
        />
      </div>
      <div className={module.contacts}>
        <div>
          {props.isOwner && <button onClick={props.goToEditMode}>Edit</button>}
        </div>
        <div>
          <h2>Contacts:</h2>{" "}
          {Object.keys(props.profile.contacts).map((key) => {
            return (
              <ProfileListContacts
                key={key}
                contactTitle={key}
                contactValue={props.profile.contacts[key]}
              />
            );
          })}
        </div>
        <div className={module.info_text}>
          <div className={module.text_job}>
            <h3>Looking for a job:</h3>{" "}
            <p>{props.profile.lookingForAJob ? "yes" : "no"}</p>
          </div>
          <div className={module.text_job}>
            <h3>My skills:</h3>
            <p>{props.profile.lookingForAJobDescription}</p>
          </div>
          <h2>About me:</h2>
          <p>{props.profile.aboutMe}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
