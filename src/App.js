import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import TechnologyPost from './components/TechnologyPost';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import { socket } from './helpers/io';

function App() {
  useEffect(() => {
    socket.on('interupted', data => {
      console.log(data);
    });
  }, []);
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route
            exact
            path='/technology'
            render={props => <TechnologyPost {...props} />}
          />

          <Route path='/' render={props => <Dashboard {...props} />} />

          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
