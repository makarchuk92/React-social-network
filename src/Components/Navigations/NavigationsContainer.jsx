import React from 'react';
import { connect } from 'react-redux';
import Navigations from './Navigations.jsx';
import { setAuthUserData } from '../../redux/auth-reducer.js';
import { getNavigations } from '../../api/api.js';

class NavigationsContainer extends React.Component {
  componentDidMount() {
    getNavigations().then(data => {
        if ( data.resultCode === 0) {
          let {id, email, login} = data.data
          this.props.setAuthUserData(id, email, login)
        }
      })
  }
  render() {
   return <Navigations {...this.props} />
 }
}


let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

 export default connect(mapStateToProps, {setAuthUserData}) (NavigationsContainer);
