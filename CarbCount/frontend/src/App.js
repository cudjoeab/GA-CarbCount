import AuthService from './components/AuthService';
import withAuth from './components/withAuth';
const Auth = new AuthService();

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  handleLogout(){
    Auth.logout()
    this.props.history.replace('/login');
 }

  return(
    <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome {this.props.user.username}</h2>
        </div>
        <p className="App-intro">
            <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
        </p>
        </div>
  );
}

export default App;
export default withAuth(App);  // Is this right???