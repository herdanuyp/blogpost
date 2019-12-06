import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import io from 'socket.io-client';

import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

function App() {
  React.useEffect(() => {
    console.log('hallooo');
    const socket = io('http://localhost:3001');
    socket.on('socketToMe', data => console.log(data));
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
