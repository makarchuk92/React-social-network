import React from "react"
import { connect } from "react-redux";
import { follow, unfollow, requestUsers, FilterType } from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from '../common/preloader/Preloader'
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers }
from "../../redux/users-selectors";
import { UserType } from "../../Types/types";
import { AppStateType } from "../../redux/redux-store";


type MapStatePropsType = {
   currentPage: number
   pageSize: number
   isFetching: boolean
   totalUsersCount: number
   users: Array<UserType>
   followingInProgress: Array<number>
}

type MapDispatchPropsType = {
   unfollow: (userId: number) => void
   follow: (userId: number) => void
   getUsers: (currentPage: number, pageSize: number, term: string) => void
}

type OwnPropsType = {
   
 }

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType


class UsersContainer extends React.Component<PropsType> {
   componentDidMount() {
         this.props.getUsers(this.props.currentPage, this.props.pageSize, "")
   }
  
   onPageChanget = (pageNumber: number) => {
      this.props.getUsers(pageNumber, this.props.pageSize, "")
   }
 
   onFilterChanget = (filter: FilterType) => {

   }

   render() {
      return <>
      {this.props.isFetching ? <Preloader /> : null }
      <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} 
      currentPage={this.props.currentPage} unfollow={this.props.unfollow} follow={this.props.follow} 
      onPageChanget={this.onPageChanget} users={this.props.users}
      followingInProgress={this.props.followingInProgress} 
       />
      </>
   }
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state)
      
   }
} 


export default   connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
   (mapStateToProps, { follow, unfollow, getUsers: requestUsers }
   )(UsersContainer)
