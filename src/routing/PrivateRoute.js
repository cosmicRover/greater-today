import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { AuthContext } from "../services/Auth";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  //get current user
  const { currentUser } = React.useContext(AuthContext);
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
    </Switch>
  );
};

export default PrivateRoute;
