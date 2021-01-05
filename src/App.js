import React from "react";
import "./App.css";
import {Route, withRouter } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import PostsContainer from "./Components/Posts/PostsContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import NavigationsContainer from "./Components/Navigations/NavigationsContainer";
import { compose } from "redux";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./Components/common/preloader/Preloader";
import { hookSuspense } from "./hoc/hookSuspense";
const ListJunior = React.lazy(() => import('./Components/TextItemList/ListJunior/ListJunior'))
const ListMidle = React.lazy(() => import('./Components/TextItemList/ListMidle/ListMidle'))
const ListSenior = React.lazy(() => import('./Components/TextItemList/ListSenior/ListSenior'))
const Login = React.lazy(() => import('./Components/Login/Login'))

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if(!this.props.inicialized) {
    return <Preloader /> }
  return (
      <div className="app-wrapper">
        <div className="wrapper-container">
          <NavigationsContainer />
          <Header />
          <div>
            <Route path="/dialogs" render={ () => <DialogsContainer /> }/>
            <Route path="/Profile/:userId?" render={ () => <PostsContainer /> }/>
          </div>
          <div>
            <Route path="/Junior" render={hookSuspense(ListJunior)} />
            <Route path="/Midle" render={hookSuspense(ListMidle)} />
            <Route path="/Senior" render={hookSuspense(ListSenior)} />
          </div>
          <div>
            <Route path="/Users" render={ () => <UsersContainer />} />
          </div>
          <div>
            <Route path="/Login" render={hookSuspense(Login)} />
          </div>
        </div>
      </div>
  )};
};


const mapStateToProps = (state) => ({
  inicialized: state.app.inicialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})) (App)
 
