import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile } from '../../../redux/postsReducer'
import { withRouter } from 'react-router-dom'





class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.match.params.userId
      if (!userId) {userId=2};
      this.props.getUserProfile(userId)
   }
   render() {
   return (
      <Profile {...this.props} profile={this.props.profile} />
   )}
}


let mapStateToProps = (state) => ({
   profile: state.postsPage.profile
})


let WitchUrlContainer = withRouter(ProfileContainer)

export default connect (mapStateToProps, {getUserProfile} ) (WitchUrlContainer)

