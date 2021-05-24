import React, { useEffect } from "react";
import module from "./Users.module.css";
import Paginator from "./Paginator/Paginator";
import User from "./User/User";
import UsersSearchForm from "./UsersSearchForm";
import { FilterType, requestUsers, follow, unfollow } from "../../redux/usersReducer";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, getPageSize, getTotalUsersCount, getFollowingInProgress, getUsersFilter, getUsers }
 from "../../redux/users-selectors";



export const Users: React.FC = () => {

    const users = useSelector(getUsers)
    const currentPage = useSelector(getCurrentPage)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const pageSize = useSelector(getPageSize)
    const followingInProgress = useSelector(getFollowingInProgress)
    const filter = useSelector(getUsersFilter)

    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(requestUsers(currentPage, pageSize, filter))
    }, [])

    const onPageChanget = (pageNumber: number) => {
      dispatch(requestUsers(pageNumber, pageSize, filter))
   }

   const onFilterChanget = (filter: FilterType) => {
    dispatch(requestUsers(1, pageSize, filter))
  }

    const Follow = (userId: number) => {
      dispatch(follow(userId))
    }
    const Unfollow = (userId: number) => {
      dispatch(unfollow(userId))
    }

  return (
    <div className={module.Offer}>
      <UsersSearchForm onFilterChanget={onFilterChanget} />
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
          unfollow={Unfollow}
          follow={Follow}
        />
      ))}
    </div>
  );
};

