import React from "react";
import { reduxForm, InjectedFormProps } from 'redux-form';
import { createField, GetStringKeys, Input, Textarea,
} from "../../../common/FormsControls/FormsControls";
import module from "../Profile.module.css";
import m from '../../../Login/authorizationForms/authorizationForms.module.css'
import userPhoto from "../../../../images/user.png";
import { ProfileType } from '../../../../Types/types';


type PropsType = {
  profile: ProfileType
  isOwner: Boolean
  onMainPhotoSelected: (e: React.ChangeEvent<HTMLInputElement>) => void
}
type ProfileFormTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = (
  {handleSubmit, profile, error, onMainPhotoSelected, isOwner}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={module.accaunt}>
        <div className={module.accaunt__item}>
          <h1>{profile.fullName}</h1> {createField("FullName", "fullName", [], Input)}
          <img className={module.photo_ava} src={profile.photos.large || userPhoto} alt="foto" />
          {isOwner && (
            <input type="file" onChange={onMainPhotoSelected} className={module.inpit_loading} /> )}
        </div>
        <div className={module.contacts}>
          <div>
            <button onClick={() => {}}>Save</button>
          </div>
          <div>
            <div>
              { error && <div className={m.error_Text}>
              <p>{error}</p>
              </div>  }
            </div>
            <h2>Contacts:</h2>{" "}
            {Object.keys(profile.contacts).map((key) => {
              return <div key={key}>
                <p>{key}</p>  {createField("https://" + key, "contacts." + key, [], Input)}
              </div>
            })}
          </div>
          <div className={module.info_text}>
            <div className={module.text_job}>
              <h3>Looking for a job:</h3>
              <p>{profile.lookingForAJob ? "yes" : "no"}</p>
              {createField<ProfileFormTypeKeys>("", "lookingForAJob", [], Input, {
                type: "checkbox",
              })}
            </div>
            <div className={module.text_job}>
              <h3>My skills:</h3>
              {/* <p>{props.profile.lookingForAJobDescription}</p> */}
              {createField<ProfileFormTypeKeys>("My skills", "lookingForAJobDescription", [], Textarea)}
            </div>
            <h2>About me:</h2>
            <div className={module.Edit_about_me}>
              {createField<ProfileFormTypeKeys>("About Me", "aboutMe", [], Textarea) }
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm<ProfileType, PropsType>({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataReduxForm;
