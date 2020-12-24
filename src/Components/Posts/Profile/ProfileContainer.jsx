import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile, getUserStatus, updateStatus } from '../../../redux/postsReducer'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { withAuthredirect } from '../../../hoc/withAuthRedirect'





class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.match.params.userId
      if (!userId) {
         userId = this.props.authorizedUserId}
      this.props.getUserProfile(userId)
      this.props.getUserStatus(userId)
   }
   render() {
   return (
      <Profile {...this.props} />
   )}
}


let mapStateToProps = (state) => ({
   profile: state.postsPage.profile,
   status: state.postsPage.status,
   authorizedUserId: state.auth.userId,
   isAuth: state.auth.isAuth
})



export default compose(
   connect (mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
   withRouter,
   withAuthredirect
)(ProfileContainer)

