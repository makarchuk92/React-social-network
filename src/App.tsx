import React from "react";
import "./App.css";
import {Redirect, Route, Switch, withRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { compose } from "redux";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { hookSuspense } from "./hoc/hookSuspense";
import store, { AppStateType } from "./redux/redux-store"
import Header from "./Components/Header/Header.jsx";
import PostsContainer from "./Components/Posts/PostsContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import NavigationsContainer from "./Components/Navigations/NavigationsContainer";
import Error404 from "./Components/Error404/Error404";
import Preloader from "./Components/common/preloader/Preloader";




const ListJunior = React.lazy(() => import('./Components/TextItemList/ListJunior/ListJunior'))
const ListMidle = React.lazy(() => import('./Components/TextItemList/ListMidle/ListMidle'))
const ListSenior = React.lazy(() => import('./Components/TextItemList/ListSenior/ListSenior'))
const Login = React.lazy(() => import('./Components/Login/Login'))


type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = {
  initializeApp: () => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType

class App extends React.Component<PropsType> {
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
          <Switch>   
            <Route exact path="/" render={ () => <Redirect to={"/Profile"} /> }/>
            <Route path="/dialogs" render={ () => <DialogsContainer /> }/>
            <Route path="/Profile/:userId?" render={ () => <PostsContainer /> }/>
            <Route path="/Junior" render={hookSuspense(ListJunior)} />
            <Route path="/Midle" render={hookSuspense(ListMidle)} />
            <Route path="/Senior" render={hookSuspense(ListSenior)} />
            <Route path="/Users" render={ () => <UsersContainer />} />
            <Route path="/Login" render={hookSuspense(Login)} />
            <Route path="*" render={() => <Error404 /> } />
          </Switch>
        </div>
      </div>
  )};
};


const mapStateToProps = (state: AppStateType) => ({
  inicialized: state.app.inicialized
})

const AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, {initializeApp})) (App)

const MainApp: React.FC = () => {
  return (
    <BrowserRouter>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </BrowserRouter> 
  )
} 

export default MainApp

 
