import React from "react";
import SignInPage from "./components/SignInPage.js";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { AuthProvider } from "./services/Auth.js";
import PrivateRoute from "./routing/PrivateRoute.js";

const App = () => {
  //need to mask transition with animation
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/home" component={HomePage} />
          <Route exact path="/signin" component={SignInPage} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
