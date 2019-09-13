// Vanilla React:
import React, { Component } from 'react';

// Bootstrap-React components
// none

// Call stylesheet last:
import './Footer.css';

export class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <ul>
                    <li>Powered By (Fat Secret Image)</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>FAQ</li>
                    <li>©2019</li>
                </ul>
            </footer>
            
        );
    }
}
