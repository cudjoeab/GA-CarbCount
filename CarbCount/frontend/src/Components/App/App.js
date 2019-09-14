// Vanilla React:
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Bootstrap-React components:
// import Jumbotron from "react-bootstrap/Jumbotron";

// Smaller components:
import { Main } from '../Main/Main.js';
import { Footer } from '../Footer/Footer';
import OurNavBar from '../NavBar/NavBar';

// Call stylesheet last:
import './App.css';

const App = () => {
    return (
        <Router>
            <Switch>
                <div id="App">
                    <div id='page-container'>
                        <OurNavBar />
                        <Main />
                    </div>
                    <Footer />
                </div>
            </Switch>
        </Router>
    );
}

export default App;