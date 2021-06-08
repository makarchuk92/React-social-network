import React from "react";
import "./App.css";
import 'antd/dist/antd.css'
import { Link, Redirect, Route, Switch, withRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider, connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import { hookSuspense } from "./hoc/hookSuspense";
import store, { AppStateType } from "./redux/redux-store"
import PostsContainer from "./Components/Posts/PostsContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

import Error404 from "./Components/Error404/Error404";
import Preloader from "./Components/common/preloader/Preloader";
import { UsersPage } from "./Components/Users/UsersPage";
import { LoginPage } from "./Components/Login/LoginPage";


import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {Navigations} from "./Components/Navigations/Navigations";


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const ListJunior = React.lazy(() => import('./Components/TextItemList/ListJunior/ListJunior'))
const ListMidle = React.lazy(() => import('./Components/TextItemList/ListMidle/ListMidle'))
const ListSenior = React.lazy(() => import('./Components/TextItemList/ListSenior/ListSenior'))
const SuspendedChatPage = React.lazy(() => import('./Components/ChatPage/ChatPage'))



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
    if (!this.props.inicialized) {
      return <Preloader />
    }
    return (
      <Layout  >
       <Navigations  />
        <Content  className="app-wrapper"  >
          <Layout className="site-layout-background app-wrapper"  >
            <Sider className="site-layout-background" width={200}  style={{height: "100vh"}}>
              <Menu
              className="SubMenu"
                mode="inline"
                defaultSelectedKeys={['1']}
                // defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="Menu" className="SubMenu_item" >
                  <Menu.Item key="1" ><Link to='/Users' >Users</Link></Menu.Item>
                  <Menu.Item key="2" ><Link to='/dialogs' >Messages</Link></Menu.Item>
                  <Menu.Item key="3" ><Link to='/Profile' >Profile</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                  <Menu.Item key="5"><Link to='/Junior' >Junior</Link></Menu.Item>
                  <Menu.Item key="6"><Link to='/Midle' >Midle</Link></Menu.Item>
                  <Menu.Item key="7"><Link to='/Senior' >Senior</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                  <Menu.Item key="9"><Link to='/ChatPage' >Chat</Link></Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280,  }} className="app-wrapper">
              <Switch>
                <Route exact path="/" render={() => <Redirect to={"/Profile"} />} />
                <Route path="/dialogs" render={() => <DialogsContainer />} />
                <Route path="/Profile/:userId?" render={() => <PostsContainer />} />
                <Route path="/Junior" render={hookSuspense(ListJunior)} />
                <Route path="/Midle" render={hookSuspense(ListMidle)} />
                <Route path="/Senior" render={hookSuspense(ListSenior)} />
                <Route path="/Users" render={() => <UsersPage />} />
                <Route path="/Login" render={hookSuspense(LoginPage)} />
                <Route path="/ChatPage" render={hookSuspense(SuspendedChatPage)} />
                <Route path="*" render={() => <Error404 />} />
              </Switch>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center', background: '#43375d',color: '#fff' }} className="footers">
          Social Network ©2021 Created by Makarchuk</Footer>
      </Layout>




      // <div className="app-wrapper">
      //   <div className="wrapper-container">
      //     <NavigationsContainer />
      //     <Header />
      //     <Switch>   
      //       <Route exact path="/" render={ () => <Redirect to={"/Profile"} /> }/>
      //       <Route path="/dialogs" render={ () => <DialogsContainer /> }/>
      //       <Route path="/Profile/:userId?" render={ () => <PostsContainer /> }/>
      //       <Route path="/Junior" render={hookSuspense(ListJunior)} />
      //       <Route path="/Midle" render={hookSuspense(ListMidle)} />
      //       <Route path="/Senior" render={hookSuspense(ListSenior)} />
      //       <Route path="/Users" render={ () => <UsersPage /> } />
      //       <Route path="/Login" render={hookSuspense(LoginPage)} />
      //       <Route path="*" render={() => <Error404 />   } />
      //     </Switch>
      //   </div>
      // </div>
    )
  };
};


const mapStateToProps = (state: AppStateType) => ({
  inicialized: state.app.inicialized
})

const AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App)

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


