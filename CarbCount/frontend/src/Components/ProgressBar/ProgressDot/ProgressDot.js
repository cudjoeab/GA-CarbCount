import React, { Component } from 'react';

// Bootstrap-React components

import './ProgressDot.css';

export class ProgressDot extends Component {
    render() {
        return (
            <span className={`progressDot ${this.props.toggle}`} >
            </span>
        );
    }
}
