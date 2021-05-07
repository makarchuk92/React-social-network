import React from 'react';
import { connect } from 'react-redux';
import Navigations, { MapStatePropsType, MapDispatchPropsType } from './Navigations';
import { logout } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';


class NavigationsContainer extends React.Component<MapStatePropsType & MapDispatchPropsType> {
  render() {
   return <Navigations {...this.props} />
 }
}


let mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

 export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType >(
   mapStateToProps, {logout}) (NavigationsContainer);
