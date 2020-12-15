import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { setUserProfile } from '../../../redux/postsReducer'
import { withRouter } from 'react-router-dom'
import { getProfile } from '../../../api/api'





class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.match.params.userId
      if (!userId) {userId=2};
      getProfile(userId)
      // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(data => {
         this.props.setUserProfile(data)
      })
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

export default connect (mapStateToProps, {setUserProfile} ) (WitchUrlContainer)

