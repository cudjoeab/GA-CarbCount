import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from './Logo/logo.jpg';
import "./NavBar.css"

const OurNavBar = () => {
    return (
        <Navbar className="nav" bg="light" expand="lg">
        <Navbar.Brand href="#home">
        <img className="logo" src={logo} alt="logo" />CarbCount</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <NavDropdown title="Site" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">New Count</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">New Recipe</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Saved Recipe</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Meal Log</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Ingredient..." className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
    );
};

export default OurNavBar