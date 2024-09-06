import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App1 from "./pages/App1";
import Callback from "./Callback";
import SecurePage from "./pages/SecurePage";
import useAuthActions from "./component/AuthHook";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={App1}
        />
        <Route
          exact
          path="/callback"
          component={Callback}
        />
        <Route
          path="/securepage"
          exact
          component={SecurePage}
        ></Route>
      </Switch>
    </Router>
  );


};

export default App;
