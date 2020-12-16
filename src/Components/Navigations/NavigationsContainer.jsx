import React from 'react';
import { connect } from 'react-redux';
import Navigations from './Navigations.jsx';
import { getAuthUserData } from '../../redux/auth-reducer.js';


class NavigationsContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData()
    // authAPI.getNavigations().then(response => {
    //     if ( response.data.resultCode === 0) {
    //       let {id, email, login} = response.data.data
    //       this.props.setAuthUserData(id, email, login)
    //     }
    //   })
  }
  render() {
   return <Navigations {...this.props} />
 }
}


let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

 export default connect(mapStateToProps, {getAuthUserData}) (NavigationsContainer);
