import React from 'react';
import { connect } from 'react-redux';
import Navigations from './Navigations.jsx';
import { logout } from '../../redux/auth-reducer';


class NavigationsContainer extends React.Component {
  render() {
   return <Navigations {...this.props} />
 }
}


let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

 export default connect(mapStateToProps, {logout}) (NavigationsContainer);
