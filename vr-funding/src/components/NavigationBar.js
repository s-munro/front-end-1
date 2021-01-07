import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

const NavigationBar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>

      <Link to="/login">Login</Link>

      <Link to="/signup">Sign up</Link>
    </nav>
  );
};

export default NavigationBar;
