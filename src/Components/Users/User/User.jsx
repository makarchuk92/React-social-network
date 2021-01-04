import React from "react";
import module from "./User.module.css";
import userPhoto from "../../../images/user.png";
import { NavLink } from "react-router-dom";
import SubscriptionButton from "./SubscriptionButton/SubscriptionButton";


let User = ({user, followingInProgress, unfollow, follow,}) => {
  return (
    <div>
        <div>{user.name}</div>
        <div>
          <NavLink to={"/Profile/" + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              className={module.Avatar}
              alt="foto"
            />
          </NavLink>
        </div>
        <SubscriptionButton  user={user}
          followingInProgress={followingInProgress}
          unfollow={unfollow}
          follow={follow} 
          />
    </div>
  );
};

export default User;
