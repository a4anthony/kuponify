import "./App.css";
import React, { useEffect } from "react";

import { AnimatedSwitch } from "react-router-transition";
import {
  BrowserRouter as Router,
  Route,
  useLocation,
  withRouter,
} from "react-router-dom";
import "./index.css";
import "./responsive.css";
import Nav from "./components/Nav";
import axios from "axios";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import PrivateRoute from "./components/Helpers/PrivateRoute";
import EmailVerificationScreen from "./screens/EmailVerificationScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import PasswordResetScreen from "./screens/PasswordResetScreen";
import PricingScreen from "./screens/PricingScreen";
import StoresScreen from "./screens/StoresScreen";
import Alert from "./components/Alert";
axios.defaults.withCredentials = true;

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Nav />
        <Alert />
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <PrivateRoute path="/login" component={LoginScreen} exact />
          <PrivateRoute path="/register" component={RegisterScreen} exact />
          <Route
            path="/email-verification"
            component={EmailVerificationScreen}
          />
          <PrivateRoute
            path="/forgot-password"
            component={ForgotPasswordScreen}
          />
          <PrivateRoute
            path="/password-reset"
            component={PasswordResetScreen}
          />
          <Route path="/stores" component={StoresScreen} />
          <Route path="/pricing" component={PricingScreen} />
          <Route path="/" component={HomeScreen} exact />
        </AnimatedSwitch>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
