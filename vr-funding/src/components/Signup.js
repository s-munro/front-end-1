import React from 'react';

const Signup = () => {
  return (
    <div>
      <h1>Create a SIXR Account</h1>
      <form>
        <p>Select your role:</p>

        {/*Radio Button 1: Fundraiser*/}
        <input type='radio' id='fundraiser' name='role' value='1' />
        <label for='fundraiser'>Fundraiser</label>

        {/*Radio Button 2: Funder*/}
        <input type='radio' id='funder' name='role' value='2' />
        <label for='funder'>Funder</label>

        {/*Text Input Forms Based on API EndPoints: First Name, Last Name, Email, Password*/}
        <label htmlFor='first_name'>First Name</label>
        <input id='first_name' type='text'></input>
        <label htmlFor='last_name'>Last Name</label>
        <input name='last_name' id='last_name' type='text'></input>
        <label htmlFor='email'>Email</label>
        <input name='email' id='email' type='text'></input>
        <label htmlFor='password'>Password</label>
        <input name='password' id='password' type='password'></input>
        <button>Create Account</button>
      </form>
    </div>
  );
};

export default Signup;
