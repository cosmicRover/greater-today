import React from "react";
import SignInPage from "./components/SignInPage.js";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { AuthProvider } from "./services/Auth.js";
import PrivateRoute from "./routing/PrivateRoute.js";

function App() {
  // firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  // firebase.auth().onAuthStateChanged((user) => {
  //   console.log(user.email);
  // })

  return (
    <AuthProvider>
      <Router>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SignInPage} />
      </Router>
    </AuthProvider>
  );
}

export default App;
