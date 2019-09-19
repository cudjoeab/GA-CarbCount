// Vanilla React:
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

// Bootstrap-React components:
// import Jumbotron from "react-bootstrap/Jumbotron";

// Smaller components:
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer';
import OurNavBar from '../NavBar/NavBar';

// Call stylesheet last:
import './App.css';


// const initialState = {
//     route: 'signin',
//     isSignedIn: false
// }

class App extends Component {
    constructor() {
        super();
        this.state = {
            // route: 'signin',
            // isSignedIn: false,
            userName: ''
        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin = (event) => {
        // event.preventDefault(); //This doesn't work
        console.log('LOGGING IN USER:')

        this.setState({
            userName: 'Abigail'
        })
    }

    handleLogout = (event) => {
        // event.preventDefault(); //This doesn't work
        console.log('LOGGING OUT USER:')
        // console.log(event)

        this.setState({
            userName: ''
        })
    }

    // onRouteChange = (route) => {
    //     if (route === 'signout') {
    //         this.setState(initialState);
    //     } else if (route === 'home') {
    //         this.setState({
    //             isSignedIn: true 
    //         });
    //     }
    //     this.setState({ 
    //         route: route 
    //     });
    // }

    render() {
        // const { isSignedIn, route } = this.state;
    
        return (
            <Router>
                <div id="App">
                    <div id='page-container'>
                        <OurNavBar handleLogin={this.handleLogin} handleLogout={this.handleLogout} userName={this.state.userName} />
                        {/* <Main route={route} /> */}
                        <Main handleLogin={() => this.handleLogin()} />
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
