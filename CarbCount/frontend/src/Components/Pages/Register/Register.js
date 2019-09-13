import React from 'react';

// Bootstrap-React components:
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Call stylesheet last:
import './Register.css';

const Register = () => {
    return (
        <>
            <h2>Get Started with Carb Count</h2>
            <p>Welcome to Carb Count!  Let's start by creating a free account.  Next, we'll define your goals and create your custom diet plan.</p>
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

                <Form.Group controlId="formBasicPassword2">
                    <Form.Label>Re-enter Password</Form.Label>
                    <Form.Control type="password" placeholder="Re-enter Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create My Account
                </Button>

                <p>By selecting Continue, you agree to the <a href=''>Terms of Service</a> and <a href=''>Privacy Policy</a>.</p>
                <p>Already have an account? <a href=''>Log in here</a></p>
            </Form>
        </>
    );
}

export default Register;
