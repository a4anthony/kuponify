import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component, path, exact, auth }) => {
  const userInfo = useSelector((state) => state.userInfo);
  const { user } = userInfo;

  console.log(user);
  console.log(auth);
  if (auth && !user) {
    return <Redirect to="/login" />;
  }

  if (auth && user) {
    return <Route path={path} exact={exact} component={component} />;
  }

  if (!user) {
    console.log("not logged in");
    return <Route path={path} exact={exact} component={component} />;
  }
  console.log("logged in");
  return <Redirect to="/" />;
};
export default PrivateRoute;
