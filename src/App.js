import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import User from './components/User';

function App() {
  return (
    <>
      <Route exact path="/">
        <Login />
      </Route>

      <Route exact path="/user">
      <User />
      </Route>
    </>  
  );
}

export default App;
