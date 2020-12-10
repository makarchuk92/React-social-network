import React from "react"
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
 } from "../../redux/usersReducer";
import Users from "./Users";
import * as axios from "axios";
import Preloader from '../../images/preloader/Preloader'


class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.toggleIsFetching(true)
     axios.get(`https://social-network.samuraijs.com/api/1.0/users?=${this.props.currentPage}&count=${this.props.pageSize}`)
     .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
     })
   }
  
   onPageChanget = (pageNumber) => {
      this.props.toggleIsFetching(true)
     this.props.setCurrentPage(pageNumber)
     axios.get(`https://social-network.samuraijs.com/api/1.0/users?=${pageNumber}&count=${this.props.pageSize}`)
     .then(response => {
      this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
     })
   }
 
   render() {
      return <>
      {this.props.isFetching ? <Preloader /> : null }
      <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} 
      currentPage={this.props.currentPage} unfollow={this.props.unfollow} follow={this.props.follow} 
      onPageChanget={this.onPageChanget} users={this.props.users}
      />
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

// let mapDispatchToProps = (dispatch) => {
//    return {
//       follow: (userId) => {
//          dispatch(followActionCreator(userId))
//       },
//       unfollow: (userId) => {
//          dispatch(unfollowActionCreator(userId))
//       },
//       setUsers: (users) => {
//          dispatch(setUserActionCreator(users))
//       },
//       setCurrentPage: (pageNumber) => {
//          dispatch(setCurrentPageActionCreator(pageNumber))
//       },
//       setTotalUsersCount: (totalCount) => {
//          dispatch(setUsersTotalCountActionCreator(totalCount))
//       },
//       toggleIsFetching: (isFetching) => {
//          dispatch(toggleIsFetchingActionCreator(isFetching))
//       }
//    }
// } 

export default connect
   (mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } )
   (UsersContainer)
