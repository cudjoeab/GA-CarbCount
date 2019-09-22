// Vanilla React:
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App.js';
import Login from './Components/Login/Login.js'

import * as serviceWorker from './serviceWorker';

// Importing the Bootstrap CSS:
import 'bootstrap/dist/css/bootstrap.min.css';

// Call stylesheet last:
import './index.css';

ReactDOM.render(
    <div>
        <Router>
            <Route exact path="/login" component={Login} />
            <Route path='/' component={App} />
        </Router>
    </div>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
