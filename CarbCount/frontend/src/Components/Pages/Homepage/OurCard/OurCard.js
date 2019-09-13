import React, { Component } from 'react';

// Bootstrap-React components
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" data-src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>{this.state.cardTitle}</Card.Title>
                    <Card.Text>
                        {this.state.cardText}
                    </Card.Text>
                    <a href="{this.state.cardLink}" variant="primary">Go somewhere</a>
                </Card.Body>
            </Card>
        );
    }
}
