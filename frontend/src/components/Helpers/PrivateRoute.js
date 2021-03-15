import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component, path, exact }) => {
  const userInfo = useSelector((state) => state.userInfo);
  const { user } = userInfo;

  console.log(user);
  if (!user) {
    console.log("not logged in");
    return <Route path={path} exact={exact} component={component} />;
  }
  console.log("logged in");
  return <Redirect to="/" />;
};
export default PrivateRoute;
