import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// import Jumbotron from "react-bootstrap/Jumbotron";

import './App.css';



// Components
import { Main } from '../Main/Main.js';
import { Footer } from '../Footer/Footer';
import OurNavBar from '../NavBar/NavBar';

const App = () => {
    return (
        <Router>
            <div className="App">
                <OurNavBar />
                <Main />
                <Footer />
            </div>
        </Router>
    );
}

export default App;