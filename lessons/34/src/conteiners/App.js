import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBarCustom from "../componets/NavBarCustom";
import Footer from "../componets/Footer";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Info from "./Info";
import Privada from "./Privada";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { loadMockData, isLogin2 } from "../utils/functions";

function App() {
  loadMockData();
  console.log(isLogin2("Alejo", "12345678"));
  return (
    <div>
      <NavBarCustom />
      <Router>
        <Switch>
          <PublicRoute restricted={false} component={Home} path="/" exact />
          <PublicRoute
            restricted={true}
            component={Privada}
            path="/privada"
            exact
          />
          <PrivateRoute component={Info} path="/info" exact />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
