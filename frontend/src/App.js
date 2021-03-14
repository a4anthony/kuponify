import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import "./responsive.css";
import Nav from "./components/Nav";
import axios from "axios";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <Nav />
      <main>
        <Route path="/" component={HomeScreen} exact />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
