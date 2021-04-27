import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/login";
import Dashboard from "./components/dashboard";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/sign-in" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
