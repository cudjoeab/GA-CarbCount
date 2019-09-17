// Vanilla React:
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Bootstrap-React components:
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Smaller components:
// none

// Call stylesheet last:
import './Register.css';

import axios from 'axios'
axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.xsrfCookieName = 'csrftoken'


class Register extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            username: '',
            password: '',
            password2: ''
        };
      }

    componentDidMount() {
        console.log('Component did mount!');
        window.scrollTo(0, 0); //Brings user to top of page.
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget.elements;

        if (form.password.value !== form.password2.value) {
            console.log('Error; your passwords are not the same!');
        } else {
            console.log('Same!');
        

            axios.post("/register/", {
                username: form.username.value,
                password: form.password.value
            }).then((response)=> {
                console.log('Then:', response)

                this.setState({
                    errorMessage: '',
                    redirectToReferrer: true
                });
            }).catch((error)=> {
                console.log('Error:', error)


                //  BAD PATTERN - dont save jsx in state only save a string
            //     this.setState({
            //         // errorMessage: <Alert variant="danger">Invalid credentials</Alert>
            //     });
            });
        }
    }

    render() {
        const { redirectToReferrer } = this.state

        if (redirectToReferrer === true) {
            return <Redirect to='/homepage?register=success' />
        }

        return (
            <section className='borderBox'>
                <h1>Get Started with Carb Count</h1>
                <p>Welcome to Carb Count!  Let's start by creating a free account.  Next, we'll define your goals and create your custom diet plan.</p>
                <Form onSubmit={this.handleSubmit}>
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
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="password2">
                        <Form.Label>Re-enter Password</Form.Label>
                        <Form.Control type="password" placeholder="Re-enter Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Create My Account
                    </Button>

                    <p>By selecting Continue, you agree to the <a href=''>Terms of Service</a> and <a href=''>Privacy Policy</a>.</p>
                    <p>Already have an account? <li><Link to='/sign_in'>Log in here</Link></li></p>
                </Form>
            </section>
        );
    }
}

export default Register;
