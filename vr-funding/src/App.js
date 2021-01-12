import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavigationBar from "./components/NavigationBar";
import ProjectPage from "./components/ProjectPage";

import dummyProData from "./dummyProjectData";
import PrivateRoute from "./utils/PrivateRoute";
import PrivateRouteProjectPage from "./utils/PrivateRouteProjectPage";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import CreateProjectForm from "./components/CreateProjectForm";

import "./App.css";

const defaultValues = {
  email: "",
  role: "",
};

function fetchProjects() {
  return Promise.resolve({ success: true, dummyProData });
}

function App() {
  const [formValues, setFormValues] = useState(defaultValues);
  const [savedUserInfo, setSavedUserInfo] = useState([]);

  const [projectList, setProjectList] = useState([]);

  const submit = (evt) => {
    evt.preventDefault();

    const newData = {
      email: formValues.email.trimEnd(),
      role: formValues.role.trimEnd(),
    };

    setSavedUserInfo([...savedUserInfo, newData]);
    setFormValues(defaultValues);
  };

  useEffect(() => {
    fetchProjects().then((res) => {
      setProjectList(res.dummyProData);
    });
  }, []);

  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/login" component={Login} />

        <Route path="/signup" submit={submit} component={SignUp} />

        {/* <Route
          path="/projects"
          render={(props) => (
            <ProjectPage
              {...props}
              //  projects={projectList}
            />
          )}
        /> */}

        <PrivateRoute exact path="/" uList={savedUserInfo} />
        <PrivateRouteProjectPage
          exact
          path="/projects"
          component={ProjectPage}
        />
        <PrivateRoute
          exact
          path="/createproject"
          component={CreateProjectForm}
        />
      </Switch>
    </Router>
  );
}

export default App;
