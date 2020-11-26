import React from "react";
import "./App.css";
import Navigations from "./Components/Navigations/Navigations.jsx";
import Header from "./Components/Header/Header.jsx";
import ListJunior from "./Components/TextItemList/ListJunior/ListJunior.jsx";
import ListMidle from "./Components/TextItemList/ListMidle/ListMidle.jsx";
import ListSenior from "./Components/TextItemList/ListSenior/ListSenior.jsx";
import News from "./Components/News/News"
import {Route } from "react-router-dom";
import PostsContainer from "./Components/Posts/PostsContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


const App = (props) => {
  return (
      <div className="app-wrapper">
        <div className="wrapper-container">
          <Navigations />
          <Header />
          <div>
            <Route path="/dialogs" render={ () =>  <DialogsContainer 
              store={props.store}
              /> }/>
            <Route path="/posts" render={() => <PostsContainer
              store={props.store} 
               /> }/>
          </div>
          <div>
            <Route path="/Junior" render={ () => <ListJunior />} />
            <Route path="/Midle" render={ () => <ListMidle />} />
            <Route path="/Senior" render={ () => <ListSenior />} />
          </div>
          <div>
            <Route path="/News" render={ () => <News />} />
          </div>
        </div>
      </div>
  );
};

export default App;
