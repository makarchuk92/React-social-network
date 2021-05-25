import React, { useEffect } from "react";
import module from "./Users.module.css";
import Paginator from "./Paginator/Paginator";
import User from "./User/User";
import UsersSearchForm from "./UsersSearchForm";
import { FilterType, requestUsers, follow, unfollow } from "../../redux/usersReducer";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, getPageSize, getTotalUsersCount, getFollowingInProgress, getUsersFilter, getUsers }
  from "../../redux/users-selectors";
import { useHistory } from "react-router";
import * as queryString from 'querystring'


type QueryParamsType = { term?: string; page?: string; friend?: string }

export const Users: React.FC = () => {

  const users = useSelector(getUsers)
  const currentPage = useSelector(getCurrentPage)
  const totalUsersCount = useSelector(getTotalUsersCount)
  const pageSize = useSelector(getPageSize)
  const followingInProgress = useSelector(getFollowingInProgress)
  const filter = useSelector(getUsersFilter)

  const dispatch = useDispatch()
  const history = useHistory()


  useEffect(() => {
    const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType
    let actualPage = currentPage
    let actualFilter = filter

    if (!!parsed.page) actualPage = Number(parsed.page)
    if (!!parsed.term) actualFilter = { ...actualFilter, term: parsed.term as string }

    switch (parsed.friend) {
      case "null":
        actualFilter = { ...actualFilter, friend: null }
        break
      case "true":
        actualFilter = { ...actualFilter, friend: true }
        break
      case "false":
        actualFilter = { ...actualFilter, friend: false }
        break
    }

    dispatch(requestUsers(actualPage, pageSize, actualFilter))
  }, [])

  useEffect(() => {
    const query: QueryParamsType = {}
    if (!!filter.term) query.term = filter.term
    if (filter.friend !== null) query.friend = String(filter.friend)
    if (currentPage !== 1) query.page = String(currentPage)

    history.push({
      pathname: '/users',
      
      search: queryString.stringify(query) /*`?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`*/
    })
  }, [filter, currentPage])

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

