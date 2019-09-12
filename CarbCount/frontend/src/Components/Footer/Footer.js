import React, { Component } from 'react';

// Bootstrap-React components
import Card from "react-bootstrap/Card";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import './Footer.css';

export class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <ul>
                    <li>Created By</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>FAQ</li>
                    <li>2019</li>
                </ul>
            </footer>
            
        );
    }
}
