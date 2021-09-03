import React, { Fragment } from 'react';

import Counter from './components/Counter';
import Header from './components/Header'
import Auth from './components/Auth'

import { useSelector, useDispatch } from 'react-redux';

function App() {
  // Get access to field from state:
  const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);

  return (
    <React.Fragment>
      <Header />
      {!isAuthenticated && <Auth />}
      <Counter />
    </React.Fragment>
  );
}

export default App;
