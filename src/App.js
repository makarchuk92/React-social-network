import React from "react";
import "./App.css";
import Navigations from "./Components/Navigations/Navigations.jsx";
import Header from "./Components/Header/Header.jsx";
import Dialogs from "./Components/Dialogs/Dialogs.jsx";
import Posts from "./Components/Posts/Posts.jsx";
import ListJunior from "./Components/TextItemList/ListJunior/ListJunior.jsx";
import ListMidle from "./Components/TextItemList/ListMidle/ListMidle.jsx";
import ListSenior from "./Components/TextItemList/ListSenior/ListSenior.jsx";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="wrapper-container">
          <Navigations />
          <Header />
          <div>
            <Route path="/dialogs" render={ () =>  <Dialogs 
              state={props.state.dialogs} /> }/>
            <Route path="/posts" render={() => <Posts 
               state={props.state.posts} /> }/>
          </div>
          <div>
            <Route path="/Junior" component={ListJunior} />
            <Route path="/Midle" component={ListMidle} />
            <Route path="/Senior" component={ListSenior} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
