import React from 'react';

// import Jumbotron from "react-bootstrap/Jumbotron";

import './App.css';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Components
import { Main } from '../Main/Main.js';
import { Footer } from '../Footer/Footer';

function App() {
    return (
        <Router>
            <div className="App">
                <Main />
                <Footer />
            </div>
        </Router>
    );
}

export default App;