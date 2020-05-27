import React from "react";
import firebase from "../firebase.js";

//**** TODO: Change to redux */

//holds the auth status using context
export const AuthContext = React.createContext();

//stores user and updates it when needed
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);

  //gets run once only when component gets mounted
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
