import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile, getUserStatus, savePhoto, updateStatus } from '../../../redux/postsReducer'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { withAuthredirect } from '../../../hoc/withAuthRedirect'





class ProfileContainer extends React.Component {
    refleshProfile() {
      let userId = this.props.match.params.userId
      if (!userId) {
         userId = this.props.authorizedUserId}
      this.props.getUserProfile(userId)
      this.props.getUserStatus(userId)
    } 

   componentDidMount() {
     this.refleshProfile()
   }
   componentDidUpdate(prevProps, prevState) {
      if(this.props.match.params.userId != prevProps.match.params.userId) {
         this.refleshProfile()
      }
   }

   render() {
   return (
      <Profile {...this.props} isOwner={ ! this.props.match.params.userId} savePhoto={this.props.savePhoto} />
   )}
}


let mapStateToProps = (state) => ({
   profile: state.postsPage.profile,
   status: state.postsPage.status,
   authorizedUserId: state.auth.userId,
   isAuth: state.auth.isAuth
})



export default compose(
   connect (mapStateToProps, {getUserProfile, getUserStatus, updateStatus, savePhoto}),
   withRouter,
   withAuthredirect
)(ProfileContainer)

