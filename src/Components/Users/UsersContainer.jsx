import React from "react"
import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, toggleFolowingProgress, requestUsers
 } from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from '../common/preloader/Preloader'
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../redux/users-selectors";




class UsersContainer extends React.Component {
   componentDidMount() {
         this.props.getUsers(this.props.currentPage, this.props.pageSize)
   }
  
   onPageChanget = (pageNumber) => {
      this.props.getUsers(pageNumber, this.props.pageSize)
   }
 
   render() {
      return <>
      {this.props.isFetching ? <Preloader /> : null }
      <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} 
      currentPage={this.props.currentPage} unfollow={this.props.unfollow} follow={this.props.follow} 
      onPageChanget={this.onPageChanget} users={this.props.users}
       followingInProgress={this.props.followingInProgress} 
       getUsersThunkCreator={this.props.getUsersThunkCreator} />
      </>
   }
}


let mapStateToProps = (state) => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state)
      
   }
} 


export default connect
   (mapStateToProps, 
   { follow, unfollow, setCurrentPage, toggleFolowingProgress, getUsers: requestUsers })
   (UsersContainer)
