import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Link, withRouter } from "react-router-dom";
import {  } from "react-router";

// Bootstrap-React components:
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// All pages:
import FAQ from '../FAQ/FAQ.js'

// Call stylesheet last:
import './SignIn.css';

// import axios from 'axios'
import axios from '../../../axiosConfig'

// axios.defaults.xsrfHeaderName = "X-CSRFToken"
// axios.defaults.xsrfCookieName = 'csrftoken'


class SignIn extends Component {
    // constructor(props, context) {
    //     super(props, context);
    // constructor(props) {
    //     super(props);

        // console.log(this.props.handleLogin)

    //   }

    state = {
            username: '',
            password: '',
            errorMessage: '',
            redirectNeeded: false
        };



    componentDidMount() {
        console.log('Signin Component did mount!');
        // console.log(this.props.handleLogin)
        window.scrollTo(0, 0); //Brings user to top of page.
        this.checkLogin();
    }

    // stopReload = (event) => {
    //     event.preventDefault();
    // }

    handleLogin = (event) => {
        event.preventDefault();

        const user = {
            username: event.currentTarget.elements.username.value,
            password: event.currentTarget.elements.password.value,
        }

        console.log('Logging in here', user)
        // const form = event.currentTarget.elements;

        axios.post("/api-token-auth/", user)
        .then((response)=> {
            console.log('Then:', response)
            window.localStorage['token'] = response.data['token']
            this.checkLogin();

            this.setState({
                errorMessage: '',
                // redirectToReferrer: true
            });
        })
        .catch((error)=> {
            console.log('Error:', error)

    //         this.setState({
    //             errorMessage: <Alert variant="danger">Invalid credentials</Alert>
    //         });
        });
    }


    // LOOK AT REDIRECT COMPONENT IN REACT ROUTER
    checkLogin = () => {  // If user has a token, redirect to profile page.
        console.log('Check login:')
        if (window.localStorage['token'] !== undefined) {
            console.log('Lets redirect:')
            // return <Redirect to='/profile' />;

            this.setState({
                redirectNeeded: true
            })
            // window.location.href = '/profile'
        };
    };





    render() {
            // const { redirectToReferrer } = this.state
            

            if (this.state.redirectNeeded === true) {
            //     return <Redirect to='/homepage?login=success' />
                return <Redirect to='/profile' />
            }

            return (
            <section className='borderBox'>
                <h1>Login</h1>
                <p>Please enter your user and password to login.</p>
                {/* <Form onSubmit={this.handleLogin}> */}
                {/* <Form onSubmit={this.stopReload}> */}
                <Form onSubmit={this.handleLogin}>
                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter username" 
                            />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                        />
                    </Form.Group>
                    {this.state.errorMessage}

                    {/* <Button variant="primary" type="submit" onClick={this.props.handleLogin}> */}
                    <Button variant="primary" type="submit">
                        Sign In
                    </Button>
                </Form>
            </section>
        );
    }
}

export default SignIn;
