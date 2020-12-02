import { connect } from "react-redux";
import {
   followActionCreator,
   unfollowActionCreator,
   setUserActionCreator
 } from "../../redux/usersReducer";
import Users from "./Users";



let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users
   }
} 

let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followActionCreator(userId))
      },
      unfollow: (userId) => {
         dispatch(unfollowActionCreator(userId))
      },
      setUsers: (users) => {
         dispatch(setUserActionCreator(users))
      }
   }
} 


const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)

export default UsersContainer