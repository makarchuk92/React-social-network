import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile, getUserStatus, savePhoto, updateStatus, saveProfile } from '../../../redux/postsReducer'
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose } from 'redux'
import { withAuthredirect } from '../../../hoc/withAuthRedirect'
import { ProfileType } from '../../../Types/types';
import { AppStateType } from '../../../redux/redux-store';



type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = {
   getUserProfile: (userId: number) => void
   getUserStatus: (userId: number) => void
   updateStatus: (status: string) => void
   savePhoto: (file: File) => void
   saveProfile: (profile: ProfileType) => Promise<any>
}

type PathParamsType = {
   userId: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<PropsType> {
   constructor(props: PropsType) {
      super(props);
  }
    refleshProfile() {
      let userId: number | null = +this.props.match.params.userId
      if (!userId) {
         userId = this.props.authorizedUserId}
         if(!userId) {
            console.error("ID should exists in URL params or in state ('authorizedUserId')")          
         } else {
            this.props.getUserProfile(userId)
            this.props.getUserStatus(userId)
         }      
    } 

   componentDidMount() {
     this.refleshProfile()
   }
   componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
      if(this.props.match.params.userId !== prevProps.match.params.userId) {
         this.refleshProfile()
      }
   }

   render() {
   return (
      <Profile {...this.props} isOwner={ ! this.props.match.params.userId} savePhoto={this.props.savePhoto}
      saveProfile={this.props.saveProfile}  />
   )}
}


let mapStateToProps = (state: AppStateType) => ({
   profile: state.postsPage.profile,
   status: state.postsPage.status,
   authorizedUserId: state.auth.userId,
   isAuth: state.auth.isAuth
})



export default compose<React.ComponentType>(
   connect (mapStateToProps, {getUserProfile, getUserStatus, updateStatus, savePhoto, saveProfile}),
   withRouter,
   withAuthredirect
)(ProfileContainer)

