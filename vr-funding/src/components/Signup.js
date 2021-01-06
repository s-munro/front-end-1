import React from 'react';

const Signup = () => {
  return (
    <div>
      {/* Note:  The inline CSS below is temporary until we all agree on a style guide - will likely be deleted later*/}
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
        <section
          style={{
            color: 'black',
            fontSize: '1.4rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '70%',
              margin: '2% auto',
              justifyContent: 'space-between',
            }}
          >
            <label>Name</label>
            <div
              style={{
                display: 'flex',
                width: '80%',
                justifyContent: 'space-between',
              }}
            >
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
        </section>
        <div
          style={{
            height: '25px',
            display: 'flex',
            width: '70%',
            margin: '2% auto',
            justifyContent: 'space-between',
          }}
        >
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
        <div
          style={{
            height: '25px',
            display: 'flex',
            width: '70%',
            margin: ' 2% auto',
            justifyContent: 'space-between',
          }}
        >
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
        <button style={{ width: '20%', margin: '2% auto' }}>
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
