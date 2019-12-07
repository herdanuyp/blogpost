import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/home.css';

export default function Home(props) {
  return (
    <div className='ha'>
      <div className='setFooter'>
        <header>
          <div className='container'>
            <header className='blog-header py-3'>
              <div className='row flex-nowrap justify-content-between align-items-center'>
                <div className='col-4 pt-1'>
                  <Link to='/register'>
                    <span className='text-muted'>Register</span>
                  </Link>
                </div>
                <div className='col-4 text-center'>
                  <Link to='/'>
                    <span className='blog-header-logo text-dark'>
                      HaYePe's Blog
                    </span>
                  </Link>
                </div>
                <div className='col-4 d-flex justify-content-end align-items-center'>
                  <div className='text-muted' aria-label='Search'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='mx-3'
                      role='img'
                      viewBox='0 0 24 24'
                      focusable='false'>
                      <title>Search</title>
                      <circle cx='10.5' cy='10.5' r='7.5' />
                      <path d='M21 21l-5.2-5.2' />
                    </svg>
                  </div>
                  <Link to='/login'>
                    <span className='btn btn-sm btn-outline-secondary'>
                      Login
                    </span>
                  </Link>
                </div>
              </div>
            </header>

            <div className='nav-scroller py-1 mb-2'>
              <nav className='nav d-flex justify-content-between'>
                <p className='p-2 text-muted'>World</p>
                <p className='p-2 text-muted'>U.S.</p>
                <p className='p-2 text-muted'>Technology</p>
                <p className='p-2 text-muted'>Design</p>
                <p className='p-2 text-muted'>Culture</p>
                <p className='p-2 text-muted'>Business</p>
                <p className='p-2 text-muted'>Politics</p>
                <p className='p-2 text-muted'>Opinion</p>
                <p className='p-2 text-muted'>Science</p>
                <p className='p-2 text-muted'>Health</p>
                <p className='p-2 text-muted'>Style</p>
                <p className='p-2 text-muted'>Travel</p>
              </nav>
            </div>

            <div className='jumbotron p-4 p-md-5 text-white rounded bg-dark'>
              <div className='col-md-12 px-0'>
                <h1 className='display-4 font-italic'>
                  Sharing with you about ideas and my thought
                </h1>
                <p className='lead my-3 '>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  ipsam necessitatibus velit et dolores laboriosam non itaque
                  laborum molestias, assumenda repellendus dolore eaque !
                </p>
                <p className='lead mb-0'>
                  <span className='text-white font-weight-bold'>
                    Continue reading...
                  </span>
                </p>
              </div>
            </div>
          </div>
        </header>

        <main>{props.children}</main>
      </div>

      <footer className='footer py-3'>
        <div className='container'>
          <span className='text-muted'>
            <a href='https://create-react-app.dev/'>Create-React-App</a> +{' '}
            <a href='https://getbootstrap.com/docs/4.4/examples'>
              Bootstrap Template
            </a>{' '}
            + <a href='https://redux.js.org/'>React Redux</a> +{' '}
            <a href='https://www.mysql.com/'>MySQL</a> and{' '}
            <a href='https://www.sequelize.org/v5'>Sequelize</a> +{' '}
            <a href='https://www.netlify.com/'>Netlify</a> +{' '}
            <a href='https://www.heroku.com/'>Heroku</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
