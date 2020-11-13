import React from "react";
import "./App.css";
import Navigations from "./Components/Navigations/Navigations.jsx";
import Header from "./Components/Header/Header.jsx";
import Dialogs from "./Components/Dialogs/Dialogs.jsx";
import Posts from "./Components/Posts/Posts.jsx";
import ListJunior from "./Components/TextItemList/ListJunior/ListJunior.jsx";
import ListMidle from "./Components/TextItemList/ListMidle/ListMidle.jsx";
import ListSenior from "./Components/TextItemList/ListSenior/ListSenior.jsx";
import News from "./Components/News/News"
import {Route } from "react-router-dom";


const App = (props) => {
  return (
      <div className="app-wrapper">
        <div className="wrapper-container">
          <Navigations />
          <Header />
          <div>
            <Route path="/dialogs" render={ () =>  <Dialogs 
              state={props.state.dialogs}
              addMessage={props.addMessage}
              newMessageText={props.state.dialogs.newMessageText}
              updateNewMessageText={props.updateNewMessageText}
              /> }/>
            <Route path="/posts" render={() => <Posts 
               state={props.state.posts}
               addPost={props.addPost}
               newPostText={props.state.posts.newPostText} 
               updateNewPostText={props.updateNewPostText}
              
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
