import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useState } from 'react';
import NavigationBar from "./components/NavigationBar";
import ProjectPage from "./components/ProjectPage";
import DashPageA from "./components/Dashboard_Fundrasier";
import DashPageB from "./components/Dashboard_Funder";
import "./App.css";

const defaultValues = {
  email: "",
  role: "",
};

function App() {

  // const [login, setLogin] = useState(false);
  // const [role, setRole] = useState();

  const [formValues, setFormValues] = useState(defaultValues);
  const [savedUserInfo, setSavedUserInfo] = useState([]);

  const submit = (evt) => {
 
    evt.preventDefault();
    
    const newData = {
      email: formValues.email.trimEnd(),
      role: formValues.role.trimEnd(),
    };
  
    setSavedUserInfo([...savedUserInfo, newData]);
    setFormValues(defaultValues);
  
  };

  return (
    <Router>
      {/* <NavigationBar />
      <div className="App">
        <div></div>
      </div> */}
      <Route path="/login"/>
      
      <Route path="/signup" submit={submit}/> 

      <Route path="/projects" component={ProjectPage} />

      <Route path="/Dashboard_Fundrasier" component={DashPageA}/>

      <Route path="/Dashboard_Funder" component={DashPageB}/> 

    </Router>
  );
}

export default App;
