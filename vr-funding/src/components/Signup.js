import React from 'react';

const Signup = () => {
  return (
    <div>
      {/* Note: I will be using inline CSS temporarily to avoid merge conflicts until we can combine it on one stylesheet */}
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '5px 10px #363131',
          margin: '2%',
          backgroundColor: 'white',
        }}
      >
        <h1
          style={{
            color: 'black',
            width: '50%',
            margin: 'auto',
            fontSize: '1.5rem',
            textAlign: 'center',
          }}
        >
          Create a SIXR Account
        </h1>

        <section
          style={{
            color: 'black',
            width: '50%',
            margin: 'auto',
            textAlign: 'center',
          }}
        >
          <p>Select your role:</p>

          {/*Radio Button 1: Fundraiser*/}
          <input type='radio' id='fundraiser' name='role' value='1' />
          <label for='fundraiser'>Fundraiser</label>

          {/*Radio Button 2: Funder*/}
          <input type='radio' id='funder' name='role' value='2' />
          <label for='funder'>Funder</label>
        </section>
        {/*Text Input Forms Based on API EndPoints: First Name, Last Name, Email, Password*/}
        <section
          style={{
            color: 'black',
            textAlign: 'center',
            display: 'flex',
            margin: 'auto',
          }}
        >
          <div>
            <label htmlFor='first_name'>First Name</label>
            <input id='first_name' type='text'></input>
          </div>
          <div>
            <label htmlFor='last_name'>Last Name</label>
            <input name='last_name' id='last_name' type='text'></input>
          </div>
        </section>
        <label
          style={{
            color: 'black',
            width: '50%',
            margin: 'auto',
          }}
          htmlFor='email'
        >
          Email Address
        </label>
        <input
          style={{
            width: '50%',
            margin: 'auto',
            textAlign: 'center',
          }}
          name='email'
          id='email'
          type='text'
        ></input>
        <label
          style={{
            color: 'black',
            width: '50%',
            margin: 'auto',
          }}
          htmlFor='password'
        >
          Password (must be at least 6 characters)
        </label>
        <input
          style={{
            width: '50%',
            margin: 'auto',
            textAlign: 'center',
          }}
          name='password'
          id='password'
          type='password'
        ></input>
        <button style={{ width: '20%', margin: '2% auto' }}>
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
