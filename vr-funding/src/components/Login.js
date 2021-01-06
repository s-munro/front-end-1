import React from "react";

const Login = () => {
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

        <button>Sign in to SIXR</button>
        <br></br>
        <a href="">Forgot your password?</a>
      </form>
    </div>
  );
};

export default Login;
