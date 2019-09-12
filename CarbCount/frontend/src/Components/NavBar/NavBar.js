import React from "react";
import React, { Component } from 'react'
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/NavBar";

class NavBar extends Component {

    state = {
        user: '...',
        logStatus: '...'
    }
    render() {
        return (
            <Navbar className="nav" bg="light" expand="lg">
            <Navbar.Brand href="#home">CarbCount</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">New Count</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">New Recipe</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Saved Recipe</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Meal Log</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}