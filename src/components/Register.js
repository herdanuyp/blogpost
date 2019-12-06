import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Register() {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const handleChange = event => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post(process.env.REACT_APP_BACKEND_URI + '/users/register', newUser)
      .then(result => setResult(result.data.message))
      .catch(error => setError(error.response.data.message));
  };

  return (
    <div className='form-wrapper'>
      <div className='container '>
        {result && (
          <div className='alert alert-success text-center' role='alert'>
            {result}
          </div>
        )}
        {error && (
          <div className='alert alert-danger text-center' role='alert'>
            {error}
          </div>
        )}
        <form className='form-signin' onSubmit={handleSubmit}>
          <h4 className='form-signin-heading text-center'>
            Hai, Create Account Here
          </h4>
          <label className='sr-only' htmlFor='name'>
            Name
          </label>
          <input
            className='form-control'
            type='text'
            name='name'
            value={newUser.name}
            onChange={handleChange}
            placeholder='Your full name'
            required
            autoFocus
          />{' '}
          <label className='sr-only' htmlFor='name'>
            Email
          </label>
          <input
            className='form-control'
            type='email'
            name='email'
            value={newUser.email}
            onChange={handleChange}
            placeholder='Email'
            required
            autoFocus
          />{' '}
          <label className='sr-only' htmlFor='name'>
            Password
          </label>
          <input
            className='form-control'
            type='password'
            name='password'
            value={newUser.password}
            onChange={handleChange}
            placeholder='Password'
            required
            autoFocus
          />{' '}
          <button className='btn btn-lg btn-primary btn-block'>Submit</button>
        </form>
        <p className='text-center'>
          Already have account , please login <Link to='/login'>here!</Link>
        </p>
        <p className='text-center'>
          Back To <Link to='/'>Home</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
