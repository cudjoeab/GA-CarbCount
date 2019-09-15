// Vanilla React:
import React, { Component } from 'react';

// Bootstrap-React components:
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Call stylesheet last:
import './OurCard.css';

let title = '';
let text = '';
let ourLink = '';



export class OurCard extends Component {

    state = {
        cardTitle: 'New Count',
        cardText: 'Add a new count to your log',
        cardLink: 'new_count'
    }

    // if (this.props.cardTarget == "new_count") {

    // }

    render() {
        return (
            <Card bg="light" style={{ width: '18rem' }}>
                <Card.Header>{this.state.cardTitle}</Card.Header>
                <Card.Body>
                    <Card.Title>Lorem Ipsum</Card.Title>
                    <Card.Text>
                        {this.state.cardText}
                    </Card.Text>
                    <a href="{this.state.cardLink}" variant="primary">Go somewhere</a>
                </Card.Body>
            </Card>
        );
    }
}
