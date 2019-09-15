// Vanilla React:
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Bootstrap-React components:
import Card from "react-bootstrap/Card";

// Call stylesheet last:
import './OurCard.css';


const OurCard = (props) => {
    return (
        <Card bg="light">
            <Card.Header>{props.cardTitle}</Card.Header>
            <Card.Body>
                <Card.Title>{props.cardTitle}</Card.Title>
                <Card.Text>
                    {props.cardText}<br/>
                    <Link to={`/${props.cardLink}`}>View now</Link>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default OurCard;
