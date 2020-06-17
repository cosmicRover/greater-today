import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { AuthContext } from "../services/Auth";
import profilePage from '../main_components/profilePage'
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  //get current user
  const { currentUser } = React.useContext(AuthContext);
  const { profilePage} =React.useContext()
  return (
    <Switch>
      <Route
        {...rest}
        render={(routeProps) =>
          !!currentUser ? (
            <RouteComponent {...routeProps} />
          ) : (
            <Redirect to={"/signin/"} />
          )
        }
      />
      <Route
      exact
      path="/files"
      render={ renderWithLayout(profilePage) }
       />
    </Switch>
  );
};

export default PrivateRoute;
