import React from "react"
import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, toggleFolowingProgress, getUsers
 } from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from '../common/preloader/Preloader'




class UsersContainer extends React.Component {
   componentDidMount() {
         this.props.getUsers(this.props.currentPage, this.props.pageSize)
   }
  
   onPageChanget = (pageNumber) => {
      this.props.getUsers(pageNumber, this.props.pageSize)
      this.props.setCurrentPage(pageNumber)
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
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followingInProgress: state.usersPage.followingInProgress
      
   }
} 


export default connect
   (mapStateToProps, 
   { follow, unfollow, setCurrentPage, toggleFolowingProgress, getUsers })
   (UsersContainer)
