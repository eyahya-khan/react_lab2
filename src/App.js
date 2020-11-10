import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Posts } from "./components/Posts";
import { Media } from "./components/Media";
import "./App.css";

export const UseroneContext = React.createContext();
export const UsertwoContext = React.createContext();

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/posts">
          <UseroneContext.Provider value={"Posts from"}>
            <UsertwoContext.Provider value={"API"}>
              <Posts />
            </UsertwoContext.Provider>
          </UseroneContext.Provider>
        </Route>
        <Route path="/media">
          <UseroneContext.Provider value={"Image"}>
            <UsertwoContext.Provider value={"gallery"}>
              <Media />
            </UsertwoContext.Provider>
          </UseroneContext.Provider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
