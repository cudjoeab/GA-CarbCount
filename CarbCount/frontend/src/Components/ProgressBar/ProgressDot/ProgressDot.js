// Vanilla React:
import React, { Component } from 'react';

// Bootstrap-React components:
// none

// Smaller components:
// none

// Call stylesheet last:
import './ProgressDot.css';

export class ProgressDot extends Component {
    render() {
        return (
            <span className={`progressDot ${this.props.toggle}`} >
            </span>
        );
    }
}
