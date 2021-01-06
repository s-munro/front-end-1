import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import NavigationBar from "./components/NavigationBar";
import ProjectPage from "./components/ProjectPage";
import DashPageA from "./components/Dashboard_Fundrasier";
import DashPageB from "./components/Dashboard_Funder";
import dummyProData from './dummyProjectData';
import Login from './components/Login';
import SignUp from './components/Signup';

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
    fetchProjects().then((res) => setProjectList(res.dummyProData));
  }, []);

  return (
    <Router>
      {/* <NavigationBar />
      <div className="App">
        <div></div>
      </div> */}

      <Route path="/login" component={Login}/>
      
      <Route path="/signup" submit={submit} component={SignUp}/> 

      <Route path="/projects" component={ProjectPage} />

      <Route path="/Dashboard_Fundrasier" component={DashPageA}/>

      <Route path="/Dashboard_Funder" component={DashPageB}/> 

    </Router>
  );
}

export default App;
