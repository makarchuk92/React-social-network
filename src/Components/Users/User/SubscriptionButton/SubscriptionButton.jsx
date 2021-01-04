import React from "react";
import module from "./SubscriptionButton.module.css";



let SubscriptionButton = ({user, followingInProgress, unfollow, follow}) => {
  return (
      <div className={module.NewsPost}>
        {user.followed ? (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              unfollow(user.id);
            }}
            className={module.unfollow}
          >
            unfollow
          </button>
        ) : (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              follow(user.id);
            }}
            className={module.follow}
          >
            follow
          </button>
        )}
      </div>
  );
};

export default SubscriptionButton;
