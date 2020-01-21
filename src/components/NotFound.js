import React from 'react';
import Home from './Home';

import type from '../assets/images/type_404.jpg';

const notFoundContainer = {
  position: 'relative',
  height: '100%',
  textAlign: 'center',
  color: 'white',
  width: '789px',
  marginBottom: 24
};

const notFoundText = {
  position: 'absolute',
  left: '25%',
  top: '50%',
  transform: 'translate(-25%, -50%)'
};

export default function NotFound() {
  return (
    <div className='container' style={notFoundContainer}>
      <img src={type} alt='type' style={{ width: '100%' }} />
      <div style={notFoundText}>Not Found</div>
    </div>
  );
}
