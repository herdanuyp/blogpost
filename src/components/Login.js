import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../assets/styles/login.css';

export default function Login() {
  const [user, setUser] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);

  const handleChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND_URI}/users/authentication`, user)
      .then(result => console.log(result))
      .catch(error => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className='form-wrapper'>
      <div className='container '>
        {error && (
          <div className='alert alert-danger' role='alert'>
            {error}
          </div>
        )}
        <form className='form-signin' onSubmit={handleSubmit}>
          <h2 className='form-signin-heading'>Please sign in</h2>
          <label htmlFor='inputEmail' className='sr-only'>
            Email address
          </label>
          <input
            type='email'
            name='email'
            className='form-control'
            placeholder='Email address'
            value={user.email}
            onChange={handleChange}
            required
            autoFocus
          />
          <label htmlFor='inputPassword' className='sr-only'>
            Password
          </label>
          <input
            type='password'
            name='password'
            className='form-control'
            placeholder='Password'
            value={user.password}
            onChange={handleChange}
            required
          />

          <button className='btn btn-lg btn-primary btn-block' type='submit'>
            Sign in
          </button>
        </form>

        <p className='text-center'>
          Not have account yet, please register{' '}
          <Link to='/register'>here!</Link>
        </p>
        <p className='text-center'>
          Back To <Link to='/'>Home</Link>
        </p>
      </div>
    </div>
  );
}
