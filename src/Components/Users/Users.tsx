import React from "react";
import module from "./Users.module.css";
import Paginator from "./Paginator/Paginator";
import User from "./User/User";
import { UserType } from "../../Types/types";
import UsersSearchForm from "./UsersSearchForm";
import { FilterType } from "../../redux/usersReducer";

type PropsType = {
  currentPage: number
  pageSize: number
  onPageChanget: (pageNumber: number) => void
  onFilterChanget: (filter: FilterType) => void
  totalUsersCount: number
  users: Array<UserType>
  followingInProgress: Array<number>
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}

let Users: React.FC<PropsType> = ({ currentPage, pageSize, onPageChanget, totalUsersCount,
  users, follow, unfollow, followingInProgress, ...props }) => {
  return (
    <div className={module.Offer}>
      <UsersSearchForm onFilterChanget={props.onFilterChanget} />
      <Paginator
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChanget={onPageChanget}
        totalItemsCount={totalUsersCount}
      />
      {users.map((u) => (
        <User
          key={u.id}
          user={u}
          followingInProgress={followingInProgress}
          unfollow={unfollow}
          follow={follow}
        />
      ))}
    </div>
  );
};

export default Users;
