import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import New from "./pages/New/New";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/new" component={New}/>
      </Switch>
    </BrowserRouter>
  );
}
