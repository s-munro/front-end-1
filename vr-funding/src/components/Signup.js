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
            fontSize: '1.8rem',
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
            fontSize: '1.3rem',
          }}
        >
          <p
            style={{
              fontSize: '1.3rem',
            }}
          >
            Select your role:
          </p>

          {/*Radio Button 1: Fundraiser*/}
          <input type='radio' id='fundraiser' name='role' value='1' />
          <label for='fundraiser'>Fundraiser</label>

          {/*Radio Button 2: Funder*/}
          <input type='radio' id='funder' name='role' value='2' />
          <label for='funder'>Funder</label>
        </section>

        {/*Text Input Forms Based on API EndPoints: First Name, Last Name, Email, Password*/}

        {/*Container for Name Label & First and Last Name Fields*/}
        <div
          style={{
            display: 'flex',
            width: '70%',
            margin: '2% auto',
            justifyContent: 'space-between',
            color: 'black',
            fontSize: '1.4rem',
          }}
        >
          <label>Name</label>

          {/*Container for First and Last Name Fields*/}
          <div
            style={{
              display: 'flex',
              width: '80%',
              justifyContent: 'space-between',
            }}
          >
            {/*First Name Field*/}
            <input
              style={{
                height: '30px',
                width: '45%',
                fontSize: '1rem',
              }}
              id='first_name'
              name='first_name'
              type='text'
              placeholder='First Name'
            ></input>

            {/*Last Name Field*/}
            <input
              style={{
                height: '30px',
                width: '45%',
                fontSize: '1rem',
              }}
              name='last_name'
              id='last_name'
              type='text'
              placeholder='Last Name'
            ></input>
          </div>
        </div>

        {/*Container for Email Address Label & Field*/}
        <div
          style={{
            height: '25px',
            display: 'flex',
            width: '70%',
            margin: '2% auto',
            justifyContent: 'space-between',
          }}
        >
          {/*Email Address Label & Field*/}
          <label
            style={{
              color: 'black',
              fontSize: '1.3rem',
            }}
            htmlFor='email'
          >
            Email Address
          </label>
          <input
            style={{
              height: '30px',
              width: '79%',
            }}
            name='email'
            id='email'
            type='email'
          ></input>
        </div>

        {/*Container for Password Label & Field*/}
        <div
          style={{
            height: '25px',
            display: 'flex',
            width: '70%',
            margin: ' 2% auto',
            justifyContent: 'space-between',
          }}
        >
          {/*Password Label & Field*/}
          <label
            style={{
              color: 'black',
              fontSize: '1.3rem',
            }}
            htmlFor='password'
          >
            Password*
          </label>
          <input
            style={{
              height: '30px',
              width: '79%',
            }}
            name='password'
            id='password'
            type='password'
          ></input>
        </div>

        {/*Create Account Button - On submit will send user data to API*/}
        <button style={{ width: '20%', margin: '2% auto' }}>
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
