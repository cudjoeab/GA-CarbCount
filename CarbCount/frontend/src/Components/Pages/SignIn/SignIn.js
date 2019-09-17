import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Link, withRouter } from "react-router-dom";
import {  } from "react-router";

// Bootstrap-React components:
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// All pages:
import FAQ from '../FAQ/FAQ.js'

// Call stylesheet last:
import './SignIn.css';

import axios from 'axios'
axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.xsrfCookieName = 'csrftoken'


class SignIn extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            username: '',
            password: '',
            redirectToReferrer: false
        };
      }

    componentDidMount() {
        console.log('Component did mount!');
        window.scrollTo(0, 0); //Brings user to top of page.
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        axios.post("/login/", {
            username: form.elements.username.value,
            password: form.elements.password.value
        }).then((e)=> {
            console.log('Then:', e)
            // console.log(this.props)
            // redirect etc
            
            // browserHistory.push("/path-to-link");
            // <Route path="/FAQ" component={FAQ} />

            // window.location

            // this.props.history.push("/");
            // render (
            //     <Redirect push to="/FAQ"/>
            // )

            // return <Redirect to='/FAQ' />

            this.setState({
                redirectToReferrer: true
            });
        }).catch((e)=> {
            console.log('Error:', e)
            // this.history.pushState(null, 'homepage');
        });
    }

    render() {
            const { redirectToReferrer } = this.state

            if (redirectToReferrer === true) {
                return <Redirect to='/homepage' />
            }

            return (
            <section className='borderBox'>
                <h1>SignIn.js</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nunc sed nisl fringilla venenatis.</p>
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
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Sign In
                    </Button>
                </Form>
            </section>
        );
    }
}

export default SignIn;
