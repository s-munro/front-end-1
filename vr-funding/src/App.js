import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import NavigationBar from "./components/NavigationBar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ProjectPage from "./components/ProjectPage";
import DashPageA from "./components/Dashboard_Fundrasier";
import DashPageB from "./components/Dashboard_Funder";
import "./App.css";


function App() {

  const [login, setLogin] = useState(false);
  const [role, setRole] = useState();

  const changeLoginState = (evt) => {
    setLogin(true);
  };

  const setRoleState = (evt) => {
     setRole(evt.target === "A" ? evt.target = "B" : evt.target = "A",
      )
    };

  return (
    <Router>
      <NavigationBar />
      <div className="App">
        <div></div>
      </div>

    <Switch>
    <Route path="/Dashboard_Fundrasier">
      <DashPageA/>
    </Route>
    <Route path="/Dashboard_Funder">
      <DashPageB/>
    </Route>
  </Switch>

      <Route path="/projects" component={ProjectPage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Router>
  );
}

export default App;
