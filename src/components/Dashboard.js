import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { socket } from '../helpers/io';

import typeMachine from '../assets/images/type_404.jpg';

function Dashboard() {
  const [post, setPost] = useState({
    title: '',
    body: '',
    topic: ''
  });

  const handleSubmit = event => {
    event.preventDefault();
    socket.emit('newPost', post);
    axios
      .post(`${process.env.REACT_APP_BACKEND_URI}/posts`, post)
      .then(result => {
        console.log(result, 'result');
      })
      .catch(error => console.log(error.message, 'error'));
  };

  const handleChange = event => {
    setPost({
      ...post,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className='container'>
      <div className='py-5 text-center'>
        <img
          className='d-block mx-auto mb-4'
          src={typeMachine}
          alt='type-machine'
          width='150'
          height='150'
        />
        <h2>Post Form</h2>
        <p className='lead'>
          Please be wise about what you will write down here.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Post Title</label>
          <input
            type='text'
            className='form-control'
            aria-describedby='postTitle'
            name='title'
            value={post.title}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label>Post Body</label>
          <textarea
            className='form-control'
            rows='10'
            name='body'
            value={post.body}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className='form-group'>
          <div className='row'>
            <div className='col-4'>
              <label>Topic</label>
              <select
                className='form-control'
                name='topic'
                value={post.topic}
                onChange={handleChange}
              >
                <option value=''>Select your topic</option>
                <option value='Technology'>Technology</option>
                <option value='Design'>Design</option>
                <option value='Culture'>Culture</option>
                <option value='Health'>Health</option>
                <option value='Style'>Style</option>
                <option value='Travel'>Travel</option>
              </select>
            </div>
          </div>
        </div>

        <button type='submit' className='btn btn-primary mb-4'>
          Submit
        </button>
      </form>

      <div id='posts'>{/* Our Post */}</div>
    </div>
  );
}

export default Dashboard;
