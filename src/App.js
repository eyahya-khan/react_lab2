import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Posts } from "./components/Posts";
import { Media } from "./components/Media";
import { Memohook } from "./components/Memohook";
import "./App.css";
import Welcome from "./components/Welcome";

export const UseroneContext = React.createContext();
export const UsertwoContext = React.createContext();

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/posts">
          <UseroneContext.Provider value={"Posts from"}>
            <UsertwoContext.Provider value={"API"}>
              <Posts />
            </UsertwoContext.Provider>
          </UseroneContext.Provider>
        </Route>
        <Route path="/usememo">
          <UseroneContext.Provider value={"useMemo"}>
            <UsertwoContext.Provider value={"Example"}>
              <Memohook />
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
