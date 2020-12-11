import React from "react";
import "./App.css";
import {Route } from "react-router-dom";
import Navigations from "./Components/Navigations/Navigations.jsx";
import Header from "./Components/Header/Header.jsx";
import ListJunior from "./Components/TextItemList/ListJunior/ListJunior.jsx";
import ListMidle from "./Components/TextItemList/ListMidle/ListMidle.jsx";
import ListSenior from "./Components/TextItemList/ListSenior/ListSenior.jsx";
import PostsContainer from "./Components/Posts/PostsContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";


const App = (props) => {
  return (
      <div className="app-wrapper">
        <div className="wrapper-container">
          <Navigations />
          <Header />
          <div>
            <Route path="/dialogs" render={ () => <DialogsContainer /> }/>
            <Route path="/Profile/:userId?" render={ () => <PostsContainer /> }/>
          </div>
          <div>
            <Route path="/Junior" render={ () => <ListJunior />} />
            <Route path="/Midle" render={ () => <ListMidle />} />
            <Route path="/Senior" render={ () => <ListSenior />} />
          </div>
          <div>
            <Route path="/Users" render={ () => <UsersContainer />} />
          </div>
        </div>
      </div>
  );
};

export default App;
