import React, { useEffect, useState } from 'react';

import { socket } from '../helpers/io';

const TehcnologyPost = () => {
  const [technologyPostData, setTechnologyPostData] = useState([]);

  useEffect(() => {
    socket.on('newPostFromServer', data => {
      setTechnologyPostData(technologyPostData.concat([data]));
    });
  }, [technologyPostData]);

  return (
    <div className='container'>
      <h3
        className='pb-4 mb-4 font-italic border-bottom text-center
          '
      >
        News From Tehcnology Around the World
      </h3>

      <div className='blog-post'>
        {technologyPostData &&
          technologyPostData.map((post, index) => (
            <React.Fragment>
              <h2 className='blog-post-title'>{post.title}</h2>
              <p className='blog-post-meta'>
                January 1, 2014 by <a href='#'>Mark</a>
              </p>
              <p>{post.body}</p>
            </React.Fragment>
          ))}
      </div>

      <nav className='blog-pagination mb-4 '>
        <button className='btn btn-outline-primary mr-4'>Older</button>
        <button className='btn btn-outline-primary' aria-disabled='true'>
          Newer
        </button>
      </nav>
    </div>
  );
};

export default TehcnologyPost;
