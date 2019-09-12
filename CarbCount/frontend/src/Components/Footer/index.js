import React, { Component } from 'react';

// Bootstrap-React components
import { Card } from 'react-bootstrap/Card';

import './index.css';

export class Footer extends Component {
  render() {
    return (
        <Card>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <footer className="blockquote-footer">
                    <ul>
                        <li>Created By</li>
                        <li>Contact</li>
                        <li>About</li>
                        <li>FAQ</li>
                        <li>2019</li>
                    </ul>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
  }
}
