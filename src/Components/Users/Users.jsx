import React from "react";
import module from "./Users.module.css";
import Paginator from "./Paginator/Paginator";
import User from "./User/User.jsx";

let Users = (props) => {
  return (
    <div className={module.Offer}>
      <Paginator
        currentPage={props.currentPage}
        pageSize={props.pageSize}
        onPageChanget={props.onPageChanget}
        totalItemsCount={props.totalUsersCount}
      />
      {props.users.map((u) => (
        <User
          key={u.id}
          user={u}
          followingInProgress={props.followingInProgress}
          unfollow={props.unfollow}
          follow={props.follow}
        />
      ))}
    </div>
  );
};

export default Users;
