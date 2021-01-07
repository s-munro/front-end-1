import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from 'yup';
import { useHistory } from "react-router-dom";

const schema = yup.object().shape({
  mail: yup.string().required('Email field is required.'),
  password: yup
    .string()
    .required('Password field is required.')
    .min(8, 'Password must be at least 8 characters.')
});


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

  useEffect(() => {
    schema.isValid(loginValues).then((valid) => setDisabled(!valid));
  }, [loginValues]);


  
  const loginSubmit = (evt) => {
    evt.preventDefault();
    const userCard = {
      email: loginValues.username,
      password: loginValues.password,
    };
    console.log("click, usercard: ", userCard);

    const testUser = {
      email: "email@gmail.com",
      password: "12345678",
    };
    axios
      .post("https://vr-fund.herokuapp.com/account/login", testUser)
      .then((res) => {
        console.log("successful login: ", res.data);
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("role", res.data.role);
        setLoginValues(initialLoginValues);
        push("/dashboard");
      })
      .catch((err) => {
        console.log("Login Unsuccessful: ", err);
        setLoginValues(initialLoginValues);
      });
  };
  return (
    <div>
      <h1>Sign In</h1>
      <div
        style={{
          height: "25px",
          display: "flex",
          width: "70%",
          margin: " 2% auto",
          justifyContent: "space-between",
        }}
      >
        {/*Password Label & Field*/}
        <label
          style={{
            color: "black",
            fontSize: "1.3rem",
          }}
          htmlFor="password"
        >
          Email
        </label>
        <input
          style={{
            height: "30px",
            width: "79%",
          }}
          name="email"
          id="email"
          type="email"
        ></input>
      </div>
      <div
        style={{
          height: "25px",
          display: "flex",
          width: "70%",
          margin: "2% auto",
          justifyContent: "space-between",
        }}
      >
        {/*Email Address Label & Field*/}
        <label
          style={{
            color: "black",
            fontSize: "1.3rem",
          }}
          htmlFor="email"
        >
          Password
        </label>
        <input
          style={{
            height: "30px",
            width: "79%",
          }}
          name="password"
          id="password"
          type="password"
        ></input>
      </div>
      <form onSubmit={loginSubmit}>
        <a href=" ">Forgot your password?</a>
        <br></br>
        <button disabled={disabled} style={{ width: "20%", margin: "2% auto" }}>
          Sign in to SIXR
        </button>
        <br></br>
        <br></br>
        <button>Create Project</button>
        <button>Fundable Projects</button>
      </form>
    </div>
  );
};

export default Login;
