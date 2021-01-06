import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialLoginValues = { email: "", password: "" };
const initialLoginErrors = {
  username: "",
  password: "",
};

const initialDisabled = true;

const Login = () => {
  const { push } = useHistory();

  const [loginValues, setLoginValues] = useState(initialLoginValues);
  const [loginErrors, setLoginErrors] = useState(initialLoginErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const loginSubmit = (evt) => {
    evt.preventDefault();
    const userCard = {
      username: loginValues.username,
      password: loginValues.password,
    };
    axios
      .post("https://vr-fund.herokuapp.com/account/login", userCard)
      .then((res) => {
        console.log("successful login: ", res.data);
        window.localStorage.setItem("token", res.data.token);
        setLoginValues(initialLoginValues);
        push("/ProjectList");
      })
      .catch((err) => {
        console.log("Login Unsuccessful: ", err);
        setLoginValues(initialLoginValues);
      });
  };
  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <div className="login-forms">
          <label htmlFor="email">Email</label>
          <input id="email" type="text"></input>
          <br></br>
          <label htmlFor="password">Password</label>
          <input name="password" id="password" type="password"></input>
        </div>
        <a href=" ">Forgot your password?</a>

        <button>Sign in to SIXR</button>
        <br></br>
        <br></br>
        <button>Create Project</button>
        <button>Fundable Projects</button>
      </form>
    </div>
  );
};

export default Login;
