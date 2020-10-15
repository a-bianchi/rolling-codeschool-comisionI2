import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBarCustom from "../componets/NavBarCustom";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Info from "./Info";

function App() {
  return (
    <div>
      <NavBarCustom />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/error" exact sensitive component={ErrorPage} />
          <Route path="/info" exact component={Info} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
