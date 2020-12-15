import React from "react"
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
 } from "../../redux/usersReducer";
import Users from "./Users";
import * as axios from "axios";
import Preloader from '../../images/preloader/Preloader'
import { userAPI } from "../../api/api";


class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.toggleIsFetching(true)
      userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
        this.props.setTotalUsersCount(data.totalCount)
     })
   }
  
   onPageChanget = (pageNumber) => {
      this.props.toggleIsFetching(true)
     this.props.setCurrentPage(pageNumber)
     userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
     })
   }
 
   render() {
      return <>
      {this.props.isFetching ? <Preloader /> : null }
      <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} 
      currentPage={this.props.currentPage} unfollow={this.props.unfollow} follow={this.props.follow} 
      onPageChanget={this.onPageChanget} users={this.props.users} />
      </>
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching
   }
} 


export default connect
   (mapStateToProps, 
   { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, 
   toggleIsFetching } )
   (UsersContainer)
