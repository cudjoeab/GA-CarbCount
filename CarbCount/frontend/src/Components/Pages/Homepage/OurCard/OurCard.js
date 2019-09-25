// Vanilla React:
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Bootstrap-React components:
import Card from "react-bootstrap/Card";

// Smaller components:
// none

// Call stylesheet last:
import './OurCard.css';


const OurCard = (props) => {
    return (
        <Card bg="light" text="white">
            <Link className = "home-page-links" to={`/${props.cardLink}`}>
                <Card.Header>{props.cardTitle}</Card.Header>
            </Link>
            {/* <Card.Header>{props.cardTitle}</Card.Header> */}
            <Card.Body>
                {/* <Card.Title>{props.cardTitle}</Card.Title> */}
                <Card.Text>
                    {props.cardText}<br/>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default OurCard;
