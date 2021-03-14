import "./App.css";
import { AnimatedSwitch } from "react-router-transition";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import "./responsive.css";
import Nav from "./components/Nav";
import axios from "axios";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";
import LoginScreen from "./screens/LoginScreen";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <Nav />
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route path="/" component={HomeScreen} exact />
        <Route path="/login" component={LoginScreen} />
      </AnimatedSwitch>
      <Footer />
    </Router>
  );
}

export default App;
