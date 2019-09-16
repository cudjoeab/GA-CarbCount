// Vanilla React:
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Bootstrap-React components:
// import Jumbotron from "react-bootstrap/Jumbotron";

// Smaller components:
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer';
import OurNavBar from '../NavBar/NavBar';

// Call stylesheet last:
import './App.css';


const initialState = {
    route: 'signin',
    isSignedIn: false
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            route: 'signin',
            isSignedIn: false
        }
    }

    onRouteChange = (route) => {
        if (route === 'signout') {
            this.setState(initialState);
        } else if (route === 'home') {
            this.setState({
                isSignedIn: true 
            });
        }
        this.setState({ 
            route: route 
        });
    }

    render() {
        const { isSignedIn, route } = this.state;
    
        return (
            <Router>
                <div id="App">
                    <div id='page-container'>
                        <OurNavBar />
                        <Main route={route} />
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
