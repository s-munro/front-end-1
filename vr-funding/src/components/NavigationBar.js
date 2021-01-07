import React from "react";
import { Link } from "react-router-dom";

import "../App.css";
import "../NavigationBar.css";

const NavigationBar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <li>Home</li>
      </Link>

      <Link to="/projects" style={{ textDecoration: "none" }}>
        <li>Projects</li>
      </Link>

      <Link to="/login" style={{ textDecoration: "none" }}>
        <li>Login</li>
      </Link>

      <Link to="/signup" style={{ textDecoration: "none" }}>
        <li>Sign Up</li>
      </Link>
    </nav>
  );
};

export default NavigationBar;
