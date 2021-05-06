import React from "react";
import module from "./SubscriptionButton.module.css";
import { UserPropsType } from '../User';



let SubscriptionButton: React.FC<UserPropsType>= ({user, followingInProgress, unfollow, follow}) => {
  return (
      <div className={module.NewsPost}>
        {user.followed ? 
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              unfollow(user.id);
            }}
            className={module.unfollow}
          >
            unfollow
          </button>
         : 
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              follow(user.id);
            }}
            className={module.follow}
          >
            follow
          </button>
        }
      </div>
  );
};

export default SubscriptionButton;
