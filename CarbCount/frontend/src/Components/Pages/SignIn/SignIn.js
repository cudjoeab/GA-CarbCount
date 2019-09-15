import React, { Component } from 'react';

// Bootstrap-React components:
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Call stylesheet last:
import './SignIn.css';


class SignIn extends Component {
    componentDidMount() {
        console.log('Component did mount!');
        window.scrollTo(0, 0); //Brings user to top of page.
    }

    render() {
        return (
            <>
                <h2>SignIn.js</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nunc sed nisl fringilla venenatis.</p>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Sign In
                    </Button>
                </Form>
            </>
        );
    }
}

export default SignIn;
