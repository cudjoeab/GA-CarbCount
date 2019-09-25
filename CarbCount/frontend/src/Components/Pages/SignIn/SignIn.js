import React, { Component, useState } from 'react';
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


    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.value)

    }
    

    handleLogin = (event) => {
        event.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password,
        }

        console.log('Logging in here', user)
        // const form = event.currentTarget.elements;

        axios.post("/api-token-auth/", user)
        .then((response)=> {
            console.log('Then:', response)
            window.localStorage['token'] = response.data['token']

            this.setState({
                errorMessage: '',
            });

            this.checkLogin();  // This will redirect the user if they have a token.


        })
        .catch((error)=> {
            console.log('Error:', error);

            this.setState({
                errorMessage: 'Invalid credentials',
                password: ''
            })

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
                            name="username"
                            value={this.state.username}
                            placeholder="Enter username" 
                            onChange = {this.onChange}
                            required
                            />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            name="password"
                            value={this.state.password}
                            placeholder="Password" 
                            onChange = {this.onChange}
                            required
                        />
                    </Form.Group>
                    {
                        this.state.errorMessage != ''?
                            <Alert variant="danger">{this.state.errorMessage}</Alert>
                            :
                            <> </>
                    }
                    
                    

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
