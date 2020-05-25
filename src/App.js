import React from "react";
import SignInPage from './components/SignInPage.js'
import firebase from "firebase";
import firebaseConfig from "./keys.js";

function App() {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  return (
    //need to conditionally navigate based on user authentication.
      <SignInPage/>
  );
}

export default App;
