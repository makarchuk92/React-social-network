import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  createField,
  Input,
  Textarea,
} from "../../../common/FormsControls/FormsControls";
import module from "../Profile.module.css";
import m from '../../../Login/authorizationForms/authorizationForms.module.css'
import userPhoto from "../../../../images/user.png";

const ProfileDataForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={module.accaunt}>
        <div className={module.accaunt__item}>
          <h1>{props.profile.fullName}</h1> {createField("FullName", "fullName", {}, Input)}
          <img
            className={module.photo_ava}
            src={props.profile.photos.large || userPhoto}
            alt="foto"
          />
          {props.isOwner && (
            <input
              type="file"
              onChange={props.onMainPhotoSelected}
              className={module.inpit_loading}
            />
          )}
        </div>
        <div className={module.contacts}>

          <div>
            <button onClick={() => {}}>Save</button>
          </div>

          <div>
            <div>
              { props.error && <div className={m.error_Text}>
              <p>{props.error}</p>
              </div>  }
            </div>
            <h2>Contacts:</h2>{" "}
            {Object.keys(props.profile.contacts).map((key) => {
              return <div key={key}>
                <p>{key}</p>  {createField("https://" + key, "contacts." + key, {}, Input)}
              </div>
            })}
          </div>
          <div className={module.info_text}>
            <div className={module.text_job}>
              <h3>Looking for a job:</h3>
              <p>{props.profile.lookingForAJob ? "yes" : "no"}</p>
              {createField("", "lookingForAJob", {}, Input, {
                type: "checkbox",
              })}
            </div>
            <div className={module.text_job}>
              <h3>My skills:</h3>
              <p>{props.profile.lookingForAJobDescription}</p>
              {createField("My skills", "lookingForAJobDescription", {}, Textarea)}
            </div>
            <h2>About me:</h2>
            <div className={module.Edit_about_me}>
              {createField("About Me", "aboutMe", {}, Textarea) }
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataReduxForm;
