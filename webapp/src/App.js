import React from 'react';
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config);


function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);