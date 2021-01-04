import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import NavigationBar from "./components/NavigationBar";

import "./App.css";

function App() {
  return (
    <Router>
      <NavigationBar />
      <div className="App">
        <div>Hello, world</div>
      </div>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Router>
  );
}

export default App;
